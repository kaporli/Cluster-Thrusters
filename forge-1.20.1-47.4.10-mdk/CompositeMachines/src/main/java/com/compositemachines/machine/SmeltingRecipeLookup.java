package com.compositemachines.machine;

import mekanism.api.recipes.ItemStackToItemStackRecipe;
import mekanism.common.recipe.MekanismRecipeType;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;

/**
 * The only class that touches Mekanism internals ({@code mekanism.common.*}).
 * Verified against Mekanism 1.20.1-10.4.16.80; the SMELTING cache also wraps all
 * vanilla furnace recipes, so one lookup covers everything the Energized Smelter can do.
 * Server-side only.
 *
 * If a future Mekanism version breaks this, fall back to querying the vanilla
 * RecipeManager for both minecraft:smelting and mekanism:smelting recipe types
 * (MekanismRecipeType implements the vanilla RecipeType interface).
 */
public final class SmeltingRecipeLookup {
    private SmeltingRecipeLookup() {
    }

    /** Returns the smelting result for the given input, or EMPTY if it cannot be smelted. */
    public static ItemStack findResult(Level level, ItemStack input) {
        if (input.isEmpty()) {
            return ItemStack.EMPTY;
        }
        ItemStackToItemStackRecipe recipe = MekanismRecipeType.SMELTING.getInputCache().findFirstRecipe(level, input);
        return recipe == null ? ItemStack.EMPTY : recipe.getOutput(input);
    }

    /** Returns how many items of the given input one operation consumes (0 = no recipe). */
    public static int neededAmount(Level level, ItemStack input) {
        if (input.isEmpty()) {
            return 0;
        }
        ItemStackToItemStackRecipe recipe = MekanismRecipeType.SMELTING.getInputCache().findFirstRecipe(level, input);
        return recipe == null ? 0 : (int) recipe.getInput().getNeededAmount(input);
    }

    public static boolean isSmeltable(Level level, ItemStack input) {
        return !input.isEmpty() && MekanismRecipeType.SMELTING.getInputCache().containsInput(level, input);
    }
}
