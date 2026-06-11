#!/usr/bin/env python3
"""Generate the 16x16 programmer-art block textures for Composite Machines.

Deterministic (no randomness) so re-runs produce identical PNGs.
Run from anywhere: writes into src/main/resources/assets/compositemachines/textures/block/.
"""
import os

from PIL import Image, ImageDraw

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   "..", "src", "main", "resources", "assets",
                   "compositemachines", "textures", "block")

STEEL = (62, 66, 70)
STEEL_LIGHT = (86, 91, 96)
STEEL_DARK = (44, 47, 50)
RIVET = (110, 116, 122)


def steel_base():
    """Riveted steel panel in the spirit of Mekanism's casings."""
    img = Image.new("RGBA", (16, 16), STEEL + (255,))
    d = ImageDraw.Draw(img)
    # beveled edge
    d.rectangle([0, 0, 15, 15], outline=STEEL_DARK + (255,))
    d.line([1, 1, 14, 1], fill=STEEL_LIGHT + (255,))
    d.line([1, 1, 1, 14], fill=STEEL_LIGHT + (255,))
    # corner rivets
    for x, y in [(2, 2), (13, 2), (2, 13), (13, 13)]:
        d.point((x, y), fill=RIVET + (255,))
    return img


def center_panel(d, color, inset=4):
    d.rectangle([inset, inset, 15 - inset, 15 - inset], fill=color + (255,))
    d.rectangle([inset, inset, 15 - inset, 15 - inset], outline=STEEL_DARK + (255,))


def save(img, name):
    os.makedirs(OUT, exist_ok=True)
    img.save(os.path.join(OUT, name + ".png"))
    print("wrote", name + ".png")


def core_front(formed, lit=False):
    img = steel_base()
    d = ImageDraw.Draw(img)
    # furnace-mouth style opening
    if lit:
        glow = (255, 200, 60)
    elif formed:
        glow = (255, 150, 40)
    else:
        glow = (120, 70, 30)
    dark = (30, 20, 12)
    d.rectangle([3, 5, 12, 12], fill=dark + (255,))
    d.rectangle([4, 8, 11, 11], fill=glow + (255,))
    if formed:
        d.rectangle([5, 6, 10, 7], fill=(255, 220, 120, 255))
    if lit:
        # roaring fire fills the mouth
        d.rectangle([4, 6, 11, 11], fill=(255, 170, 40, 255))
        for x in (5, 7, 9, 11):
            d.line([x, 6, x - 1, 9], fill=(255, 240, 150, 255))
    return img


def core_side():
    img = steel_base()
    d = ImageDraw.Draw(img)
    center_panel(d, (90, 60, 40), inset=5)
    return img


def core_top():
    img = steel_base()
    d = ImageDraw.Draw(img)
    d.rectangle([5, 5, 10, 10], fill=STEEL_DARK + (255,))
    d.rectangle([6, 6, 9, 9], fill=(120, 80, 50, 255))
    return img


def heating_unit(lit=False, hot=(255, 90, 30), hotter=(255, 170, 60)):
    img = steel_base()
    d = ImageDraw.Draw(img)
    # glowing coil bars; white-hot when lit
    hot_c = hot if not lit else (255, 230, 120)
    hotter_c = hotter if not lit else (255, 255, 200)
    for y in (4, 7, 10):
        d.rectangle([3, y, 12, y + 1], fill=hot_c + (255,))
        d.rectangle([4, y, 11, y], fill=hotter_c + (255,))
    if lit:
        d.rectangle([2, 3, 13, 12], outline=(255, 140, 40, 255))
    return img


def chimney_side():
    """Side/bottom faces — same riveted steel look as the casing walls."""
    return steel_base()


