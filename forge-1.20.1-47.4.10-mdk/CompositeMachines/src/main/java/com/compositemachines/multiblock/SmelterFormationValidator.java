package com.compositemachines.multiblock;

import com.compositemachines.CompositeMachinesMod;
import com.compositemachines.block.CauldronUnitBlock;
import com.compositemachines.block.ChimneyBlock;
import com.compositemachines.block.HeaterTier;
import com.compositemachines.block.HeatingUnitBlock;
import com.compositemachines.block.OverheadRailBlock;
import com.compositemachines.block.PortBlock;
import com.compositemachines.block.RailHoistBlock;
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
import org.jetbrains.annotations.Nullable;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Queue;
import java.util.Set;

/**
 * Validates a Composite Smelter: hollow cuboid (3×3×4 .. 9×9×9) with steel frame,
 * column stacks (heater → cauldron → rail hoist → chimney), and a single overhead
 * rail plane one block below the roof connecting item ports to each hoist.
 */
public final class SmelterFormationValidator {
    public static final TagKey<Block> SMELTER_WALL =
            BlockTags.create(new ResourceLocation(CompositeMachinesMod.MODID, "smelter_wall"));
    private static final ResourceLocation STEEL_CASING = new ResourceLocation("mekanism", "steel_casing");
    public static final int MIN_EDGE = 3;
    public static final int MIN_HEIGHT = 4;
    public static final int MAX_EDGE = 9;
    private static final int MAX_INTERIOR_WALK = MAX_EDGE - 2;

    private enum CellKind {
        HULL,
        FLOOR,
        CAULDRON_LAYER,
        MID_CHAMBER,
        RAIL_LAYER,
        ROOF
    }

    private SmelterFormationValidator() {
    }

