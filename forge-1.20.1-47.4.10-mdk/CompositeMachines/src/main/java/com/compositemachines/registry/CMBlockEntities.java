package com.compositemachines.registry;

import com.compositemachines.CompositeMachinesMod;
import com.compositemachines.blockentity.PortBlockEntity;
import com.compositemachines.blockentity.SmelterCoreBlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;

public final class CMBlockEntities {
    public static final DeferredRegister<BlockEntityType<?>> BLOCK_ENTITIES =
            DeferredRegister.create(ForgeRegistries.BLOCK_ENTITY_TYPES, CompositeMachinesMod.MODID);

    public static final RegistryObject<BlockEntityType<SmelterCoreBlockEntity>> SMELTER_CORE =
            BLOCK_ENTITIES.register("smelter_core", () -> BlockEntityType.Builder
                    .of(SmelterCoreBlockEntity::new, CMBlocks.SMELTER_CORE.get())
                    .build(null));

    public static final RegistryObject<BlockEntityType<PortBlockEntity>> PORT =
            BLOCK_ENTITIES.register("port", () -> BlockEntityType.Builder
                    .of(PortBlockEntity::new,
                            CMBlocks.ITEM_INPUT_PORT.get(),
                            CMBlocks.ITEM_OUTPUT_PORT.get(),
                            CMBlocks.ENERGY_PORT.get())
                    .build(null));

    private CMBlockEntities() {
    }
}
