package com.trashslotquarkcompat;

import net.blay09.mods.trashslot.api.TrashSlotAPI;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.violetmoon.quark.addons.oddities.client.screen.BackpackInventoryScreen;

@Mod(TrashSlotQuarkCompatMod.MODID)
public class TrashSlotQuarkCompatMod {
    public static final String MODID = "trashslotquarkcompat";
    public static final Logger LOGGER = LogManager.getLogger();

    public TrashSlotQuarkCompatMod() {
        FMLJavaModLoadingContext.get().getModEventBus().addListener(this::clientSetup);
    }

    private void clientSetup(FMLClientSetupEvent event) {
        event.enqueueWork(() -> {
            TrashSlotAPI.registerSimpleLayout(BackpackInventoryScreen.class)
                    .enableDefaultCollision()
                    .enableDefaultSnaps()
                    .setEnabledByDefault();
            LOGGER.info("Registered TrashSlot layout for Quark backpack screen");
        });
    }
}
