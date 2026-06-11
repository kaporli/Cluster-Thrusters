package com.compositemachines.block;

import com.compositemachines.blockentity.CauldronUnitBlockEntity;
import net.minecraft.core.BlockPos;
import net.minecraft.core.particles.ParticleTypes;
import net.minecraft.util.RandomSource;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.EntityBlock;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.phys.shapes.CollisionContext;
import net.minecraft.world.phys.shapes.Shapes;
import net.minecraft.world.phys.shapes.VoxelShape;
import org.jetbrains.annotations.Nullable;

/**
 * The middle block of a smelting column: an open holder/crucible frame sitting on a
 * Heating Unit. Its block entity displays the item currently being smelted, visible
 * from all four sides between the corner pillars.
 */
public class CauldronUnitBlock extends Block implements EntityBlock {
    private static final VoxelShape SHAPE = Shapes.or(
            box(1, 0, 1, 15, 3, 15),
            box(0, 0, 0, 3, 16, 3),
            box(13, 0, 0, 16, 16, 3),
            box(0, 0, 13, 3, 16, 16),
            box(13, 0, 13, 16, 16, 16));

    public CauldronUnitBlock(Properties properties) {
        super(properties);
    }

    @Override
    @SuppressWarnings("deprecation")
    public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) {
        return SHAPE;
    }

    @Override
    public void animateTick(BlockState state, Level level, BlockPos pos, RandomSource random) {
        if (!(level.getBlockEntity(pos) instanceof CauldronUnitBlockEntity cauldron)
                || cauldron.getDisplayedItem().isEmpty()) {
            return;
        }
        double x = pos.getX() + 0.5 + (random.nextDouble() - 0.5) * 0.35;
        double z = pos.getZ() + 0.5 + (random.nextDouble() - 0.5) * 0.35;
        double y = pos.getY() + 0.35 + random.nextDouble() * 0.25;
        level.addParticle(ParticleTypes.LAVA, x, y, z, 0.0, 0.0, 0.0);
        if (random.nextInt(3) == 0) {
            level.addParticle(ParticleTypes.FLAME, x, y + 0.1, z, 0.0, 0.01, 0.0);
        }
        if (random.nextInt(5) == 0) {
            level.addParticle(ParticleTypes.SMOKE, x, y + 0.15, z, 0.0, 0.02, 0.0);
        }
    }

    @Nullable
    @Override
    public BlockEntity newBlockEntity(BlockPos pos, BlockState state) {
        return new CauldronUnitBlockEntity(pos, state);
    }
}
