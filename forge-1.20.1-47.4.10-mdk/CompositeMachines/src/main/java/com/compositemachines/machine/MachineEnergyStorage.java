package com.compositemachines.machine;

import net.minecraftforge.energy.EnergyStorage;

/**
 * Forge EnergyStorage that only accepts energy from the outside (maxExtract = 0);
 * the machine consumes internally via {@link #consume}.
 */
public class MachineEnergyStorage extends EnergyStorage {
    private final Runnable onChanged;

    public MachineEnergyStorage(int capacity, int maxReceive, Runnable onChanged) {
        super(capacity, maxReceive, 0);
        this.onChanged = onChanged;
    }

    @Override
    public int receiveEnergy(int maxReceive, boolean simulate) {
        int received = super.receiveEnergy(maxReceive, simulate);
        if (received > 0 && !simulate) {
            onChanged.run();
        }
        return received;
    }

    public boolean consume(int amount, boolean simulate) {
        if (energy < amount) {
            return false;
        }
        if (!simulate) {
            energy -= amount;
            onChanged.run();
        }
        return true;
    }

    public void setCapacity(int newCapacity) {
        capacity = newCapacity;
        energy = Math.min(energy, newCapacity);
    }

    public void setStored(int stored) {
        energy = Math.max(0, Math.min(stored, capacity));
    }
}
