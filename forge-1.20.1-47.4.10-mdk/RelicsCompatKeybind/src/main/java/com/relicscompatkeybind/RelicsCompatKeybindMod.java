package com.relicscompatkeybind;

import net.minecraftforge.fml.common.Mod;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@Mod(RelicsCompatKeybindMod.MODID)
public class RelicsCompatKeybindMod {
    public static final String MODID = "relicscompatkeybind";
    public static final Logger LOGGER = LogManager.getLogger();

    public RelicsCompatKeybindMod() {
        LOGGER.info("Relics Compat Keybind loaded - fixing tooltip display for compat mods");
    }
}
