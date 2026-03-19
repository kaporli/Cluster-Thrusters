package com.relicscompatkeybind.mixin;

import it.hurts.sskirillss.relics.init.HotkeyRegistry;
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
public class RARCompatTooltipMixin {
    @Inject(method = "onTooltip", at = @At("RETURN"), remap = false)
    private static void relicscompatkeybind$fixTooltip(ItemTooltipEvent event, CallbackInfo ci) {
        String keyName = HotkeyRegistry.RESEARCH_RELIC.getTranslatedKeyMessage().getString();
        List<Component> tooltip = event.getToolTip();
        for (int i = 0; i < tooltip.size(); i++) {
            Component comp = tooltip.get(i);
            String str = comp.getString();
            if (str.contains("[Shift]")) {
                tooltip.set(i, Component.literal(str.replace("[Shift]", "[" + keyName + "]")).withStyle(comp.getStyle()));
            }
        }
    }
}
