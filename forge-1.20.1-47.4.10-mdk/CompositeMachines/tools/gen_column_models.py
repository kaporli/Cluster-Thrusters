#!/usr/bin/env python3
"""Generate 3D block models for smelting column blocks (heater, cauldron, chimney)."""
import json
import os

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   "..", "src", "main", "resources", "assets", "compositemachines", "models", "block")


def faces(texture):
    return {k: {"texture": texture} for k in ("north", "south", "east", "west", "up", "down")}


def element(from_, to, texture):
    return {"from": list(from_), "to": list(to), "faces": faces(texture)}


def write(name, data):
    os.makedirs(OUT, exist_ok=True)
    path = os.path.join(OUT, name + ".json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
    print("wrote", name + ".json")


def column_block(textures, elements):
    return {
        "parent": "minecraft:block/block",
        "textures": {"particle": textures.get("particle", "#frame"), **textures},
        "elements": elements,
    }


def heater_model(coil_tex):
    return column_block(
        {"frame": "compositemachines:block/port_frame", "coil": coil_tex},
        [
            element((0, 0, 0), (16, 10, 16), "#frame"),
            element((2, 10, 2), (14, 13, 14), "#coil"),
        ],
    )


write("heating_unit", heater_model("compositemachines:block/heating_unit"))
write("heating_unit_lit", heater_model("compositemachines:block/heating_unit_lit"))
write("heating_unit_advanced", heater_model("compositemachines:block/heating_unit_advanced"))
write("heating_unit_advanced_lit", heater_model("compositemachines:block/heating_unit_advanced_lit"))
write("heating_unit_elite", heater_model("compositemachines:block/heating_unit_elite"))
write("heating_unit_elite_lit", heater_model("compositemachines:block/heating_unit_elite_lit"))
write("heating_unit_ultimate", heater_model("compositemachines:block/heating_unit_ultimate"))
write("heating_unit_ultimate_lit", heater_model("compositemachines:block/heating_unit_ultimate_lit"))

def full_chimney(top_tex):
    """Full 16³ block — steel casing footprint with a vent on the top face."""
    side = "compositemachines:block/chimney_side"
    return column_block(
        {
            "side": side,
            "top": top_tex,
            "particle": side,
        },
        [{
            "from": [0, 0, 0],
            "to": [16, 16, 16],
            "faces": {
                "up": {"texture": "#top"},
                "down": {"texture": "#side"},
                "north": {"texture": "#side"},
                "south": {"texture": "#side"},
                "east": {"texture": "#side"},
                "west": {"texture": "#side"},
            },
        }],
    )


write("chimney", full_chimney("compositemachines:block/chimney_top"))
write("chimney_lit", full_chimney("compositemachines:block/chimney_top_lit"))

write("cauldron_unit", column_block(
    {
        "frame": "compositemachines:block/cauldron_unit",
        "basin": "compositemachines:block/cauldron_unit_basin",
        "particle": "compositemachines:block/cauldron_unit",
    },
    [
        element((1, 0, 1), (15, 3, 15), "#basin"),
        element((0, 0, 0), (3, 16, 3), "#frame"),
        element((13, 0, 0), (16, 16, 3), "#frame"),
        element((0, 0, 13), (3, 16, 16), "#frame"),
        element((13, 0, 13), (16, 16, 16), "#frame"),
    ],
))

print("done")
