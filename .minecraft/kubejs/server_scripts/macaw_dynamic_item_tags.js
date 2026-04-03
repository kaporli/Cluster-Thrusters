ServerEvents.tags('item', event => {
    const modNamespaces = ['everycomp', 'stonezone', 'gemsrealm'];
    const addMacaw = (tagId, namespace, regexBody, subcategory) => {
        event.add(tagId, [new RegExp('^' + namespace + ':' + regexBody)]);
        modNamespaces.forEach(ns => {
            let nsRegex = regexBody;
            if (ns === 'everycomp' || ns === 'stonezone' || ns === 'gemsrealm') {
                nsRegex = '(?:.*(?:mcw|mcb|mcp|mcf|macaw|compat).*\\/)?' + regexBody;
            }
            event.add(ns + ':' + subcategory, [new RegExp('^' + ns + ':' + nsRegex)]);
            event.add(tagId, [new RegExp('^' + ns + ':' + nsRegex)]);
        });
    };
    // mcwbridges
    addMacaw('mcwbridges:bridge_piers', 'mcwbridges', '.*(?:_|^)bridge_pier$', 'bridge_piers');
    addMacaw('mcwbridges:log_bridge_middles', 'mcwbridges', '.*(?:_|^)log_bridge_middle$', 'log_bridge_middles');
    addMacaw('mcwbridges:log_bridge_stairs', 'mcwbridges', '.*(?:_|^)log_bridge_stair$', 'log_bridge_stairs');
    addMacaw('mcwbridges:rail_bridges', 'mcwbridges', '.*(?:_|^)rail_bridge$', 'rail_bridges');
    addMacaw('mcwbridges:rope_bridge_stairs', 'mcwbridges', '.*rope_bridge_stair$', 'rope_bridge_stairs');
    addMacaw('mcwbridges:rope_bridges', 'mcwbridges', '.*rope_.*_bridge$', 'rope_bridges');
    addMacaw('mcwbridges:brick_bridges', 'mcwbridges', '(?!.*(?:_stair)$).*brick_bridge$', 'brick_bridges');
    addMacaw('mcwbridges:balustrade_bridges', 'mcwbridges', '.*(?:_|^)balustrade_.*bridge$', 'balustrade_bridges');
    addMacaw('mcwbridges:brick_bridge_stairs', 'mcwbridges', '.*(?:_|^)brick_bridge_stair$', 'brick_bridge_stairs');
    addMacaw('mcwbridges:bridges', 'mcwbridges', '(?!.*(?:bridge_pier|log_bridge_middle|rail_bridge|rope_.*_bridge|brick_bridge|balustrade_.*bridge|.*_stair)$).*(?:_|^)bridge$', 'bridges');

    // mcwdoors
    addMacaw('mcwdoors:bamboo_doors', 'mcwdoors', '.*(?:_|^)bamboo_door$', 'bamboo_doors');
    addMacaw('mcwdoors:bark_glass_doors', 'mcwdoors', '.*(?:_|^)bark_glass_door$', 'bark_glass_doors');
    addMacaw('mcwdoors:barn_doors', 'mcwdoors', '.*(?:_|^)barn_door$', 'barn_doors');
    addMacaw('mcwdoors:barn_glass_doors', 'mcwdoors', '.*(?:_|^)barn_glass_door$', 'barn_glass_doors');
    addMacaw('mcwdoors:beach_doors', 'mcwdoors', '.*(?:_|^)beach_door$', 'beach_doors');
    addMacaw('mcwdoors:cottage_doors', 'mcwdoors', '.*(?:_|^)cottage_door$', 'cottage_doors');
    addMacaw('mcwdoors:four_panel_doors', 'mcwdoors', '.*(?:_|^)four_panel_door$', 'four_panel_doors');
    addMacaw('mcwdoors:glass_doors', 'mcwdoors', '(?!.*(?:bark_glass_door|barn_glass_door)$).*(?:_|^)glass_door$', 'glass_doors');
    addMacaw('mcwdoors:japanese2_doors', 'mcwdoors', '.*(?:_|^)japanese2_door$', 'japanese2_doors');
    addMacaw('mcwdoors:japanese_doors', 'mcwdoors', '.*(?:_|^)japanese_door$', 'japanese_doors');
    addMacaw('mcwdoors:modern_doors', 'mcwdoors', '.*(?:_|^)modern_door$', 'modern_doors');
    addMacaw('mcwdoors:mystic_doors', 'mcwdoors', '.*(?:_|^)mystic_door$', 'mystic_doors');
    addMacaw('mcwdoors:nether_doors', 'mcwdoors', '.*(?:_|^)nether_door$', 'nether_doors');
    addMacaw('mcwdoors:paper_doors', 'mcwdoors', '.*(?:_|^)paper_door$', 'paper_doors');
    addMacaw('mcwdoors:stable_doors', 'mcwdoors', '.*(?:_|^)stable_door$', 'stable_doors');
    addMacaw('mcwdoors:stable_head_doors', 'mcwdoors', '.*(?:_|^)stable_head_door$', 'stable_head_doors');
    addMacaw('mcwdoors:swamp_doors', 'mcwdoors', '.*(?:_|^)swamp_door$', 'swamp_doors');
    addMacaw('mcwdoors:tropical_doors', 'mcwdoors', '.*(?:_|^)tropical_door$', 'tropical_doors');
    addMacaw('mcwdoors:waffle_doors', 'mcwdoors', '.*(?:_|^)waffle_door$', 'waffle_doors');
    addMacaw('mcwdoors:western_doors', 'mcwdoors', '.*(?:_|^)western_door$', 'western_doors');
    addMacaw('mcwdoors:whispering_doors', 'mcwdoors', '.*(?:_|^)whispering_door$', 'whispering_doors');

    // mcwfurnitures
    addMacaw('mcwfurnitures:bookshelves', 'mcwfurnitures', '.*(?:_|^)bookshelf$', 'bookshelves');
    addMacaw('mcwfurnitures:bookshelf_cupboards', 'mcwfurnitures', '.*(?:_|^)bookshelf_cupboard$', 'bookshelf_cupboards');
    addMacaw('mcwfurnitures:bookshelf_drawers', 'mcwfurnitures', '(?!.*(?:lower_bookshelf_drawer)$).*(?:_|^)bookshelf_drawer$', 'bookshelf_drawers');
    addMacaw('mcwfurnitures:chairs', 'mcwfurnitures', '(?!.*(?:modern_chair|stool_chair|striped_chair)$).*(?:_|^)chair$', 'chairs');
    addMacaw('mcwfurnitures:coffee_tables', 'mcwfurnitures', '.*(?:_|^)coffee_table$', 'coffee_tables');
    addMacaw('mcwfurnitures:counters', 'mcwfurnitures', '(?!.*(?:cupboard_counter|double_drawer_counter|drawer_counter)$).*(?:_|^)counter$', 'counters');
    addMacaw('mcwfurnitures:covered_desks', 'mcwfurnitures', '.*(?:_|^)covered_desk$', 'covered_desks');
    addMacaw('mcwfurnitures:cupboard_counters', 'mcwfurnitures', '.*(?:_|^)cupboard_counter$', 'cupboard_counters');
    addMacaw('mcwfurnitures:desks', 'mcwfurnitures', '(?!.*(?:covered_desk|modern_desk)$).*(?:_|^)desk$', 'desks');
    addMacaw('mcwfurnitures:double_drawers', 'mcwfurnitures', '.*(?:_|^)double_drawer$', 'double_drawers');
    addMacaw('mcwfurnitures:double_drawer_counters', 'mcwfurnitures', '.*(?:_|^)double_drawer_counter$', 'double_drawer_counters');
    addMacaw('mcwfurnitures:double_kitchen_cabinets', 'mcwfurnitures', '.*(?:_|^)double_kitchen_cabinet$', 'double_kitchen_cabinets');
    addMacaw('mcwfurnitures:double_wardrobes', 'mcwfurnitures', '.*(?:_|^)double_wardrobe$', 'double_wardrobes');
    addMacaw('mcwfurnitures:drawers', 'mcwfurnitures', '(?!.*(?:bookshelf_drawer|double_drawer|large_drawer|lower_bookshelf_drawer|lower_triple_drawer|triple_drawer)$).*(?:_|^)drawer$', 'drawers');
    addMacaw('mcwfurnitures:drawer_counters', 'mcwfurnitures', '(?!.*(?:double_drawer_counter)$).*(?:_|^)drawer_counter$', 'drawer_counters');
    addMacaw('mcwfurnitures:end_tables', 'mcwfurnitures', '.*(?:_|^)end_table$', 'end_tables');
    addMacaw('mcwfurnitures:glass_kitchen_cabinets', 'mcwfurnitures', '.*(?:_|^)glass_kitchen_cabinet$', 'glass_kitchen_cabinets');
    addMacaw('mcwfurnitures:glass_tables', 'mcwfurnitures', '.*(?:_|^)glass_table$', 'glass_tables');
    addMacaw('mcwfurnitures:kitchen_cabinets', 'mcwfurnitures', '(?!.*(?:double_kitchen_cabinet|glass_kitchen_cabinet)$).*(?:_|^)kitchen_cabinet$', 'kitchen_cabinets');
    addMacaw('mcwfurnitures:kitchen_sinks', 'mcwfurnitures', '.*(?:_|^)kitchen_sink$', 'kitchen_sinks');
    addMacaw('mcwfurnitures:large_drawers', 'mcwfurnitures', '.*(?:_|^)large_drawer$', 'large_drawers');
    addMacaw('mcwfurnitures:lower_bookshelf_drawers', 'mcwfurnitures', '.*(?:_|^)lower_bookshelf_drawer$', 'lower_bookshelf_drawers');
    addMacaw('mcwfurnitures:lower_triple_drawers', 'mcwfurnitures', '.*(?:_|^)lower_triple_drawer$', 'lower_triple_drawers');
    addMacaw('mcwfurnitures:modern_chairs', 'mcwfurnitures', '.*(?:_|^)modern_chair$', 'modern_chairs');
    addMacaw('mcwfurnitures:modern_desks', 'mcwfurnitures', '.*(?:_|^)modern_desk$', 'modern_desks');
    addMacaw('mcwfurnitures:modern_wardrobes', 'mcwfurnitures', '.*(?:_|^)modern_wardrobe$', 'modern_wardrobes');
    addMacaw('mcwfurnitures:stool_chairs', 'mcwfurnitures', '.*(?:_|^)stool_chair$', 'stool_chairs');
    addMacaw('mcwfurnitures:striped_chairs', 'mcwfurnitures', '.*(?:_|^)striped_chair$', 'striped_chairs');
    addMacaw('mcwfurnitures:tables', 'mcwfurnitures', '(?!.*(?:coffee_table|end_table|glass_table)$).*(?:_|^)table$', 'tables');
    addMacaw('mcwfurnitures:triple_drawers', 'mcwfurnitures', '(?!.*(?:lower_triple_drawer)$).*(?:_|^)triple_drawer$', 'triple_drawers');
    addMacaw('mcwfurnitures:wardrobes', 'mcwfurnitures', '(?!.*(?:double_wardrobe|modern_wardrobe)$).*(?:_|^)wardrobe$', 'wardrobes');

    // mcwlights
    addMacaw('mcwlights:ceiling_fan_lights', 'mcwlights', '.*(?:_|^)ceiling_fan_light$', 'ceiling_fan_lights');
    addMacaw('mcwlights:tiki_torches', 'mcwlights', '.*(?:_|^)tiki_torch$', 'tiki_torches');

    // mcwfences
    addMacaw('mcwfences:curved_gates', 'mcwfences', '.*(?:_|^)curved_gate$', 'curved_gates');
    addMacaw('mcwfences:hedges', 'mcwfences', '.*(?:_|^)hedge$', 'hedges');
    addMacaw('mcwfences:highley_gates', 'mcwfences', '.*(?:_|^)highley_gate$', 'highley_gates');
    addMacaw('mcwfences:horse_fences', 'mcwfences', '.*(?:_|^)horse_fence$', 'horse_fences');
    addMacaw('mcwfences:picket_fences', 'mcwfences', '.*(?:_|^)picket_fence$', 'picket_fences');
    addMacaw('mcwfences:pyramid_gates', 'mcwfences', '.*(?:_|^)pyramid_gate$', 'pyramid_gates');
    addMacaw('mcwfences:stockade_fences', 'mcwfences', '.*(?:_|^)stockade_fence$', 'stockade_fences');
    addMacaw('mcwfences:wired_fences', 'mcwfences', '.*(?:_|^)wired_fence$', 'wired_fences');
    addMacaw('mcwfences:railing_gates', 'mcwfences', '.*(?:_|^)railing_gate$', 'railing_gates');
    addMacaw('mcwfences:brick_walls', 'mcwfences', '.*(?:_|^)brick_wall$', 'brick_walls');
    addMacaw('mcwfences:pillar_walls', 'mcwfences', '.*(?:_|^)pillar_wall$', 'pillar_walls');
    addMacaw('mcwfences:railing_walls', 'mcwfences', '.*(?:_|^)railing_.*wall$', 'railing_walls');
    addMacaw('mcwfences:modern_walls', 'mcwfences', '.*(?:_|^)modern_.*wall$', 'modern_walls');

    // mcwpaths
    addMacaw('mcwpaths:planks_paths', 'mcwpaths', '.*(?:_|^)planks_path$', 'planks_paths');
    addMacaw('mcwpaths:diamond_paving', 'mcwpaths', '.*(?:_|^)diamond_paving$', 'diamond_paving');
    addMacaw('mcwpaths:basket_weave_paving', 'mcwpaths', '.*(?:_|^)basket_weave_paving$', 'basket_weave_paving');
    addMacaw('mcwpaths:square_paving', 'mcwpaths', '.*(?:_|^)square_paving$', 'square_paving');
    addMacaw('mcwpaths:honeycomb_paving', 'mcwpaths', '.*(?:_|^)honeycomb_paving$', 'honeycomb_paving');
    addMacaw('mcwpaths:clover_paving', 'mcwpaths', '.*(?:_|^)clover_paving$', 'clover_paving');
    addMacaw('mcwpaths:dumble_paving', 'mcwpaths', '.*(?:_|^)dumble_paving$', 'dumble_paving');
    addMacaw('mcwpaths:rocky_paths', 'mcwpaths', '.*(?:_|^)rocky_path$', 'rocky_paths');
    addMacaw('mcwpaths:flagstone_paths', 'mcwpaths', '.*(?:_|^)flagstone_path$', 'flagstone_paths');
    addMacaw('mcwpaths:running_bond_paths', 'mcwpaths', '.*(?:_|^)running_bond_path$', 'running_bond_paths');
    addMacaw('mcwpaths:crystal_floor_paths', 'mcwpaths', '.*(?:_|^)crystal_floor_path$', 'crystal_floor_paths');
    addMacaw('mcwpaths:windmill_weave_paths', 'mcwpaths', '.*(?:_|^)windmill_weave_path$', 'windmill_weave_paths');


    // mcwstairs
    addMacaw('mcwstairs:balconies', 'mcwstairs', '.*(?:_|^)balcony$', 'balconies');
    addMacaw('mcwstairs:bulk_stairs', 'mcwstairs', '.*(?:_|^)bulk_stairs$', 'bulk_stairs');
    addMacaw('mcwstairs:compact_stairs', 'mcwstairs', '.*(?:_|^)compact_stairs$', 'compact_stairs');
    addMacaw('mcwstairs:loft_stairs', 'mcwstairs', '.*(?:_|^)loft_stairs$', 'loft_stairs');
    addMacaw('mcwstairs:platforms', 'mcwstairs', '.*(?:_|^)platform$', 'platforms');
    addMacaw('mcwstairs:railings', 'mcwstairs', '.*(?:_|^)railing$', 'railings');
    addMacaw('mcwstairs:skyline_stairs', 'mcwstairs', '.*(?:_|^)skyline_stairs$', 'skyline_stairs');
    addMacaw('mcwstairs:terrace_stairs', 'mcwstairs', '.*(?:_|^)terrace_stairs$', 'terrace_stairs');

    // mcwwindows
    addMacaw('mcwwindows:gothic', 'mcwwindows', '.*(?:_|^)gothic$', 'gothic');
    addMacaw('mcwwindows:arrow_slit', 'mcwwindows', '.*(?:_|^)arrow_slit$', 'arrow_slit');
    addMacaw('mcwwindows:blinds', 'mcwwindows', '.*(?:_|^)blinds$', 'blinds');
    addMacaw('mcwwindows:curtain_rods', 'mcwwindows', '.*(?:_|^)curtain_rod$', 'curtain_rods');
    addMacaw('mcwwindows:windows_four', 'mcwwindows', '.*(?:_|^)(?:plank_)?four_window$', 'windows_four');
    addMacaw('mcwwindows:parapets', 'mcwwindows', '.*(?:_|^)(?:log_|plank_)?parapet$', 'parapets');
    addMacaw('mcwwindows:louvered_shutters', 'mcwwindows', '.*(?:_|^)louvered_shutter$', 'louvered_shutters');
    addMacaw('mcwwindows:pane_windows', 'mcwwindows', '.*(?:_|^)(?:plank_)?pane_window$', 'pane_windows');
    addMacaw('mcwwindows:shutters', 'mcwwindows', '(?!.*(?:louvered_shutter)$).*(?:_|^)shutter$', 'shutters');
    addMacaw('mcwwindows:windows', 'mcwwindows', '(?!.*(?:four_window|pane_window|window2)$).*(?:_|^)(?:plank_)?window$', 'windows');
    addMacaw('mcwwindows:windows_two', 'mcwwindows', '.*(?:_|^)(?:plank_)?window2$', 'windows_two');

    // mcwroofs
    addMacaw('mcwroofs:attic_roofs', 'mcwroofs', '(?!.*(?:planks_attic_roof)$).*(?:_|^)attic_roof$', 'attic_roofs');
    addMacaw('mcwroofs:lower_roofs', 'mcwroofs', '(?!.*(?:planks_lower_roof|planks_upper_lower_roof|upper_lower_roof)$).*(?:_|^)lower_roof$', 'lower_roofs');
    addMacaw('mcwroofs:planks_attic_roofs', 'mcwroofs', '.*(?:_|^)planks_attic_roof$', 'planks_attic_roofs');
    addMacaw('mcwroofs:planks_lower_roofs', 'mcwroofs', '.*(?:_|^)planks_lower_roof$', 'planks_lower_roofs');
    addMacaw('mcwroofs:planks_roofs', 'mcwroofs', '.*(?:_|^)planks_roof$', 'planks_roofs');
    addMacaw('mcwroofs:planks_steep_roofs', 'mcwroofs', '.*(?:_|^)planks_steep_roof$', 'planks_steep_roofs');
    addMacaw('mcwroofs:planks_top_roofs', 'mcwroofs', '.*(?:_|^)planks_top_roof$', 'planks_top_roofs');
    addMacaw('mcwroofs:planks_upper_lower_roofs', 'mcwroofs', '.*(?:_|^)planks_upper_lower_roof$', 'planks_upper_lower_roofs');
    addMacaw('mcwroofs:planks_upper_steep_roofs', 'mcwroofs', '.*(?:_|^)planks_upper_steep_roof$', 'planks_upper_steep_roofs');
    addMacaw('mcwroofs:roofs', 'mcwroofs', '(?!.*(?:attic_roof|lower_roof|planks_attic_roof|planks_lower_roof|planks_roof|planks_steep_roof|planks_top_roof|planks_upper_lower_roof|planks_upper_steep_roof|steep_roof|top_roof|upper_lower_roof|upper_steep_roof)$).*(?:_|^)roof$', 'roofs');
    addMacaw('mcwroofs:steep_roofs', 'mcwroofs', '(?!.*(?:planks_steep_roof|planks_upper_steep_roof|upper_steep_roof)$).*(?:_|^)steep_roof$', 'steep_roofs');
    addMacaw('mcwroofs:top_roofs', 'mcwroofs', '(?!.*(?:planks_top_roof)$).*(?:_|^)top_roof$', 'top_roofs');
    addMacaw('mcwroofs:upper_lower_roofs', 'mcwroofs', '(?!.*(?:planks_upper_lower_roof)$).*(?:_|^)upper_lower_roof$', 'upper_lower_roofs');
    addMacaw('mcwroofs:upper_steep_roofs', 'mcwroofs', '(?!.*(?:planks_upper_steep_roof)$).*(?:_|^)upper_steep_roof$', 'upper_steep_roofs');

    // mcwtrpdoors
    addMacaw('mcwtrpdoors:bamboo_trapdoors', 'mcwtrpdoors', '.*(?:_|^)bamboo_trapdoor$', 'bamboo_trapdoors');
    addMacaw('mcwtrpdoors:bark_trapdoors', 'mcwtrpdoors', '.*(?:_|^)bark_trapdoor$', 'bark_trapdoors');
    addMacaw('mcwtrpdoors:barn_trapdoors', 'mcwtrpdoors', '.*(?:_|^)barn_trapdoor$', 'barn_trapdoors');
    addMacaw('mcwtrpdoors:barred_trapdoors', 'mcwtrpdoors', '.*(?:_|^)barred_trapdoor$', 'barred_trapdoors');
    addMacaw('mcwtrpdoors:barrel_trapdoors', 'mcwtrpdoors', '.*(?:_|^)barrel_trapdoor$', 'barrel_trapdoors');
    addMacaw('mcwtrpdoors:beach_trapdoors', 'mcwtrpdoors', '.*(?:_|^)beach_trapdoor$', 'beach_trapdoors');
    addMacaw('mcwtrpdoors:blossom_trapdoors', 'mcwtrpdoors', '.*(?:_|^)blossom_trapdoor$', 'blossom_trapdoors');
    addMacaw('mcwtrpdoors:cottage_trapdoors', 'mcwtrpdoors', '.*(?:_|^)cottage_trapdoor$', 'cottage_trapdoors');
    addMacaw('mcwtrpdoors:four_panel_trapdoors', 'mcwtrpdoors', '.*(?:_|^)four_panel_trapdoor$', 'four_panel_trapdoors');
    addMacaw('mcwtrpdoors:glass_trapdoors', 'mcwtrpdoors', '.*(?:_|^)glass_trapdoor$', 'glass_trapdoors');
    addMacaw('mcwtrpdoors:mystic_trapdoors', 'mcwtrpdoors', '.*(?:_|^)mystic_trapdoor$', 'mystic_trapdoors');
    addMacaw('mcwtrpdoors:paper_trapdoors', 'mcwtrpdoors', '.*(?:_|^)paper_trapdoor$', 'paper_trapdoors');
    addMacaw('mcwtrpdoors:ranch_trapdoors', 'mcwtrpdoors', '.*(?:_|^)ranch_trapdoor$', 'ranch_trapdoors');
    addMacaw('mcwtrpdoors:swamp_trapdoors', 'mcwtrpdoors', '.*(?:_|^)swamp_trapdoor$', 'swamp_trapdoors');
    addMacaw('mcwtrpdoors:tropical_trapdoors', 'mcwtrpdoors', '.*(?:_|^)tropical_trapdoor$', 'tropical_trapdoors');
    addMacaw('mcwtrpdoors:whispering_trapdoors', 'mcwtrpdoors', '.*(?:_|^)whispering_trapdoor$', 'whispering_trapdoors');

})
