package com.compositemachines.block;

import net.minecraft.core.BlockPos;
import net.minecraft.core.particles.ParticleTypes;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.sounds.SoundSource;
import net.minecraft.util.RandomSource;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.StateDefinition;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import net.minecraft.world.level.block.state.properties.BooleanProperty;
import net.minecraft.world.phys.shapes.CollisionContext;
import net.minecraft.world.phys.shapes.Shapes;
import net.minecraft.world.phys.shapes.VoxelShape;

/**
 * The bottom block of a smelting column. The core flips {@code LIT} while its
 * column is actively smelting; lit heaters glow and lick flames up around the
 * Cauldron Unit that sits directly above them.
 */
public class HeatingUnitBlock extends Block {
    public static final BooleanProperty LIT = BlockStateProperties.LIT;
    private static final VoxelShape SHAPE = Shapes.or(
            box(0, 0, 0, 16, 10, 16),
            box(2, 10, 2, 14, 13, 14));

    private final HeaterTier tier;

    public HeatingUnitBlock(Properties properties, HeaterTier tier) {
        super(properties);
        this.tier = tier;
        registerDefaultState(stateDefinition.any().setValue(LIT, false));
    }

    public HeaterTier getTier() {
        return tier;
    }

    @Override
    protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> builder) {
        builder.add(LIT);
    }

    @Override
    @SuppressWarnings("deprecation")
    public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) {
        return SHAPE;
    }

    @Override
    public void animateTick(BlockState state, Level level, BlockPos pos, RandomSource random) {
        if (!state.getValue(LIT)) {
            return;
        }
        int particleBoost = Math.min(3, tier.speedMultiplier() / 2);
        // flames licking up around the cauldron above
        for (int i = 0; i < 2 + particleBoost; i++) {
            double angle = random.nextDouble() * Math.PI * 2;
            double radius = 0.35 + random.nextDouble() * 0.2;
            double x = pos.getX() + 0.5 + Math.cos(angle) * radius;
            double z = pos.getZ() + 0.5 + Math.sin(angle) * radius;
            double y = pos.getY() + 0.8 + random.nextDouble() * 0.9;
            level.addParticle(ParticleTypes.FLAME, x, y, z, 0.0, 0.02, 0.0);
            if (random.nextInt(2) == 0) {
                level.addParticle(ParticleTypes.SMOKE, x, y + 0.2, z, 0.0, 0.03, 0.0);
            }
        }
        if (random.nextInt(8) == 0) {
            level.addParticle(ParticleTypes.LAVA,
                    pos.getX() + 0.5, pos.getY() + 0.85, pos.getZ() + 0.5, 0.0, 0.0, 0.0);
        }
        if (random.nextInt(12) == 0) {
            level.playLocalSound(pos.getX() + 0.5, pos.getY() + 0.5, pos.getZ() + 0.5,
                    SoundEvents.BLASTFURNACE_FIRE_CRACKLE, SoundSource.BLOCKS,
                    0.8F, 0.8F + random.nextFloat() * 0.4F, false);
        }
    }
}