def chimney_top(lit=False):
    """Top face — steel panel with a vent opening for smoke."""
    img = steel_base()
    d = ImageDraw.Draw(img)
    d.rectangle([3, 3, 12, 12], fill=(22, 22, 26, 255))
    d.rectangle([4, 4, 11, 11], fill=(14, 14, 16, 255))
    if lit:
        d.rectangle([5, 5, 10, 10], fill=(55, 52, 48, 255))
        d.rectangle([6, 6, 9, 9], fill=(90, 70, 45, 255))
    return img


def cauldron_frame():
    """Steel frame texture for holder pillars and base plate."""
    img = port_frame()
    d = ImageDraw.Draw(img)
    # warm tint on inner edges
    d.line([2, 2, 13, 2], fill=(100, 70, 50, 255))
    d.line([2, 13, 13, 13], fill=(100, 70, 50, 255))
    return img


def cauldron_basin():
    """Dark recessed basin floor inside the holder."""
    img = Image.new("RGBA", (16, 16), (20, 18, 16, 255))
    d = ImageDraw.Draw(img)
    d.rectangle([2, 2, 13, 13], outline=(50, 40, 35, 255))
    d.rectangle([4, 4, 11, 11], fill=(80, 45, 20, 255))
    return img


def port_frame():
    """Plain steel beam texture for the 3D port frames (no rivets)."""
    img = Image.new("RGBA", (16, 16), STEEL + (255,))
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, 15, 15], outline=STEEL_DARK + (255,))
    d.line([1, 1, 14, 1], fill=STEEL_LIGHT + (255,))
    d.line([1, 1, 1, 14], fill=STEEL_LIGHT + (255,))
    return img


def port_inner(color, pointing_in, formed):
    """Dark recessed plate with chevrons pointing inward (input) or outward (output).
    Symmetric so it reads correctly on any face of the 3D model."""
    img = Image.new("RGBA", (16, 16), (25, 27, 30, 255))
    d = ImageDraw.Draw(img)
    c = tuple(min(255, int(ch * (1.4 if formed else 0.75))) for ch in color) + (255,)
    if pointing_in:
        # four chevrons converging on the center
        for i in range(3):
            d.line([4 + i, 4 + i, 4 + i, 6 + i], fill=c)   # top-left corner arms
            d.line([4 + i, 4 + i, 6 + i, 4 + i], fill=c)
            d.line([11 - i, 4 + i, 11 - i, 6 + i], fill=c)
            d.line([11 - i, 4 + i, 9 - i, 4 + i], fill=c)
            d.line([4 + i, 11 - i, 4 + i, 9 - i], fill=c)
            d.line([4 + i, 11 - i, 6 + i, 11 - i], fill=c)
            d.line([11 - i, 11 - i, 11 - i, 9 - i], fill=c)
            d.line([11 - i, 11 - i, 9 - i, 11 - i], fill=c)
        d.rectangle([7, 7, 8, 8], fill=c)
    else:
        # center block radiating outward
        d.rectangle([6, 6, 9, 9], fill=c)
        for i in range(2):
            d.line([3 + i, 7, 3 + i, 8], fill=c)
            d.line([12 - i, 7, 12 - i, 8], fill=c)
            d.line([7, 3 + i, 8, 3 + i], fill=c)
            d.line([7, 12 - i, 8, 12 - i], fill=c)
    if formed:
        d.rectangle([1, 1, 14, 14], outline=c)
    return img


def arrow(d, color, pointing_in):
    """Vertical arrow: pointing in (down into the block) or out (up)."""
    c = color + (255,)
    if pointing_in:
        d.rectangle([7, 3, 8, 8], fill=c)
        for i in range(3):
            d.line([5 + i, 8 + i, 10 - i, 8 + i], fill=c)
    else:
        d.rectangle([7, 7, 8, 12], fill=c)
        for i in range(3):
            d.line([5 + i, 7 - i, 10 - i, 7 - i], fill=c)


def port(color, pointing_in, formed):
    img = steel_base()
    d = ImageDraw.Draw(img)
    center_panel(d, STEEL_DARK, inset=2)
    bright = tuple(min(255, int(ch * (1.35 if formed else 0.8))) for ch in color)
    arrow(d, bright, pointing_in)
    if formed:
        d.rectangle([2, 2, 13, 13], outline=bright + (255,))
    return img


