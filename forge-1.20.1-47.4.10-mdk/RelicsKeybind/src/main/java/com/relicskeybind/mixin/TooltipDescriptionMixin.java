package com.relicskeybind.mixin;

import com.mojang.blaze3d.platform.InputConstants;
import com.relicskeybind.ResearchKeybind;
import it.hurts.sskirillss.relics.client.screen.description.misc.DescriptionTextures;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.Screen;
import org.lwjgl.glfw.GLFW;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Redirect;

/**
 * Mixin to redirect Shift key checks to W key in tooltip description classes
 */
@Mixin(value = DescriptionTextures.class, remap = false)
public class TooltipDescriptionMixin {

    @Redirect(
        method = "*",
        at = @At(value = "INVOKE", target = "Lnet/minecraft/client/gui/screens/Screen;hasShiftDown()Z"),
        require = 0,
        remap = true
    )
    private static boolean relicskeybind$useWKeyInsteadOfShift() {
        long window = Minecraft.getInstance().getWindow().getWindow();
        int customKey = ResearchKeybind.RESEARCH_KEY.getKey().getValue();
        return org.lwjgl.glfw.GLFW.glfwGetKey(window, customKey) == GLFW.GLFW_PRESS;
    }
}
