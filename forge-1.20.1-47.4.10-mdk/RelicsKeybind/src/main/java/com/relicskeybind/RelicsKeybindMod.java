package com.relicskeybind;

import net.minecraftforge.fml.common.Mod;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@Mod(RelicsKeybindMod.MODID)
public class RelicsKeybindMod {
    public static final String MODID = "relicskeybind";
    public static final Logger LOGGER = LogManager.getLogger();

    public RelicsKeybindMod() {
        LOGGER.info("Relics Keybind loaded - Research key changed from Shift to W");
    }
}
