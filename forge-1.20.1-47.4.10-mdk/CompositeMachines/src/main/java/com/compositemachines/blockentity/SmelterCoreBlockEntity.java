package com.compositemachines.blockentity;

import com.compositemachines.block.ChimneyBlock;
import com.compositemachines.block.HeatingUnitBlock;
import com.compositemachines.block.SmelterCoreBlock;
import com.compositemachines.machine.MachineEnergyStorage;
import com.compositemachines.machine.SmelterTuning;
import com.compositemachines.machine.SmeltingRecipeLookup;
import com.compositemachines.menu.SmelterMenu;
import com.compositemachines.multiblock.FormationResult;
import com.compositemachines.multiblock.SmelterColumn;
import com.compositemachines.multiblock.SmelterFormationValidator;
import com.compositemachines.multiblock.SmelterStructure;
import com.compositemachines.registry.CMBlockEntities;
import net.minecraft.ChatFormatting;
import net.minecraft.core.BlockPos;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.Containers;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.SimpleMenuProvider;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.ContainerData;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.BooleanProperty;
import net.minecraftforge.items.ItemHandlerHelper;
import net.minecraftforge.items.ItemStackHandler;
import net.minecraftforge.network.NetworkHooks;

import java.util.Arrays;
import java.util.List;

/**
 * Owns all state of a Composite Smelter: item buffers, energy, per-column progress
 * and the formed structure. Smelting column k processes input slot k (a periodic
 * rebalance spreads incoming stacks across the column slots); each column's speed
 * and FE/t come from its Heating Unit tier, and its cauldron displays the item
 * being smelted. Ports are thin capability proxies onto this block entity.
 */
public class SmelterCoreBlockEntity extends BlockEntity {
    private static final int SLOTS = SmelterTuning.SLOTS;
    private static final int REVALIDATE_INTERVAL = 20;
    private static final int REBALANCE_INTERVAL = 10;

    private final ItemStackHandler inputSlots = new ItemStackHandler(SLOTS) {
        @Override
        protected void onContentsChanged(int slot) {
            cachedInputItem[slot] = null;
            setChanged();
        }
    };
    private final ItemStackHandler outputSlots = new ItemStackHandler(SLOTS) {
        @Override
        protected void onContentsChanged(int slot) {
            setChanged();
        }
    };
    private final MachineEnergyStorage energy =
            new MachineEnergyStorage(100_000, SmelterTuning.MAX_RECEIVE_PER_TICK, this::setChanged);

    private final int[] progress = new int[SLOTS];
    private SmelterStructure structure;
    private boolean formed;
    private int revalidateIn = REVALIDATE_INTERVAL;
    private int rebalanceIn = REBALANCE_INTERVAL;
    private int activeOps;

    // Per-slot recipe cache, keyed by input item (cleared whenever the slot changes).
    private final Item[] cachedInputItem = new Item[SLOTS];
    private final ItemStack[] cachedOutput = new ItemStack[SLOTS];
    private final int[] cachedNeeded = new int[SLOTS];

    public SmelterCoreBlockEntity(BlockPos pos, BlockState state) {
        super(CMBlockEntities.SMELTER_CORE.get(), pos, state);
    }

    public static void serverTick(Level level, BlockPos pos, BlockState state, SmelterCoreBlockEntity be) {
        be.tick(level);
    }

    private void tick(Level level) {
        if (!formed || structure == null) {
            return;
        }
        if (--revalidateIn <= 0) {
            revalidateIn = REVALIDATE_INTERVAL;
            revalidate(level);
            if (!formed) {
                return;
            }
        }
        if (--rebalanceIn <= 0) {
            rebalanceIn = REBALANCE_INTERVAL;
            rebalanceInputs();
        }

        List<SmelterColumn> columns = structure.columns();
        int active = 0;
        for (int k = 0; k < columns.size() && k < SLOTS; k++) {
            SmelterColumn column = columns.get(k);
            boolean working = tickColumn(level, k, column);
            if (working) {
                active++;
            }
            updateColumnVisuals(level, k, column, working);
        }
        activeOps = active;

        boolean lit = active > 0;
        BlockState state = getBlockState();
        if (state.hasProperty(SmelterCoreBlock.LIT) && state.getValue(SmelterCoreBlock.LIT) != lit) {
            level.setBlock(worldPosition, state.setValue(SmelterCoreBlock.LIT, lit), Block.UPDATE_ALL);
        }
    }