def energy_port(formed):
    img = steel_base()
    d = ImageDraw.Draw(img)
    center_panel(d, STEEL_DARK, inset=2)
    g = (130, 255, 90) if formed else (70, 140, 50)
    bolt = [(9, 3), (6, 8), (8, 8), (6, 13), (10, 7), (8, 7), (10, 3)]
    d.polygon(bolt, fill=g + (255,))
    if formed:
        d.rectangle([2, 2, 13, 13], outline=g + (255,))
    return img


INPUT_BLUE = (80, 160, 255)
OUTPUT_ORANGE = (255, 160, 60)


def overhead_rail():
    """I-beam rail segment seen from below."""
    img = steel_base()
    d = ImageDraw.Draw(img)
    d.rectangle([3, 13, 12, 15], fill=STEEL_DARK + (255,))
    d.rectangle([4, 14, 11, 15], fill=STEEL_LIGHT + (255,))
    d.rectangle([6, 12, 9, 14], fill=RIVET + (255,))
    return img


def rail_hoist():
    """Hoist carriage body."""
    img = steel_base()
    d = ImageDraw.Draw(img)
    d.rectangle([4, 2, 11, 8], fill=STEEL_DARK + (255,))
    d.rectangle([5, 3, 10, 7], fill=(90, 90, 95, 255))
    d.rectangle([7, 0, 8, 3], fill=RIVET + (255,))
    return img


save(core_front(False), "smelter_core_front")
save(core_front(True), "smelter_core_front_formed")
save(core_front(True, lit=True), "smelter_core_front_lit")
save(core_side(), "smelter_core_side")
save(core_top(), "smelter_core_top")
save(heating_unit(), "heating_unit")
save(heating_unit(lit=True), "heating_unit_lit")
save(heating_unit(hot=(255, 50, 120), hotter=(255, 120, 180)), "heating_unit_advanced")
save(heating_unit(lit=True, hot=(255, 120, 180), hotter=(255, 200, 230)), "heating_unit_advanced_lit")
save(heating_unit(hot=(180, 60, 255), hotter=(220, 140, 255)), "heating_unit_elite")
save(heating_unit(lit=True, hot=(220, 140, 255), hotter=(240, 200, 255)), "heating_unit_elite_lit")
save(heating_unit(hot=(60, 220, 255), hotter=(140, 240, 255)), "heating_unit_ultimate")
save(heating_unit(lit=True, hot=(140, 240, 255), hotter=(220, 255, 255)), "heating_unit_ultimate_lit")
save(chimney_side(), "chimney_side")
save(chimney_top(), "chimney_top")
save(chimney_top(lit=True), "chimney_top_lit")
save(overhead_rail(), "overhead_rail")
save(rail_hoist(), "rail_hoist")
save(cauldron_frame(), "cauldron_unit")
save(cauldron_basin(), "cauldron_unit_basin")
save(port_frame(), "port_frame")
# flat textures kept for the item-port inventory icons / fallbacks
save(port(INPUT_BLUE, True, False), "item_input_port")
save(port(INPUT_BLUE, True, True), "item_input_port_formed")
save(port(OUTPUT_ORANGE, False, False), "item_output_port")
save(port(OUTPUT_ORANGE, False, True), "item_output_port_formed")
# recessed inner plates for the 3D port models
save(port_inner(INPUT_BLUE, True, False), "item_input_port_inner")
save(port_inner(INPUT_BLUE, True, True), "item_input_port_inner_formed")
save(port_inner(OUTPUT_ORANGE, False, False), "item_output_port_inner")
save(port_inner(OUTPUT_ORANGE, False, True), "item_output_port_inner_formed")
save(energy_port(False), "energy_port")
save(energy_port(True), "energy_port_formed")
print("done")