    public static FormationResult validate(Level level, BlockPos corePos) {
        BlockState coreState = level.getBlockState(corePos);
        if (!(coreState.getBlock() instanceof SmelterCoreBlock)) {
            return FormationResult.failure(error("Smelter Core is missing at " + format(corePos)));
        }
        Direction facing = coreState.getValue(SmelterCoreBlock.FACING);
        BlockPos seed = corePos.relative(facing.getOpposite());
        if (!isInteriorBlock(level.getBlockState(seed))) {
            return FormationResult.failure(error(
                    "The Smelter Core must face outward: the block behind it at " + format(seed)
                            + " must be interior space (air or machine blocks)"));
        }

        int minX = 0, minY = 0, minZ = 0, maxX = 0, maxY = 0, maxZ = 0;
        for (Direction dir : Direction.values()) {
            BlockPos wall = findWall(level, seed, dir);
            if (wall == null) {
                BlockPos offender = firstNonInterior(level, seed, dir);
                if (offender != null) {
                    BlockState s = level.getBlockState(offender);
                    return FormationResult.failure(error("Invalid block " + name(s) + " at "
                            + format(offender) + " (frame must be Steel Casing; side panels may "
                            + "also use Structural Glass or ports)"));
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
        if (sizeX < MIN_EDGE || sizeZ < MIN_EDGE
                || sizeY < MIN_HEIGHT
                || sizeX > MAX_EDGE || sizeY > MAX_EDGE || sizeZ > MAX_EDGE) {
            return FormationResult.failure(error("Structure must be between 3x3x4 and 9x9x9, found "
                    + sizeX + "x" + sizeY + "x" + sizeZ));
        }

        int railY = max.getY() - 1;
        List<BlockPos> ports = new ArrayList<>();
        List<BlockPos> heaters = new ArrayList<>();
        List<BlockPos> rails = new ArrayList<>();
        Set<BlockPos> cauldrons = new HashSet<>();
        Set<BlockPos> hoists = new HashSet<>();
        Set<BlockPos> chimneys = new HashSet<>();
        boolean coreSeen = false;

        for (BlockPos p : BlockPos.betweenClosed(min, max)) {
            CellKind kind = classify(p, min, max);
            BlockState state = level.getBlockState(p);
            switch (kind) {
                case HULL -> {
                    Component hullError = validateHullBlock(state, p, min, max, corePos);
                    if (hullError != null) {
                        return FormationResult.failure(hullError);
                    }
                    if (state.getBlock() instanceof SmelterCoreBlock) {
                        coreSeen = true;
                    } else if (state.getBlock() instanceof PortBlock) {
                        ports.add(p.immutable());
                    }
                }
                case FLOOR -> {
                    Block block = state.getBlock();
                    if (block instanceof HeatingUnitBlock) {
                        heaters.add(p.immutable());
                    } else if (!state.isAir()) {
                        return FormationResult.failure(error("The floor may contain only air and "
                                + "Heating Units; found " + name(state) + " at " + format(p)));
                    }
                }
                case CAULDRON_LAYER -> {
                    Block block = state.getBlock();
                    if (block instanceof CauldronUnitBlock) {
                        cauldrons.add(p.immutable());
                    } else if (!state.isAir()) {
                        return FormationResult.failure(error("The cauldron layer may contain only "
                                + "air and Cauldron Units; found " + name(state) + " at "
                                + format(p)));
                    }
                }
                case MID_CHAMBER -> {
                    if (!state.isAir()) {
                        return FormationResult.failure(error("The space between the cauldron layer "
                                + "and rail plane must be air; found " + name(state) + " at "
                                + format(p)));
                    }
                }
                case RAIL_LAYER -> {
                    Block block = state.getBlock();
                    if (block instanceof OverheadRailBlock) {
                        rails.add(p.immutable());
                    } else if (block instanceof RailHoistBlock) {
                        hoists.add(p.immutable());
                    } else if (!state.isAir()) {
                        return FormationResult.failure(error("The rail plane may contain only air, "
                                + "Overhead Rails, and Rail Hoists; found " + name(state) + " at "
                                + format(p)));
                    }
                }
                case ROOF -> {
                    Block block = state.getBlock();
                    if (block instanceof ChimneyBlock) {
                        chimneys.add(p.immutable());
                    } else if (!state.isAir()) {
                        return FormationResult.failure(error("The roof may contain only air and "
                                + "Chimneys; found " + name(state) + " at " + format(p)));
                    }
                }
            }
        }
        if (!coreSeen) {
            return FormationResult.failure(error("The Smelter Core must be part of the wall"));
        }

        FormationResult columnResult = assembleColumns(level, heaters, cauldrons, hoists, chimneys, min, max);
        if (!columnResult.isSuccess()) {
            return columnResult;
        }
        List<SmelterColumn> columns = columnResult.structure().columns();

        Component railError = validateRailNetwork(level, min, max, railY, rails, columns, ports);
        if (railError != null) {
            return FormationResult.failure(railError);
        }

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

        return FormationResult.success(new SmelterStructure(min, max, columns, rails, ports));
    }

    private static FormationResult assembleColumns(Level level, List<BlockPos> heaters,
                                                   Set<BlockPos> cauldrons, Set<BlockPos> hoists,
                                                   Set<BlockPos> chimneys, BlockPos min, BlockPos max) {
        List<SmelterColumn> columns = new ArrayList<>();
        Set<BlockPos> usedCauldrons = new HashSet<>();
        Set<BlockPos> usedHoists = new HashSet<>();
        Set<BlockPos> usedChimneys = new HashSet<>();
        int railY = max.getY() - 1;

        for (BlockPos heater : heaters) {
            BlockPos cauldron = heater.above();
            BlockPos hoist = new BlockPos(cauldron.getX(), railY, cauldron.getZ());
            BlockPos chimney = new BlockPos(cauldron.getX(), max.getY(), cauldron.getZ());

            if (classify(cauldron, min, max) != CellKind.CAULDRON_LAYER || !cauldrons.contains(cauldron)) {
                return FormationResult.failure(error("The Heating Unit at " + format(heater)
                        + " needs a Cauldron Unit directly above it"));
            }
            if (!hoists.contains(hoist)) {
                return FormationResult.failure(error("The column at " + format(cauldron)
                        + " needs a Rail Hoist on the rail plane at " + format(hoist)));
            }
            if (classify(chimney, min, max) != CellKind.ROOF || !chimneys.contains(chimney)) {
                return FormationResult.failure(error("The column at " + format(cauldron)
                        + " needs a Chimney on the roof at " + format(chimney)));
            }

            usedCauldrons.add(cauldron);
            usedHoists.add(hoist);
            usedChimneys.add(chimney);
            HeaterTier tier = level.getBlockState(heater).getBlock() instanceof HeatingUnitBlock h
                    ? h.getTier() : HeaterTier.BASIC;
            columns.add(new SmelterColumn(heater, cauldron, hoist, chimney, tier));
        }
        for (BlockPos cauldron : cauldrons) {
            if (!usedCauldrons.contains(cauldron)) {
                return FormationResult.failure(error("The Cauldron Unit at " + format(cauldron)
                        + " must sit directly above a Heating Unit on the floor"));
            }
        }
        for (BlockPos hoist : hoists) {
            if (!usedHoists.contains(hoist)) {
                return FormationResult.failure(error("The Rail Hoist at " + format(hoist)
                        + " must be on the rail plane directly above a Cauldron Unit"));
            }
        }
        for (BlockPos chimney : chimneys) {
            if (!usedChimneys.contains(chimney)) {
                return FormationResult.failure(error("The Chimney at " + format(chimney)
                        + " must cap a column on the roof above its Rail Hoist"));
            }
        }
        if (columns.isEmpty()) {
            return FormationResult.failure(error("At least one smelting column is required: Heating "
                    + "Unit, Cauldron Unit, Rail Hoist, and Chimney (minimum size is 3x3x4)"));
        }
        columns.sort(Comparator
                .comparingInt((SmelterColumn c) -> c.heater().getY())
                .thenComparingInt(c -> c.heater().getX())
                .thenComparingInt(c -> c.heater().getZ()));
        return FormationResult.success(new SmelterStructure(min, max, columns, List.of(), List.of()));
    }

    @Nullable
    private static Component validateRailNetwork(Level level, BlockPos min, BlockPos max, int railY,
                                                 List<BlockPos> rails, List<SmelterColumn> columns,
                                                 List<BlockPos> ports) {
        Set<BlockPos> nodes = new HashSet<>(rails);
        for (SmelterColumn column : columns) {
            nodes.add(column.hoist());
        }
        if (nodes.isEmpty()) {
            return error("The rail plane needs at least one Overhead Rail or Rail Hoist");
        }

        for (BlockPos rail : rails) {
            if (rail.getY() != railY) {
                return error("Overhead Rails must sit on the rail plane at y=" + railY
                        + "; found one at " + format(rail));
            }
        }

        Set<BlockPos> visited = bfsHorizontal(nodes);
        if (visited.size() != nodes.size()) {
            return error("All Overhead Rails and Rail Hoists must form one connected network "
                    + "on the rail plane");
        }

        for (BlockPos portPos : ports) {
            if (!(level.getBlockState(portPos).getBlock() instanceof PortBlock port)
                    || !port.getType().isItem()) {
                continue;
            }
            if (portPos.getY() != railY) {
                return error("Item ports must sit on the rail plane at y=" + railY
                        + "; move the port at " + format(portPos));
            }
            if (!portTouchesNetwork(portPos, min, max, visited)) {
                return error("The item port at " + format(portPos)
                        + " must connect to the overhead rail network");
            }
        }
        return null;
    }

    private static Set<BlockPos> bfsHorizontal(Set<BlockPos> nodes) {
        Set<BlockPos> visited = new HashSet<>();
        Queue<BlockPos> queue = new ArrayDeque<>();
        BlockPos start = nodes.iterator().next();
        queue.add(start);
        visited.add(start);
        while (!queue.isEmpty()) {
            BlockPos current = queue.poll();
            for (Direction dir : Direction.Plane.HORIZONTAL) {
                BlockPos next = current.relative(dir);
                if (nodes.contains(next) && visited.add(next)) {
                    queue.add(next);
                }
            }
        }
        return visited;
    }

    private static boolean portTouchesNetwork(BlockPos port, BlockPos min, BlockPos max, Set<BlockPos> network) {
        BlockPos interior = interiorTowardCenter(port, min, max);
        if (network.contains(interior)) {
            return true;
        }
        for (Direction dir : Direction.Plane.HORIZONTAL) {
            if (network.contains(port.relative(dir))) {
                return true;
            }
        }
        return false;
    }

    private static BlockPos interiorTowardCenter(BlockPos port, BlockPos min, BlockPos max) {
        if (port.getX() == min.getX()) {
            return port.east();
        }
        if (port.getX() == max.getX()) {
            return port.west();
        }
        if (port.getZ() == min.getZ()) {
            return port.south();
        }
        if (port.getZ() == max.getZ()) {
            return port.north();
        }
        return port;
    }

    @Nullable
    private static Component validateHullBlock(BlockState state, BlockPos pos,
                                               BlockPos min, BlockPos max, BlockPos corePos) {
        Block block = state.getBlock();
        if (block instanceof SmelterCoreBlock) {
            if (!pos.equals(corePos)) {
                return error("Only one Smelter Core is allowed; found another at " + format(pos));
            }
            if (boundaryCount(pos, min, max) >= 2) {
                return error("The Smelter Core must sit on a side panel, not on a corner or edge "
                        + "at " + format(pos));
            }
            return null;
        }
        if (block instanceof PortBlock) {
            if (boundaryCount(pos, min, max) >= 2) {
                return error("Ports must sit on a side panel, not on a corner or edge at "
                        + format(pos));
            }
            if (!state.is(SMELTER_WALL)) {
                return error("Invalid port block at " + format(pos));
            }
            return null;
        }
        if (boundaryCount(pos, min, max) >= 2) {
            if (!isSteelCasing(state)) {
                return error("Corners and edges must be Steel Casing; found " + name(state)
                        + " at " + format(pos));
            }
            return null;
        }
        if (!state.is(SMELTER_WALL)) {
            return error("Side panels must be Steel Casing or Structural Glass; found "
                    + name(state) + " at " + format(pos));
        }
        return null;
    }

    private static CellKind classify(BlockPos p, BlockPos min, BlockPos max) {
        boolean xEdge = p.getX() == min.getX() || p.getX() == max.getX();
        boolean zEdge = p.getZ() == min.getZ() || p.getZ() == max.getZ();
        if (xEdge || zEdge) {
            return CellKind.HULL;
        }
        if (p.getY() == min.getY()) {
            return CellKind.FLOOR;
        }
        if (p.getY() == max.getY()) {
            return CellKind.ROOF;
        }
        if (p.getY() == min.getY() + 1) {
            return CellKind.CAULDRON_LAYER;
        }
        if (p.getY() == max.getY() - 1) {
            return CellKind.RAIL_LAYER;
        }
        return CellKind.MID_CHAMBER;
    }

    private static int boundaryCount(BlockPos p, BlockPos min, BlockPos max) {
        int count = 0;
        if (p.getX() == min.getX() || p.getX() == max.getX()) {
            count++;
        }
        if (p.getY() == min.getY() || p.getY() == max.getY()) {
            count++;
        }
        if (p.getZ() == min.getZ() || p.getZ() == max.getZ()) {
            count++;
        }
        return count;
    }

    private static BlockPos findWall(Level level, BlockPos seed, Direction dir) {
        BlockPos.MutableBlockPos cursor = seed.mutable();
        BlockPos lastColumn = null;
        for (int step = 1; step <= MAX_INTERIOR_WALK; step++) {
            cursor.move(dir);
            BlockState state = level.getBlockState(cursor);
            if (isWalkableDuringScan(state, dir)) {
                if (isColumnBlock(state)) {
                    lastColumn = cursor.immutable();
                }
                continue;
            }
            if (isWall(state)) {
                return cursor.immutable();
            }
            if (lastColumn != null && dir.getAxis() == Direction.Axis.Y) {
                return lastColumn;
            }
            return null;
        }
        if (lastColumn != null && dir.getAxis() == Direction.Axis.Y) {
            return lastColumn;
        }
        return null;
    }

    private static BlockPos firstNonInterior(Level level, BlockPos seed, Direction dir) {
        BlockPos.MutableBlockPos cursor = seed.mutable();
        BlockPos lastColumn = null;
        for (int step = 1; step <= MAX_INTERIOR_WALK; step++) {
            cursor.move(dir);
            BlockState state = level.getBlockState(cursor);
            if (isWalkableDuringScan(state, dir)) {
                if (isColumnBlock(state)) {
                    lastColumn = cursor.immutable();
                }
                continue;
            }
            if (isWall(state)) {
                return null;
            }
            if (lastColumn != null && dir.getAxis() == Direction.Axis.Y) {
                return null;
            }
            return cursor.immutable();
        }
        return null;
    }

    private static boolean isWalkableDuringScan(BlockState state, Direction dir) {
        if (isColumnBlock(state)) {
            return true;
        }
        return dir.getAxis() != Direction.Axis.Y && state.isAir();
    }

    private static boolean isColumnBlock(BlockState state) {
        Block block = state.getBlock();
        return block instanceof HeatingUnitBlock
                || block instanceof CauldronUnitBlock
                || block instanceof RailHoistBlock
                || block instanceof ChimneyBlock;
    }

    private static boolean isWall(BlockState state) {
        return state.is(SMELTER_WALL) || state.getBlock() instanceof SmelterCoreBlock;
    }

    private static boolean isInteriorBlock(BlockState state) {
        Block block = state.getBlock();
        return state.isAir()
                || block instanceof HeatingUnitBlock
                || block instanceof CauldronUnitBlock
                || block instanceof RailHoistBlock
                || block instanceof ChimneyBlock
                || block instanceof OverheadRailBlock;
    }

    private static boolean isSteelCasing(BlockState state) {
        ResourceLocation id = ForgeRegistries.BLOCKS.getKey(state.getBlock());
        return STEEL_CASING.equals(id);
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
