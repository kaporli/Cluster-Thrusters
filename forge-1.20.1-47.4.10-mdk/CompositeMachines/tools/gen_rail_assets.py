#!/usr/bin/env python3
"""Generate overhead rail + rail hoist multipart models and blockstates."""
import json
import os

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                    "..", "src", "main", "resources", "assets", "compositemachines")
MODELS = os.path.join(ROOT, "models", "block")
BLOCKSTATES = os.path.join(ROOT, "blockstates")

RAIL_TEX = "compositemachines:block/overhead_rail"
HOIST_TEX = "compositemachines:block/rail_hoist"
FRAME_TEX = "compositemachines:block/port_frame"


def faces(texture):
    return {k: {"texture": texture} for k in ("north", "south", "east", "west", "up", "down")}


def element(from_, to, texture):
    return {"from": list(from_), "to": list(to), "faces": faces(texture)}


def write_json(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
    print("wrote", os.path.relpath(path, ROOT))


def rail_multipart(name, arm_model):
    """Multipart blockstate — when values must be strings (\"true\"), not JSON booleans."""
    parts = [{"apply": {"model": f"compositemachines:block/{name}_core"}}]
    for prop, y_rot in (("north", 0), ("east", 90), ("south", 180), ("west", 270)):
        parts.append({
            "when": {prop: "true"},
            "apply": {
                "model": f"compositemachines:block/{arm_model}",
                "y": y_rot,
            },
        })
    write_json(os.path.join(BLOCKSTATES, f"{name}.json"), {"multipart": parts})


# --- overhead rail ---
write_json(os.path.join(MODELS, "overhead_rail_core.json"), {
    "parent": "minecraft:block/block",
    "textures": {"particle": RAIL_TEX, "rail": RAIL_TEX},
    "elements": [
        element((4, 14, 4), (12, 16, 12), "#rail"),
    ],
})

write_json(os.path.join(MODELS, "overhead_rail_arm.json"), {
    "parent": "minecraft:block/block",
    "textures": {"particle": RAIL_TEX, "rail": RAIL_TEX},
    "elements": [
        element((7, 15, 0), (9, 16, 8), "#rail"),
    ],
})

rail_multipart("overhead_rail", "overhead_rail_arm")

# --- rail hoist ---
write_json(os.path.join(MODELS, "rail_hoist_core.json"), {
    "parent": "minecraft:block/block",
    "textures": {
        "particle": HOIST_TEX,
        "rail": RAIL_TEX,
        "hoist": HOIST_TEX,
        "frame": FRAME_TEX,
    },
    "elements": [
        element((4, 14, 4), (12, 16, 12), "#rail"),
        element((7, 4, 7), (9, 14, 9), "#frame"),
        element((5, 4, 7), (11, 6, 9), "#hoist"),
        element((6, 2, 7), (10, 4, 9), "#hoist"),
    ],
})

write_json(os.path.join(MODELS, "rail_hoist_arm.json"), {
    "parent": "minecraft:block/block",
    "textures": {"particle": RAIL_TEX, "rail": RAIL_TEX},
    "elements": [
        element((7, 15, 0), (9, 16, 8), "#rail"),
    ],
})

rail_multipart("rail_hoist", "rail_hoist_arm")

# Fallback block models (used if a loader looks up block/<id> directly)
write_json(os.path.join(MODELS, "overhead_rail.json"), {
    "parent": "compositemachines:block/overhead_rail_core",
})
write_json(os.path.join(MODELS, "rail_hoist.json"), {
    "parent": "compositemachines:block/rail_hoist_core",
})

write_json(os.path.join(ROOT, "models", "item", "overhead_rail.json"), {
    "parent": "compositemachines:block/overhead_rail_core",
})
write_json(os.path.join(ROOT, "models", "item", "rail_hoist.json"), {
    "parent": "compositemachines:block/rail_hoist_core",
})

print("done")
