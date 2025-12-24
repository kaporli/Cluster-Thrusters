package com.relicskeybind.mixin;

import com.relicskeybind.ResearchKeybind;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.Screen;
import org.lwjgl.glfw.GLFW;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Redirect;

@Mixin(Screen.class)
public class RelicsKeybindShiftRedirectMixin {
    @Redirect(
        method = "hasShiftDown",
        at = @At(value = "INVOKE", target = "Lorg/lwjgl/glfw/GLFW;glfwGetKey(JI)I", remap = false)
    )
    private int relicskeybind$useCustomKey(long window, int key) {
        // Use our keybinding instead of Shift
        int customKey = ResearchKeybind.RESEARCH_KEY.getKey().getValue();
        return org.lwjgl.glfw.GLFW.glfwGetKey(window, customKey);
    }
}
