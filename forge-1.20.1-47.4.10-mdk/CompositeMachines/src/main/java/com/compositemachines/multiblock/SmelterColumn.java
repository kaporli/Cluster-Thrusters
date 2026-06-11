package com.compositemachines.multiblock;

import com.compositemachines.block.HeaterTier;
import net.minecraft.core.BlockPos;
import net.minecraft.nbt.CompoundTag;

/**
 * One smelting line: Heating Unit (floor) → Cauldron Unit → Rail Hoist (rail
 * plane) → Chimney (roof). The heater's tier sets the column's speed and FE/t.
 */
public record SmelterColumn(BlockPos heater, BlockPos cauldron, BlockPos hoist, BlockPos chimney,
                            HeaterTier tier) {

    public CompoundTag save() {
        CompoundTag tag = new CompoundTag();
        tag.putLong("heater", heater.asLong());
        tag.putLong("cauldron", cauldron.asLong());
        tag.putLong("hoist", hoist.asLong());
        tag.putLong("chimney", chimney.asLong());
        tag.putByte("tier", (byte) tier.ordinal());
        return tag;
    }

    public static SmelterColumn load(CompoundTag tag) {
        BlockPos heater = BlockPos.of(tag.getLong("heater"));
        BlockPos cauldron = BlockPos.of(tag.getLong("cauldron"));
        BlockPos hoist = tag.contains("hoist")
                ? BlockPos.of(tag.getLong("hoist"))
                : cauldron.above(1);
        BlockPos chimney = BlockPos.of(tag.getLong("chimney"));
        return new SmelterColumn(heater, cauldron, hoist, chimney, HeaterTier.byOrdinal(tag.getByte("tier")));
    }
}
