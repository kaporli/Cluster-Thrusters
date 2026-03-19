package com.relicskeybind.mixin;

import com.mojang.blaze3d.platform.InputConstants;
import com.relicskeybind.ResearchKeybind;
import it.hurts.sskirillss.relics.items.relics.base.RelicItem;
import net.minecraft.world.item.ItemStack;
import net.minecraft.network.chat.Component;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.ModifyVariable;
import org.spongepowered.asm.mixin.injection.ModifyArg;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

import java.util.List;

@Mixin(RelicItem.class)
public class RelicsTooltipFixMixin {
    @Inject(method = "appendHoverText", at = @At("RETURN"))
    private void relicskeybind$fixTooltip(ItemStack stack, net.minecraft.world.level.Level level, List<Component> tooltip, net.minecraft.world.item.TooltipFlag flag, CallbackInfo ci) {
        String keyName = ResearchKeybind.RESEARCH_KEY.getTranslatedKeyMessage().getString();
        for (int i = 0; i < tooltip.size(); i++) {
            Component comp = tooltip.get(i);
            String str = comp.getString();
            if (str.contains("[Shift]")) {
                tooltip.set(i, Component.literal(str.replace("[Shift]", "[" + keyName + "]")));
            }
        }
    }
}
