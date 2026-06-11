package com.compositemachines.client;

import com.compositemachines.CompositeMachinesMod;
import com.compositemachines.menu.SmelterMenu;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.screens.inventory.AbstractContainerScreen;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Inventory;

public class SmelterScreen extends AbstractContainerScreen<SmelterMenu> {
    private static final ResourceLocation TEXTURE =
            new ResourceLocation(CompositeMachinesMod.MODID, "textures/gui/smelter.png");

    private static final int ENERGY_X = 8;
    private static final int ENERGY_Y = 17;
    private static final int ENERGY_W = 12;
    private static final int ENERGY_H = 52;
    private static final int ARROW_X = 84;
    private static final int ARROW_Y = 43;
    private static final int ARROW_W = 22;
    private static final int ARROW_H = 15;

    public SmelterScreen(SmelterMenu menu, Inventory playerInventory, Component title) {
        super(menu, playerInventory, title);
        this.imageHeight = 166;
        this.inventoryLabelY = this.imageHeight - 94;
    }

    @Override
    protected void renderBg(GuiGraphics graphics, float partialTick, int mouseX, int mouseY) {
        graphics.blit(TEXTURE, leftPos, topPos, 0, 0, imageWidth, imageHeight);

        // Energy gauge fill (bottom up)
        int capacity = menu.getEnergyCapacity();
        if (capacity > 0) {
            int filled = (int) ((long) ENERGY_H * menu.getEnergy() / capacity);
            if (filled > 0) {
                graphics.fillGradient(
                        leftPos + ENERGY_X, topPos + ENERGY_Y + (ENERGY_H - filled),
                        leftPos + ENERGY_X + ENERGY_W, topPos + ENERGY_Y + ENERGY_H,
                        0xFF66E07A, 0xFF1F8A33);
            }
        }

        // Progress arrow fill
        int ticksPerOp = menu.getTicksPerOp();
        if (ticksPerOp > 0 && menu.getProgress() > 0) {
            int w = Math.min(ARROW_W, ARROW_W * menu.getProgress() / ticksPerOp);
            graphics.blit(TEXTURE, leftPos + ARROW_X, topPos + ARROW_Y, 176, 0, w, ARROW_H);
        }
    }

    @Override
    public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick) {
        renderBackground(graphics);
        super.render(graphics, mouseX, mouseY, partialTick);
        renderTooltip(graphics, mouseX, mouseY);

        if (isHovering(ENERGY_X - 1, ENERGY_Y - 1, ENERGY_W + 2, ENERGY_H + 2, mouseX, mouseY)) {
            graphics.renderTooltip(font, Component.literal(
                    String.format("%,d / %,d FE", menu.getEnergy(), menu.getEnergyCapacity())),
                    mouseX, mouseY);
        }
        if (isHovering(ARROW_X, ARROW_Y, ARROW_W, ARROW_H, mouseX, mouseY)) {
            graphics.renderTooltip(font, Component.literal(
                    menu.getActiveOps() + " / " + menu.getMaxOps() + " operations"),
                    mouseX, mouseY);
        }
    }

    @Override
    protected void renderLabels(GuiGraphics graphics, int mouseX, int mouseY) {
        super.renderLabels(graphics, mouseX, mouseY);
        String ops = menu.getActiveOps() + "/" + menu.getMaxOps();
        graphics.drawString(font, ops, 95 - font.width(ops) / 2, 62, 0x404040, false);
    }
}
