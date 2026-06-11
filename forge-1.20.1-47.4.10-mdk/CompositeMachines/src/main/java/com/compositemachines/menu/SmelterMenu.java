package com.compositemachines.menu;

import com.compositemachines.blockentity.SmelterCoreBlockEntity;
import com.compositemachines.registry.CMMenuTypes;
import net.minecraft.core.BlockPos;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.world.entity.player.Inventory;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.AbstractContainerMenu;
import net.minecraft.world.inventory.ContainerData;
import net.minecraft.world.inventory.SimpleContainerData;
import net.minecraft.world.inventory.Slot;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.phys.Vec3;
import net.minecraftforge.items.IItemHandler;
import net.minecraftforge.items.ItemStackHandler;
import net.minecraftforge.items.SlotItemHandler;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

/**
 * Container for the Composite Smelter GUI: 3x3 input grid, 3x3 output grid,
 * player inventory, plus synced machine data (energy, progress, parallel ops).
 *
 * Energy values can exceed the 16-bit container-data sync limit, so they are
 * split into two 15-bit halves (LO/HI pairs).
 */
public class SmelterMenu extends AbstractContainerMenu {
    public static final int DATA_ENERGY_LO = 0;
    public static final int DATA_ENERGY_HI = 1;
    public static final int DATA_CAPACITY_LO = 2;
    public static final int DATA_CAPACITY_HI = 3;
    public static final int DATA_PROGRESS = 4;
    public static final int DATA_TICKS_PER_OP = 5;
    public static final int DATA_ACTIVE_OPS = 6;
    public static final int DATA_MAX_OPS = 7;
    public static final int DATA_COUNT = 8;

    private static final int INPUT_X = 26;
    private static final int OUTPUT_X = 116;
    private static final int GRID_Y = 17;

    @Nullable
    private final SmelterCoreBlockEntity core;
    private final ContainerData data;

    public SmelterMenu(int id, Inventory playerInventory, @Nullable SmelterCoreBlockEntity core, ContainerData data) {
        super(CMMenuTypes.SMELTER.get(), id);
        this.core = core;
        this.data = data;

        // Dummy handlers keep client/server slot counts identical even if the client
        // block entity is briefly unavailable.
        IItemHandler input = core != null ? core.getInputItems() : new ItemStackHandler(9);
        IItemHandler output = core != null ? core.getOutputItems() : new ItemStackHandler(9);
        for (int row = 0; row < 3; row++) {
            for (int col = 0; col < 3; col++) {
                addSlot(new SlotItemHandler(input, row * 3 + col,
                        INPUT_X + col * 18, GRID_Y + row * 18) {
                    @Override
                    public boolean mayPlace(@NotNull ItemStack stack) {
                        return core == null || core.isSmeltable(stack);
                    }
                });
            }
        }
        for (int row = 0; row < 3; row++) {
            for (int col = 0; col < 3; col++) {
                addSlot(new SlotItemHandler(output, row * 3 + col,
                        OUTPUT_X + col * 18, GRID_Y + row * 18) {
                    @Override
                    public boolean mayPlace(@NotNull ItemStack stack) {
                        return false;
                    }
                });
            }
        }
        for (int row = 0; row < 3; row++) {
            for (int col = 0; col < 9; col++) {
                addSlot(new Slot(playerInventory, 9 + row * 9 + col, 8 + col * 18, 84 + row * 18));
            }
        }
        for (int col = 0; col < 9; col++) {
            addSlot(new Slot(playerInventory, col, 8 + col * 18, 142));
        }
        addDataSlots(data);
    }

    /** Client-side factory: resolves the core block entity from the position in the buffer. */
    public static SmelterMenu fromNetwork(int id, Inventory playerInventory, FriendlyByteBuf buf) {
        BlockPos pos = buf.readBlockPos();
        BlockEntity be = playerInventory.player.level().getBlockEntity(pos);
        SmelterCoreBlockEntity core = be instanceof SmelterCoreBlockEntity c ? c : null;
        return new SmelterMenu(id, playerInventory, core, new SimpleContainerData(DATA_COUNT));
    }

    @Override
    public boolean stillValid(Player player) {
        return core != null && !core.isRemoved() && core.isFormed()
                && player.distanceToSqr(Vec3.atCenterOf(core.getBlockPos())) <= 64.0;
    }

    @Override
    public ItemStack quickMoveStack(Player player, int index) {
        Slot slot = slots.get(index);
        if (!slot.hasItem()) {
            return ItemStack.EMPTY;
        }
        ItemStack stack = slot.getItem();
        ItemStack copy = stack.copy();
        int machineEnd = 18;
        int invEnd = machineEnd + 36;
        if (index < machineEnd) {
            if (!moveItemStackTo(stack, machineEnd, invEnd, true)) {
                return ItemStack.EMPTY;
            }
        } else if (core != null && core.isSmeltable(stack)) {
            if (!moveItemStackTo(stack, 0, 9, false)) {
                return ItemStack.EMPTY;
            }
        } else if (index < machineEnd + 27) {
            if (!moveItemStackTo(stack, machineEnd + 27, invEnd, false)) {
                return ItemStack.EMPTY;
            }
        } else if (!moveItemStackTo(stack, machineEnd, machineEnd + 27, false)) {
            return ItemStack.EMPTY;
        }
        if (stack.isEmpty()) {
            slot.set(ItemStack.EMPTY);
        } else {
            slot.setChanged();
        }
        slot.onTake(player, stack);
        return copy;
    }

    public int getEnergy() {
        return (data.get(DATA_ENERGY_HI) << 15) | data.get(DATA_ENERGY_LO);
    }

    public int getEnergyCapacity() {
        return (data.get(DATA_CAPACITY_HI) << 15) | data.get(DATA_CAPACITY_LO);
    }

    public int getProgress() {
        return data.get(DATA_PROGRESS);
    }

    public int getTicksPerOp() {
        return data.get(DATA_TICKS_PER_OP);
    }

    public int getActiveOps() {
        return data.get(DATA_ACTIVE_OPS);
    }

    public int getMaxOps() {
        return data.get(DATA_MAX_OPS);
    }
}
