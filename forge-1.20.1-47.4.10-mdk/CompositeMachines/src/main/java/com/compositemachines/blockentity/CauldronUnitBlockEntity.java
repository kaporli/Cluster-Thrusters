package com.compositemachines.blockentity;

import com.compositemachines.registry.CMBlockEntities;
import net.minecraft.core.BlockPos;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import org.jetbrains.annotations.Nullable;

/**
 * Holds the item currently being smelted in this column, purely for display: the
 * core sets it server-side and it is synced to clients so the renderer can draw the
 * floating item between the holder's pillars.
 */
public class CauldronUnitBlockEntity extends BlockEntity {
    private ItemStack displayed = ItemStack.EMPTY;

    public CauldronUnitBlockEntity(BlockPos pos, BlockState state) {
        super(CMBlockEntities.CAULDRON_UNIT.get(), pos, state);
    }

    public ItemStack getDisplayedItem() {
        return displayed;
    }

    /** Server-side: update and sync the displayed item if it changed. */
    public void setDisplayedItem(ItemStack stack) {
        if (ItemStack.isSameItemSameTags(displayed, stack)) {
            return;
        }
        displayed = stack.isEmpty() ? ItemStack.EMPTY : stack.copyWithCount(1);
        setChanged();
        if (level != null && !level.isClientSide) {
            level.sendBlockUpdated(worldPosition, getBlockState(), getBlockState(), 3);
        }
    }

    @Override
    protected void saveAdditional(CompoundTag tag) {
        super.saveAdditional(tag);
        if (!displayed.isEmpty()) {
            tag.put("display", displayed.save(new CompoundTag()));
        }
    }

    @Override
    public void load(CompoundTag tag) {
        super.load(tag);
        displayed = tag.contains("display") ? ItemStack.of(tag.getCompound("display")) : ItemStack.EMPTY;
    }

    @Override
    public CompoundTag getUpdateTag() {
        return saveWithoutMetadata();
    }

    @Nullable
    @Override
    public ClientboundBlockEntityDataPacket getUpdatePacket() {
        return ClientboundBlockEntityDataPacket.create(this);
    }
}
