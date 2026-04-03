// V2: Highly Comprehensive Automated Tag Engine (Zero-Crash Edition)
const autoCategories = {
    suffixes: [
        "stairs", "slab", "wall", "fence", "fence_gate", 
        "door", "trapdoor", "button", "pressure_plate", 
        "bricks", "tiles", "pillar", "sandstone", "cobblestone",
        "log", "wood", "planks", "leaves", "sapling",
        "glass", "glass_pane", "bed", "boat", "chest_boat",
        "sign", "hanging_sign", "carpet", "candle", "banner",
        "shulker_box", "terracotta", "concrete", "concrete_powder",
        "wool", "ore", "ingot", "nugget", "dust", "pickaxe", 
        "axe", "shovel", "hoe", "sword", "helmet", "chestplate", 
        "leggings", "boots", "seeds", "bars", "block", "brick",
        "chain", "torch", "lantern", "campfire", "stem", "hyphae",
        "coral", "coral_block", "coral_fan", "nylium", "wart_block"
    ],
    prefixes: [
        "polished", "chiseled", "cracked", "mossy", "smooth", 
        "cut", "raw", "stripped", "potted", "waxed", 
        "weathered", "exposed", "oxidized", "petrified",
        "deepslate", "infested", "copper", "iron", "gold"
    ],
    // Advanced Explicit Rules overrides for specific tricky types
    explicit: {
"mcwbridges_bridge_piers": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)bridge_pier$/,
        "mcwbridges_log_bridge_middles": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)log_bridge_middle$/,
        "mcwbridges_log_bridge_stairs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)log_bridge_stair$/,
        "mcwbridges_rail_bridges": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)rail_bridge$/,
        "mcwbridges_rope_bridge_stairs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*rope_bridge_stair$/,
        "mcwbridges_rope_bridges": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*rope_.*_bridge$/,
        "mcwbridges_brick_bridges": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:_stair)$).*brick_bridge$/,
        "mcwbridges_balustrade_bridges": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)balustrade_.*bridge$/,
        "mcwbridges_brick_bridge_stairs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)brick_bridge_stair$/,
        "mcwbridges_bridges": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:bridge_pier|log_bridge_middle|rail_bridge|rope_.*_bridge|brick_bridge|balustrade_.*bridge|.*_stair)$).*(?:_|^)bridge$/,
        "mcwdoors_bamboo_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)bamboo_door$/,
        "mcwdoors_bark_glass_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)bark_glass_door$/,
        "mcwdoors_barn_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)barn_door$/,
        "mcwdoors_barn_glass_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)barn_glass_door$/,
        "mcwdoors_beach_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)beach_door$/,
        "mcwdoors_cottage_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)cottage_door$/,
        "mcwdoors_four_panel_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)four_panel_door$/,
        "mcwdoors_glass_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:bark_glass_door|barn_glass_door)$).*(?:_|^)glass_door$/,
        "mcwdoors_japanese2_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)japanese2_door$/,
        "mcwdoors_japanese_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)japanese_door$/,
        "mcwdoors_modern_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)modern_door$/,
        "mcwdoors_mystic_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)mystic_door$/,
        "mcwdoors_nether_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)nether_door$/,
        "mcwdoors_paper_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)paper_door$/,
        "mcwdoors_stable_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)stable_door$/,
        "mcwdoors_stable_head_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)stable_head_door$/,
        "mcwdoors_swamp_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)swamp_door$/,
        "mcwdoors_tropical_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)tropical_door$/,
        "mcwdoors_waffle_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)waffle_door$/,
        "mcwdoors_western_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)western_door$/,
        "mcwdoors_whispering_doors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)whispering_door$/,
        "mcwfurnitures_bookshelves": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)bookshelf$/,
        "mcwfurnitures_bookshelf_cupboards": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)bookshelf_cupboard$/,
        "mcwfurnitures_bookshelf_drawers": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:lower_bookshelf_drawer)$).*(?:_|^)bookshelf_drawer$/,
        "mcwfurnitures_chairs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:modern_chair|stool_chair|striped_chair)$).*(?:_|^)chair$/,
        "mcwfurnitures_coffee_tables": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)coffee_table$/,
        "mcwfurnitures_counters": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:cupboard_counter|double_drawer_counter|drawer_counter)$).*(?:_|^)counter$/,
        "mcwfurnitures_covered_desks": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)covered_desk$/,
        "mcwfurnitures_cupboard_counters": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)cupboard_counter$/,
        "mcwfurnitures_desks": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:covered_desk|modern_desk)$).*(?:_|^)desk$/,
        "mcwfurnitures_double_drawers": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)double_drawer$/,
        "mcwfurnitures_double_drawer_counters": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)double_drawer_counter$/,
        "mcwfurnitures_double_kitchen_cabinets": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)double_kitchen_cabinet$/,
        "mcwfurnitures_double_wardrobes": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)double_wardrobe$/,
        "mcwfurnitures_drawers": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:bookshelf_drawer|double_drawer|large_drawer|lower_bookshelf_drawer|lower_triple_drawer|triple_drawer)$).*(?:_|^)drawer$/,
        "mcwfurnitures_drawer_counters": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:double_drawer_counter)$).*(?:_|^)drawer_counter$/,
        "mcwfurnitures_end_tables": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)end_table$/,
        "mcwfurnitures_glass_kitchen_cabinets": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)glass_kitchen_cabinet$/,
        "mcwfurnitures_glass_tables": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)glass_table$/,
        "mcwfurnitures_kitchen_cabinets": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:double_kitchen_cabinet|glass_kitchen_cabinet)$).*(?:_|^)kitchen_cabinet$/,
        "mcwfurnitures_kitchen_sinks": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)kitchen_sink$/,
        "mcwfurnitures_large_drawers": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)large_drawer$/,
        "mcwfurnitures_lower_bookshelf_drawers": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)lower_bookshelf_drawer$/,
        "mcwfurnitures_lower_triple_drawers": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)lower_triple_drawer$/,
        "mcwfurnitures_modern_chairs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)modern_chair$/,
        "mcwfurnitures_modern_desks": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)modern_desk$/,
        "mcwfurnitures_modern_wardrobes": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)modern_wardrobe$/,
        "mcwfurnitures_stool_chairs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)stool_chair$/,
        "mcwfurnitures_striped_chairs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)striped_chair$/,
        "mcwfurnitures_tables": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:coffee_table|end_table|glass_table)$).*(?:_|^)table$/,
        "mcwfurnitures_triple_drawers": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:lower_triple_drawer)$).*(?:_|^)triple_drawer$/,
        "mcwfurnitures_wardrobes": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:double_wardrobe|modern_wardrobe)$).*(?:_|^)wardrobe$/,
        "mcwlights_ceiling_fan_lights": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)ceiling_fan_light$/,
        "mcwlights_tiki_torches": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)tiki_torch$/,
        "mcwfences_curved_gates": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)curved_gate$/,
        "mcwfences_hedges": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)hedge$/,
        "mcwfences_highley_gates": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)highley_gate$/,
        "mcwfences_horse_fences": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)horse_fence$/,
        "mcwfences_picket_fences": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)picket_fence$/,
        "mcwfences_pyramid_gates": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)pyramid_gate$/,
        "mcwfences_stockade_fences": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)stockade_fence$/,
        "mcwfences_wired_fences": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)wired_fence$/,
        "mcwfences_railing_gates": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)railing_gate$/,
        "mcwfences_brick_walls": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)brick_wall$/,
        "mcwfences_pillar_walls": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)pillar_wall$/,
        "mcwfences_railing_walls": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)railing_.*wall$/,
        "mcwfences_modern_walls": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)modern_.*wall$/,
        "mcwpaths_planks_paths": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)planks_path$/,
        "mcwpaths_diamond_paving": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)diamond_paving$/,
        "mcwpaths_basket_weave_paving": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)basket_weave_paving$/,
        "mcwpaths_square_paving": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)square_paving$/,
        "mcwpaths_honeycomb_paving": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)honeycomb_paving$/,
        "mcwpaths_clover_paving": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)clover_paving$/,
        "mcwpaths_dumble_paving": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)dumble_paving$/,
        "mcwpaths_rocky_paths": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)rocky_path$/,
        "mcwpaths_flagstone_paths": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)flagstone_path$/,
        "mcwpaths_running_bond_paths": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)running_bond_path$/,
        "mcwpaths_crystal_floor_paths": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)crystal_floor_path$/,
        "mcwpaths_windmill_weave_paths": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)windmill_weave_path$/,
        "mcwstairs_balconies": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)balcony$/,
        "mcwstairs_bulk_stairs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)bulk_stairs$/,
        "mcwstairs_compact_stairs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)compact_stairs$/,
        "mcwstairs_loft_stairs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)loft_stairs$/,
        "mcwstairs_platforms": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)platform$/,
        "mcwstairs_railings": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)railing$/,
        "mcwstairs_skyline_stairs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)skyline_stairs$/,
        "mcwstairs_terrace_stairs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)terrace_stairs$/,
        "mcwwindows_gothic": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)gothic$/,
        "mcwwindows_arrow_slit": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)arrow_slit$/,
        "mcwwindows_blinds": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)blinds$/,
        "mcwwindows_curtain_rods": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)curtain_rod$/,
        "mcwwindows_windows_four": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)(?:plank_)?four_window$/,
        "mcwwindows_parapets": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)(?:log_|plank_)?parapet$/,
        "mcwwindows_louvered_shutters": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)louvered_shutter$/,
        "mcwwindows_pane_windows": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)(?:plank_)?pane_window$/,
        "mcwwindows_shutters": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:louvered_shutter)$).*(?:_|^)shutter$/,
        "mcwwindows_windows": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:four_window|pane_window|window2)$).*(?:_|^)(?:plank_)?window$/,
        "mcwwindows_windows_two": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)(?:plank_)?window2$/,
        "mcwroofs_attic_roofs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:planks_attic_roof)$).*(?:_|^)attic_roof$/,
        "mcwroofs_lower_roofs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:planks_lower_roof|planks_upper_lower_roof|upper_lower_roof)$).*(?:_|^)lower_roof$/,
        "mcwroofs_planks_attic_roofs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)planks_attic_roof$/,
        "mcwroofs_planks_lower_roofs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)planks_lower_roof$/,
        "mcwroofs_planks_roofs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)planks_roof$/,
        "mcwroofs_planks_steep_roofs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)planks_steep_roof$/,
        "mcwroofs_planks_top_roofs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)planks_top_roof$/,
        "mcwroofs_planks_upper_lower_roofs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)planks_upper_lower_roof$/,
        "mcwroofs_planks_upper_steep_roofs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)planks_upper_steep_roof$/,
        "mcwroofs_roofs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:attic_roof|lower_roof|planks_attic_roof|planks_lower_roof|planks_roof|planks_steep_roof|planks_top_roof|planks_upper_lower_roof|planks_upper_steep_roof|steep_roof|top_roof|upper_lower_roof|upper_steep_roof)$).*(?:_|^)roof$/,
        "mcwroofs_steep_roofs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:planks_steep_roof|planks_upper_steep_roof|upper_steep_roof)$).*(?:_|^)steep_roof$/,
        "mcwroofs_top_roofs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:planks_top_roof)$).*(?:_|^)top_roof$/,
        "mcwroofs_upper_lower_roofs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:planks_upper_lower_roof)$).*(?:_|^)upper_lower_roof$/,
        "mcwroofs_upper_steep_roofs": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?(?!.*(?:planks_upper_steep_roof)$).*(?:_|^)upper_steep_roof$/,
        "mcwtrpdoors_bamboo_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)bamboo_trapdoor$/,
        "mcwtrpdoors_bark_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)bark_trapdoor$/,
        "mcwtrpdoors_barn_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)barn_trapdoor$/,
        "mcwtrpdoors_barred_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)barred_trapdoor$/,
        "mcwtrpdoors_barrel_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)barrel_trapdoor$/,
        "mcwtrpdoors_beach_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)beach_trapdoor$/,
        "mcwtrpdoors_blossom_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)blossom_trapdoor$/,
        "mcwtrpdoors_cottage_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)cottage_trapdoor$/,
        "mcwtrpdoors_four_panel_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)four_panel_trapdoor$/,
        "mcwtrpdoors_glass_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)glass_trapdoor$/,
        "mcwtrpdoors_mystic_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)mystic_trapdoor$/,
        "mcwtrpdoors_paper_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)paper_trapdoor$/,
        "mcwtrpdoors_ranch_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)ranch_trapdoor$/,
        "mcwtrpdoors_swamp_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)swamp_trapdoor$/,
        "mcwtrpdoors_tropical_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)tropical_trapdoor$/,
        "mcwtrpdoors_whispering_trapdoors": /^.*:(?:(?:mcw|mcb|mcp|mcf|macaw|compat).*\/)?.*(?:_|^)whispering_trapdoor$/,
        "doors": /^.*:(?!.*(?:bark_glass_door|barn_glass_door)$).*(?:_|^)door$/,
        "trapdoors": /^.*:(?!.*(?:bark_trapdoor|barn_trapdoor)$).*(?:_|^)trapdoor$/,
        "stairs": /^.*:(?!.*(?:bridge_stair)$).*(?:_|^)stairs?$/,
        "slabs": /^.*:(?!.*(?:vertical_slab|chunk)$).*(?:_|^)slabs?$/,
        "fences": /^.*:(?!.*(?:horse_fence|picket_fence|stockade_fence|wired_fence|metal_fence|wired_fence|cheval_de_frise)$).*(?:_|^)fences?$/,
        "walls": /^.*:(?!.*(?:grass_topped_wall|modern_wall|pillar_wall|railing_wall)$).*(?:_|^)walls?$/,
        "planks": /^.*:(?!.*vertical_).*planks$/, 
        "vertical_planks": /^.*:vertical_(?:.*_)?planks$/,
        "leaf_carpets": /^.*:.*_leaf_(carpet|pile)$/
    }
};

