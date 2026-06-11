package com.compositemachines.block;

import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.BooleanProperty;

/**
 * Horizontal overhead-rail connections shared by {@link OverheadRailBlock} and
 * {@link RailHoistBlock}.
 */
public interface RailConnectable {
    BooleanProperty NORTH = net.minecraft.world.level.block.state.properties.BlockStateProperties.NORTH;
    BooleanProperty SOUTH = net.minecraft.world.level.block.state.properties.BlockStateProperties.SOUTH;
    BooleanProperty EAST = net.minecraft.world.level.block.state.properties.BlockStateProperties.EAST;
    BooleanProperty WEST = net.minecraft.world.level.block.state.properties.BlockStateProperties.WEST;

    static boolean connectsTo(BlockState state) {
        Block block = state.getBlock();
        return block instanceof RailConnectable || block instanceof PortBlock port && port.getType().isItem();
    }

    static BlockState computeConnections(Level level, BlockPos pos, BlockState current) {
        BlockState state = current;
        for (Direction dir : Direction.Plane.HORIZONTAL) {
            BooleanProperty prop = propertyFor(dir);
            boolean connected = connectsTo(level.getBlockState(pos.relative(dir)));
            if (state.getValue(prop) != connected) {
                state = state.setValue(prop, connected);
            }
        }
        return state;
    }

    static void refreshConnections(Level level, BlockPos pos) {
        BlockState state = level.getBlockState(pos);
        if (!(state.getBlock() instanceof RailConnectable)) {
            return;
        }
        BlockState updated = computeConnections(level, pos, state);
        if (updated != state) {
            level.setBlock(pos, updated, Block.UPDATE_CLIENTS);
        }
        for (Direction dir : Direction.Plane.HORIZONTAL) {
            BlockPos neighbor = pos.relative(dir);
            BlockState neighborState = level.getBlockState(neighbor);
            if (neighborState.getBlock() instanceof RailConnectable) {
                BlockState neighborUpdated = computeConnections(level, neighbor, neighborState);
                if (neighborUpdated != neighborState) {
                    level.setBlock(neighbor, neighborUpdated, Block.UPDATE_CLIENTS);
                }
            }
        }
    }

    static BooleanProperty propertyFor(Direction dir) {
        return switch (dir) {
            case NORTH -> NORTH;
            case SOUTH -> SOUTH;
            case EAST -> EAST;
            case WEST -> WEST;
            default -> throw new IllegalArgumentException("Not horizontal: " + dir);
        };
    }
}