    /** Runs one tick of column k against input slot k. Returns true if it worked this tick. */
    private boolean tickColumn(Level level, int k, SmelterColumn column) {
        ItemStack input = inputSlots.getStackInSlot(k);
        if (input.isEmpty()) {
            progress[k] = 0;
            return false;
        }
        ItemStack result = cachedResult(level, k, input);
        if (result.isEmpty() || input.getCount() < cachedNeeded[k]) {
            return false;
        }
        if (!ItemHandlerHelper.insertItemStacked(outputSlots, result, true).isEmpty()) {
            return false; // output full: hold progress
        }
        int fePerTick = SmelterTuning.fePerTickFor(column.tier());
        if (!energy.consume(fePerTick, true)) {
            return false; // not enough power for this column this tick
        }
        energy.consume(fePerTick, false);
        if (++progress[k] >= SmelterTuning.ticksFor(column.tier())) {
            progress[k] = 0;
            inputSlots.extractItem(k, cachedNeeded[k], false);
            ItemHandlerHelper.insertItemStacked(outputSlots, result.copy(), false);
        }
        setChanged();
        return true;
    }

    /** Keeps the heater/chimney LIT states and the cauldron's displayed item in sync. */
    private void updateColumnVisuals(Level level, int k, SmelterColumn column, boolean working) {
        setLitState(level, column.heater(), HeatingUnitBlock.LIT, working);
        setLitState(level, column.chimney(), ChimneyBlock.LIT, working);
        if (level.getBlockEntity(column.cauldron()) instanceof CauldronUnitBlockEntity cauldron) {
            ItemStack input = inputSlots.getStackInSlot(k);
            cauldron.setDisplayedItem(working || (!input.isEmpty() && progress[k] > 0)
                    ? input : ItemStack.EMPTY);
        }
    }

    private void setLitState(Level level, BlockPos pos, BooleanProperty litProperty, boolean lit) {
        BlockState state = level.getBlockState(pos);
        if (state.hasProperty(litProperty) && state.getValue(litProperty) != lit) {
            level.setBlock(pos, state.setValue(litProperty, lit), Block.UPDATE_ALL);
        }
    }

    /**
     * Spreads input items across the column slots so parallelism works even when a
     * single pipe feeds everything into one slot: empty column slots pull from dead
     * slots (beyond the column count) first, then take half of the largest stack.
     */
    private void rebalanceInputs() {
        if (structure == null) {
            return;
        }
        int columnCount = Math.min(structure.columnCount(), SLOTS);
        for (int k = 0; k < columnCount; k++) {
            if (!inputSlots.getStackInSlot(k).isEmpty()) {
                continue;
            }
            int source = -1;
            // dead slots first (their items can never smelt where they are)
            for (int j = columnCount; j < SLOTS; j++) {
                if (!inputSlots.getStackInSlot(j).isEmpty()) {
                    source = j;
                    break;
                }
            }
            if (source < 0) {
                int best = 0;
                for (int j = 0; j < columnCount; j++) {
                    int count = inputSlots.getStackInSlot(j).getCount();
                    if (j != k && count > best) {
                        best = count;
                        source = j;
                    }
                }
                if (best < 2) {
                    continue; // nothing worth splitting
                }
            }
            ItemStack stack = inputSlots.getStackInSlot(source);
            int amount = source >= columnCount ? stack.getCount() : stack.getCount() / 2;
            ItemStack moved = inputSlots.extractItem(source, amount, false);
            ItemStack leftover = inputSlots.insertItem(k, moved, false);
            if (!leftover.isEmpty()) {
                inputSlots.insertItem(source, leftover, false);
            }
        }
    }

    private ItemStack cachedResult(Level level, int slot, ItemStack input) {
        if (cachedInputItem[slot] != input.getItem()) {
            cachedInputItem[slot] = input.getItem();
            cachedOutput[slot] = SmeltingRecipeLookup.findResult(level, input);
            cachedNeeded[slot] = cachedOutput[slot].isEmpty()
                    ? 0
                    : Math.max(1, SmeltingRecipeLookup.neededAmount(level, input));
        }
        return cachedOutput[slot];
    }

