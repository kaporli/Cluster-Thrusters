package com.compositemachines.multiblock;

import com.compositemachines.CompositeMachinesMod;
import com.compositemachines.block.CauldronUnitBlock;
import com.compositemachines.block.ChimneyBlock;
import com.compositemachines.block.HeaterTier;
import com.compositemachines.block.HeatingUnitBlock;
import com.compositemachines.block.PortBlock;
import com.compositemachines.block.SmelterCoreBlock;
import com.compositemachines.blockentity.PortBlockEntity;
import com.compositemachines.blockentity.SmelterCoreBlockEntity;
import net.minecraft.ChatFormatting;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.tags.BlockTags;
import net.minecraft.tags.TagKey;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraftforge.registries.ForgeRegistries;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Validates a Composite Smelter: a hollow cuboid (3x3x3 .. 9x9x9, min height 5 in
 * practice) whose hull is made of blocks in the #compositemachines:smelter_wall tag
 * plus exactly one Smelter Core. The interior contains only air and complete
 * smelting columns — Heating Unit, Cauldron Unit directly above it, Chimney directly
 * above that. Each complete column is one parallel smelting operation.
 */
public final class SmelterFormationValidator {
    public static final TagKey<Block> SMELTER_WALL =
            BlockTags.create(new ResourceLocation(CompositeMachinesMod.MODID, "smelter_wall"));
    public static final int MIN_EDGE = 3;
    public static final int MAX_EDGE = 9;
    // From an interior cell, a wall must appear within this many steps along any axis.
    private static final int MAX_INTERIOR_WALK = MAX_EDGE - 2;

    private SmelterFormationValidator() {
    }

    public static FormationResult validate(Level level, BlockPos corePos) {
        BlockState coreState = level.getBlockState(corePos);
        if (!(coreState.getBlock() instanceof SmelterCoreBlock)) {
            return FormationResult.failure(error("Smelter Core is missing at " + format(corePos)));
        }
        Direction facing = coreState.getValue(SmelterCoreBlock.FACING);
        BlockPos seed = corePos.relative(facing.getOpposite());
        if (!isInterior(level.getBlockState(seed))) {
            return FormationResult.failure(error(
                    "The Smelter Core must face outward: the block behind it at " + format(seed)
                            + " must be interior space (air or column blocks)"));
        }

        // Walk from the seed along all six axes until a wall block is hit to find the bounds.
        int minX = 0, minY = 0, minZ = 0, maxX = 0, maxY = 0, maxZ = 0;
        for (Direction dir : Direction.values()) {
            BlockPos wall = findWall(level, seed, dir);
            if (wall == null) {
                BlockPos offender = firstNonInterior(level, seed, dir);
                if (offender != null) {
                    BlockState s = level.getBlockState(offender);
                    return FormationResult.failure(error("Invalid block " + name(s) + " at "
                            + format(offender) + " (walls must be Steel Casing, Structural Glass or ports)"));
                }
                return FormationResult.failure(error("No wall found within " + MAX_INTERIOR_WALK
                        + " blocks " + dir.getName() + " of the core (max size is "
                        + MAX_EDGE + "x" + MAX_EDGE + "x" + MAX_EDGE + ")"));
            }
            switch (dir) {
                case WEST -> minX = wall.getX();
                case EAST -> maxX = wall.getX();
                case DOWN -> minY = wall.getY();
                case UP -> maxY = wall.getY();
                case NORTH -> minZ = wall.getZ();
                case SOUTH -> maxZ = wall.getZ();
            }
        }
        BlockPos min = new BlockPos(minX, minY, minZ);
        BlockPos max = new BlockPos(maxX, maxY, maxZ);

        int sizeX = max.getX() - min.getX() + 1;
        int sizeY = max.getY() - min.getY() + 1;
        int sizeZ = max.getZ() - min.getZ() + 1;
        if (sizeX < MIN_EDGE || sizeY < MIN_EDGE || sizeZ < MIN_EDGE
                || sizeX > MAX_EDGE || sizeY > MAX_EDGE || sizeZ > MAX_EDGE) {
            return FormationResult.failure(error("Structure must be between 3x3x3 and 9x9x9, found "
                    + sizeX + "x" + sizeY + "x" + sizeZ));
        }

        // Validate every block of the cuboid: hull = wall tag or the single core,
        // interior = air or column blocks (heater / cauldron / chimney).
        List<BlockPos> ports = new ArrayList<>();
        List<BlockPos> heaters = new ArrayList<>();
        Set<BlockPos> cauldrons = new HashSet<>();
        Set<BlockPos> chimneys = new HashSet<>();
        boolean coreSeen = false;
        for (BlockPos p : BlockPos.betweenClosed(min, max)) {
            boolean hull = p.getX() == min.getX() || p.getX() == max.getX()
                    || p.getY() == min.getY() || p.getY() == max.getY()
                    || p.getZ() == min.getZ() || p.getZ() == max.getZ();
            BlockState state = level.getBlockState(p);
            if (hull) {
                if (state.getBlock() instanceof SmelterCoreBlock) {
                    if (!p.equals(corePos)) {
                        return FormationResult.failure(error(
                                "Only one Smelter Core is allowed; found another at " + format(p)));
                    }
                    coreSeen = true;
                } else if (state.is(SMELTER_WALL)) {
                    if (state.getBlock() instanceof PortBlock) {
                        ports.add(p.immutable());
                    }
                } else {
                    return FormationResult.failure(error("Invalid wall block " + name(state) + " at "
                            + format(p) + " (walls must be Steel Casing, Structural Glass or ports)"));
                }
            } else {
                Block block = state.getBlock();
                if (block instanceof HeatingUnitBlock) {
                    heaters.add(p.immutable());
                } else if (block instanceof CauldronUnitBlock) {
                    cauldrons.add(p.immutable());
                } else if (block instanceof ChimneyBlock) {
                    chimneys.add(p.immutable());
                } else if (!state.isAir()) {
                    return FormationResult.failure(error("The interior must contain only air and "
                            + "smelting columns; found " + name(state) + " at " + format(p)));
                }
            }
        }
        if (!coreSeen) {
            return FormationResult.failure(error("The Smelter Core must be part of the wall"));
        }

        // Assemble columns: every heater needs a cauldron directly above and a chimney
        // directly above that; every cauldron/chimney must belong to such a column.
        List<SmelterColumn> columns = new ArrayList<>();
        Set<BlockPos> usedCauldrons = new HashSet<>();
        Set<BlockPos> usedChimneys = new HashSet<>();
        for (BlockPos heater : heaters) {
            BlockPos cauldron = heater.above();
            BlockPos chimney = heater.above(2);
            if (!cauldrons.contains(cauldron)) {
                return FormationResult.failure(error("The Heating Unit at " + format(heater)
                        + " needs a Cauldron Unit directly above it"));
            }
            if (!chimneys.contains(chimney)) {
                return FormationResult.failure(error("The smelting column at " + format(heater)
                        + " needs a Chimney directly above its Cauldron Unit"));
            }
            usedCauldrons.add(cauldron);
            usedChimneys.add(chimney);
            HeaterTier tier = level.getBlockState(heater).getBlock() instanceof HeatingUnitBlock h
                    ? h.getTier() : HeaterTier.BASIC;
            columns.add(new SmelterColumn(heater, cauldron, chimney, tier));
        }
        for (BlockPos cauldron : cauldrons) {
            if (!usedCauldrons.contains(cauldron)) {
                return FormationResult.failure(error("The Cauldron Unit at " + format(cauldron)
                        + " must sit directly on a Heating Unit"));
            }
        }
        for (BlockPos chimney : chimneys) {
            if (!usedChimneys.contains(chimney)) {
                return FormationResult.failure(error("The Chimney at " + format(chimney)
                        + " must sit directly on a Cauldron Unit"));
            }
        }
        if (columns.isEmpty()) {
            return FormationResult.failure(error("At least one smelting column is required inside: "
                    + "a Heating Unit with a Cauldron Unit above it and a Chimney on top "
                    + "(the structure must be at least 5 blocks tall to fit one)"));
        }
        // Deterministic order so column <-> input slot mapping is stable.
        columns.sort(Comparator
                .comparingInt((SmelterColumn c) -> c.heater().getY())
                .thenComparingInt(c -> c.heater().getX())
                .thenComparingInt(c -> c.heater().getZ()));

        // A port can only serve one smelter at a time.
        for (BlockPos p : ports) {
            if (level.getBlockEntity(p) instanceof PortBlockEntity port) {
                BlockPos other = port.getCorePos();
                if (other != null && !other.equals(corePos)
                        && level.getBlockEntity(other) instanceof SmelterCoreBlockEntity otherCore
                        && otherCore.isFormed()) {
                    return FormationResult.failure(error("The port at " + format(p)
                            + " already belongs to another Composite Smelter"));
                }
            }
        }

        return FormationResult.success(new SmelterStructure(min, max, columns, ports));
    }

