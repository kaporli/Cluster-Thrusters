package com.compositemachines.registry;

import com.compositemachines.CompositeMachinesMod;
import com.compositemachines.block.CauldronUnitBlock;
import com.compositemachines.block.ChimneyBlock;
import com.compositemachines.block.HeaterTier;
import com.compositemachines.block.HeatingUnitBlock;
import com.compositemachines.block.PortBlock;
import com.compositemachines.block.PortType;
import com.compositemachines.block.SmelterCoreBlock;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.SoundType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;

public final class CMBlocks {
    public static final DeferredRegister<Block> BLOCKS =
            DeferredRegister.create(ForgeRegistries.BLOCKS, CompositeMachinesMod.MODID);

    public static final RegistryObject<Block> SMELTER_CORE = BLOCKS.register("smelter_core",
            () -> new SmelterCoreBlock(steel()
                    .lightLevel(state -> state.getValue(SmelterCoreBlock.LIT) ? 13
                            : state.getValue(SmelterCoreBlock.FORMED) ? 7 : 0)));

    public static final RegistryObject<Block> HEATING_UNIT = registerHeater("heating_unit", HeaterTier.BASIC);
    public static final RegistryObject<Block> HEATING_UNIT_ADVANCED =
            registerHeater("heating_unit_advanced", HeaterTier.ADVANCED);
    public static final RegistryObject<Block> HEATING_UNIT_ELITE =
            registerHeater("heating_unit_elite", HeaterTier.ELITE);
    public static final RegistryObject<Block> HEATING_UNIT_ULTIMATE =
            registerHeater("heating_unit_ultimate", HeaterTier.ULTIMATE);

    public static final RegistryObject<Block> CAULDRON_UNIT = BLOCKS.register("cauldron_unit",
            () -> new CauldronUnitBlock(column().noOcclusion()));

    public static final RegistryObject<Block> CHIMNEY = BLOCKS.register("chimney",
            () -> new ChimneyBlock(column().noOcclusion()
                    .lightLevel(state -> state.getValue(ChimneyBlock.LIT) ? 5 : 0)));

    public static final RegistryObject<Block> ITEM_INPUT_PORT = BLOCKS.register("item_input_port",
            () -> new PortBlock(steel().noOcclusion(), PortType.ITEM_INPUT));

    public static final RegistryObject<Block> ITEM_OUTPUT_PORT = BLOCKS.register("item_output_port",
            () -> new PortBlock(steel().noOcclusion(), PortType.ITEM_OUTPUT));

    public static final RegistryObject<Block> ENERGY_PORT = BLOCKS.register("energy_port",
            () -> new PortBlock(steel(), PortType.ENERGY));

    private static RegistryObject<Block> registerHeater(String name, HeaterTier tier) {
        return BLOCKS.register(name, () -> new HeatingUnitBlock(
                column().noOcclusion().lightLevel(state -> state.getValue(HeatingUnitBlock.LIT) ? 13 : 3),
                tier));
    }

    private static BlockBehaviour.Properties steel() {
        return BlockBehaviour.Properties.of()
                .strength(3.5F, 9.0F)
                .requiresCorrectToolForDrops()
                .sound(SoundType.METAL);
    }

    private static BlockBehaviour.Properties column() {
        return steel();
    }

    private CMBlocks() {
    }
}
