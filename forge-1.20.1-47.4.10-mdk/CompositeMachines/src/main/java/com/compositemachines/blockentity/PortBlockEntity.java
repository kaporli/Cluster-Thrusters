package com.compositemachines.blockentity;

import com.compositemachines.block.PortBlock;
import com.compositemachines.block.PortType;
import com.compositemachines.capability.PortEnergyHandler;
import com.compositemachines.capability.PortItemHandler;
import com.compositemachines.registry.CMBlockEntities;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraftforge.common.capabilities.Capability;
import net.minecraftforge.common.capabilities.ForgeCapabilities;
import net.minecraftforge.common.util.LazyOptional;
import net.minecraftforge.energy.IEnergyStorage;
import net.minecraftforge.items.IItemHandler;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

/**
 * A wall port of a formed Composite Smelter. Holds only a link to the core and
 * proxies item/energy capabilities to it, so Mekanism logistical transporters and
 * universal cables (and any other pipe) interact with the core's buffers.
 */
public class PortBlockEntity extends BlockEntity {
    @Nullable
    private BlockPos corePos;
    private LazyOptional<IItemHandler> itemCap = LazyOptional.empty();
    private LazyOptional<IEnergyStorage> energyCap = LazyOptional.empty();

    public PortBlockEntity(BlockPos pos, BlockState state) {
        super(CMBlockEntities.PORT.get(), pos, state);
    }

    public PortType getPortType() {
        return getBlockState().getBlock() instanceof PortBlock port ? port.getType() : PortType.ITEM_INPUT;
    }

    @Nullable
    public BlockPos getCorePos() {
        return corePos;
    }

    public void setCore(BlockPos pos) {
        corePos = pos.immutable();
        updateFormedBlockState(true);
        resetCaps();
        setChanged();
    }

    public void clearCore() {
        corePos = null;
        updateFormedBlockState(false);
        resetCaps();
        setChanged();
    }

    /** Called when the port block is broken: the structure is no longer intact. */
    public void onPortRemoved() {
        if (corePos != null && level != null
                && level.getBlockEntity(corePos) instanceof SmelterCoreBlockEntity core
                && core.isFormed()) {
            core.unform();
        }
        resetCaps();
    }

    @Nullable
    private SmelterCoreBlockEntity getCore() {
        if (corePos == null || level == null) {
            return null;
        }
        return level.getBlockEntity(corePos) instanceof SmelterCoreBlockEntity core && core.isFormed()
                ? core : null;
    }

    @NotNull
    @Override
    public <T> LazyOptional<T> getCapability(@NotNull Capability<T> cap, @Nullable Direction side) {
        if (corePos != null && !isRemoved()) {
            PortType type = getPortType();
            if (cap == ForgeCapabilities.ITEM_HANDLER && type.isItem()) {
                if (!itemCap.isPresent()) {
                    itemCap = LazyOptional.of(() -> new PortItemHandler(this::getCore, type == PortType.ITEM_INPUT));
                }
                return itemCap.cast();
            }
            if (cap == ForgeCapabilities.ENERGY && type == PortType.ENERGY) {
                if (!energyCap.isPresent()) {
                    energyCap = LazyOptional.of(() -> new PortEnergyHandler(this::getCore));
                }
                return energyCap.cast();
            }
        }
        return super.getCapability(cap, side);
    }

    private void resetCaps() {
        itemCap.invalidate();
        energyCap.invalidate();
        itemCap = LazyOptional.empty();
        energyCap = LazyOptional.empty();
    }

    @Override
    public void invalidateCaps() {
        super.invalidateCaps();
        itemCap.invalidate();
        energyCap.invalidate();
    }

    private void updateFormedBlockState(boolean formed) {
        if (level == null) {
            return;
        }
        BlockState state = getBlockState();
        if (state.hasProperty(PortBlock.FORMED) && state.getValue(PortBlock.FORMED) != formed) {
            level.setBlock(worldPosition, state.setValue(PortBlock.FORMED, formed), Block.UPDATE_ALL);
        }
    }

    @Override
    protected void saveAdditional(CompoundTag tag) {
        super.saveAdditional(tag);
        if (corePos != null) {
            tag.putLong("core", corePos.asLong());
        }
    }

    @Override
    public void load(CompoundTag tag) {
        super.load(tag);
        corePos = tag.contains("core") ? BlockPos.of(tag.getLong("core")) : null;
    }
}
