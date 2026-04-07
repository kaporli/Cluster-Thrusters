// Shared Configuration for EMI Tags and Tabs
// Edit your items here. Both the server tags and client EMI menus read from this global file.

global.taxonomy = {
    "doors": {
        pattern: "door$",
        children: {
            "bamboo_doors": ["bamboo_door$", "mcwdoors:print_bamboo"],
            "barn_doors": "barn_door$",
            "beach_doors": ["beach_door$", "mcwdoors:print_jungle"],
            "cottage_doors": ["cottage_door$", "mcwdoors:print_spruce"],
            "four_panel_doors": ["four_panel_door$", "mcwdoors:print_dark_oak"],
            "japanese_two_doors": "japanese2_door$",
            "japanese_doors": "japanese_door$",
            "modern_doors": "modern_door$",
            "mystic_doors": ["mystic_door$", "mcwdoors:print_mystic"],
            "nether_doors": ["nether_door$", "mcwdoors:print_nether"],
            "paper_doors": ["paper_door$", "mcwdoors:print_birch"],
            "stable_doors": "stable_door$",
            "stable_head_doors": "stable_head_door$",
            "swamp_doors": ["swamp_door$", "mcwdoors:print_swamp"],
            "tropical_doors": ["tropical_door$", "mcwdoors:print_acacia"],
            "waffle_doors": ["waffle_door$", "mcwdoors:print_waffle"],
            "western_doors": "western_door$",
            "whispering_doors": ["whispering_door$", "mcwdoors:print_whispering"],
            "classic_doors": ["classic_door$", "mcwdoors:print_oak"],
            "hinged_locometal_doors": "hinged_locometal_door$",
            "sliding_locometal_doors": "sliding_locometal_door$",
            "folding_locometal_doors": "folding_locometal_door$",
            "glass_doors": {
                pattern: "glass_door$",
                exact: ["-ancient_aether:aerogel_glass_door"],
                children: {
                    "barn_glass_doors": "barn_glass_door$",
                    "bark_glass_doors": "bark_glass_door$"
                }
            },
        }
    },
    "trapdoors": {
        pattern: "trapdoor$",
        children: {
            "bamboo_trapdoors": ["bamboo_trapdoor$", "mcwtrpdoors:print_bamboo"],
            "bark_trapdoors": "bark_trapdoor$",
            "barn_trapdoors": "barn_trapdoor$",
            "barred_trapdoors": ["barred_trapdoor$", "mcwtrpdoors:print_barred"],
            "classic_trapdoors": ["classic_trapdoor$", "mcwtrpdoors:print_classic"],
            "locometal_trapdoors": "locometal_trapdoor$",
            "barrel_trapdoors": "barrel_trapdoor$",
            "beach_trapdoors": ["beach_trapdoor$", "mcwtrpdoors:print_beach"],
            "blossom_trapdoors": ["blossom_trapdoor$", "mcwtrpdoors:print_blossom"],
            "cottage_trapdoors": ["cottage_trapdoor$", "mcwtrpdoors:print_cottage"],
            "four_panel_trapdoors": ["four_panel_trapdoor$", "mcwtrpdoors:print_four_panel"],
            "glass_trapdoors": "glass_trapdoor$",
            "mystic_trapdoors": ["mystic_trapdoor$", "mcwtrpdoors:print_mystic"],
            "paper_trapdoors": ["paper_trapdoor$", "mcwtrpdoors:print_paper"],
            "ranch_trapdoors": "ranch_trapdoor$",
            "swamp_trapdoors": ["swamp_trapdoor$", "mcwtrpdoors:print_swamp"],
            "tropical_trapdoors": ["tropical_trapdoor$", "mcwtrpdoors:print_tropical"],
            "whispering_trapdoors": ["whispering_trapdoor$", "mcwtrpdoors:print_whispering"]
        }
    },
    "stairs": {
        pattern: "stairs?$",
        children: {
            "cut_stairs": "cut_[a-z0-9_]*stairs?$",
            "smooth_stairs": "smooth_[a-z0-9_]*stairs?$",
            "chiseled_stairs": "chiseled_[a-z0-9_]*stairs?$",
            "polished_stairs": "polished_[a-z0-9_]*stairs?$",
            "cut_sandstone_stairs": "cut_sandstone_stairs?$",
            "smooth_sandstone_stairs": "smooth_sandstone_stairs?$",
            "chiseled_sandstone_stairs": "chiseled_sandstone_stairs?$",
            "bulk_stairs": "bulk_stairs?$",
            "compact_stairs": "compact_stairs?$",
            "loft_stairs": "loft_stairs?$",
            "skyline_stairs": "skyline_stairs?$",
            "terrace_stairs": "terrace_stairs?$",
            "bridge_stairs": "bridge_stair$"
        }
    },

    "vertical_slabs": {
        pattern: "vertical_slabs?$",
        children: {
            "cut_vertical_slabs": "cut_[a-z0-9_]*vertical_slabs?$",
            "smooth_vertical_slabs": "smooth_[a-z0-9_]*vertical_slabs?$",
            "chiseled_vertical_slabs": "chiseled_[a-z0-9_]*vertical_slabs?$",
            "polished_vertical_slabs": "polished_[a-z0-9_]*vertical_slabs?$",
            "cut_sandstone_vertical_slabs": "cut_sandstone_vertical_slabs?$",
            "smooth_sandstone_vertical_slabs": "smooth_sandstone_vertical_slabs?$",
            "chiseled_sandstone_vertical_slabs": "chiseled_sandstone_vertical_slabs?$",
        }
    },
    "slabs": {
        pattern: "slabs?$",
        exclude: ".*vertical_",
        children: {
            "cut_slabs": "cut_[a-z0-9_]*slabs?$",
            "smooth_slabs": "smooth_[a-z0-9_]*slabs?$",
            "chiseled_slabs": "chiseled_[a-z0-9_]*slabs?$",
            "polished_slabs": "polished_[a-z0-9_]*slabs?$",
            "cut_sandstone_slabs": "cut_sandstone_slabs?$",
            "smooth_sandstone_slabs": "smooth_sandstone_slabs?$",
            "chiseled_sandstone_slabs": "chiseled_sandstone_slabs?$",
        }
    },
    "walls": {
        pattern: "walls?$",
        children: {
            "cut_walls": "cut_[a-z0-9_]*walls?$",
            "smooth_walls": "smooth_[a-z0-9_]*walls?$",
            "chiseled_walls": "chiseled_[a-z0-9_]*walls?$",
            "polished_walls": "polished_[a-z0-9_]*walls?$",
            "cut_sandstone_walls": "cut_sandstone_walls?$",
            "smooth_sandstone_walls": "smooth_sandstone_walls?$",
            "chiseled_sandstone_walls": "chiseled_sandstone_walls?$",
            "brick_walls": "^(mcwfences:|stonezone:mcf/).*brick_wall$",
            "pillar_walls": "pillar_wall$",
            "railing_walls": "railing_.*wall$",
            "modern_walls": "modern_.*wall$",
            "grass_topped_walls": "grass_topped_wall$"
        }
    },
    "fences": {
        pattern: "fences?$",
        children: {
            "horse_fences": "horse_fence$",
            "picket_fences": "picket_fence$",
            "stockade_fences": "stockade_fence$",
            "wired_fences": "wired_fence$",
            "metal_fences": "metal_fence$",
            "cheval_de_frises": "cheval_de_frise$",
        }
    },
    "bridges": {
        pattern: "bridge$",
        children: {
            "bridge_piers": "bridge_pier$",
            "log_bridge_middles": "log_bridge_middle$",
            "rail_bridges": "rail_bridge$",
            "rope_bridges": "rope_.*_bridge$",
            "brick_bridges": "brick_bridge$",
            "balustrade_bridges": "balustrade_.*bridge$"
        }
    },
    "logs": {
        pattern: "log$",
        exclude: ".*wood.*",
        children: {
            "hollow_logs": "hollow_.*_log$",
            "stripped_logs": "stripped_.*_log$"
        }
    },
    "wood": {
        pattern: "wood$",
        exclude: ".*log.*",
        children: {
            "stripped_wood": "stripped_.*_wood$"
        }
    },
    "windows": {
        pattern: "(?:plank_)?window$",
        children: {
            "windows_four": "(?:plank_)?four_window$",
            "pane_windows": "(?:plank_)?pane_window$",
            "windows_two": "(?:plank_)?window2$"
        }
    },
    "window_panes": {
        pattern: "window_pane$",
        children: {}
    },
    "shutters": {
        pattern: "shutter$",
        children: {
            "louvered_shutters": "louvered_shutter$"
        }
    },
    "shutters": {
        pattern: "shutter$",
        children: {
            "waxed_corundums": "waxed_.*_corundum$",
            "corundum_panes": "corundum_pane$",
            "corundum_clusters": "corundum_cluster$",
        }
    },
    "roofs": {
        pattern: "roof$",
        children: {
            "attic_roofs": "attic_roof$",
            "lower_roofs": "lower_roof$",
            "planks_attic_roofs": "planks_attic_roof$",
            "planks_lower_roofs": "planks_lower_roof$",
            "planks_roofs": "planks_roof$",
            "planks_steep_roofs": "planks_steep_roof$",
            "planks_top_roofs": "planks_top_roof$",
            "planks_upper_lower_roofs": "planks_upper_lower_roof$",
            "planks_upper_steep_roofs": "planks_upper_steep_roof$",
            "steep_roofs": "steep_roof$",
            "top_roofs": "top_roof$",
            "upper_lower_roofs": "upper_lower_roof$",
            "upper_steep_roofs": "upper_steep_roof$",
            "striped_awnings": "striped_awning$",
        }
    },
    "chairs": {
        pattern: "chair$",
        children: {
            "modern_chairs": "modern_chair$",
            "stool_chairs": "stool_chair$",
            "striped_chairs": "striped_chair$"
        }
    },
    "tables": {
        pattern: "^(?:mcwfurnitures:|everycomp:mcfur/).*table$",
        children: {
            "coffee_tables": "coffee_table$",
            "end_tables": "end_table$",
            "glass_tables": "glass_table$"
        }
    },
    "desks": {
        pattern: "desk$",
        children: {
            "covered_desks": "covered_desk$",
            "modern_desks": "modern_desk$"
        }
    },
    "counters": {
        pattern: "counter$",
        children: {
            "cupboard_counters": "cupboard_counter$",
            "double_drawer_counters": "double_drawer_counter$",
            "drawer_counters": "drawer_counter$"
        }
    },
    "kitchen_cabinets": {
        pattern: "kitchen_cabinet$",
        children: {
            "double_kitchen_cabinets": "double_kitchen_cabinet$",
            "glass_kitchen_cabinets": "glass_kitchen_cabinet$"
        }
    },
    "wardrobes": {
        pattern: "wardrobe$",
        children: {
            "double_wardrobes": "double_wardrobe$",
            "modern_wardrobes": "modern_wardrobe$"
        }
    },
    "drawers": {
        pattern: "drawer$",
        children: {
            "bookshelf_drawers": "bookshelf_drawer$",
            "double_drawers": "double_drawer$",
            "large_drawers": "large_drawer$",
            "lower_bookshelf_drawers": "lower_bookshelf_drawer$",
            "lower_triple_drawers": "lower_triple_drawer$",
            "triple_drawers": "triple_drawer$"
        }
    },
    "carpets": {
        pattern: "carpet$",
        children: {
            "leaf_carpets": ".*_leaf_(?:carpet|pile)$",
            "wool_carpets": "[a-z0-9_]+_wool_carpet$",
            "moss_carpets": "moss_carpet$"
        }
    },
    "glass": {
        pattern: "glass$",
        children: {
            "stained_glass": "stained_glass$"
        }
    },
    "glass_panes": {
        pattern: "glass_pane$",
        children: {
            "stained_glass_panes": "stained_glass_pane$"
        }
    },
    "concrete": {
        pattern: "concrete$",
        children: {
            "concrete_powder": "concrete_powder$"
        }
    },
    "terracotta": {
        pattern: "terracotta$",
        children: {
            "glazed_terracotta": "glazed_terracotta$"
        }
    },

    "gates": {
        pattern: "gate$",
        exclude: ".*fence_",
        children: {
            "railing_gates": "railing_gate$",
            "highley_gates": "highley_gate$",
            "pyramid_gates": "pyramid_gate$",
            "curved_gates": "curved_gate$",
            "metal_gates": "metal_gate$",
        }
    },
    "paths": {
        pattern: "^(mcwpaths:|stonezone:mcp/).*path$",
        children: {
            "planks_paths": "planks_path$",
            "running_bond_paths": "running_bond_path$",
            "rocky_paths": "rocky_path$",
            "rocky_paths": "rocky_path$",
            "windmill_weave_paths": "windmill_weave_path$",
            "flagstone_paths": "flagstone_path$",
            "crystal_floor_paths": "crystal_floor_path$",
        }
    },
    "pavings": {
        pattern: "paving$",
        children: {
            "dumble_paving": "dumble_paving$"
        }
    },
    "bookshelves": {
        pattern: "bookshelf$",
        children: {}
    },
    "cupboards": {
        pattern: "cupboard$",
        children: {
            "bookshelf_cupboards": "bookshelf_cupboard$"
        }
    },
    "sinks": {
        pattern: "sink$",
        children: {
            "kitchen_sinks": "kitchen_sink$"
        }
    },
    "chests": {
        pattern: "",
        exact: ["#forge:chests/wooden"],
        children: {
            "trapped_chests": "trapped_chest$"
        }
    },
    "ladders": {
        pattern: "",
        exact: ["#quark:ladders", "#blueprint:wooden_ladders"],
        children: {}
    },
    "boats": {
        pattern: "boat$",
        children: {
            "furnace_boats": "furnace_boat$",
            "chest_boats": "chest_boat$",
            "large_boats": "large_.*_boat$"
        }
    },
    "sandstone": {
        pattern: "sandstone$",
        children: {
            "cut_sandstone": "cut_sandstone$",
            "smooth_sandstone": "smooth_sandstone$",
            "chiseled_sandstone": "chiseled_sandstone$",
            "layered_sandstone": "layered_.*sandstone$",
        }
    },
    "beehives": {
        pattern: "beehive",
        children: {}
    }
};

