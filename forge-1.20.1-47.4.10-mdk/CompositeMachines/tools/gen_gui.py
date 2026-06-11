#!/usr/bin/env python3
"""Generate the Composite Smelter GUI texture (textures/gui/smelter.png, 256x256).

Coordinates MUST stay in sync with SmelterMenu (slot positions) and SmelterScreen
(energy gauge at 8,17 12x52; progress arrow at 84,43 22x15; filled arrow sprite at 176,0).
"""
import os

from PIL import Image, ImageDraw

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   "..", "src", "main", "resources", "assets",
                   "compositemachines", "textures", "gui")

BG = (198, 198, 198, 255)
WHITE = (255, 255, 255, 255)
SHADOW = (85, 85, 85, 255)
BLACK = (0, 0, 0, 255)
SLOT_BG = (139, 139, 139, 255)
SLOT_DARK = (55, 55, 55, 255)

img = Image.new("RGBA", (256, 256), (0, 0, 0, 0))
d = ImageDraw.Draw(img)

# --- main panel 176x166 ---
d.rectangle([0, 0, 175, 165], fill=BG)
d.rectangle([0, 0, 175, 165], outline=BLACK)
d.rectangle([1, 1, 174, 2], fill=WHITE)   # top highlight
d.rectangle([1, 1, 2, 164], fill=WHITE)   # left highlight
d.rectangle([1, 163, 174, 164], fill=SHADOW)  # bottom shadow
d.rectangle([173, 3, 174, 164], fill=SHADOW)  # right shadow


def slot(x, y):
    """Classic 18x18 inset slot with its top-left corner at (x, y)."""
    d.rectangle([x, y, x + 17, y + 17], fill=SLOT_BG)
    d.line([x, y, x + 17, y], fill=SLOT_DARK)
    d.line([x, y, x, y + 17], fill=SLOT_DARK)
    d.line([x + 17, y + 1, x + 17, y + 17], fill=WHITE)
    d.line([x + 1, y + 17, x + 17, y + 17], fill=WHITE)


# input 3x3 (items at 26.., boxes at 25..)
for r in range(3):
    for c in range(3):
        slot(25 + c * 18, 16 + r * 18)
# output 3x3 (items at 116..)
for r in range(3):
    for c in range(3):
        slot(115 + c * 18, 16 + r * 18)
# player inventory + hotbar (items at 8,84 / 8,142)
for r in range(3):
    for c in range(9):
        slot(7 + c * 18, 83 + r * 18)
for c in range(9):
    slot(7 + c * 18, 141)

# --- energy gauge frame: fill area is (8,17)-(19,68) = 12x52 ---
d.rectangle([7, 16, 20, 69], fill=BLACK)
d.line([7, 16, 20, 16], fill=SLOT_DARK)
d.line([7, 16, 7, 69], fill=SLOT_DARK)
d.line([20, 17, 20, 69], fill=WHITE)
d.line([8, 69, 20, 69], fill=WHITE)
d.rectangle([8, 17, 19, 68], fill=(20, 20, 20, 255))


def arrow(ox, oy, color):
    """22x15 right-pointing arrow with its top-left corner at (ox, oy)."""
    d.rectangle([ox, oy + 5, ox + 14, oy + 9], fill=color)
    for i in range(7):
        d.line([ox + 14 + i, oy + 1 + i, ox + 14 + i, oy + 13 - i], fill=color)


# static (empty) arrow on the panel
arrow(84, 43, (120, 120, 120, 255))
# filled arrow sprite for progress overlay
arrow(176, 0, (255, 150, 40, 255))

os.makedirs(OUT, exist_ok=True)
img.save(os.path.join(OUT, "smelter.png"))
print("wrote smelter.png")
