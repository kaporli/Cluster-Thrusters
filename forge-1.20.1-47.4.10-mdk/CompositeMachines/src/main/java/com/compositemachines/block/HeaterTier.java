package com.compositemachines.block;

/**
 * Heating Unit tiers, mirroring Mekanism's Basic/Advanced/Elite/Ultimate ladder.
 * Higher tiers smelt their column faster; FE/t scales with the same factor so the
 * energy cost per item stays constant.
 */
public enum HeaterTier {
    BASIC(1),
    ADVANCED(2),
    ELITE(4),
    ULTIMATE(8);

    private final int speedMultiplier;

    HeaterTier(int speedMultiplier) {
        this.speedMultiplier = speedMultiplier;
    }

    public int speedMultiplier() {
        return speedMultiplier;
    }

    public static HeaterTier byOrdinal(int ordinal) {
        HeaterTier[] values = values();
        return values[Math.max(0, Math.min(ordinal, values.length - 1))];
    }
}
