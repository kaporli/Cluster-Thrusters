package com.compositemachines.block;

import com.compositemachines.blockentity.CauldronUnitBlockEntity;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.BlockGetter;
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

    @Nullable
    @Override
    public BlockEntity newBlockEntity(BlockPos pos, BlockState state) {
        return new CauldronUnitBlockEntity(pos, state);
    }
}
