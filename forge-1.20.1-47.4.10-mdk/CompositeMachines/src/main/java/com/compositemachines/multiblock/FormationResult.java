package com.compositemachines.multiblock;

import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.Nullable;

public final class FormationResult {
    @Nullable
    private final SmelterStructure structure;
    @Nullable
    private final Component error;

    private FormationResult(@Nullable SmelterStructure structure, @Nullable Component error) {
        this.structure = structure;
        this.error = error;
    }

    public static FormationResult success(SmelterStructure structure) {
        return new FormationResult(structure, null);
    }

    public static FormationResult failure(Component error) {
        return new FormationResult(null, error);
    }

    public boolean isSuccess() {
        return structure != null;
    }

    public SmelterStructure structure() {
        if (structure == null) {
            throw new IllegalStateException("Not a successful formation result");
        }
        return structure;
    }

    public Component error() {
        return error == null ? Component.empty() : error;
    }
}
