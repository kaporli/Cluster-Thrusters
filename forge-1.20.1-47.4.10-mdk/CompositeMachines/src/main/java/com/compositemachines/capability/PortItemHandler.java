package com.compositemachines.capability;

import com.compositemachines.blockentity.SmelterCoreBlockEntity;
import com.compositemachines.machine.SmelterTuning;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.items.IItemHandler;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.function.Supplier;

/**
 * Item view exposed by a port: insert-only into the core's input buffer, or
 * extract-only from the core's output buffer. Behaves as an empty inventory when
 * the structure is not formed.
 */
public class PortItemHandler implements IItemHandler {
    private final Supplier<@Nullable SmelterCoreBlockEntity> core;
    private final boolean input;

    public PortItemHandler(Supplier<@Nullable SmelterCoreBlockEntity> core, boolean input) {
        this.core = core;
        this.input = input;
    }

    @Override
    public int getSlots() {
        return core.get() == null ? 0 : SmelterTuning.SLOTS;
    }

    @NotNull
    @Override
    public ItemStack getStackInSlot(int slot) {
        SmelterCoreBlockEntity c = core.get();
        if (c == null || slot < 0 || slot >= SmelterTuning.SLOTS) {
            return ItemStack.EMPTY;
        }
        return (input ? c.getInputItems() : c.getOutputItems()).getStackInSlot(slot);
    }

    @NotNull
    @Override
    public ItemStack insertItem(int slot, @NotNull ItemStack stack, boolean simulate) {
        SmelterCoreBlockEntity c = core.get();
        if (!input || c == null || slot < 0 || slot >= SmelterTuning.SLOTS || !c.isSmeltable(stack)) {
            return stack;
        }
        return c.getInputItems().insertItem(slot, stack, simulate);
    }

    @NotNull
    @Override
    public ItemStack extractItem(int slot, int amount, boolean simulate) {
        SmelterCoreBlockEntity c = core.get();
        if (input || c == null || slot < 0 || slot >= SmelterTuning.SLOTS) {
            return ItemStack.EMPTY;
        }
        return c.getOutputItems().extractItem(slot, amount, simulate);
    }

    @Override
    public int getSlotLimit(int slot) {
        return 64;
    }

    @Override
    public boolean isItemValid(int slot, @NotNull ItemStack stack) {
        SmelterCoreBlockEntity c = core.get();
        return input && c != null && c.isSmeltable(stack);
    }
}
