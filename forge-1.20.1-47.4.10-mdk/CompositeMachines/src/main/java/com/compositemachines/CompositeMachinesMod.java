package com.compositemachines;

import com.compositemachines.registry.CMBlockEntities;
import com.compositemachines.registry.CMBlocks;
import com.compositemachines.registry.CMCreativeTab;
import com.compositemachines.registry.CMItems;
import com.compositemachines.registry.CMMenuTypes;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Mod(CompositeMachinesMod.MODID)
public class CompositeMachinesMod {
    public static final String MODID = "compositemachines";
    public static final Logger LOGGER = LoggerFactory.getLogger("CompositeMachines");

    public CompositeMachinesMod() {
        IEventBus modBus = FMLJavaModLoadingContext.get().getModEventBus();
        CMBlocks.BLOCKS.register(modBus);
        CMItems.ITEMS.register(modBus);
        CMBlockEntities.BLOCK_ENTITIES.register(modBus);
        CMMenuTypes.MENUS.register(modBus);
        CMCreativeTab.TABS.register(modBus);
        LOGGER.info("Composite Machines loaded");
    }
}
