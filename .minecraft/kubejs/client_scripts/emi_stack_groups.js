EmiPlusPlusEvents.registerGroups(event => {
    const modNamespaces = ['everycomp', 'stonezone', 'gemsrealm'];
    event.register('kubejs:vertical_slabs', '#quark:vertical_slabs')
    event.register('kubejs:posts', '#quark:posts')

    event.register('emi:glass_panes', '#forge:glass_panes')
    event.register('emi:glass', '#forge:glass')
    event.register('kubejs:spells', '#kubejs:spells')
    event.register('kubejs:curios', [
        '#curios:ring',
        '#curios:necklace',
        '#curios:belt',
        '#curios:back',
        '#curios:head',
        '#curios:body',
        '#curios:hands',
        '#curios:charm',
        '#curios:bracelet'
    ])
    event.register('kubejs:helmets', '#forge:armors/helmets')
    event.register('kubejs:chestplates', '#forge:armors/chestplates')
    event.register('kubejs:leggings', '#forge:armors/leggings')
    event.register('kubejs:boots', '#forge:armors/boots')

    event.register('emi:stairs', '#minecraft:stairs')
    event.register('farmersdelight:cabinets', '#farmersdelight:cabinets')


    event.register('emi:boats', '#kubejs:emi_boats')
    event.register('minecraft:chest_boats', '#minecraft:chest_boats')
    event.register('boatload:furnace_boats', '#boatload:furnace_boats')
    event.register('boatload:large_boats', '#boatload:large_boats')

    event.register('mcwbridges:stone_bridges', '#mcwbridges:stone_bridges');
    event.register('mcwbridges:stone_stairs', '#mcwbridges:stone_stairs');
    event.register('mcwwindows:gothic', '#mcwwindows:gothic');
    modNamespaces.forEach(ns => { event.register(ns + ':gothic', '#' + ns + ':gothic'); });
    event.register('mcwwindows:arrow_slit', '#mcwwindows:arrow_slit');
    modNamespaces.forEach(ns => { event.register(ns + ':arrow_slit', '#' + ns + ':arrow_slit'); });
    event.register('emi:fences', '#kubejs:emi_fences')
    event.register('emi:fence_gates', '#kubejs:emi_fence_gates')
    event.register('emi:logs', '#kubejs:emi_logs')
    event.register('emi:stripped_logs', '#kubejs:emi_stripped_logs')
    event.register('emi:wood', '#kubejs:unstripped_wood')
    event.register('emi:stripped_wood', '#kubejs:emi_stripped_wood')
    event.register('emi:slabs', '#minecraft:slabs')
    event.register('emi:planks', '#kubejs:emi_planks')
    event.register('emi:vertical_planks', '#kubejs:emi_vertical_planks')

    event.register('kubejs:sacks', '#supplementaries:sacks')
    event.register('kubejs:presents', '#supplementaries:presents')
    event.register('kubejs:stools', '#quark:stools')

    event.register('emi:candles', '#minecraft:candles')

    event.register('kubejs:cave_paintings', '#kubejs:cave_paintings')

    event.register('kubejs:paper_lanterns', '#supplementaries:paper_lanterns')
    event.register('kubejs:flags', '#supplementaries:flags')
    event.register('kubejs:buntings', '#kubejs:buntings')
    event.register('kubejs:awnings', '#supplementaries:awnings')
    event.register('kubejs:sleeping_bags', '#comforts:sleeping_bags')
    event.register('kubejs:hammocks', '#comforts:hammocks')
    event.register('kubejs:sign_posts', '#supplementaries:sign_posts')
    event.register('kubejs:shelves', '#suppsquared:item_shelves')
    event.register('kubejs:chests', '#forge:chests')
    event.register('kubejs:trapped_chests', '#forge:chests/trapped')
    event.register('kubejs:ladders', [
        '#forge:ladders',
        '#quark:ladders'
    ])
    event.register('kubejs:bamboo_spikes', '#kubejs:bamboo_spikes')
    event.register('kubejs:seed_pouch', '#kubejs:seed_pouch')
    event.register('emi:music_discs', '#minecraft:music_discs')
    event.register('kubejs:knives', '#farmersdelight:tools/knives')
    event.register('kubejs:balloons', '#kubejs:balloons')
    event.register('kubejs:hang_gliders', '#wan_ancient_beasts:hang_gliders')
    event.register('kubejs:charger_armors', '#wan_ancient_beasts:charger_armors')
    event.register('kubejs:corals', '#minecraft:coral')
    event.register('kubejs:ghast_harnesses', '#vanillabackport:harnesses')
    event.register('kubejs:pathfinder_quills', '#kubejs:pathfinder_quills')

    event.register('emi:leaf_carpets', '#kubejs:emi_leaf_carpets')



    event.register('forge:bookshelves', '#forge:bookshelves')

    event.register('kubejs:laser_blades', '#opposing_force:laser_blades')
    event.register('kubejs:blasters', '#opposing_force:blasters')

    event.register('kubejs:pet_beds', '#domesticationinnovation:pet_beds')
    event.register('kubejs:train_tracks', '#kubejs:train_tracks')
    event.register('kubejs:conductor_caps', '#railways:conductor_caps')

    event.register('kubejs:long_stacks', '#railways:long_stack')
    event.register('kubejs:coalburner_stacks', '#railways:coalburner_stack')
    event.register('kubejs:oilburner_stacks', '#railways:oilburner_stack')
    event.register('kubejs:streamlined_stacks', '#railways:streamlined_stack')
    event.register('kubejs:woodburner_stacks', '#railways:woodburner_stack')

    event.register('kubejs:pipe_facades', '#kubejs:pipe_facades')

    event.register('emi:beehives', '#minecraft:beehives')
    event.register('kubejs:lightning_rods', '#friendsandfoes:lightning_rods')
    event.register('kubejs:enriched', '#mekanism:enriched')
    event.register('kubejs:pellets', '#kubejs:pellets')
    event.register('kubejs:shards', '#mekanism:shards')
    event.register('kubejs:dirty_dusts', '#mekanism:dirty_dusts')
    event.register('kubejs:clumps', '#mekanism:clumps')


    event.register('kubejs:trapped_presents', '#supplementaries:trapped_presents')
    event.register('kubejs:bins', '#mekanism:bins')
    event.register('kubejs:rods', '#forge:rods')
    event.register('kubejs:spools', '#createaddition:spools')
    event.register('minecraft:smithing_upgrades', '#minecraft:smithing_upgrades')

    event.register('irons_spellbooks:runes', '#irons_spellbooks:inscribed_rune')
    event.register('mcwtrpdoors:trapdoor_prints', '#mcwtrpdoors:prints')

    event.register('kubejs:podiums', '#kubejs:podiums')
    event.register('kubejs:dragon_eggs', '#kubejs:dragon_eggs')

    event.register('kubejs:sharestones', '#waystones:sharestone')
    event.register('kubejs:jelly_beans', '#kubejs:jelly_beans')

    event.register('kubejs:paint_balls', '#kubejs:paint_balls')
    event.register('kubejs:fluid_storage_cells', '#kubejs:fluid_storage_cells')
    event.register('kubejs:item_storage_cells', '#kubejs:item_storage_cells')
    event.register('kubejs:chemical_storage_cells', '#kubejs:chemical_storage_cells')

    event.register('kubejs:food_displays', '#kubejs:food_displays')

    event.register('kubejs:table_cloths', '#create:table_cloths')
    event.register('kubejs:postboxes', '#create:postboxes')
    event.register('kubejs:seats', '#kubejs:seats')

    event.register('kubejs:hollow_logs', '#quark:hollow_logs')
    event.register('kubejs:crates', '#kubejs:crates')

    event.register('kubejs:cell_components', '#kubejs:cell_components')
    event.register('kubejs:spatial_components', '#kubejs:spatial_components')
    event.register('kubejs:spatial_storage_cells', '#kubejs:spatial_storage_cells')
    event.register('kubejs:cards', '#kubejs:cards')
    event.register('kubejs:processors', '#kubejs:processors')
    event.register('kubejs:presses', '#kubejs:presses')

    event.register('kubejs:sconces', '#kubejs:sconces')

    event.register('kubejs:chemical_tanks', '#mekanism:chemical_tanks')
    event.register('kubejs:fluid_tanks', '#mekanism:fluid_tanks')
    event.register('kubejs:factories', '#mekanism:factories')
    event.register('kubejs:transporters', '#kubejs:transporters')
    event.register('kubejs:thermodynamic_conductors', '#kubejs:thermodynamic_conductors')
    event.register('kubejs:pressurized_tubes', '#kubejs:pressurized_tubes')
    event.register('kubejs:energy_cubes', '#kubejs:energy_cubes')
    event.register('kubejs:control_circuits', '#kubejs:control_circuits')
    event.register('kubejs:crystals', '#kubejs:crystals')
    event.register('kubejs:induction_cells', '#kubejs:induction_cells')
    event.register('kubejs:induction_providers', '#kubejs:induction_providers')
    event.register('kubejs:tier_installers', '#kubejs:tier_installers')
    event.register('kubejs:upgrades', '#kubejs:upgrades')

    event.register('kubejs:inks', '#kubejs:inks')
    event.register('kubejs:upgrade_orbs', '#kubejs:upgrade_orbs')
    event.register('kubejs:spellbooks', '#curios:spellbook')
    event.register('kubejs:staves', '#irons_spellbooks:staff')

    event.register('kubejs:chalk', '#natures_spirit:chalk')
    event.register('kubejs:hedges', '#quark:hedges')
    event.register('kubejs:pickarangs', '#kubejs:pickarangs')



    event.register('kubejs:murals', '#kubejs:murals')
    event.register('kubejs:scyllas', '#kubejs:scyllas')

    event.register('create_kart:dyeable_karts', '#create_kart:dyeable_karts')
    event.register('kubejs:fossils', '#kubejs:fossils')
    event.register('kubejs:dart_shooters', '#aether:dart_shooters')
    event.register('create:crushed_raw_materials', '#create:crushed_raw_materials')
    event.register('create:valve_handles', '#create:valve_handles')
    event.register('create:toolboxes', '#create:toolboxes')

    // MACAW GENERATED EMI GROUPS
    event.register('mcwbridges:bridge_piers', '#mcwbridges:bridge_piers');
    modNamespaces.forEach(ns => { event.register(ns + ':bridge_piers', '#' + ns + ':bridge_piers'); });
    event.register('mcwbridges:log_bridge_middles', '#mcwbridges:log_bridge_middles');
    modNamespaces.forEach(ns => { event.register(ns + ':log_bridge_middles', '#' + ns + ':log_bridge_middles'); });
    event.register('mcwbridges:log_bridge_stairs', '#mcwbridges:log_bridge_stairs');
    modNamespaces.forEach(ns => { event.register(ns + ':log_bridge_stairs', '#' + ns + ':log_bridge_stairs'); });
    event.register('mcwbridges:rail_bridges', '#mcwbridges:rail_bridges');
    modNamespaces.forEach(ns => { event.register(ns + ':rail_bridges', '#' + ns + ':rail_bridges'); });
    event.register('mcwbridges:rope_bridge_stairs', '#mcwbridges:rope_bridge_stairs');
    modNamespaces.forEach(ns => { event.register(ns + ':rope_bridge_stairs', '#' + ns + ':rope_bridge_stairs'); });
    event.register('mcwbridges:rope_bridges', '#mcwbridges:rope_bridges');
    modNamespaces.forEach(ns => { event.register(ns + ':rope_bridges', '#' + ns + ':rope_bridges'); });
    event.register('mcwbridges:brick_bridges', '#mcwbridges:brick_bridges');
    modNamespaces.forEach(ns => { event.register(ns + ':brick_bridges', '#' + ns + ':brick_bridges'); });
    event.register('mcwbridges:balustrade_bridges', '#mcwbridges:balustrade_bridges');
    modNamespaces.forEach(ns => { event.register(ns + ':balustrade_bridges', '#' + ns + ':balustrade_bridges'); });
    event.register('mcwbridges:brick_bridge_stairs', '#mcwbridges:brick_bridge_stairs');
    modNamespaces.forEach(ns => { event.register(ns + ':brick_bridge_stairs', '#' + ns + ':brick_bridge_stairs'); });
    event.register('mcwbridges:bridges', '#mcwbridges:bridges');
    modNamespaces.forEach(ns => { event.register(ns + ':bridges', '#' + ns + ':bridges'); });
    event.register('mcwdoors:bamboo_doors', '#mcwdoors:bamboo_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':bamboo_doors', '#' + ns + ':bamboo_doors'); });
    event.register('mcwdoors:bark_glass_doors', '#mcwdoors:bark_glass_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':bark_glass_doors', '#' + ns + ':bark_glass_doors'); });
    event.register('mcwdoors:barn_doors', '#mcwdoors:barn_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':barn_doors', '#' + ns + ':barn_doors'); });
    event.register('mcwdoors:barn_glass_doors', '#mcwdoors:barn_glass_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':barn_glass_doors', '#' + ns + ':barn_glass_doors'); });
    event.register('mcwdoors:beach_doors', '#mcwdoors:beach_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':beach_doors', '#' + ns + ':beach_doors'); });
    event.register('mcwdoors:cottage_doors', '#mcwdoors:cottage_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':cottage_doors', '#' + ns + ':cottage_doors'); });
    event.register('mcwdoors:four_panel_doors', '#mcwdoors:four_panel_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':four_panel_doors', '#' + ns + ':four_panel_doors'); });
    event.register('mcwdoors:glass_doors', '#mcwdoors:glass_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':glass_doors', '#' + ns + ':glass_doors'); });
    event.register('mcwdoors:japanese2_doors', '#mcwdoors:japanese2_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':japanese2_doors', '#' + ns + ':japanese2_doors'); });
    event.register('mcwdoors:japanese_doors', '#mcwdoors:japanese_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':japanese_doors', '#' + ns + ':japanese_doors'); });
    event.register('mcwdoors:modern_doors', '#mcwdoors:modern_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':modern_doors', '#' + ns + ':modern_doors'); });
    event.register('mcwdoors:mystic_doors', '#mcwdoors:mystic_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':mystic_doors', '#' + ns + ':mystic_doors'); });
    event.register('mcwdoors:nether_doors', '#mcwdoors:nether_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':nether_doors', '#' + ns + ':nether_doors'); });
    event.register('mcwdoors:paper_doors', '#mcwdoors:paper_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':paper_doors', '#' + ns + ':paper_doors'); });
    event.register('mcwdoors:stable_doors', '#mcwdoors:stable_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':stable_doors', '#' + ns + ':stable_doors'); });
    event.register('mcwdoors:stable_head_doors', '#mcwdoors:stable_head_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':stable_head_doors', '#' + ns + ':stable_head_doors'); });
    event.register('mcwdoors:swamp_doors', '#mcwdoors:swamp_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':swamp_doors', '#' + ns + ':swamp_doors'); });
    event.register('mcwdoors:tropical_doors', '#mcwdoors:tropical_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':tropical_doors', '#' + ns + ':tropical_doors'); });
    event.register('mcwdoors:waffle_doors', '#mcwdoors:waffle_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':waffle_doors', '#' + ns + ':waffle_doors'); });
    event.register('mcwdoors:western_doors', '#mcwdoors:western_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':western_doors', '#' + ns + ':western_doors'); });
    event.register('mcwdoors:whispering_doors', '#mcwdoors:whispering_doors');
    modNamespaces.forEach(ns => { event.register(ns + ':whispering_doors', '#' + ns + ':whispering_doors'); });
    event.register('mcwfurnitures:bookshelves', '#mcwfurnitures:bookshelves');
    modNamespaces.forEach(ns => { event.register(ns + ':bookshelves', '#' + ns + ':bookshelves'); });
    event.register('mcwfurnitures:bookshelf_cupboards', '#mcwfurnitures:bookshelf_cupboards');
    modNamespaces.forEach(ns => { event.register(ns + ':bookshelf_cupboards', '#' + ns + ':bookshelf_cupboards'); });
    event.register('mcwfurnitures:bookshelf_drawers', '#mcwfurnitures:bookshelf_drawers');
    modNamespaces.forEach(ns => { event.register(ns + ':bookshelf_drawers', '#' + ns + ':bookshelf_drawers'); });
    event.register('mcwfurnitures:chairs', '#mcwfurnitures:chairs');
    modNamespaces.forEach(ns => { event.register(ns + ':chairs', '#' + ns + ':chairs'); });
    event.register('mcwfurnitures:coffee_tables', '#mcwfurnitures:coffee_tables');
    modNamespaces.forEach(ns => { event.register(ns + ':coffee_tables', '#' + ns + ':coffee_tables'); });
    event.register('mcwfurnitures:counters', '#mcwfurnitures:counters');
    modNamespaces.forEach(ns => { event.register(ns + ':counters', '#' + ns + ':counters'); });
    event.register('mcwfurnitures:covered_desks', '#mcwfurnitures:covered_desks');
    modNamespaces.forEach(ns => { event.register(ns + ':covered_desks', '#' + ns + ':covered_desks'); });
    event.register('mcwfurnitures:cupboard_counters', '#mcwfurnitures:cupboard_counters');
    modNamespaces.forEach(ns => { event.register(ns + ':cupboard_counters', '#' + ns + ':cupboard_counters'); });
    event.register('mcwfurnitures:desks', '#mcwfurnitures:desks');
    modNamespaces.forEach(ns => { event.register(ns + ':desks', '#' + ns + ':desks'); });
    event.register('mcwfurnitures:double_drawers', '#mcwfurnitures:double_drawers');
    modNamespaces.forEach(ns => { event.register(ns + ':double_drawers', '#' + ns + ':double_drawers'); });
    event.register('mcwfurnitures:double_drawer_counters', '#mcwfurnitures:double_drawer_counters');
    modNamespaces.forEach(ns => { event.register(ns + ':double_drawer_counters', '#' + ns + ':double_drawer_counters'); });
    event.register('mcwfurnitures:double_kitchen_cabinets', '#mcwfurnitures:double_kitchen_cabinets');
    modNamespaces.forEach(ns => { event.register(ns + ':double_kitchen_cabinets', '#' + ns + ':double_kitchen_cabinets'); });
    event.register('mcwfurnitures:double_wardrobes', '#mcwfurnitures:double_wardrobes');
    modNamespaces.forEach(ns => { event.register(ns + ':double_wardrobes', '#' + ns + ':double_wardrobes'); });
    event.register('mcwfurnitures:drawers', '#mcwfurnitures:drawers');
    modNamespaces.forEach(ns => { event.register(ns + ':drawers', '#' + ns + ':drawers'); });
    event.register('mcwfurnitures:drawer_counters', '#mcwfurnitures:drawer_counters');
    modNamespaces.forEach(ns => { event.register(ns + ':drawer_counters', '#' + ns + ':drawer_counters'); });
    event.register('mcwfurnitures:end_tables', '#mcwfurnitures:end_tables');
    modNamespaces.forEach(ns => { event.register(ns + ':end_tables', '#' + ns + ':end_tables'); });
    event.register('mcwfurnitures:glass_kitchen_cabinets', '#mcwfurnitures:glass_kitchen_cabinets');
    modNamespaces.forEach(ns => { event.register(ns + ':glass_kitchen_cabinets', '#' + ns + ':glass_kitchen_cabinets'); });
    event.register('mcwfurnitures:glass_tables', '#mcwfurnitures:glass_tables');
    modNamespaces.forEach(ns => { event.register(ns + ':glass_tables', '#' + ns + ':glass_tables'); });
    event.register('mcwfurnitures:kitchen_cabinets', '#mcwfurnitures:kitchen_cabinets');
    modNamespaces.forEach(ns => { event.register(ns + ':kitchen_cabinets', '#' + ns + ':kitchen_cabinets'); });
    event.register('mcwfurnitures:kitchen_sinks', '#mcwfurnitures:kitchen_sinks');
    modNamespaces.forEach(ns => { event.register(ns + ':kitchen_sinks', '#' + ns + ':kitchen_sinks'); });
    event.register('mcwfurnitures:large_drawers', '#mcwfurnitures:large_drawers');
    modNamespaces.forEach(ns => { event.register(ns + ':large_drawers', '#' + ns + ':large_drawers'); });
    event.register('mcwfurnitures:lower_bookshelf_drawers', '#mcwfurnitures:lower_bookshelf_drawers');
    modNamespaces.forEach(ns => { event.register(ns + ':lower_bookshelf_drawers', '#' + ns + ':lower_bookshelf_drawers'); });
    event.register('mcwfurnitures:lower_triple_drawers', '#mcwfurnitures:lower_triple_drawers');
    modNamespaces.forEach(ns => { event.register(ns + ':lower_triple_drawers', '#' + ns + ':lower_triple_drawers'); });
    event.register('mcwfurnitures:modern_chairs', '#mcwfurnitures:modern_chairs');
    modNamespaces.forEach(ns => { event.register(ns + ':modern_chairs', '#' + ns + ':modern_chairs'); });
    event.register('mcwfurnitures:modern_desks', '#mcwfurnitures:modern_desks');
    modNamespaces.forEach(ns => { event.register(ns + ':modern_desks', '#' + ns + ':modern_desks'); });
    event.register('mcwfurnitures:modern_wardrobes', '#mcwfurnitures:modern_wardrobes');
    modNamespaces.forEach(ns => { event.register(ns + ':modern_wardrobes', '#' + ns + ':modern_wardrobes'); });
    event.register('mcwfurnitures:stool_chairs', '#mcwfurnitures:stool_chairs');
    modNamespaces.forEach(ns => { event.register(ns + ':stool_chairs', '#' + ns + ':stool_chairs'); });
    event.register('mcwfurnitures:striped_chairs', '#mcwfurnitures:striped_chairs');
    modNamespaces.forEach(ns => { event.register(ns + ':striped_chairs', '#' + ns + ':striped_chairs'); });
    event.register('mcwfurnitures:tables', '#mcwfurnitures:tables');
    modNamespaces.forEach(ns => { event.register(ns + ':tables', '#' + ns + ':tables'); });
    event.register('mcwfurnitures:triple_drawers', '#mcwfurnitures:triple_drawers');
    modNamespaces.forEach(ns => { event.register(ns + ':triple_drawers', '#' + ns + ':triple_drawers'); });
    event.register('mcwfurnitures:wardrobes', '#mcwfurnitures:wardrobes');
    modNamespaces.forEach(ns => { event.register(ns + ':wardrobes', '#' + ns + ':wardrobes'); });
    event.register('mcwlights:ceiling_fan_lights', '#mcwlights:ceiling_fan_lights');
    modNamespaces.forEach(ns => { event.register(ns + ':ceiling_fan_lights', '#' + ns + ':ceiling_fan_lights'); });
    event.register('mcwlights:tiki_torches', '#mcwlights:tiki_torches');
    modNamespaces.forEach(ns => { event.register(ns + ':tiki_torches', '#' + ns + ':tiki_torches'); });
    event.register('mcwfences:curved_gates', '#mcwfences:curved_gates');
    modNamespaces.forEach(ns => { event.register(ns + ':curved_gates', '#' + ns + ':curved_gates'); });
    event.register('mcwfences:hedges', '#mcwfences:hedges');
    modNamespaces.forEach(ns => { event.register(ns + ':hedges', '#' + ns + ':hedges'); });
    event.register('mcwfences:highley_gates', '#mcwfences:highley_gates');
    modNamespaces.forEach(ns => { event.register(ns + ':highley_gates', '#' + ns + ':highley_gates'); });
    event.register('mcwfences:horse_fences', '#mcwfences:horse_fences');
    modNamespaces.forEach(ns => { event.register(ns + ':horse_fences', '#' + ns + ':horse_fences'); });
    event.register('mcwfences:picket_fences', '#mcwfences:picket_fences');
    modNamespaces.forEach(ns => { event.register(ns + ':picket_fences', '#' + ns + ':picket_fences'); });
    event.register('mcwfences:pyramid_gates', '#mcwfences:pyramid_gates');
    modNamespaces.forEach(ns => { event.register(ns + ':pyramid_gates', '#' + ns + ':pyramid_gates'); });
    event.register('mcwfences:stockade_fences', '#mcwfences:stockade_fences');
    modNamespaces.forEach(ns => { event.register(ns + ':stockade_fences', '#' + ns + ':stockade_fences'); });
    event.register('mcwfences:wired_fences', '#mcwfences:wired_fences');
    modNamespaces.forEach(ns => { event.register(ns + ':wired_fences', '#' + ns + ':wired_fences'); });
    event.register('mcwfences:railing_gates', '#mcwfences:railing_gates');
    modNamespaces.forEach(ns => { event.register(ns + ':railing_gates', '#' + ns + ':railing_gates'); });
    event.register('mcwfences:brick_walls', '#mcwfences:brick_walls');
    modNamespaces.forEach(ns => { event.register(ns + ':brick_walls', '#' + ns + ':brick_walls'); });
    event.register('mcwfences:pillar_walls', '#mcwfences:pillar_walls');
    modNamespaces.forEach(ns => { event.register(ns + ':pillar_walls', '#' + ns + ':pillar_walls'); });
    event.register('mcwfences:railing_walls', '#mcwfences:railing_walls');
    modNamespaces.forEach(ns => { event.register(ns + ':railing_walls', '#' + ns + ':railing_walls'); });
    event.register('mcwfences:modern_walls', '#mcwfences:modern_walls');
    modNamespaces.forEach(ns => { event.register(ns + ':modern_walls', '#' + ns + ':modern_walls'); });
    event.register('mcwpaths:rocky_paths', '#mcwpaths:rocky_paths');
    modNamespaces.forEach(ns => { event.register(ns + ':rocky_paths', '#' + ns + ':rocky_paths'); });
    event.register('mcwpaths:flagstone_paths', '#mcwpaths:flagstone_paths');
    modNamespaces.forEach(ns => { event.register(ns + ':flagstone_paths', '#' + ns + ':flagstone_paths'); });
    event.register('mcwpaths:running_bond_paths', '#mcwpaths:running_bond_paths');
    modNamespaces.forEach(ns => { event.register(ns + ':running_bond_paths', '#' + ns + ':running_bond_paths'); });
    event.register('mcwpaths:crystal_floor_paths', '#mcwpaths:crystal_floor_paths');
    modNamespaces.forEach(ns => { event.register(ns + ':crystal_floor_paths', '#' + ns + ':crystal_floor_paths'); });
    event.register('mcwpaths:windmill_weave_paths', '#mcwpaths:windmill_weave_paths');
    modNamespaces.forEach(ns => { event.register(ns + ':windmill_weave_paths', '#' + ns + ':windmill_weave_paths'); });

    event.register('create:seats', '#create:seats')
    event.register('mekanism:portable_item_cells', '#mekanism:portable_item_cells')
    event.register('ae2:portable_fluid_cells', '#ae2:portable_fluid_cells')
    event.register('ae2:crafting_storage', '#ae2:crafting_storage')
    event.register('railways:filled_paint_pitchers', '#railways:filled_paint_pitchers')

    event.register('mcwpaths:diamond_paving', '#mcwpaths:diamond_paving');
    modNamespaces.forEach(ns => { event.register(ns + ':diamond_paving', '#' + ns + ':diamond_paving'); });
    event.register('mcwpaths:basket_weave_paving', '#mcwpaths:basket_weave_paving');
    modNamespaces.forEach(ns => { event.register(ns + ':basket_weave_paving', '#' + ns + ':basket_weave_paving'); });
    event.register('mcwpaths:square_paving', '#mcwpaths:square_paving');
    modNamespaces.forEach(ns => { event.register(ns + ':square_paving', '#' + ns + ':square_paving'); });
    event.register('mcwpaths:honeycomb_paving', '#mcwpaths:honeycomb_paving');
    modNamespaces.forEach(ns => { event.register(ns + ':honeycomb_paving', '#' + ns + ':honeycomb_paving'); });
    event.register('mcwpaths:clover_paving', '#mcwpaths:clover_paving');
    modNamespaces.forEach(ns => { event.register(ns + ':clover_paving', '#' + ns + ':clover_paving'); });
    event.register('mcwpaths:dumble_paving', '#mcwpaths:dumble_paving');
    modNamespaces.forEach(ns => { event.register(ns + ':dumble_paving', '#' + ns + ':dumble_paving'); });

    event.register('mcwpaths:planks_paths', '#mcwpaths:planks_paths');
    modNamespaces.forEach(ns => { event.register(ns + ':planks_paths', '#' + ns + ':planks_paths'); });
    event.register('mcwstairs:balconies', '#mcwstairs:balconies');
    modNamespaces.forEach(ns => { event.register(ns + ':balconies', '#' + ns + ':balconies'); });
    event.register('mcwstairs:bulk_stairs', '#mcwstairs:bulk_stairs');
    modNamespaces.forEach(ns => { event.register(ns + ':bulk_stairs', '#' + ns + ':bulk_stairs'); });
    event.register('mcwstairs:compact_stairs', '#mcwstairs:compact_stairs');
    modNamespaces.forEach(ns => { event.register(ns + ':compact_stairs', '#' + ns + ':compact_stairs'); });
    event.register('mcwstairs:loft_stairs', '#mcwstairs:loft_stairs');
    modNamespaces.forEach(ns => { event.register(ns + ':loft_stairs', '#' + ns + ':loft_stairs'); });
    event.register('mcwstairs:platforms', '#mcwstairs:platforms');
    modNamespaces.forEach(ns => { event.register(ns + ':platforms', '#' + ns + ':platforms'); });
    event.register('mcwstairs:railings', '#mcwstairs:railings');
    modNamespaces.forEach(ns => { event.register(ns + ':railings', '#' + ns + ':railings'); });
    event.register('mcwstairs:skyline_stairs', '#mcwstairs:skyline_stairs');
    modNamespaces.forEach(ns => { event.register(ns + ':skyline_stairs', '#' + ns + ':skyline_stairs'); });
    event.register('mcwstairs:terrace_stairs', '#mcwstairs:terrace_stairs');
    modNamespaces.forEach(ns => { event.register(ns + ':terrace_stairs', '#' + ns + ':terrace_stairs'); });
    event.register('mcwwindows:blinds', '#mcwwindows:blinds');
    modNamespaces.forEach(ns => { event.register(ns + ':blinds', '#' + ns + ':blinds'); });
    event.register('mcwwindows:curtain_rods', '#mcwwindows:curtain_rods');
    modNamespaces.forEach(ns => { event.register(ns + ':curtain_rods', '#' + ns + ':curtain_rods'); });
    event.register('mcwwindows:windows_four', '#mcwwindows:windows_four');
    modNamespaces.forEach(ns => { event.register(ns + ':windows_four', '#' + ns + ':windows_four'); });
    event.register('mcwwindows:parapets', '#mcwwindows:parapets');
    modNamespaces.forEach(ns => { event.register(ns + ':parapets', '#' + ns + ':parapets'); });
    event.register('mcwwindows:louvered_shutters', '#mcwwindows:louvered_shutters');
    modNamespaces.forEach(ns => { event.register(ns + ':louvered_shutters', '#' + ns + ':louvered_shutters'); });
    event.register('mcwwindows:pane_windows', '#mcwwindows:pane_windows');
    modNamespaces.forEach(ns => { event.register(ns + ':pane_windows', '#' + ns + ':pane_windows'); });
    event.register('mcwwindows:shutters', '#mcwwindows:shutters');
    modNamespaces.forEach(ns => { event.register(ns + ':shutters', '#' + ns + ':shutters'); });
    event.register('mcwwindows:windows', '#mcwwindows:windows');
    modNamespaces.forEach(ns => { event.register(ns + ':windows', '#' + ns + ':windows'); });
    event.register('mcwwindows:windows_two', '#mcwwindows:windows_two');
    modNamespaces.forEach(ns => { event.register(ns + ':windows_two', '#' + ns + ':windows_two'); });
    event.register('mcwroofs:attic_roofs', '#mcwroofs:attic_roofs');
    modNamespaces.forEach(ns => { event.register(ns + ':attic_roofs', '#' + ns + ':attic_roofs'); });
    event.register('mcwroofs:lower_roofs', '#mcwroofs:lower_roofs');
    modNamespaces.forEach(ns => { event.register(ns + ':lower_roofs', '#' + ns + ':lower_roofs'); });
    event.register('mcwroofs:planks_attic_roofs', '#mcwroofs:planks_attic_roofs');
    modNamespaces.forEach(ns => { event.register(ns + ':planks_attic_roofs', '#' + ns + ':planks_attic_roofs'); });
    event.register('mcwroofs:planks_lower_roofs', '#mcwroofs:planks_lower_roofs');
    modNamespaces.forEach(ns => { event.register(ns + ':planks_lower_roofs', '#' + ns + ':planks_lower_roofs'); });
    event.register('mcwroofs:planks_roofs', '#mcwroofs:planks_roofs');
    modNamespaces.forEach(ns => { event.register(ns + ':planks_roofs', '#' + ns + ':planks_roofs'); });
    event.register('mcwroofs:planks_steep_roofs', '#mcwroofs:planks_steep_roofs');
    modNamespaces.forEach(ns => { event.register(ns + ':planks_steep_roofs', '#' + ns + ':planks_steep_roofs'); });
    event.register('mcwroofs:planks_top_roofs', '#mcwroofs:planks_top_roofs');
    modNamespaces.forEach(ns => { event.register(ns + ':planks_top_roofs', '#' + ns + ':planks_top_roofs'); });
    event.register('mcwroofs:planks_upper_lower_roofs', '#mcwroofs:planks_upper_lower_roofs');
    modNamespaces.forEach(ns => { event.register(ns + ':planks_upper_lower_roofs', '#' + ns + ':planks_upper_lower_roofs'); });
    event.register('mcwroofs:planks_upper_steep_roofs', '#mcwroofs:planks_upper_steep_roofs');
    modNamespaces.forEach(ns => { event.register(ns + ':planks_upper_steep_roofs', '#' + ns + ':planks_upper_steep_roofs'); });
    event.register('mcwroofs:roofs', '#mcwroofs:roofs');
    modNamespaces.forEach(ns => { event.register(ns + ':roofs', '#' + ns + ':roofs'); });
    event.register('mcwroofs:steep_roofs', '#mcwroofs:steep_roofs');
    modNamespaces.forEach(ns => { event.register(ns + ':steep_roofs', '#' + ns + ':steep_roofs'); });
    event.register('mcwroofs:top_roofs', '#mcwroofs:top_roofs');
    modNamespaces.forEach(ns => { event.register(ns + ':top_roofs', '#' + ns + ':top_roofs'); });
    event.register('mcwroofs:upper_lower_roofs', '#mcwroofs:upper_lower_roofs');
    modNamespaces.forEach(ns => { event.register(ns + ':upper_lower_roofs', '#' + ns + ':upper_lower_roofs'); });
    event.register('mcwroofs:upper_steep_roofs', '#mcwroofs:upper_steep_roofs');
    modNamespaces.forEach(ns => { event.register(ns + ':upper_steep_roofs', '#' + ns + ':upper_steep_roofs'); });
    event.register('mcwtrpdoors:bamboo_trapdoors', '#mcwtrpdoors:bamboo_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':bamboo_trapdoors', '#' + ns + ':bamboo_trapdoors'); });
    event.register('mcwtrpdoors:bark_trapdoors', '#mcwtrpdoors:bark_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':bark_trapdoors', '#' + ns + ':bark_trapdoors'); });
    event.register('mcwtrpdoors:barn_trapdoors', '#mcwtrpdoors:barn_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':barn_trapdoors', '#' + ns + ':barn_trapdoors'); });
    event.register('mcwtrpdoors:barred_trapdoors', '#mcwtrpdoors:barred_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':barred_trapdoors', '#' + ns + ':barred_trapdoors'); });
    event.register('mcwtrpdoors:barrel_trapdoors', '#mcwtrpdoors:barrel_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':barrel_trapdoors', '#' + ns + ':barrel_trapdoors'); });
    event.register('mcwtrpdoors:beach_trapdoors', '#mcwtrpdoors:beach_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':beach_trapdoors', '#' + ns + ':beach_trapdoors'); });
    event.register('mcwtrpdoors:blossom_trapdoors', '#mcwtrpdoors:blossom_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':blossom_trapdoors', '#' + ns + ':blossom_trapdoors'); });
    event.register('mcwtrpdoors:cottage_trapdoors', '#mcwtrpdoors:cottage_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':cottage_trapdoors', '#' + ns + ':cottage_trapdoors'); });
    event.register('mcwtrpdoors:four_panel_trapdoors', '#mcwtrpdoors:four_panel_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':four_panel_trapdoors', '#' + ns + ':four_panel_trapdoors'); });
    event.register('mcwtrpdoors:glass_trapdoors', '#mcwtrpdoors:glass_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':glass_trapdoors', '#' + ns + ':glass_trapdoors'); });
    event.register('mcwtrpdoors:mystic_trapdoors', '#mcwtrpdoors:mystic_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':mystic_trapdoors', '#' + ns + ':mystic_trapdoors'); });
    event.register('mcwtrpdoors:paper_trapdoors', '#mcwtrpdoors:paper_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':paper_trapdoors', '#' + ns + ':paper_trapdoors'); });
    event.register('mcwtrpdoors:ranch_trapdoors', '#mcwtrpdoors:ranch_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':ranch_trapdoors', '#' + ns + ':ranch_trapdoors'); });
    event.register('mcwtrpdoors:swamp_trapdoors', '#mcwtrpdoors:swamp_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':swamp_trapdoors', '#' + ns + ':swamp_trapdoors'); });
    event.register('mcwtrpdoors:tropical_trapdoors', '#mcwtrpdoors:tropical_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':tropical_trapdoors', '#' + ns + ':tropical_trapdoors'); });
    event.register('mcwtrpdoors:whispering_trapdoors', '#mcwtrpdoors:whispering_trapdoors');
    modNamespaces.forEach(ns => { event.register(ns + ':whispering_trapdoors', '#' + ns + ':whispering_trapdoors'); });

})
