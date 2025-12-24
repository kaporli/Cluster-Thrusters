package com.relicskeybind.mixin;

import com.mojang.blaze3d.platform.InputConstants;
import it.hurts.sskirillss.relics.client.handlers.DescriptionHandler;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;
import org.lwjgl.glfw.GLFW;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Redirect;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import java.util.List;

/**
 * Mixin to redirect Shift key checks to W key in DescriptionHandler class
 */
@Mixin(value = DescriptionHandler.class, remap = false)
public class DescriptionHandlerMixin {
    @Redirect(
        method = "*",
        at = @At(value = "INVOKE", target = "Lnet/minecraft/client/gui/screens/Screen;hasShiftDown()Z"),
        require = 0,
        remap = true
    )
    private static boolean relicskeybind$useWKeyInsteadOfShift() {
        long window = Minecraft.getInstance().getWindow().getWindow();
        return InputConstants.isKeyDown(window, GLFW.GLFW_KEY_W);
    }

    @Inject(method = "addDescription", at = @At("RETURN"), remap = false)
    private static void relicskeybind$fixTooltip(List<Component> tooltip, CallbackInfo ci) {
        for (int i = 0; i < tooltip.size(); i++) {
            Component comp = tooltip.get(i);
            String str = comp.getString();
            if (str.contains("[Shift]")) {
                tooltip.set(i, Component.literal(str.replace("[Shift]", "[W]")));
            }
        }
    }
}
