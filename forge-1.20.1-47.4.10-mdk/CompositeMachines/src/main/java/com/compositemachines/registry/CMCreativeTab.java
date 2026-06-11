package com.compositemachines.registry;

import com.compositemachines.CompositeMachinesMod;
import net.minecraft.core.registries.Registries;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.RegistryObject;

public final class CMCreativeTab {
    public static final DeferredRegister<CreativeModeTab> TABS =
            DeferredRegister.create(Registries.CREATIVE_MODE_TAB, CompositeMachinesMod.MODID);

    public static final RegistryObject<CreativeModeTab> MAIN = TABS.register("main",
            () -> CreativeModeTab.builder()
                    .title(Component.translatable("itemGroup.compositemachines"))
                    .icon(() -> new ItemStack(CMItems.SMELTER_CORE.get()))
                    .displayItems((params, output) -> {
                        output.accept(CMItems.SMELTER_CORE.get());
                        output.accept(CMItems.HEATING_UNIT.get());
                        output.accept(CMItems.HEATING_UNIT_ADVANCED.get());
                        output.accept(CMItems.HEATING_UNIT_ELITE.get());
                        output.accept(CMItems.HEATING_UNIT_ULTIMATE.get());
                        output.accept(CMItems.CAULDRON_UNIT.get());
                        output.accept(CMItems.CHIMNEY.get());
                        output.accept(CMItems.OVERHEAD_RAIL.get());
                        output.accept(CMItems.RAIL_HOIST.get());
                        output.accept(CMItems.ITEM_INPUT_PORT.get());
                        output.accept(CMItems.ITEM_OUTPUT_PORT.get());
                        output.accept(CMItems.ENERGY_PORT.get());
                    })
                    .build());

    private CMCreativeTab() {
    }
}
