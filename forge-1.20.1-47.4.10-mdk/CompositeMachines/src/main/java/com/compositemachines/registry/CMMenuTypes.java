package com.compositemachines.registry;

import com.compositemachines.CompositeMachinesMod;
import com.compositemachines.menu.SmelterMenu;
import net.minecraft.world.inventory.MenuType;
import net.minecraftforge.common.extensions.IForgeMenuType;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;

public final class CMMenuTypes {
    public static final DeferredRegister<MenuType<?>> MENUS =
            DeferredRegister.create(ForgeRegistries.MENU_TYPES, CompositeMachinesMod.MODID);

    public static final RegistryObject<MenuType<SmelterMenu>> SMELTER =
            MENUS.register("smelter", () -> IForgeMenuType.create(SmelterMenu::fromNetwork));

    private CMMenuTypes() {
    }
}