// Miscellaneous standalone tags that aren't part of a parent/child exclusion relationship
global.standaloneTags = {
    "hedges": "hedge$",
    "balconies": "balcony$",
    "platforms": "platform$",
    "railings": "railing$",
    "gothic": "gothic$",
    "arrow_slit": "arrow_slit$",
    "blinds": "blinds$",
    "curtains": "curtain$",
    "curtain_rods": "curtain_rod$",
    "parapets": "(?:log_|plank_)?parapet$",
    "ceiling_fan_lights": "ceiling_fan_light$",
    "tiki_torches": "tiki_torch$",
    "ores": "[a-z0-9_]+_ores?$",
    "raw_ores": "raw_(?:iron|gold|copper|zinc|silver|lead|nickel|tin|aluminum|uranium|osmium|platinum|tungsten|bismuth|cobalt|[a-z0-9_]+_ore)$",
    // "bars": "[a-z0-9_]+_bars$"
};

// Modifiers (like smooth_blocks, cut_blocks) match prefixes, so we globally exclude ALL standard shapes 
// to prevent "smooth_blocks" from eating "smooth_stairs".
global.allShapes = [
    "stairs?", "slabs?", "walls?", "fences?", "gate", "doors?", "trapdoors?", "buttons?", "plates?",
    "pillars?", "bricks?", "tiles?", "carpet", "pane", "window", "roof", "bridge", "chair", "table",
    "desk", "drawer", "cabinet", "counter", "paving", "path", "balcony", "platform", "railing", "chunk"
].join("|");

