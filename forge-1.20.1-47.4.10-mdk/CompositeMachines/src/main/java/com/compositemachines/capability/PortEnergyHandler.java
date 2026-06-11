package com.compositemachines.capability;

import com.compositemachines.blockentity.SmelterCoreBlockEntity;
import net.minecraftforge.energy.IEnergyStorage;
import org.jetbrains.annotations.Nullable;

import java.util.function.Supplier;

/**
 * Receive-only Forge Energy view onto the core's buffer. Mekanism universal cables
 * push FE into this natively. Reads as a 0-capacity storage when not formed.
 */
public class PortEnergyHandler implements IEnergyStorage {
    private final Supplier<@Nullable SmelterCoreBlockEntity> core;

    public PortEnergyHandler(Supplier<@Nullable SmelterCoreBlockEntity> core) {
        this.core = core;
    }

    @Override
    public int receiveEnergy(int maxReceive, boolean simulate) {
        SmelterCoreBlockEntity c = core.get();
        return c == null ? 0 : c.getEnergy().receiveEnergy(maxReceive, simulate);
    }

    @Override
    public int extractEnergy(int maxExtract, boolean simulate) {
        return 0;
    }

    @Override
    public int getEnergyStored() {
        SmelterCoreBlockEntity c = core.get();
        return c == null ? 0 : c.getEnergy().getEnergyStored();
    }

    @Override
    public int getMaxEnergyStored() {
        SmelterCoreBlockEntity c = core.get();
        return c == null ? 0 : c.getEnergy().getMaxEnergyStored();
    }

    @Override
    public boolean canExtract() {
        return false;
    }

    @Override
    public boolean canReceive() {
        return true;
    }
}
