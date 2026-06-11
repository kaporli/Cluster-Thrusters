package com.compositemachines.client;

import com.compositemachines.blockentity.CauldronUnitBlockEntity;
import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.math.Axis;
import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.LightTexture;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.blockentity.BlockEntityRenderer;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.world.item.ItemDisplayContext;
import net.minecraft.world.item.ItemStack;

/**
 * Draws the item being smelted inside the open holder frame as a squashed,
 * slowly spinning stack at full brightness so it reads as liquefying from any side.
 * Molten glow is handled by {@code CauldronUnitBlock} particles — no custom
 * geometry here, which keeps Xenon/Oculus/Sodium compatible.
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
        float bob = (float) Math.sin(time * 0.08) * 0.04F;

        poseStack.pushPose();
        poseStack.translate(0.5, 0.42 + bob, 0.5);
        poseStack.mulPose(Axis.YP.rotationDegrees(time * 2.0F));
        poseStack.scale(0.55F, 0.35F, 0.55F);
        Minecraft.getInstance().getItemRenderer().renderStatic(stack, ItemDisplayContext.GROUND,
                LightTexture.FULL_BRIGHT, packedOverlay, poseStack, buffers, be.getLevel(), 0);
        poseStack.popPose();
    }
}
