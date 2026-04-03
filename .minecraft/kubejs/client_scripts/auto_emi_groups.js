// V2: Highly Comprehensive Automated UI Generation
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
    explicit: [
"mcwbridges_bridge_piers", "mcwbridges_log_bridge_middles", "mcwbridges_log_bridge_stairs", "mcwbridges_rail_bridges", "mcwbridges_rope_bridge_stairs", "mcwbridges_rope_bridges", "mcwbridges_brick_bridges", "mcwbridges_balustrade_bridges", "mcwbridges_brick_bridge_stairs", "mcwbridges_bridges", "mcwdoors_bamboo_doors", "mcwdoors_bark_glass_doors", "mcwdoors_barn_doors", "mcwdoors_barn_glass_doors", "mcwdoors_beach_doors", "mcwdoors_cottage_doors", "mcwdoors_four_panel_doors", "mcwdoors_glass_doors", "mcwdoors_japanese2_doors", "mcwdoors_japanese_doors", "mcwdoors_modern_doors", "mcwdoors_mystic_doors", "mcwdoors_nether_doors", "mcwdoors_paper_doors", "mcwdoors_stable_doors", "mcwdoors_stable_head_doors", "mcwdoors_swamp_doors", "mcwdoors_tropical_doors", "mcwdoors_waffle_doors", "mcwdoors_western_doors", "mcwdoors_whispering_doors", "mcwfurnitures_bookshelves", "mcwfurnitures_bookshelf_cupboards", "mcwfurnitures_bookshelf_drawers", "mcwfurnitures_chairs", "mcwfurnitures_coffee_tables", "mcwfurnitures_counters", "mcwfurnitures_covered_desks", "mcwfurnitures_cupboard_counters", "mcwfurnitures_desks", "mcwfurnitures_double_drawers", "mcwfurnitures_double_drawer_counters", "mcwfurnitures_double_kitchen_cabinets", "mcwfurnitures_double_wardrobes", "mcwfurnitures_drawers", "mcwfurnitures_drawer_counters", "mcwfurnitures_end_tables", "mcwfurnitures_glass_kitchen_cabinets", "mcwfurnitures_glass_tables", "mcwfurnitures_kitchen_cabinets", "mcwfurnitures_kitchen_sinks", "mcwfurnitures_large_drawers", "mcwfurnitures_lower_bookshelf_drawers", "mcwfurnitures_lower_triple_drawers", "mcwfurnitures_modern_chairs", "mcwfurnitures_modern_desks", "mcwfurnitures_modern_wardrobes", "mcwfurnitures_stool_chairs", "mcwfurnitures_striped_chairs", "mcwfurnitures_tables", "mcwfurnitures_triple_drawers", "mcwfurnitures_wardrobes", "mcwlights_ceiling_fan_lights", "mcwlights_tiki_torches", "mcwfences_curved_gates", "mcwfences_hedges", "mcwfences_highley_gates", "mcwfences_horse_fences", "mcwfences_picket_fences", "mcwfences_pyramid_gates", "mcwfences_stockade_fences", "mcwfences_wired_fences", "mcwfences_railing_gates", "mcwfences_brick_walls", "mcwfences_pillar_walls", "mcwfences_railing_walls", "mcwfences_modern_walls", "mcwpaths_planks_paths", "mcwpaths_diamond_paving", "mcwpaths_basket_weave_paving", "mcwpaths_square_paving", "mcwpaths_honeycomb_paving", "mcwpaths_clover_paving", "mcwpaths_dumble_paving", "mcwpaths_rocky_paths", "mcwpaths_flagstone_paths", "mcwpaths_running_bond_paths", "mcwpaths_crystal_floor_paths", "mcwpaths_windmill_weave_paths", "mcwstairs_balconies", "mcwstairs_bulk_stairs", "mcwstairs_compact_stairs", "mcwstairs_loft_stairs", "mcwstairs_platforms", "mcwstairs_railings", "mcwstairs_skyline_stairs", "mcwstairs_terrace_stairs", "mcwwindows_gothic", "mcwwindows_arrow_slit", "mcwwindows_blinds", "mcwwindows_curtain_rods", "mcwwindows_windows_four", "mcwwindows_parapets", "mcwwindows_louvered_shutters", "mcwwindows_pane_windows", "mcwwindows_shutters", "mcwwindows_windows", "mcwwindows_windows_two", "mcwroofs_attic_roofs", "mcwroofs_lower_roofs", "mcwroofs_planks_attic_roofs", "mcwroofs_planks_lower_roofs", "mcwroofs_planks_roofs", "mcwroofs_planks_steep_roofs", "mcwroofs_planks_top_roofs", "mcwroofs_planks_upper_lower_roofs", "mcwroofs_planks_upper_steep_roofs", "mcwroofs_roofs", "mcwroofs_steep_roofs", "mcwroofs_top_roofs", "mcwroofs_upper_lower_roofs", "mcwroofs_upper_steep_roofs", "mcwtrpdoors_bamboo_trapdoors", "mcwtrpdoors_bark_trapdoors", "mcwtrpdoors_barn_trapdoors", "mcwtrpdoors_barred_trapdoors", "mcwtrpdoors_barrel_trapdoors", "mcwtrpdoors_beach_trapdoors", "mcwtrpdoors_blossom_trapdoors", "mcwtrpdoors_cottage_trapdoors", "mcwtrpdoors_four_panel_trapdoors", "mcwtrpdoors_glass_trapdoors", "mcwtrpdoors_mystic_trapdoors", "mcwtrpdoors_paper_trapdoors", "mcwtrpdoors_ranch_trapdoors", "mcwtrpdoors_swamp_trapdoors", "mcwtrpdoors_tropical_trapdoors", "mcwtrpdoors_whispering_trapdoors",
                "doors", "trapdoors", "stairs", "slabs", "fences", "walls", "planks", "vertical_planks", "leaf_carpets"
    ]
};

EmiPlusPlusEvents.registerGroups(event => {
    // Register complex custom overrides 
    autoCategories.explicit.forEach(explicitName => {
            const tagName = `#kubejs:emi_${explicitName}`;
            const groupName = `kubejs:emi_${explicitName}`;
            event.register(groupName, tagName);
        });

        autoCategories.suffixes.forEach(suffix => {
            if (!autoCategories.explicit.includes(suffix) && !autoCategories.explicit.includes(suffix + "s")) {
                const tagName = `#kubejs:auto_suffix_${suffix}`;
                const groupName = `kubejs:auto_suffix_${suffix}`;
                event.register(groupName, tagName);
            }
        });

        autoCategories.prefixes.forEach(prefix => {
            const tagName = `#kubejs:auto_prefix_${prefix}`;
            const groupName = `kubejs:auto_prefix_${prefix}`;
            event.register(groupName, tagName);
        });
    });

EmiPlusPlusEvents.registerGroups(event => {
  console.log('EMI++ AUTO GROUPS REGISTRATION RUNNING!');
  autoCategories.explicit.forEach(explicitName => {
      console.log('REGISTERING ' + explicitName);
      event.register(`kubejs:emi_${explicitName}`, `#kubejs:emi_${explicitName}`);
  });
  console.log('EMI REGISTRATION COMPLETED');
});
