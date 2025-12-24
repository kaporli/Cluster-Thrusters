package com.relicskeybind;

import com.mojang.blaze3d.platform.InputConstants;
import net.minecraft.client.KeyMapping;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.client.event.RegisterKeyMappingsEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod;
import org.lwjgl.glfw.GLFW;

@Mod.EventBusSubscriber(modid = RelicsKeybindMod.MODID, value = Dist.CLIENT, bus = Mod.EventBusSubscriber.Bus.MOD)
public class ResearchKeybind {
    public static KeyMapping RESEARCH_KEY = new KeyMapping(
            "key.relicskeybind.research", // translation key
            InputConstants.Type.KEYSYM,
            GLFW.GLFW_KEY_W,
            "key.categories.inventory"
    );

    @SubscribeEvent
    public static void registerKeyMappings(RegisterKeyMappingsEvent event) {
        event.register(RESEARCH_KEY);
    }
}