ServerEvents.tags('item', event => {
    // 1. Explicit Overrides First (Complex lookaheads)
    Object.keys(autoCategories.explicit).forEach(key => {
        // Tag will be either `kubejs:emi_doors` for the dummies or auto suffix
        let explicitTag = `kubejs:emi_${key}`; 
        event.add(explicitTag, autoCategories.explicit[key]);
    });

    // 2. Automated Suffix Generator (Only generators if NOT overridden above)
    autoCategories.suffixes.forEach(suffix => {
        // Do not generate a generic auto suffix if we already provided a strict explicit rule for it
        if (!autoCategories.explicit[suffix] && !autoCategories.explicit[suffix + "s"]) {
            let tagName = `kubejs:auto_suffix_${suffix}`;
            let regexPattern = new RegExp(`^.*:(?:.*_)?${suffix}$`);
            event.add(tagName, regexPattern);
        }
    });

    // 3. Automated Prefix Generator
    autoCategories.prefixes.forEach(prefix => {
        let tagName = `kubejs:auto_prefix_${prefix}`;
        let regexPattern = new RegExp(`^.*:${prefix}_.*$`);
        event.add(tagName, regexPattern);
    });
});

ServerEvents.tags('item', event => { event.add('kubejs:dummy_empty_override', 'minecraft:structure_void'); });

ServerEvents.recipes(event => {
  autoCategories.suffixes.forEach(suffix => {
    event.shapeless('kubejs:emi_sync_dummy', `#kubejs:auto_suffix_${suffix}`).id(`kubejs:auto_emi_sync_suffix_${suffix}`);
  });
  autoCategories.prefixes.forEach(prefix => {
    event.shapeless('kubejs:emi_sync_dummy', `#kubejs:auto_prefix_${prefix}`).id(`kubejs:auto_emi_sync_prefix_${prefix}`);
  });
  autoCategories.explicit.forEach(explicitName => {
    event.shapeless('kubejs:emi_sync_dummy', `#kubejs:emi_${explicitName}`).id(`kubejs:auto_emi_sync_explicit_${explicitName}`);
  });
});