    private void revalidate(Level level) {
        if (!level.hasChunksAt(structure.min(), structure.max())) {
            return;
        }
        FormationResult result = SmelterFormationValidator.validate(level, worldPosition);
        if (!result.isSuccess()) {
            unform();
        } else if (!result.structure().equals(structure)) {
            // Structure changed but is still valid (column or port added/removed): adopt it.
            applyStructure(result.structure());
        }
    }

    public InteractionResult onUse(Player player) {
        if (level == null) {
            return InteractionResult.PASS;
        }
        if (formed && structure != null) {
            if (player instanceof ServerPlayer serverPlayer) {
                NetworkHooks.openScreen(serverPlayer, new SimpleMenuProvider(
                        (id, inv, p) -> new SmelterMenu(id, inv, this, menuData),
                        Component.translatable("container.compositemachines.smelter")),
                        buf -> buf.writeBlockPos(worldPosition));
            }
            return InteractionResult.CONSUME;
        }
        FormationResult result = SmelterFormationValidator.validate(level, worldPosition);
        if (result.isSuccess()) {
            applyStructure(result.structure());
            player.sendSystemMessage(Component.literal("Composite Smelter formed: "
                    + structure.describeSize() + ", " + structure.columnCount()
                    + " smelting column(s)")
                    .withStyle(ChatFormatting.GREEN));
        } else {
            player.sendSystemMessage(result.error());
        }
        return InteractionResult.CONSUME;
    }

    /** Synced to the GUI; energy values are split into 15-bit halves (see SmelterMenu). */
    private final ContainerData menuData = new ContainerData() {
        @Override
        public int get(int index) {
            return switch (index) {
                case SmelterMenu.DATA_ENERGY_LO -> energy.getEnergyStored() & 0x7FFF;
                case SmelterMenu.DATA_ENERGY_HI -> energy.getEnergyStored() >>> 15;
                case SmelterMenu.DATA_CAPACITY_LO -> energy.getMaxEnergyStored() & 0x7FFF;
                case SmelterMenu.DATA_CAPACITY_HI -> energy.getMaxEnergyStored() >>> 15;
                case SmelterMenu.DATA_PROGRESS -> guiProgressTicks();
                case SmelterMenu.DATA_TICKS_PER_OP -> guiTicksPerOp();
                case SmelterMenu.DATA_ACTIVE_OPS -> activeOps;
                case SmelterMenu.DATA_MAX_OPS -> structure == null ? 0 : structure.columnCount();
                default -> 0;
            };
        }

        @Override
        public void set(int index, int value) {
            // server-authoritative; clients never write
        }

        @Override
        public int getCount() {
            return SmelterMenu.DATA_COUNT;
        }
    };

    /** Raw progress ticks of the furthest-along column, for the GUI arrow. */
    private int guiProgressTicks() {
        return guiProgressColumn() >= 0 ? progress[guiProgressColumn()] : 0;
    }

    /** Ticks-per-op of the column driving the GUI arrow. */
    private int guiTicksPerOp() {
        int k = guiProgressColumn();
        if (k < 0 || structure == null) {
            return SmelterTuning.BASE_TICKS;
        }
        return SmelterTuning.ticksFor(structure.columns().get(k).tier());
    }

    /** Column index with the highest relative smelt progress, or -1 if none. */
    private int guiProgressColumn() {
        if (structure == null) {
            return -1;
        }
        int best = -1;
        int bestRatio = -1;
        List<SmelterColumn> columns = structure.columns();
        for (int k = 0; k < columns.size() && k < SLOTS; k++) {
            if (progress[k] <= 0) {
                continue;
            }
            int ticks = SmelterTuning.ticksFor(columns.get(k).tier());
            int ratio = progress[k] * 1000 / ticks;
            if (ratio > bestRatio) {
                bestRatio = ratio;
                best = k;
            }
        }
        return best;
    }

    /** Resets all column visuals (lit states, cauldron displays) of the given structure. */
    private void clearColumnVisuals(SmelterStructure target) {
        if (level == null) {
            return;
        }
        for (SmelterColumn column : target.columns()) {
            setLitState(level, column.heater(), HeatingUnitBlock.LIT, false);
            setLitState(level, column.chimney(), ChimneyBlock.LIT, false);
            if (level.getBlockEntity(column.cauldron()) instanceof CauldronUnitBlockEntity cauldron) {
                cauldron.setDisplayedItem(ItemStack.EMPTY);
            }
        }
    }

