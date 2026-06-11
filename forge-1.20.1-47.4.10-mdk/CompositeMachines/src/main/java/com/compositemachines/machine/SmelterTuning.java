package com.compositemachines.machine;

import com.compositemachines.block.HeaterTier;
import com.compositemachines.multiblock.SmelterStructure;

/**
 * All balance numbers in one place. The Basic-tier baseline mirrors Mekanism's
 * Energized Smelter (50 J/t = 20 FE/t, 200 ticks per operation). Each higher tier
 * divides the time and multiplies FE/t by the same factor, so energy per item stays
 * constant (4000 FE) while throughput scales.
 */
public final class SmelterTuning {
    public static final int BASE_TICKS = 200;
    public static final int BASE_FE_PER_TICK = 20;
    public static final int SLOTS = 9;
    public static final int MAX_RECEIVE_PER_TICK = 20_000;

    private SmelterTuning() {
    }

    /** Ticks one operation takes in a column with this heater tier. */
    public static int ticksFor(HeaterTier tier) {
        return Math.max(10, BASE_TICKS / tier.speedMultiplier());
    }

    /** FE per tick one operation costs in a column with this heater tier. */
    public static int fePerTickFor(HeaterTier tier) {
        return BASE_FE_PER_TICK * tier.speedMultiplier();
    }

    public static int energyCapacity(SmelterStructure structure) {
        return 100_000 + 50_000 * structure.columnCount();
    }
}
