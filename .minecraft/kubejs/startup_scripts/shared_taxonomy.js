// Shared Configuration for EMI Tags and Tabs
// Edit your items here. Both the server tags and client EMI menus read from this global file.

global.taxonomy = {
    "doors": {
        pattern: "door$",
        exclude: ["mekanism", "copycat", "block_factorys_bosses", "cabinet", "garage"],
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
        applyModifiers: ["stone"],
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
        applyModifiers: ["stone"],
        children: {
            "vertical_slabs": {
                pattern: "vertical_slabs?$",
                children: {}
            },
        }
    },
    "walls": {
        pattern: "walls?$",
        applyModifiers: ["stone"],
        children: {
            // Parent for ALL Macaw's Fences & Walls / Stonezone:MCF walls.
            // noModifiers: stone modifier groups (bricks_walls, pillar_walls, etc.) are generated
            // as SIBLINGS, not inside this group. Every mcwfences item must be covered by a named
            // descendant so the sibling-exclusion algorithm keeps it out of those groups.
            // Stonezone has TWO brick wall naming conventions:
            //   railing-first:  railing_{mat}_brick_wall  → railing_walls > bricks_railing_walls
            //   material-first: {mat}_brick_railing_wall  → mcw_brick_railing_walls
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
                            "brick_railing_walls": "^(?:mcwfences:|stonezone:mcf/).*railing_.*brick_wall$",
                        }
                    },
                    "modern_walls": {
                        pattern: "^(?:mcwfences:|stonezone:mcf/).*modern_.*wall$",
                        children: {
                            "brick_modern_walls": "^(?:mcwfences:|stonezone:mcf/).*modern_.*brick_wall$",
                        }
                    },
                    "grass_topped_walls": {
                        pattern: "^(?:mcwfences:|stonezone:mcf/).*grass_topped_wall$",
                        children: {
                            "brick_grass_topped_walls": "^(?:mcwfences:|stonezone:mcf/).*brick_grass_topped_wall$"
                        }
                    }
                }
            },
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
    "fence_gates": {
        pattern: "gate$",
        exclude: "supplementaries",
        children: {
            "railing_gates": {
                pattern: "railing_gate$",
                children: {
                    "brick_railing_gates": "bricks?_(?:[a-z0-9_]*_)?railing_gate$",
                }
            },
            "highley_gates": "highley_gate$",
            "pyramid_gates": "pyramid_gate$",
            "curved_gates": "curved_gate$",
            "metal_fence_gates": "metal_fence_gate$",
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
    "logs": {
        pattern: "(?:log|stem)$",
        applyModifiers: ["stripped"],
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
        applyModifiers: ["stripped"],
        exclude: [".*(?:log|stem).*", "supplementaries", "suppsquared", "railways"],
        children: {
        }
    },
    "windows": {
        pattern: "^(?:mcwwindows:|everycomp:mcw/|stonezone:mcw/).*window$",
        applyModifiers: ["stripped"],
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
    "stained_glass": {
        pattern: "",
        exact: ["#forge:stained_glass"],
        children: {
            "stained_glass_panes": {
                pattern: "",
                exact: ["#forge:stained_glass_panes"]
            },
            "stained_framed_glass": {
                pattern: "",
                exact: ["#quark:stained_framed_glasses"],
                children: {
                    "stained_framed_glass_panes": {
                        pattern: "",
                        exact: ["#quark:stained_framed_glass_panes"]
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
    "train_tracks": {
        pattern: "railways:track_",
        exclude: ["coupler", "switch", "monorail"],
        children: {
            "narrow_train_tracks": "railways:track_.*_narrow$",
            "wide_train_tracks": "railways:track_.*_wide$",
        }
    },
    "corundums": {
        pattern: "corundum$",
        children: {
            "waxed_corundums": "waxed_.*_corundum$",
            "corundum_panes": "corundum_pane$",
            "corundum_clusters": "corundum_cluster$",
        }
    },
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
            "striped_awnings": "striped_awning$",
        }
    },
    "chairs": {
        pattern: "chair$",
        applyModifiers: ["stripped"],
        children: {
            "modern_chairs": {
                pattern: "modern_chair$",
                children: {
                }
            },
            "stool_chairs": {
                pattern: "stool_chair$",
                children: {
                }
            },
            "striped_pattern_chairs": {
                pattern: "striped_chair$",
                children: {
                }
            }
        }
    },
    "tables": {
        pattern: "^(?:mcwfurnitures:|everycomp:mcfur/).*table$",
        applyModifiers: ["stripped"],
        children: {
            "coffee_tables": {
                pattern: "coffee_table$",
                children: {
                }
            },
            "end_tables": {
                pattern: "end_table$",
                children: {
                }
            },
            "glass_tables": {
                pattern: "glass_table$",
                children: {
                }
            }
        }
    },
    "desks": {
        pattern: "desk$",
        applyModifiers: ["stripped"],
        exclude: "security_desk",
        children: {
            "covered_desks": {
                pattern: "covered_desk$",
                children: {
                }
            },
            "modern_desks": {
                pattern: "modern_desk$",
                children: {
                }
            }
        }
    },
    "counters": {
        pattern: "counter$",
        applyModifiers: ["stripped"],
        exclude: "geiger_counter",
        children: {
            "cupboard_counters": {
                pattern: "cupboard_counter$",
                children: {
                }
            },
            "drawer_counters": {
                pattern: "drawer_counter$",
                children: {
                    "double_drawer_counters": {
                        pattern: "double_drawer_counter$",
                        children: {
                        }
                    }
                }
            }
        }
    },
    "kitchen_cabinets": {
        pattern: "kitchen_cabinet$",
        applyModifiers: ["stripped"],
        children: {
            "double_kitchen_cabinets": {
                pattern: "double_kitchen_cabinet$",
                children: {
                }
            },
            "glass_kitchen_cabinets": {
                pattern: "glass_kitchen_cabinet$",
                children: {
                }
            }
        }
    },
    "wardrobes": {
        pattern: "wardrobe$",
        applyModifiers: ["stripped"],
        children: {
            "double_wardrobes": {
                pattern: "double_wardrobe$",
                children: {
                }
            },
            "modern_wardrobes": {
                pattern: "modern_wardrobe$",
                children: {
                }
            }
        }
    },
    "drawers": {
        pattern: "drawer$",
        applyModifiers: ["stripped"],
        exclude: "cabinet_drawer",
        children: {
            "bookshelf_drawers": {
                pattern: "bookshelf_drawer$",
                children: {
                    "lower_bookshelf_drawers": {
                        pattern: "lower_bookshelf_drawer$"
                    }
                }
            },
            "double_drawers": {
                pattern: "double_drawer$",
                children: {
                }
            },
            "large_drawers": {
                pattern: "large_drawer$",
                children: {
                }
            },
            "triple_drawers": {
                pattern: "triple_drawer$",
                children: {
                    "lower_triple_drawers": {
                        pattern: "lower_triple_drawer$",
                        children: {
                        }
                    }
                }
            }
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
    "paths": {
        pattern: "^(mcwpaths:|stonezone:mcp/).*path$",
        applyModifiers: ["stone"],
        children: {
            "planks_paths": "planks_path$",
            "rocky_paths": "rocky_path$"
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
        applyModifiers: ["stripped"],
        children: {
            "log_bookshelves": { // TODO FIX LOG & STRIPPED BOOKSHELVES NOT SEPARATING
                pattern: "^(?:mcwfurnitures:|everycomp:mcfur/).*bookshelf$",
            }
        }
    },
    "cupboards": {
        pattern: "cupboard$",
        applyModifiers: ["stripped"],
        children: {
            "bookshelf_cupboards": {
                pattern: "bookshelf_cupboard$",
            }
        }
    },
    "sinks": {
        pattern: "sink$",
        applyModifiers: ["stripped"],
        children: {
            "kitchen_sinks": {
                pattern: "kitchen_sink$",
                children: {
                }
            }
        }
    },
    "chests": {
        pattern: "chest$",
        exclude: ["cursed", "boat", "minecraft:ender_chest", "unusualend:warped_chest", "aether:treasure_chest", "rottencreatures:treasure_chest", "ae2:chest", "alexscaves:cave_painting_vallumraptor_chest", "echochest:echo_chest", "netherchested:nether_chest", "mekanism:personal_chest"],
        children: {
            "trapped_chests": "trapped_.*chest$"
        }
    },
    "corals": {
        pattern: "coral$",
        children: {
            "coral_blocks": "coral_block$",
            "coral_fans": "coral_fan$"
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
            "furnace_boats": ["furnace_boat$", "boatload:bamboo_furnace_raft"],
            "chest_boats": ["chest_boat$", "minecraft:bamboo_chest_raft"],
            "large_boats": ["large_.*_boat$", "minecraft:wide_bamboo_raft"]
        }
    },
    "potions": {
        pattern: "potion$",
        children: {
            "lingering_potions": "lingering_potion$",
            "splash_potions": "splash_potion$"
        }
    },
    "signs": {
        pattern: "sign$",
        exclude: ["spatial_sign"],
        children: {
            "hanging_signs": {
                pattern: "hanging_(?:.*_)?sign$",
                children: {
                    "hanging_canvas_signs": "hanging_(?:.*_)?canvas_sign$"
                }
            }
        }
    },
    "carpets": {
        pattern: "carpet$",
        exclude: ["bamboo", "cloudbloom", "bison", "fungal"],
        children: {
            "leaf_carpets": "leaf_carpet$",
            "moss_carpets": "moss_carpet$",
            "thatch_carpets": "thatch_carpet$"
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
        pattern: "dart_shooter$",
    },
    "darts": {
        pattern: "^aether.*dart$",
    },
    "blocks": {
        // The `bases` list defines the stone material words used to generate child-group
        // patterns for the stone modifier (e.g. cut_blocks matches cut_(?:stone|granite|...)$).
        // It cannot be replaced with a broad pattern because stone block names don't share
        // a common suffix — they ARE the material name (e.g. quark:shale, create:limestone).
        // Add new mod materials here when they need cut/bricks/polished sub-groups.
        bases: [
            // Vanilla + basic
            "stone", "cobblestone", "cracked_stone_bricks",
            "granite", "diorite", "andesite",
            "tuff", "deepslate", "calcite", "dripstone", "basalt",
            "sandstone", "red_sandstone", "pink_sandstone",
            "prismarine", "dark_prismarine",
            "nether_bricks", "red_nether_brick", "blue_nether_bricks", "blackstone", "end_stone",
            "purpur", "purpur_block", "obsidian", "quartz", "copper", "bone",
            // Quark
            "limestone", "jasper", "shale", "myalite", "permafrost", "soul_sandstone",
            // Create
            "scoria", "scorchia", "ochrum", "veridium", "asurine", "crimsite",
            "dolomite", "gneiss",
            // Various stone mods
            "travertine", "chert", "kaolin", "chalk", "mud", "packed_mud", "brick",
            "resin", "snail_shell", "tooth", "coralstone",
            "eumus_bricks", "duskbound", "midori", "shimmer_stone", "ancient_sandstone",
            "justicestone", "withered_blackstone", "warped_nether_bricks", "azure_seastone",
            "gloopstone", "white_sandstone", "dread_stone", "radrock", "holystone", "guanostone", "ancient_dripstone",
            "rose_quartz", "endstone", "abyssmarine", "void_purpur", "warped_stone", "frosted_stone", "guzzler_scale",
            "vile_stone", "gloomy", "dimstone", "enderstone", "galena", "aseterite", "brimstone",
            "gloopslate", "dullstone", "clorite", "driftshale",
            "sky_stone", "sentrite", "sky", "citrine", "enderblob",
            "gilded_holystone", "blightmoss_holystone", "honeycomb"
        ],
        exclude: ["create:polished_roze_quartz", "quark:iron_pillar", "alexscaves:scarlet_neodymium_pillar",
            "alexscaves:azure_neodymium_pillar"
        ],
        applyModifiers: ["stone"]
    }
};

// --- Modifiers Registry ---
// Define dynamic prefixes that apply to any node with `applyModifiers: ["modifier_name"]`
global.modifierTypes = {
    "stone": {
        // Simple string = direct child of the base group.
        // Object with subprefixes = direct child that also spawns its own sub-children.
        // Note: "cut" and "chiseled" appear both standalone AND as subprefixes of
        // "polished"/"bricks", producing e.g. cut_blocks AND cut_polished_blocks.
        prefixes: [
            // Simple prefix modifiers — these must come first so sibling-lookup nesting works
            // for suffix modifiers that list them as subprefixes (e.g. bricks.subprefixes["mossy"])
            "reinforced", "kelpy", "cut", "smooth", "chiseled", "layered", "cracked", "cobbled",

            // Prefix modifiers with their own sub-children
            // { name: "mossy",   subprefixes: ["cobblestone"] },
            // { name: "cobbled", subprefixes: ["mossy"] },

            // Suffix modifiers (the modifier word sits AFTER the material, e.g. stone_bricks)
            { name: "running_bond", suffix: true, subprefixes: ["cobbled", "chiseled"] }, // "mossy", 
            { name: "windmill_weave", suffix: true, subprefixes: ["cobbled", "chiseled"] }, // "mossy", 
            { name: "flagstone", suffix: true, subprefixes: ["cobbled", "chiseled"] }, // "mossy", 
            { name: "crystal_floor", suffix: true, subprefixes: ["mossy", "cobbled", "chiseled"] },
            { name: "tile", pattern: "tile|tiles", suffix: true, subprefixes: ["cracked", "chiseled", "polished"] }, // "mossy",
            { name: "pillar", suffix: true, subprefixes: ["chiseled"] },
            { name: "brick", pattern: "bricks?", suffix: true, subprefixes: ["cracked", "chiseled", "small", "cut"] }, //  "mossy",
            { name: "polished", subprefixes: ["cut", "chiseled", "tile", "bricks"] },
        ],
        // {prefix} = "cut", {pattern} = "stairs?$" => "cut_(?:[a-z0-9_]*_)?stairs?$"
        template: "{prefix}_(?:[a-z0-9_]*_)?{pattern}",
        // Exact item IDs to exclude from every generated child of this modifier
        exactExclude: [
            "minecraft:brick",
            "minecraft:nether_brick",
            "supplementaries:ash_brick",
            "vanillabackport:resin_brick",
            "endergetic:eumus_brick",
            "ancient_aether:valkyrie_brick",
            "alexscaves:cinder_brick"
        ]
    },
    "stripped": {
        prefixes: ["stripped"],
        // {prefix} = "stripped", {pattern} = "chair$" => "stripped_(?:[a-z0-9_]*_)?chair$"
        template: "{prefix}_(?:[a-z0-9_]*_)?{pattern}"
    }
};

// Automagically inject modifier variants into the tree so we don't have to manually write them out
function processModifiers(nodeTree, inheritedMods) {
    inheritedMods = inheritedMods || [];
    for (var key in nodeTree) {
        var node = nodeTree[key];

        // Normalize string/array shorthand to object form when inherited mods need to be applied.
        // e.g. "bulk_stairs?$" becomes { pattern: "bulk_stairs?$", children: {} }
        // so that bricks_bulk_stairs, polished_bulk_stairs etc. can be generated.
        if (inheritedMods.length > 0 && (typeof node === 'string' || Array.isArray(node))) {
            var pattern = typeof node === 'string' ? node : node[0];
            var newNode = { pattern: pattern, children: {} };
            if (Array.isArray(node) && node.length > 1) {
                newNode.exact = node.slice(1);
            }
            nodeTree[key] = newNode;
            node = newNode;
        }

        if (typeof node === 'object' && !Array.isArray(node)) {
            // Combine modifiers. noModifiers:true clears inheritance so no variants are generated inside this node.
            var mods = node.noModifiers ? [] : (node.applyModifiers ? inheritedMods.concat(node.applyModifiers) : inheritedMods);
            // Deduplicate
            mods = mods.filter(function (item, pos) { return mods.indexOf(item) == pos; });

            // Recurse first to process children with the inherited properties
            if (node.children) processModifiers(node.children, mods);

            if (mods.length > 0) {
                if (!node.children) node.children = {};
                var basePattern = node.basePattern || node.pattern || "";
                var bases = node.bases || null;
                var omitSuffix = node.omitSuffix === true;

                mods.forEach(function (modName) {
                    var modifierDef = global.modifierTypes[modName];
                    if (modifierDef) {
                        // Build name→pattern lookup so subprefix strings resolve their regex pattern
                        var prefixPatternByName = {};
                        modifierDef.prefixes.forEach(function (p) {
                            if (typeof p === 'object') {
                                prefixPatternByName[p.name] = p.pattern || p.name;
                            }
                        });

                        modifierDef.prefixes.forEach(function (prefix) {
                            var prefixName = typeof prefix === 'object' ? prefix.name : prefix;
                            // prefixPattern is used in regexes; may differ from prefixName (e.g. "tile|tiles")
                            var prefixPattern = (typeof prefix === 'object' && prefix.pattern) ? prefix.pattern : prefixName;
                            // Wrap in non-capturing group if pattern contains | to prevent regex alternation bleed
                            // e.g. "tile|tiles" → "(?:tile|tiles)" so it doesn't split the whole expression
                            var safePrefixPattern = prefixPattern.indexOf('|') !== -1 ? '(?:' + prefixPattern + ')' : prefixPattern;
                            var subprefixes = (typeof prefix === 'object' && prefix.subprefixes) ? prefix.subprefixes : [];
                            var isSuffix = typeof prefix === 'object' && prefix.suffix === true;

                            var generatedKey = omitSuffix ? prefixName : prefixName + "_" + key;
                            // Only automatically generate it if it doesn't already manually exist
                            if (!node.children[generatedKey]) {
                                var childNode = { children: {} };
                                if (modifierDef.exactExclude && modifierDef.exactExclude.length > 0) {
                                    childNode.exact = modifierDef.exactExclude.map(function (id) { return '-' + id; });
                                }

                                if (isSuffix && bases) {
                                    childNode.pattern = safePrefixPattern + "$";
                                } else if (bases) {
                                    childNode.modifierBases = bases;
                                    childNode.modifierPrefix = safePrefixPattern;
                                } else {
                                    childNode.pattern = modifierDef.template.replace("{prefix}", safePrefixPattern).replace("{pattern}", basePattern.replace('$', ''));
                                    if (basePattern.endsWith('$')) childNode.pattern += '$';
                                }

                                subprefixes.forEach(function (subprefix) {
                                    var subKey = isSuffix
                                        ? subprefix + "_" + generatedKey
                                        : (omitSuffix ? prefixName + "_" + subprefix : prefixName + "_" + subprefix + "_" + key);
                                    var subNode = { children: {} };
                                    if (modifierDef.exactExclude && modifierDef.exactExclude.length > 0) {
                                        subNode.exact = modifierDef.exactExclude.map(function (id) { return '-' + id; });
                                    }
                                    var rawSubPattern = prefixPatternByName[subprefix] || subprefix;
                                    var safeSubPattern = rawSubPattern.indexOf('|') !== -1 ? '(?:' + rawSubPattern + ')' : rawSubPattern;
                                    if (isSuffix && bases) {
                                        subNode.pattern = safeSubPattern + "_(?:[a-z0-9_]*_)?" + safePrefixPattern + "$";
                                    } else if (bases) {
                                        subNode.modifierBases = bases;
                                        subNode.modifierPrefix = safePrefixPattern + "_" + safeSubPattern;
                                    } else if (isSuffix) {
                                        subNode.pattern = safeSubPattern + "_(?:[a-z0-9_]*_)?" + childNode.pattern;
                                    } else {
                                        subNode.pattern = modifierDef.template.replace("{prefix}", safePrefixPattern + "_" + safeSubPattern).replace("{pattern}", basePattern.replace('$', ''));
                                        if (basePattern.endsWith('$')) subNode.pattern += '$';
                                    }

                                    // For suffix modifiers: if the subprefix has its own sibling node
                                    // (e.g. "mossy" → "mossy_stairs"), nest there so exclusion cascade works.
                                    // Prefix modifier subchildren (e.g. polished_cut_stairs) live under the parent.
                                    var subprefixSiblingKey = (isSuffix && !omitSuffix) ? subprefix + "_" + key : (isSuffix && omitSuffix) ? subprefix : null;
                                    if (node.children[subprefixSiblingKey] && !node.children[subprefixSiblingKey].children[subKey]) {
                                        node.children[subprefixSiblingKey].children[subKey] = subNode;
                                    } else if (!childNode.children[subKey]) {
                                        childNode.children[subKey] = subNode;
                                    }
                                });

                                // Mirror structural children: if node has a child (e.g. vertical_slabs)
                                // that already has this modifier's child generated inside it
                                // (e.g. running_bond_vertical_slabs), add it here too so that
                                // auto_tags.js can exclude vertical items from running_bond_slabs.
                                for (var existingChildKey in node.children) {
                                    var mirrorKey = omitSuffix ? prefixName : prefixName + "_" + existingChildKey;
                                    var existingChild = node.children[existingChildKey];
                                    if (typeof existingChild === 'object' && existingChild.children
                                        && existingChild.children[mirrorKey]
                                        && !childNode.children[mirrorKey]) {
                                        childNode.children[mirrorKey] = existingChild.children[mirrorKey];
                                    }
                                }

                                node.children[generatedKey] = childNode;
                            }
                        });
                    }
                });
            }
        }
    }
}
processModifiers(global.taxonomy);

// Miscellaneous standalone tags that aren't part of a parent/child exclusion relationship
global.standaloneTags = {
    "paper_lanterns": "paper_lantern$",
    "beehives": "beehive",
    "food_displays": "^displaydelight:(?!.*(?:small_)?food_plate$).*",
    "shingles": "^quark:.*shingles$",
    "buttons": "button$",
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
    "ores": "[a-z0-9_]+_ores?$",
    "raw_ores": "raw_(?:iron|gold|copper|zinc|silver|lead|nickel|tin|aluminum|uranium|osmium|platinum|tungsten|bismuth|cobalt|[a-z0-9_]+_ore)$",
    // "bars": "[a-z0-9_]+_bars$"
};


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
    "curved_azure_seastones": "^cataclysm:curved_azure_seastone",
};

// Pre-existing mod tags that you don't need to generate, but you DO want to register as EMI tabs
global.nativeEmiGroups = [
    // "curios:ring",
    // "curios:necklace",
    // "curios:belt",
    // "curios:bracelet",
    // "curios:charm",
    // "curios:head",
    // "curios:hands",
    // "curios:back",
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
    "minecraft:trim_templates"
];
