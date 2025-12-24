package com.relicskeybind.mixin;

import com.relicskeybind.ResearchKeybind;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.Screen;
import org.lwjgl.glfw.GLFW;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Redirect;
import it.hurts.sskirillss.relics.items.relics.base.RelicItem;
import it.hurts.sskirillss.relics.client.handlers.DescriptionHandler;
import it.hurts.sskirillss.relics.client.screen.description.misc.DescriptionTextures;

@Mixin({RelicItem.class, DescriptionHandler.class, DescriptionTextures.class})
public class RelicsKeybindResearchRedirectMixin {
    @Redirect(
        method = "*",
        at = @At(value = "INVOKE", target = "Lnet/minecraft/client/gui/screens/Screen;hasShiftDown()Z"),
        require = 0,
        remap = true
    )
    private static boolean relicskeybind$useKeybindInsteadOfShift() {
        long window = Minecraft.getInstance().getWindow().getWindow();
        int customKey = ResearchKeybind.RESEARCH_KEY.getKey().getValue();
        return org.lwjgl.glfw.GLFW.glfwGetKey(window, customKey) == GLFW.GLFW_PRESS;
    }
}
