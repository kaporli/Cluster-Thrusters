package dev.patch.mekanismfix.mixin;

import mekanism.common.tile.transmitter.TileEntityTransmitter;
import net.minecraftforge.common.extensions.IForgeBlockEntity;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(value = TileEntityTransmitter.class, remap = false)
public class TileEntityTransmitterMixin {

    // Fired when loading from disk (server-side chunk load from NBT)
    @Inject(method = "m_142466_(Lnet/minecraft/nbt/CompoundTag;)V", at = @At("TAIL"), remap = false)
    private void onLoad(CallbackInfo ci) {
        ((IForgeBlockEntity) (Object) this).requestModelDataUpdate();
    }

    // Fired when client receives initial chunk data from server (network sync)
    @Inject(method = "handleUpdateTag(Lnet/minecraft/nbt/CompoundTag;)V", at = @At("TAIL"), remap = false)
    private void onHandleUpdateTag(CallbackInfo ci) {
        ((IForgeBlockEntity) (Object) this).requestModelDataUpdate();
    }
}
