package com.compositemachines.client;

import com.compositemachines.blockentity.CauldronUnitBlockEntity;
import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.math.Axis;
import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.blockentity.BlockEntityRenderer;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.world.item.ItemDisplayContext;
import net.minecraft.world.item.ItemStack;

/**
 * Draws the item being smelted floating and spinning between the holder's pillars,
 * with a slow bob so it reads as "cooking" from any side.
 */
public class CauldronUnitRenderer implements BlockEntityRenderer<CauldronUnitBlockEntity> {

    public CauldronUnitRenderer(BlockEntityRendererProvider.Context context) {
    }

    @Override
    public void render(CauldronUnitBlockEntity be, float partialTick, PoseStack poseStack,
                       MultiBufferSource buffers, int packedLight, int packedOverlay) {
        ItemStack stack = be.getDisplayedItem();
        if (stack.isEmpty() || be.getLevel() == null) {
            return;
        }
        float time = be.getLevel().getGameTime() + partialTick;
        poseStack.pushPose();
        poseStack.translate(0.5, 0.45 + Math.sin(time * 0.08) * 0.04, 0.5);
        poseStack.mulPose(Axis.YP.rotationDegrees(time * 2.0F));
        poseStack.scale(0.55F, 0.55F, 0.55F);
        Minecraft.getInstance().getItemRenderer().renderStatic(stack, ItemDisplayContext.GROUND,
                packedLight, packedOverlay, poseStack, buffers, be.getLevel(), 0);
        poseStack.popPose();
    }
}
