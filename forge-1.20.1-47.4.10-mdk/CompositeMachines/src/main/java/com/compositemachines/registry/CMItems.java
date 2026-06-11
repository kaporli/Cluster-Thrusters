package com.compositemachines.registry;

import com.compositemachines.CompositeMachinesMod;
import net.minecraft.world.item.BlockItem;
import net.minecraft.world.item.Item;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;

public final class CMItems {
    public static final DeferredRegister<Item> ITEMS =
            DeferredRegister.create(ForgeRegistries.ITEMS, CompositeMachinesMod.MODID);

    public static final RegistryObject<Item> SMELTER_CORE = ITEMS.register("smelter_core",
            () -> new BlockItem(CMBlocks.SMELTER_CORE.get(), new Item.Properties()));
    public static final RegistryObject<Item> HEATING_UNIT = ITEMS.register("heating_unit",
            () -> new BlockItem(CMBlocks.HEATING_UNIT.get(), new Item.Properties()));
    public static final RegistryObject<Item> ITEM_INPUT_PORT = ITEMS.register("item_input_port",
            () -> new BlockItem(CMBlocks.ITEM_INPUT_PORT.get(), new Item.Properties()));
    public static final RegistryObject<Item> ITEM_OUTPUT_PORT = ITEMS.register("item_output_port",
            () -> new BlockItem(CMBlocks.ITEM_OUTPUT_PORT.get(), new Item.Properties()));
    public static final RegistryObject<Item> ENERGY_PORT = ITEMS.register("energy_port",
            () -> new BlockItem(CMBlocks.ENERGY_PORT.get(), new Item.Properties()));

    private CMItems() {
    }
}
