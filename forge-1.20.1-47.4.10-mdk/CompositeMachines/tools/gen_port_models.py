#!/usr/bin/env python3
"""Generate the 3D item-port block models: a steel edge frame (12 beams) with a
recessed inner box, so every face shows a real hole. Deterministic output."""
import json
import os

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   "..", "src", "main", "resources", "assets",
                   "compositemachines", "models", "block")

FACES = ["north", "south", "east", "west", "up", "down"]


def element(frm, to, texture):
    return {
        "from": frm,
        "to": to,
        "faces": {f: {"texture": texture} for f in FACES},
    }


def beams():
    out = []
    # along X (full length), at the 4 horizontal edges
    for y in (0, 12):
        for z in (0, 12):
            out.append(element([0, y, z], [16, y + 4, z + 4], "#frame"))
    # along Y (shortened to avoid z-fighting with the X beams), at the 4 vertical edges
    for x in (0, 12):
        for z in (0, 12):
            out.append(element([x, 4, z], [x + 4, 12, z + 4], "#frame"))
    # along Z (shortened), at the remaining 4 edges
    for x in (0, 12):
        for y in (0, 12):
            out.append(element([x, y, 4], [x + 4, y + 4, 12], "#frame"))
    return out


def port_model(inner_texture):
    inner = element([3, 3, 3], [13, 13, 13], "#inner")
    for face in inner["faces"].values():
        face["uv"] = [3, 3, 13, 13]
    return {
        "parent": "minecraft:block/block",
        "textures": {
            "particle": "compositemachines:block/port_frame",
            "frame": "compositemachines:block/port_frame",
            "inner": inner_texture,
        },
        "elements": beams() + [inner],
    }


MODELS = {
    "item_input_port": "compositemachines:block/item_input_port_inner",
    "item_input_port_formed": "compositemachines:block/item_input_port_inner_formed",
    "item_output_port": "compositemachines:block/item_output_port_inner",
    "item_output_port_formed": "compositemachines:block/item_output_port_inner_formed",
}

os.makedirs(OUT, exist_ok=True)
for name, inner in MODELS.items():
    path = os.path.join(OUT, name + ".json")
    with open(path, "w") as f:
        json.dump(port_model(inner), f, indent=2)
        f.write("\n")
    print("wrote", name + ".json")
print("done")
