global.excludes = {
    // Regex patterns (joined with |, tested against full item ID)
    pattern: [
        "copycat"
    ],
    // Exact item IDs to exclude (no - prefix needed here, all entries are excludes)
    exact: [
        // "somemod:broken_item"
    ]
};

// Shared Configuration for EMI Tags and Tabs
// Edit your items here. Both the server tags and client EMI menus read from this global file.

global.modifierTokens = {
    cut: "cut",
    smooth: "smooth",
    chiseled: "chiseled",
    layered: "layered",
    cracked: "cracked",
    cobbled: "cobbled",
    running_bond: "running_bond",
    windmill_weave: "windmill_weave",
    flagstone: "flagstone",
    crystal_floor: "crystal_floor",
    tile: "tiles?",
    pillar: "pillar",
    small: { pattern: "small", requires: ["brick"] },
    brick: "bricks?",
    polished: "polished",
    stripped: "stripped"
};

global.taxonomy = {
    // ─── Doors & Trapdoors ───────────────────────────────────────────────
    "doors": {
        pattern: "door$",
        exclude: ["mekanism", "block_factorys_bosses", "cabinet", "garage"],
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
            }
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

    // ─── Stone-modifier groups (dynamicGrouping: true) ───────────────────
    "stairs": {
        pattern: "stairs?$",
        dynamicGrouping: true,
        children: {
            "bulk_stairs": "bulk_stairs?$",
            "compact_stairs": "compact_stairs?$",
            "loft_stairs": "loft_stairs?$",
            "skyline_stairs": "skyline_stairs?$",
            "terrace_stairs": "terrace_stairs?$",
            "bridge_stairs": "bridge_stair$"
        }
    },
    "slabs": {
        pattern: "slabs?$",
        dynamicGrouping: true,
        children: {
            "vertical_slabs": { pattern: "vertical_slabs?$", children: {} }
        }
    },
    "walls": {
        pattern: "walls?$",
        dynamicGrouping: false,
        children: {
            "mcw_walls": {
                pattern: "^(?:mcwfences:|stonezone:mcf/).*wall$",
                noModifiers: true,
                children: {
                    "pillar_walls": {
                        pattern: "^(?:mcwfences:|stonezone:mcf/).*pillar_wall$",
                        exclude: "azure",
                        children: {
                            "brick_pillar_walls": "^(?:mcwfences:|stonezone:mcf/).*brick_pillar_wall$"
                        }
                    },
                    "railing_walls": {
                        pattern: "^(?:mcwfences:|stonezone:mcf/).*railing_.*wall$",
                        children: {
                            "brick_railing_walls": "^(?:mcwfences:|stonezone:mcf/).*railing_.*brick_wall$"
                        }
                    },
                    "modern_walls": {
                        pattern: "^(?:mcwfences:|stonezone:mcf/).*modern_.*wall$",
                        children: {
                            "brick_modern_walls": "^(?:mcwfences:|stonezone:mcf/).*modern_.*brick_wall$"
                        }
                    },
                    "grass_topped_walls": {
                        pattern: "^(?:mcwfences:|stonezone:mcf/).*grass_topped_wall$",
                        children: {
                            "brick_grass_topped_walls": "^(?:mcwfences:|stonezone:mcf/).*brick_grass_topped_wall$"
                        }
                    }
                }
            }
        }
    },
    "paths": {
        pattern: "^(mcwpaths:|stonezone:mcp/).*path$",
        dynamicGrouping: true,
        children: {
            "planks_paths": "planks_path$",
            "rocky_paths": "rocky_path$"
        }
    },

    // ─── Fences & Gates (no modifiers) ───────────────────────────────────
    "fences": {
        pattern: "fences?$",
        children: {
            "horse_fences": "horse_fence$",
            "picket_fences": "picket_fence$",
            "stockade_fences": "stockade_fence$",
            "wired_fences": "wired_fence$",
            "metal_fences": "metal_fence$",
            "cheval_de_frises": "cheval_de_frise$"
        }
    },
    "fence_gates": {
        pattern: "gate$",
        exclude: "supplementaries",
        children: {
            "railing_gates": {
                pattern: "railing_gate$",
                children: {
                    "brick_railing_gates": "bricks?_(?:[a-z0-9_]*_)?railing_gate$"
                }
            },
            "highley_gates": "highley_gate$",
            "pyramid_gates": "pyramid_gate$",
            "curved_gates": "curved_gate$",
            "metal_fence_gates": "metal_fence_gate$"
        }
    },
    "bridges": {
        pattern: "bridge$",
        exclude: "create_connected",
        children: {
            "bridge_piers": "bridge_pier$",
            "log_bridge_middles": "log_bridge_middle$",
            "rail_bridges": "rail_bridge$",
            "rope_bridges": "rope_.*_bridge$",
            "brick_bridges": "brick_bridge$",
            "balustrade_bridges": "balustrade_.*bridge$"
        }
    },

    // ─── Stripped-modifier groups (dynamicGrouping: true) ────────────────
    "logs": {
        pattern: "(?:log|stem)$",
        dynamicGrouping: true,
        exclude: [".*(?:wood|hyphae).*", "natures_spirit:lotus_stem", "aether:berry_bush_stem", "aethersdelight:peppermint_bush_stem", "aether_redux:zanberry_bush_stem"],
        exact: ["upgrade_aquatic:driftwood_log", "minecraft:bamboo_block", "natures_spirit:redwood_log"],
        children: {
            "hollow_logs": "hollow_.*_log$",
            "stripped_logs": {
                pattern: "stripped_(?:.*_)?(?:log|stem)$",
                exact: ["minecraft:stripped_bamboo_block"],
                children: {}
            }
        }
    },
    "wood": {
        pattern: "(?:wood|hyphae|driftwood|redwood)$",
        dynamicGrouping: true,
        exclude: [".*(?:log|stem).*", "supplementaries", "suppsquared", "railways"],
        children: {}
    },
    "windows": {
        pattern: "^(?:mcwwindows:|everycomp:mcw/|stonezone:mcw/).*window$",
        dynamicGrouping: true,
        children: {
            "plank_windows": {
                pattern: ".*plank_window$",
                children: {
                    "plank_windows_four": ".*plank_four_window$",
                    "plank_pane_windows": ".*plank_pane_window$",
                    "plank_windows_two": ".*plank_window2$"
                }
            },
            "windows_four": {
                pattern: "four_window$",
                children: {
                    "plank_windows_four": ".*plank_four_window$"
                }
            },
            "pane_windows": {
                pattern: "pane_window$",
                children: {
                    "plank_pane_windows": ".*plank_pane_window$"
                }
            },
            "windows_two": {
                pattern: "window2$",
                children: {
                    "plank_windows_two": ".*plank_window2$"
                }
            }
        }
    },
    "create_windows": {
        pattern: "^(?:everycomp:c/|create:|railways:).*window$",
        children: {
            "single_pane_locometal_windows": ".*single_pane_locometal_window$",
            "two_pane_locometal_windows": ".*two_pane_locometal_window$",
            "four_pane_locometal_windows": ".*four_pane_locometal_window$",
            "round_pane_locometal_windows": ".*round_pane_locometal_window$"
        }
    },
    "bookshelves": {
        pattern: "bookshelf$",
        dynamicGrouping: true,
        children: {
            "log_bookshelves": {
                pattern: "^(?:mcwfurnitures:|everycomp:mcfur/).*bookshelf$"
            }
        }
    },
    "cupboards": {
        pattern: "cupboard$",
        dynamicGrouping: true,
        children: {
            "bookshelf_cupboards": {
                pattern: "bookshelf_cupboard$"
            }
        }
    },
    "chairs": {
        pattern: "chair$",
        dynamicGrouping: true,
        children: {
            "modern_chairs": { pattern: "modern_chair$", children: {} },
            "stool_chairs": { pattern: "stool_chair$", children: {} },
            "striped_pattern_chairs": { pattern: "striped_chair$", children: {} }
        }
    },
    "tables": {
        pattern: "^(?:mcwfurnitures:|everycomp:mcfur/).*table$",
        dynamicGrouping: true,
        children: {
            "coffee_tables": { pattern: "coffee_table$", children: {} },
            "end_tables": { pattern: "end_table$", children: {} },
            "glass_tables": { pattern: "glass_table$", children: {} }
        }
    },
    "desks": {
        pattern: "desk$",
        dynamicGrouping: true,
        exclude: "security_desk",
        children: {
            "covered_desks": { pattern: "covered_desk$", children: {} },
            "modern_desks": { pattern: "modern_desk$", children: {} }
        }
    },
    "counters": {
        pattern: "counter$",
        dynamicGrouping: true,
        exclude: "geiger_counter",
        children: {
            "cupboard_counters": { pattern: "cupboard_counter$", children: {} },
            "drawer_counters": {
                pattern: "drawer_counter$",
                children: {
                    "double_drawer_counters": { pattern: "double_drawer_counter$", children: {} }
                }
            }
        }
    },
    "kitchen_cabinets": {
        pattern: "kitchen_cabinet$",
        dynamicGrouping: true,
        children: {
            "double_kitchen_cabinets": { pattern: "double_kitchen_cabinet$", children: {} },
            "glass_kitchen_cabinets": { pattern: "glass_kitchen_cabinet$", children: {} }
        }
    },
    "wardrobes": {
        pattern: "wardrobe$",
        dynamicGrouping: true,
        children: {
            "double_wardrobes": { pattern: "double_wardrobe$", children: {} },
            "modern_wardrobes": { pattern: "modern_wardrobe$", children: {} }
        }
    },
    "drawers": {
        pattern: "drawer$",
        dynamicGrouping: true,
        exclude: "cabinet_drawer",
        children: {
            "bookshelf_drawers": {
                pattern: "bookshelf_drawer$",
                children: {
                    "lower_bookshelf_drawers": { pattern: "lower_bookshelf_drawer$" }
                }
            },
            "double_drawers": { pattern: "double_drawer$", children: {} },
            "large_drawers": { pattern: "large_drawer$", children: {} },
            "triple_drawers": {
                pattern: "triple_drawer$",
                children: {
                    "lower_triple_drawers": { pattern: "lower_triple_drawer$", children: {} }
                }
            }
        }
    },
    "sinks": {
        pattern: "sink$",
        dynamicGrouping: true,
        children: {
            "kitchen_sinks": { pattern: "kitchen_sink$", children: {} }
        }
    },

    // ─── Glass ───────────────────────────────────────────────────────────
    "stained_glass": {
        pattern: "",
        tag: ["forge:stained_glass"],
        children: {
            "stained_glass_panes": {
                pattern: "",
                tag: ["forge:stained_glass_panes"]
            },
            "stained_framed_glass": {
                pattern: "",
                tag: ["quark:stained_framed_glasses"],
                children: {
                    "stained_framed_glass_panes": {
                        pattern: "",
                        tag: ["quark:stained_framed_glass_panes"]
                    }
                }
            }
        }
    },
    "mosaic_glass": {
        pattern: "mosaic_glass$",
        children: {
            "mosaic_glass_panes": "mosaic_glass_pane$"
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
    "corundums": {
        pattern: "corundum$",
        children: {
            "waxed_corundums": "waxed_.*_corundum$",
            "corundum_panes": "corundum_pane$",
            "corundum_clusters": "corundum_cluster$"
        }
    },

    // ─── Roofs & Gutters ─────────────────────────────────────────────────
    "gutter_bases": {
        pattern: "^mcwroofs:.*gutter_base",
        children: {}
    },
    "gutter_middles": {
        pattern: "^mcwroofs:.*gutter_middle",
        children: {}
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
            "striped_awnings": "striped_awning$"
        }
    },

    // ─── Rails ───────────────────────────────────────────────────────────
    "train_tracks": {
        pattern: "railways:track_",
        exclude: ["coupler", "switch", "monorail"],
        children: {
            "narrow_train_tracks": "railways:track_.*_narrow$",
            "wide_train_tracks": "railways:track_.*_wide$"
        }
    },

    // ─── Pavings & Paths ─────────────────────────────────────────────────
    "pavings": {
        pattern: "paving$",
        children: {
            "dumble_paving": "dumble_paving$"
        }
    },

    // ─── Containers & Storage ────────────────────────────────────────────
    "chests": {
        pattern: "chest$",
        exclude: ["cursed", "boat", "minecraft:ender_chest", "unusualend:warped_chest", "aether:treasure_chest", "rottencreatures:treasure_chest", "ae2:chest", "alexscaves:cave_painting_vallumraptor_chest", "echochest:echo_chest", "netherchested:nether_chest", "mekanism:personal_chest"],
        children: {
            "trapped_chests": "trapped_.*chest$"
        }
    },
    "potions": {
        pattern: "potion$",
        children: {
            "lingering_potions": "lingering_potion$",
            "splash_potions": "splash_potion$"
        }
    },

    // ─── Nature & Materials ──────────────────────────────────────────────
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
    "corals": {
        pattern: "coral$",
        children: {
            "coral_blocks": "coral_block$",
            "coral_fans": "coral_fan$"
        }
    },
    "carpets": {
        pattern: "carpet$",
        exclude: ["bamboo", "cloudbloom", "bison", "fungal"],
        children: {
            "leaf_carpets": "leaf_carpet$",
            "moss_carpets": "moss_carpet$"
        }
    },
    "ladders": {
        pattern: "",
        tag: ["quark:ladders", "blueprint:wooden_ladders"],
        children: {}
    },
    "boats": {
        pattern: "boat$",
        exact: ["minecraft:bamboo_raft"],
        children: {
            "furnace_boats": ["furnace_boat$", "boatload:bamboo_furnace_raft"],
            "chest_boats": ["chest_boat$", "minecraft:bamboo_chest_raft"],
            "large_boats": ["large_.*_boat$", "boatload:wide_bamboo_raft"]
        }
    },
    "signs": {
        pattern: "sign$",
        exclude: ["spatial_sign"],
        children: {
            "canvas_signs": {
                pattern: ".*canvas_sign$",
                exclude: "hanging",
            },
            "hanging_signs": {
                pattern: "hanging_(?:.*_)?sign$",
                children: {
                    "hanging_canvas_signs": ".*hanging_.*canvas_sign$"
                }
            }
        }
    },
    "parapets": {
        pattern: "parapet$",
        children: {
            "log_parapets": "(log|stem)_parapet$",
            "plank_parapets": "plank_parapet$"
        }
    },
    "dart_shooters": {
        pattern: "dart_shooter$"
    },
    "darts": {
        pattern: "^aether.*dart$"
    },
    "table_cloths": {
        pattern: "table_cloth$",
        children: {
            "table_covers": "andesite_table_cloth$|brass_table_cloth$|copper_table_cloth$"
        }
    },
    "buttons": {
        pattern: "button$",
        exclude: "eject"
    },

    // ─── Blocks sink (catch-all with stone modifiers) ────────────────────
    "blocks": {
        exclude: [
            "quark:iron_pillar", "alexscaves:scarlet_neodymium_pillar",
            "alexscaves:azure_neodymium_pillar", "locked", "treasure"
        ],
        exact: [
            "-minecraft:brick",
            "-minecraft:nether_brick",
            "-supplementaries:ash_brick",
            "-vanillabackport:resin_brick",
            "-endergetic:eumus_brick",
            "-ancient_aether:valkyrie_brick",
            "-alexscaves:cinder_brick",
            "-create:polished_roze_quartz"
        ],
        dynamicGrouping: true,
        isSink: true,
        excludeModifiers: ["stripped"]
    }
};

// ─── Standalone tags (no parent/child exclusion) ─────────────────────────
global.standaloneTags = {
    "paper_lanterns": "paper_lantern$",
    "beehives": "beehive",
    "food_displays": "^displaydelight:(?!.*(?:small_)?food_plate$).*",
    "shingles": "^quark:.*shingles$",
    "pressure_plates": "pressure_plate$",
    "planks": "planks$",
    "leaves": "leaves$",
    "saplings": "(?:sapling|propagule)$",
    "beds": "bed$",
    "paintings": "painting$",
    "candles": "candle$",
    "banners": "banner$",
    "shulker_boxes": "shulker_box$",
    "seeds": "seeds$",
    "torches": "torch$",
    "campfires": "campfire$",
    "banner_patterns": "banner_pattern",
    "hedges": "hedge$",
    "balconies": "balcony$",
    "platforms": "platform$",
    "railings": "railing$",
    "gothic": "gothic$",
    "arrow_slit": "arrow_slit$",
    "blinds": "blinds$",
    "curtains": "curtain$",
    "curtain_rods": "curtain_rod$",
    "ores": "[a-z0-9_]+_ores?$"
};

// ─── Custom regex-matched EMI groups ─────────────────────────────────────
global.customEmiGroups = {
    "ae2:portable_item_cells": "^ae2:portable_item_cell.*",
    "ae2:portable_fluid_cells": "^ae2:portable_fluid_cell.*",
    "ae2:cell_components": "^ae2:cell_component.*",
    "ae2:item_storage_cells": "^ae2:item_storage_cell.*",
    "ae2:fluid_storage_cells": "^ae2:fluid_storage_cell.*",
    "ae2:crafting_storage": "^ae2:.*crafting_storage",
    "ae2:lumen_paint_balls": "^ae2:.*lumen_paint_ball",
    "iceandfire:podiums": "^iceandfire:podium",
    "appmek:chemical_storage_cells": "^appmek:chemical_storage_cell.*",
    "appmek:portable_chemical_storage_cells": "^appmek:portable_chemical_storage_cell.*",
    "endergetic:bolloom_balloons": "^endergetic:.*_bolloom_balloon$",
    "ae2:facades": "ae2:facade",
    "supplementaries:buntings": "supplementaries:bunting",
    "supplementaries:bamboo_spikes_tipped": "supplementaries:bamboo_spikes_tipped",
    "minecraft:tipped_arrows": "minecraft:tipped_arrow",
    "minecraft:suspicious_stews": "minecraft:suspicious_stew",
    "irons_spellbooks:scrolls": "^irons_spellbooks:scroll(?!_forge)",
    "alexscaves:jelly_beans": "alexscaves:jelly_bean",
    "alexscaves:cave_paintings": "^alexscaves:cave_painting.*",
    "quark:seed_pouches": "quark:seed_pouch",
    "quark:pathfinders_quills": "quark:pathfinders_quill",
    "mcwfurnitures:couches": "couch$",
    "mcwfurnitures:chaises": "chaise$",
    "minecraft:goat_horns": "minecraft:goat_horn",
    "azure_seastone_murals": "^cataclysm:azure_seastone_mural(?!_empty)",
    "curved_azure_seastones": "^cataclysm:curved_azure_seastone"
};

// ─── Pre-existing mod tags registered as EMI tabs ────────────────────────
global.nativeEmiGroups = [
    "minecraft:music_discs",
    "minecraft:paintings",
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
    "opposing_force:laser_blades",
    "opposing_force:blasters",
    "alexscaves:rock_candies",
    "alexscaves:radon_lamps",
    "quark:crystal_lamp",
    "create_kart:dyeable_karts",
    "minecraft:decorated_pot_sherds",
    "minecraft:wool",
    "supplementaries:sconces",
    "aether:aerclouds",
    "irons_spellbooks:inscribed_rune",
    "minecraft:trim_templates",
    "minecraft:smithing_templates"
];