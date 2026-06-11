package com.compositemachines.multiblock;

import com.compositemachines.block.HeaterTier;
import net.minecraft.core.BlockPos;
import net.minecraft.nbt.CompoundTag;

/**
 * One smelting line inside the structure: Heating Unit at the bottom, Cauldron Unit
 * directly above it, Chimney directly above that. The heater's tier sets the
 * column's speed and FE/t.
 */
public record SmelterColumn(BlockPos heater, BlockPos cauldron, BlockPos chimney, HeaterTier tier) {

    public CompoundTag save() {
        CompoundTag tag = new CompoundTag();
        tag.putLong("heater", heater.asLong());
        tag.putLong("cauldron", cauldron.asLong());
        tag.putLong("chimney", chimney.asLong());
        tag.putByte("tier", (byte) tier.ordinal());
        return tag;
    }

    public static SmelterColumn load(CompoundTag tag) {
        return new SmelterColumn(
                BlockPos.of(tag.getLong("heater")),
                BlockPos.of(tag.getLong("cauldron")),
                BlockPos.of(tag.getLong("chimney")),
                HeaterTier.byOrdinal(tag.getByte("tier")));
    }
}
