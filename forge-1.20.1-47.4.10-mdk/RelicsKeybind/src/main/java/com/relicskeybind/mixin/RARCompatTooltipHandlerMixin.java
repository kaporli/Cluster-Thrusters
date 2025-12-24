package com.relicskeybind.mixin;

import com.relicskeybind.ResearchKeybind;
import net.minecraft.network.chat.Component;
import net.minecraftforge.event.entity.player.ItemTooltipEvent;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Pseudo;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import java.util.List;

@Pseudo
@Mixin(targets = "it.hurts.octostudios.rarcompat.handlers.TooltipHandler")
public class RARCompatTooltipHandlerMixin {
    @Inject(method = "onTooltip", at = @At("RETURN"), remap = false)
    private static void relicskeybind$replaceShiftTooltip(ItemTooltipEvent event, CallbackInfo ci) {
        List<Component> tooltip = event.getToolTip();
        String keyName = ResearchKeybind.RESEARCH_KEY.getTranslatedKeyMessage().getString();
        for (int i = 0; i < tooltip.size(); i++) {
            Component comp = tooltip.get(i);
            String str = comp.getString();
            if (str.equals("Hold [Shift] to research...")) {
                tooltip.set(i, Component.literal("Hold [" + keyName + "] to research...").withStyle(comp.getStyle()));
            }
        }
    }
}