global.basicSuffixes = [
    "fence_gate", "button", "pressure_plate", "bricks", "tiles", "pillar", "cobblestone",
    "planks", "leaves", "sapling", "bed", "sign", "hanging_sign",
    "candle", "banner", "shulker_box", "seeds",
    // "ingot", "nugget", "dust",
    // "shovel", "hoe", "sword", "helmet", "chestplate", "leggings", "boots", "axe", "pickaxe",
    "brick", "chain", "torch", "lantern", "campfire", "stem", "hyphae",
    "coral", "coral_block", "coral_fan",
    // "nylium", "wart_block"
];

// Curios types to create simple pass-through EMI groups for
global.curiosTypes = [
    "ring", "necklace", "belt", "bracelet", "charm", "head", "hands", "back"
];

// Custom tags you specifically define using Regex matching over all items.
// These will be generated in auto_tags.js, and registered as a tab in auto_emi_groups.js
global.customEmiGroups = {
    "ae2:portable_item_cells": "^ae2:portable_item_cell.*",
    "ae2:portable_fluid_cells": "^ae2:portable_fluid_cell.*",
    "ae2:cell_components": "^ae2:cell_component.*",
    "ae2:item_storage_cells": "^ae2:item_storage_cell.*",
    "ae2:fluid_storage_cells": "^ae2:fluid_storage_cell.*",
    "ae2:crafting_storage": "^ae2:.*crafting_storage",
    "ae2:lumen_paint_balls": "^ae2:.*lumen_paint_ball",

    "appmek:chemical_storage_cells": "^appmek:chemical_storage_cell.*",
    "appmek:portable_chemical_storage_cells": "^appmek:portable_chemical_storage_cell.*",

    "endergetic:bolloom_balloons": "^endergetic:.*_bolloom_balloon$",

    "ae2:facades": "ae2:facade",
    "supplementaries:buntings": "supplementaries:bunting",
    "supplementaries:bamboo_spikes_tipped": "supplementaries:bamboo_spikes_tipped",
    "irons_spellbooks:scrolls": "irons_spellbooks:scroll",
    "alexscaves:jelly_beans": "alexscaves:jelly_bean",
    "alexscaves:cave_paintings": "^alexscaves:cave_painting.*",
    "quark:seed_pouches": "quark:seed_pouch",
    "quark:pathfinders_quills": "quark:pathfinders_quill"
};

