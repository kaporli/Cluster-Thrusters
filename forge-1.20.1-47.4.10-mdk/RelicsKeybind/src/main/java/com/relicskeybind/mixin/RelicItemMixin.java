package com.relicskeybind.mixin;

import com.mojang.blaze3d.platform.InputConstants;
import it.hurts.sskirillss.relics.items.relics.base.RelicItem;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.Screen;
import org.lwjgl.glfw.GLFW;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Redirect;

/**
 * Mixin to redirect Shift key checks to W key in RelicItem class
 */
@Mixin(value = RelicItem.class, remap = false)
public class RelicItemMixin {

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
}
