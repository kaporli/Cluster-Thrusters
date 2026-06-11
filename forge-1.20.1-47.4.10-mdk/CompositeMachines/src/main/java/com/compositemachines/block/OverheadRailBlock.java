package com.compositemachines.block;

import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.StateDefinition;
import net.minecraft.world.phys.shapes.CollisionContext;
import net.minecraft.world.phys.shapes.Shapes;
import net.minecraft.world.phys.shapes.VoxelShape;

/**
 * Ceiling-mounted rail segment. Auto-connects horizontally to other rails, rail
 * hoists, and item ports on the same plane (Phase B will move items along it).
 */
public class OverheadRailBlock extends Block implements RailConnectable {
    private static final VoxelShape SHAPE = Shapes.or(
            box(4, 14, 4, 12, 16, 12),
            box(0, 15, 7, 16, 16, 9),
            box(7, 15, 0, 9, 16, 16));

    public OverheadRailBlock(Properties properties) {
        super(properties);
        registerDefaultState(stateDefinition.any()
                .setValue(NORTH, false)
                .setValue(SOUTH, false)
                .setValue(EAST, false)
                .setValue(WEST, false));
    }

    @Override
    protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> builder) {
        builder.add(NORTH, SOUTH, EAST, WEST);
    }

    @Override
    @SuppressWarnings("deprecation")
    public VoxelShape getCollisionShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) {
        return Shapes.empty();
    }

    @Override
    @SuppressWarnings("deprecation")
    public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) {
        VoxelShape shape = SHAPE;
        if (state.getValue(NORTH)) {
            shape = Shapes.or(shape, box(7, 15, 0, 9, 16, 4));
        }
        if (state.getValue(SOUTH)) {
            shape = Shapes.or(shape, box(7, 15, 12, 9, 16, 16));
        }
        if (state.getValue(WEST)) {
            shape = Shapes.or(shape, box(0, 15, 7, 4, 16, 9));
        }
        if (state.getValue(EAST)) {
            shape = Shapes.or(shape, box(12, 15, 7, 16, 16, 9));
        }
        return shape;
    }

    @Override
    public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean isMoving) {
        if (!oldState.is(state.getBlock())) {
            RailConnectable.refreshConnections(level, pos);
        }
    }

    @Override
    @SuppressWarnings("deprecation")
    public void neighborChanged(BlockState state, Level level, BlockPos pos, Block block, BlockPos fromPos,
                               boolean isMoving) {
        if (!level.isClientSide) {
            RailConnectable.refreshConnections(level, pos);
        }
    }

    @Override
    @SuppressWarnings("deprecation")
    public void onRemove(BlockState state, Level level, BlockPos pos, BlockState newState, boolean isMoving) {
        if (!state.is(newState.getBlock()) && !level.isClientSide) {
            for (Direction dir : Direction.Plane.HORIZONTAL) {
                BlockPos neighbor = pos.relative(dir);
                if (level.getBlockState(neighbor).getBlock() instanceof RailConnectable) {
                    RailConnectable.refreshConnections(level, neighbor);
                }
            }
        }
        super.onRemove(state, level, pos, newState, isMoving);
    }
}
