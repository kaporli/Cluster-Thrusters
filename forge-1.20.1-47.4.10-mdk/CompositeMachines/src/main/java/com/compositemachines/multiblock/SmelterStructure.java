package com.compositemachines.multiblock;

import net.minecraft.core.BlockPos;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.ListTag;
import net.minecraft.nbt.Tag;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * Immutable description of a formed Composite Smelter: cuboid bounds (wall layer
 * inclusive), the smelting columns inside and the positions of all port blocks.
 */
public final class SmelterStructure {
    private final BlockPos min;
    private final BlockPos max;
    private final List<SmelterColumn> columns;
    private final List<BlockPos> ports;

    public SmelterStructure(BlockPos min, BlockPos max, List<SmelterColumn> columns, List<BlockPos> ports) {
        this.min = min.immutable();
        this.max = max.immutable();
        this.columns = List.copyOf(columns);
        this.ports = List.copyOf(ports);
    }

    public BlockPos min() {
        return min;
    }

    public BlockPos max() {
        return max;
    }

    public List<SmelterColumn> columns() {
        return columns;
    }

    public int columnCount() {
        return columns.size();
    }

    public List<BlockPos> ports() {
        return ports;
    }

    public int sizeX() {
        return max.getX() - min.getX() + 1;
    }

    public int sizeY() {
        return max.getY() - min.getY() + 1;
    }

    public int sizeZ() {
        return max.getZ() - min.getZ() + 1;
    }

    public String describeSize() {
        return sizeX() + "x" + sizeY() + "x" + sizeZ();
    }

    public CompoundTag save() {
        CompoundTag tag = new CompoundTag();
        tag.putLong("min", min.asLong());
        tag.putLong("max", max.asLong());
        ListTag columnList = new ListTag();
        for (SmelterColumn column : columns) {
            columnList.add(column.save());
        }
        tag.put("columns", columnList);
        tag.putLongArray("ports", ports.stream().mapToLong(BlockPos::asLong).toArray());
        return tag;
    }

    public static SmelterStructure load(CompoundTag tag) {
        List<SmelterColumn> columns = new ArrayList<>();
        for (Tag entry : tag.getList("columns", Tag.TAG_COMPOUND)) {
            columns.add(SmelterColumn.load((CompoundTag) entry));
        }
        List<BlockPos> ports = new ArrayList<>();
        for (long packed : tag.getLongArray("ports")) {
            ports.add(BlockPos.of(packed));
        }
        return new SmelterStructure(BlockPos.of(tag.getLong("min")), BlockPos.of(tag.getLong("max")),
                columns, ports);
    }

    @Override
    public boolean equals(Object o) {
        return o instanceof SmelterStructure other
                && min.equals(other.min) && max.equals(other.max)
                && columns.equals(other.columns) && ports.equals(other.ports);
    }

    @Override
    public int hashCode() {
        return Objects.hash(min, max, columns, ports);
    }
}
