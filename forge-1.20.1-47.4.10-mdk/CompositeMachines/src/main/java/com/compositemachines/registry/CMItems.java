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

    public static final RegistryObject<Item> SMELTER_CORE = blockItem("smelter_core", CMBlocks.SMELTER_CORE);
    public static final RegistryObject<Item> HEATING_UNIT = blockItem("heating_unit", CMBlocks.HEATING_UNIT);
    public static final RegistryObject<Item> HEATING_UNIT_ADVANCED =
            blockItem("heating_unit_advanced", CMBlocks.HEATING_UNIT_ADVANCED);
    public static final RegistryObject<Item> HEATING_UNIT_ELITE =
            blockItem("heating_unit_elite", CMBlocks.HEATING_UNIT_ELITE);
    public static final RegistryObject<Item> HEATING_UNIT_ULTIMATE =
            blockItem("heating_unit_ultimate", CMBlocks.HEATING_UNIT_ULTIMATE);
    public static final RegistryObject<Item> CAULDRON_UNIT = blockItem("cauldron_unit", CMBlocks.CAULDRON_UNIT);
    public static final RegistryObject<Item> CHIMNEY = blockItem("chimney", CMBlocks.CHIMNEY);
    public static final RegistryObject<Item> ITEM_INPUT_PORT = blockItem("item_input_port", CMBlocks.ITEM_INPUT_PORT);
    public static final RegistryObject<Item> ITEM_OUTPUT_PORT = blockItem("item_output_port", CMBlocks.ITEM_OUTPUT_PORT);
    public static final RegistryObject<Item> ENERGY_PORT = blockItem("energy_port", CMBlocks.ENERGY_PORT);

    private static RegistryObject<Item> blockItem(String name, RegistryObject<net.minecraft.world.level.block.Block> block) {
        return ITEMS.register(name, () -> new BlockItem(block.get(), new Item.Properties()));
    }

    private CMItems() {
    }
}
