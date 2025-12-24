package com.relicskeybind.mixin;

import it.hurts.sskirillss.relics.items.relics.base.IRelicItem;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.contents.TranslatableContents;
import it.hurts.sskirillss.relics.items.relics.base.IRelicItem;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import java.util.List;
import javax.annotation.Nullable;
import com.relicskeybind.ResearchKeybind;

@Mixin(Item.class)
public class RelicsKeybindItemMixin {
    @Inject(method = "appendHoverText", at = @At("TAIL"))
    private void relicskeybind$replaceShiftTooltip(ItemStack stack, @Nullable Level level, List<Component> tooltip, TooltipFlag flag, CallbackInfo ci) {
        if (!(stack.getItem() instanceof IRelicItem)) return;
        String keyName = ResearchKeybind.RESEARCH_KEY.getTranslatedKeyMessage().getString();
        for (int i = 0; i < tooltip.size(); i++) {
            Component comp = tooltip.get(i);
            if (comp.getContents() instanceof TranslatableContents tc && tc.getKey().equals("tooltip.relics.researching.info")) {
                tooltip.set(i, Component.literal("Hold [" + keyName + "] to research..."));
            }
        }
    }
}