    public void applyStructure(SmelterStructure newStructure) {
        if (structure != null) {
            clearColumnVisuals(structure);
        }
        clearPortLinks();
        this.structure = newStructure;
        this.formed = true;
        Arrays.fill(progress, 0);
        energy.setCapacity(SmelterTuning.energyCapacity(newStructure));
        if (level != null) {
            for (BlockPos portPos : newStructure.ports()) {
                if (level.getBlockEntity(portPos) instanceof PortBlockEntity port) {
                    port.setCore(worldPosition);
                }
            }
        }
        updateFormedBlockState(true);
        setChanged();
    }

    public void unform() {
        if (structure != null) {
            clearColumnVisuals(structure);
        }
        clearPortLinks();
        structure = null;
        formed = false;
        activeOps = 0;
        Arrays.fill(progress, 0);
        Arrays.fill(cachedInputItem, null);
        updateFormedBlockState(false);
        setChanged();
    }

    private void clearPortLinks() {
        if (structure == null || level == null) {
            return;
        }
        for (BlockPos portPos : structure.ports()) {
            if (level.getBlockEntity(portPos) instanceof PortBlockEntity port
                    && worldPosition.equals(port.getCorePos())) {
                port.clearCore();
            }
        }
    }

    private void updateFormedBlockState(boolean nowFormed) {
        if (level == null) {
            return;
        }
        BlockState state = getBlockState();
        if (!state.hasProperty(SmelterCoreBlock.FORMED)) {
            return;
        }
        BlockState newState = state.setValue(SmelterCoreBlock.FORMED, nowFormed);
        if (!nowFormed && newState.hasProperty(SmelterCoreBlock.LIT)) {
            newState = newState.setValue(SmelterCoreBlock.LIT, false);
        }
        if (newState != state) {
            level.setBlock(worldPosition, newState, Block.UPDATE_ALL);
        }
    }

    public void onCoreRemoved() {
        unform();
        if (level != null) {
            spill(inputSlots);
            spill(outputSlots);
        }
    }

    private void spill(ItemStackHandler handler) {
        for (int i = 0; i < handler.getSlots(); i++) {
            ItemStack stack = handler.getStackInSlot(i);
            if (!stack.isEmpty()) {
                Containers.dropItemStack(level, worldPosition.getX(), worldPosition.getY(), worldPosition.getZ(), stack);
            }
        }
    }

    public boolean isFormed() {
        return formed;
    }

    public boolean isSmeltable(ItemStack stack) {
        return level != null && SmeltingRecipeLookup.isSmeltable(level, stack);
    }

    public ItemStackHandler getInputItems() {
        return inputSlots;
    }

    public ItemStackHandler getOutputItems() {
        return outputSlots;
    }

    public MachineEnergyStorage getEnergy() {
        return energy;
    }

    @Override
    protected void saveAdditional(CompoundTag tag) {
        super.saveAdditional(tag);
        tag.put("input", inputSlots.serializeNBT());
        tag.put("output", outputSlots.serializeNBT());
        tag.putInt("energy", energy.getEnergyStored());
        tag.putIntArray("progress", Arrays.copyOf(progress, progress.length));
        tag.putBoolean("formed", formed);
        if (structure != null) {
            tag.put("structure", structure.save());
        }
    }

    @Override
    public void load(CompoundTag tag) {
        super.load(tag);
        inputSlots.deserializeNBT(tag.getCompound("input"));
        outputSlots.deserializeNBT(tag.getCompound("output"));
        formed = tag.getBoolean("formed");
        structure = tag.contains("structure") ? SmelterStructure.load(tag.getCompound("structure")) : null;
        if (structure != null) {
            energy.setCapacity(SmelterTuning.energyCapacity(structure));
        }
        energy.setStored(tag.getInt("energy"));
        int[] savedProgress = tag.getIntArray("progress");
        Arrays.fill(progress, 0);
        System.arraycopy(savedProgress, 0, progress, 0, Math.min(savedProgress.length, progress.length));
    }
}