// Pre-existing mod tags that you don't need to generate, but you DO want to register as EMI tabs
global.nativeEmiGroups = [
    "minecraft:music_discs",
    "quark:vertical_planks",
    "quark:vertical_slabs",
    "quark:posts",
    "vanillabackport:harnesses",
    "minecraft:buttons",
    "supplementaries:sacks",
    "supplementaries:presents",
    "supplementaries:trapped_presents",
    "supplementaries:candle_holders",
    "supplementaries:flags",
    "supplementaries:awnings",
    "supplementaries:sign_posts",
    "suppsquared:item_shelves",
    "comforts:sleeping_bags",
    "comforts:hammocks",
    "railways:long_stack",
    "railways:burner_stack",
    "railways:coalburner_stack",
    "railways:oilburner_stack",
    "railways:streamlined_stack",
    "railways:woodburner_stack",
    "create:toolboxes",
    "create:table_cloths",
    "create:postboxes",
    "create:valve_handles",
    "create:seats",
    "ae2:paint_balls",
    "wan_ancient_beasts:charger_armors",
    "wan_ancient_beasts:hang_gliders",
    "natures_spirit:kaolin",
    "natures_spirit:chalk",
    "waystones:sharestones",
    "railways:filled_paint_pitchers",
    "farmersdelight:cabinets",
    "domesticationinnovation:pet_beds",
    "railways:conductor_caps",
    "create:tracks",
    "aether:dart_shooters",
    "opposing_force:laser_blades",
    "opposing_force:blasters",
    "alexscaves:rock_candies",
    "alexscaves:radon_lamps",
    "forge:tools/knives",
];