    private static BlockPos findWall(Level level, BlockPos seed, Direction dir) {
        BlockPos.MutableBlockPos cursor = seed.mutable();
        for (int step = 1; step <= MAX_INTERIOR_WALK; step++) {
            cursor.move(dir);
            BlockState state = level.getBlockState(cursor);
            if (isInterior(state)) {
                continue;
            }
            if (isWall(state)) {
                return cursor.immutable();
            }
            return null;
        }
        return null;
    }

    private static BlockPos firstNonInterior(Level level, BlockPos seed, Direction dir) {
        BlockPos.MutableBlockPos cursor = seed.mutable();
        for (int step = 1; step <= MAX_INTERIOR_WALK; step++) {
            cursor.move(dir);
            BlockState state = level.getBlockState(cursor);
            if (!isInterior(state)) {
                return isWall(state) ? null : cursor.immutable();
            }
        }
        return null;
    }

    private static boolean isWall(BlockState state) {
        return state.is(SMELTER_WALL) || state.getBlock() instanceof SmelterCoreBlock;
    }

    private static boolean isInterior(BlockState state) {
        Block block = state.getBlock();
        return state.isAir()
                || block instanceof HeatingUnitBlock
                || block instanceof CauldronUnitBlock
                || block instanceof ChimneyBlock;
    }

    private static String name(BlockState state) {
        ResourceLocation key = ForgeRegistries.BLOCKS.getKey(state.getBlock());
        return key == null ? state.getBlock().toString() : key.toString();
    }

    private static String format(BlockPos pos) {
        return "(" + pos.getX() + ", " + pos.getY() + ", " + pos.getZ() + ")";
    }

    private static Component error(String message) {
        return Component.literal(message).withStyle(ChatFormatting.RED);
    }
}
