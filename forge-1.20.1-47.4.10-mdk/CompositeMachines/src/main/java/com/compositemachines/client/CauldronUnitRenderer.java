package com.compositemachines.client;

import com.compositemachines.blockentity.CauldronUnitBlockEntity;
import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import com.mojang.math.Axis;
import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.LightTexture;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.blockentity.BlockEntityRenderer;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.world.item.ItemDisplayContext;
import net.minecraft.world.item.ItemStack;
import org.joml.Matrix4f;

/**
 * Draws the item being smelted inside the open holder frame: a molten glow pool
 * beneath a squashed, slowly spinning item so it reads as liquefying from any side.
 */
public class CauldronUnitRenderer implements BlockEntityRenderer<CauldronUnitBlockEntity> {
    private static final int GLOW_COLOR = 0xCCFF6600;

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
        renderMoltenPool(poseStack, buffers, bob);
        poseStack.translate(0.5, 0.42 + bob, 0.5);
        poseStack.mulPose(Axis.YP.rotationDegrees(time * 2.0F));
        poseStack.scale(0.55F, 0.35F, 0.55F);
        Minecraft.getInstance().getItemRenderer().renderStatic(stack, ItemDisplayContext.GROUND,
                LightTexture.FULL_BRIGHT, packedOverlay, poseStack, buffers, be.getLevel(), 0);
        poseStack.popPose();
    }

    private static void renderMoltenPool(PoseStack poseStack, MultiBufferSource buffers, float bob) {
        VertexConsumer consumer = buffers.getBuffer(RenderType.translucent());
        Matrix4f matrix = poseStack.last().pose();
        float y = 0.34F + bob * 0.5F;
        float inset = 0.22F;
        float r = ((GLOW_COLOR >> 16) & 0xFF) / 255.0F;
        float g = ((GLOW_COLOR >> 8) & 0xFF) / 255.0F;
        float b = (GLOW_COLOR & 0xFF) / 255.0F;
        float a = ((GLOW_COLOR >> 24) & 0xFF) / 255.0F;
        addQuad(consumer, matrix, inset, y, inset, 1.0F - inset, y, 1.0F - inset, r, g, b, a);
    }

    private static void addQuad(VertexConsumer consumer, Matrix4f matrix,
                                float x1, float y1, float z1,
                                float x2, float y2, float z2,
                                float r, float g, float b, float a) {
        consumer.vertex(matrix, x1, y1, z1).color(r, g, b, a).uv(0, 0).uv2(LightTexture.FULL_BRIGHT).endVertex();
        consumer.vertex(matrix, x2, y1, z1).color(r, g, b, a).uv(1, 0).uv2(LightTexture.FULL_BRIGHT).endVertex();
        consumer.vertex(matrix, x2, y2, z2).color(r, g, b, a).uv(1, 1).uv2(LightTexture.FULL_BRIGHT).endVertex();
        consumer.vertex(matrix, x1, y2, z2).color(r, g, b, a).uv(0, 1).uv2(LightTexture.FULL_BRIGHT).endVertex();
    }
}
