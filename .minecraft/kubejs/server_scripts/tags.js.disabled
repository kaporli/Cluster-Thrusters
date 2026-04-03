ServerEvents.tags('item', event => {
    event.add('iceandfire:dragon_food_meat', 'alexsdelight:raw_bison')
    event.add('iceandfire:dragon_food_meat', 'alexsdelight:cooked_bison')
    event.add('iceandfire:dragon_food_meat', 'alexsdelight:bison_mince')

    // ==========================================
    // EMI AND CUSTOM GROUP TAGS
    // ==========================================
    event.add('minecraft:stairs', [
        '#mcwpaths:path_stairs',
        'upgrade_aquatic:luminous_prismarine_stairs',
        // /^mcwstairs:(?!.*railing).*$/,
        // /^mcwbridges:.*_bridge_stair$/,
        /^mcwpaths:.*stair.*$/,
        /^natures_spirit:.*stair.*$/
    ])
    event.add('minecraft:beehives', [/^.*:.*beehive.*$/, /^.*:.*bee_nest.*$/])
    event.add('minecraft:slabs', [
        '#mcwpaths:slab_paths',
        /^mcwpaths:.*slab.*$/,
        /^natures_spirit:.*slab.*$/
    ])
    event.add('forge:ladders', [
        '#quark:ladders',
        /^.*:.*end_ladder$/,
        /^.*:.*rung_ladder$/
    ])
    
    event.add('kubejs:buntings', /^.*:.*bunting.*$/)
    event.add('supplementaries:paper_lanterns', /^natures_spirit:.*paper_lantern.*$/)

    event.get('kubejs:emi_boats').removeAll()
    event.add('kubejs:emi_boats', /^.*:(?!.*chest_)(?!.*furnace_)(?!.*large_).*(boat|raft)$/)

    event.get('kubejs:emi_fences').removeAll()
    event.get('kubejs:emi_fence_gates').removeAll()
    event.get('kubejs:unstripped_wood').removeAll()
    event.get('kubejs:emi_logs').removeAll()
    event.get('kubejs:emi_stripped_logs').removeAll()
    event.get('kubejs:emi_stripped_wood').removeAll()
    event.get('kubejs:emi_planks').removeAll()
    event.get('kubejs:emi_vertical_planks').removeAll()

    event.add('kubejs:emi_fences', /^.*:.*fence(s)?$/)
    event.add('kubejs:emi_fence_gates', /^.*:.*fence_gate.*$/)

    event.add('kubejs:unstripped_wood', /^.*:(?!.*stripped_)(?!.*hollow_).*(_wood|hyphae)$/)
    event.add('kubejs:emi_logs', /^.*:(?!.*stripped_)(?!.*wood)(?!.*hyphae)(?!.*hollow_).*(log|bamboo_block)$/)
    event.add('kubejs:emi_stripped_logs', /^.*:stripped_.*(log|bamboo_block)$/)
    event.add('kubejs:emi_stripped_wood', /^.*:stripped_.*(wood|hyphae)$/)

    event.add('kubejs:emi_planks', /^.*:(?!.*vertical_).*planks$/)
    event.add('kubejs:emi_vertical_planks', /^.*:vertical_(?:.*_)?planks$/)

    event.get('kubejs:emi_leaf_carpets').removeAll()
    event.add('kubejs:emi_leaf_carpets', /^.*:.*_leaf_(carpet|pile)$/)

    let macawFences = [
        /^.*picket.*$/,
        /^.*horse_fence.*$/,
        /^.*wired_fence.*$/,
        /^.*stockade_fence.*$/,
        /^.*highley_gate.*$/,
        /^.*pyramid_gate.*$/,
        /^.*curved_gate.*$/,
        /^.*hedge.*$/,
        /^.*railing_gate.*$/,
        /^mcwfences:.*$/,
        /^everycomp:.*mcwfences.*$/,
        /^stonezone:.*mcf\/.*$/
    ]
    event.remove('kubejs:emi_fences', macawFences)
    event.remove('kubejs:emi_fence_gates', macawFences)

    // Alex's Caves
    event.add('kubejs:cave_paintings', /^alexscaves:.*_cave_painting$/)

    event.add('kubejs:corals', [
        /^upgrade_aquatic:.*corals$/,
        /^upgrade_aquatic:.*coral$/
    ])
    event.add('kubejs:pathfinder_quills', 'quark:pathfinders_quill')
    event.add('kubejs:train_tracks', [
        '#create:tracks',
        /^railways:.*track.*$/
    ])
    event.add('kubejs:pipe_facades', 'ae2:facade')
    event.add('kubejs:pellets', /^forge:.*pellet.*$/)
    event.add('kubejs:bins', /^mekanism:.*bin$/)
    event.add('forge:rods', '#forge:rods')
    event.add('createaddition:spools', '#createaddition:spools')

    event.add('kubejs:runes', ['#irons_spellbooks:inscribed_rune', 'irons_spellbooks:blank_rune'])
    event.add('mcwtrpdoors:prints', /^mcwtrpdoors:.*print.*$/)

    event.add('kubejs:podiums', /^iceandfire:podium.*$/)
    event.add('kubejs:dragon_eggs', /^iceandfire:dragonegg.*$/)
    event.add('kubejs:jelly_beans', /^alexscaves:jelly_bean.*$/)

    event.add('kubejs:paint_balls', /^ae2:.*paint_ball.*$/)
    event.add('kubejs:fluid_storage_cells', /^ae2:.*fluid_storage_cell.*$/)
    event.add('kubejs:item_storage_cells', /^ae2:.*item_storage_cell.*$/)
    event.add('kubejs:chemical_storage_cells', /^appmek:chemical_storage_cell.*$/)
    event.add('kubejs:food_displays', /^displaydelight:.*$/)

    event.add('kubejs:crates', [
        /^(?:quark|natures_delight|endersdelight|farmersdelight|aethersdelight|ascended_quark|mynethersdelight|miners_delight|quarkdelight|brewinandchewin|compatdelight|dolt_mod_how):.*_crate.*$/,
        /^compatdelight:.*box$/
    ])

    event.add('kubejs:cell_components', /^ae2:cell_component.*$/)
    event.add('kubejs:spatial_components', /^ae2:spatial_component.*$/)
    event.add('kubejs:spatial_storage_cells', /^ae2:spatial_storage_cell.*$/)
    event.add('kubejs:cards', /^ae2:.*card$/)
    event.add('kubejs:processors', /^ae2:.*processor$/)
    event.add('kubejs:presses', /^ae2:.*press$/)
    event.add('kubejs:sconces', /^supplementaries:.*sconce.*$/)

    event.add('kubejs:chemical_tanks', /^mekanism:.*chemical_tank$/)
    event.add('kubejs:fluid_tanks', /^mekanism:.*fluid_tank$/)
    event.add('kubejs:factories', /^mekanism:.*factory$/)
    event.add('kubejs:transporters', /^mekanism:.*transporter$/)
    event.add('kubejs:thermodynamic_conductors', /^mekanism:.*thermodynamic_conductor$/)
    event.add('kubejs:pressurized_tubes', /^mekanism:.*pressurized_tube.*$/)
    event.add('kubejs:energy_cubes', /^mekanism:.*energy_cube$/)
    event.add('kubejs:control_circuits', /^mekanism:.*control_circuit$/)
    event.add('kubejs:crystals', /^mekanism:crystal.*$/)
    event.add('kubejs:induction_cells', /^mekanism:.*induction_cell$/)
    event.add('kubejs:induction_providers', /^mekanism:.*induction_provider$/)
    event.add('kubejs:tier_installers', /^mekanism:.*tier_installer$/)
    event.add('kubejs:upgrades', /^mekanism:upgrade.*$/)

    event.add('kubejs:inks', /^irons_spellbooks:.*ink$/)
    event.add('kubejs:upgrade_orbs', /^irons_spellbooks:.*upgrade_orb$/)
    event.add('kubejs:pickarangs', [
        'ascended_quark:valkyrie_pickarang',
        'quark:pickarang',
        'ascended_quark:phoenix_flamerang',
        'quark:flamerang'
    ])

    event.add('kubejs:murals', /^cataclysm:.*mural.*$/)
    event.add('kubejs:azure_seastones', /^cataclysm:.*azure_seastone.*$/)
    event.add('kubejs:fossils', /^betterarcheology:.*fossil.*$/)

    event.remove('minecraft:trim_templates', [
        'legendary_monsters:enderitium_upgrade_smithing_template',
        'legendary_monsters:annihilator_upgrade_smithing_template',
        'deep_aether:stratus_smithing_upgrade'
    ])

    event.add('minecraft:trim_templates', 'quark:smithing_template_rune')

    event.add('minecraft:smithing_upgrades', [
        'minecraft:netherite_upgrade_smithing_template',
        'traveloptics:tectonic_upgrade_smithing_template',
        'traveloptics:darkness_upgrade_smithing_template',
        'traveloptics:abyssal_upgrade_smithing_template',
        'traveloptics:witherite_upgrade_smithing_template',
        'traveloptics:ocean_sovereign_upgrade_smithing_template',
        'eeeabsmobs:ghost_warrior_upgrade_smithing_template',
        'cataclysm:ignitium_upgrade_smithing_template',
        'cataclysm:cursium_upgrade_smithing_template',
        'unusualend:pearlescent_upgrade_smithing_template',
        'aether_treasure_reforging:neptune_upgrade_smithing_template',
        'aether_treasure_reforging:valkyrie_upgrade_smithing_template',
        'aether_treasure_reforging:phoenix_upgrade_smithing_template',
        'deep_aether:stormforged_smithing_template',
        'wan_ancient_beasts:ancient_upgrade_smithing_template',
        'legendary_monsters:enderitium_upgrade_smithing_template',
        'legendary_monsters:annihilator_upgrade_smithing_template',
    ])

    // ==========================================
    // MULTI ITEM TAG ADDITIONS
    // ==========================================

    let multiTag = (tags, items) => {
        tags.forEach(t => event.add(t, items))
    }

    multiTag(
        ['minecraft:swords', 'c:swords', 'forge:tools/swords'],
        [
            'eeeabsmobs:immortal_sword',
            'cataclysm:black_steel_sword',
            'unusualend:pearlescent_sword',
            'unusualend:warped_spear',
            'deep_aether:storm_sword',
            'integrated_simply_swords:iceandfire/dragonsteel_fire/longsword',
            'integrated_simply_swords:iceandfire/dragonsteel_ice/longsword',
            'integrated_simply_swords:iceandfire/dragonsteel_lightning/longsword',
            'integrated_simply_swords:iceandfire/dragonsteel_fire/greataxe',
            'integrated_simply_swords:iceandfire/dragonsteel_ice/greataxe',
            'integrated_simply_swords:iceandfire/dragonsteel_lightning/greataxe',
            'integrated_simply_swords:iceandfire/dragonbone/longsword',
            'integrated_simply_swords:iceandfire/dragonbone_fire/longsword',
            'integrated_simply_swords:iceandfire/dragonbone_ice/longsword',
            'integrated_simply_swords:iceandfire/dragonbone_lightning/longsword',
            'integrated_simply_swords:iceandfire/dragonbone/greataxe',
            'integrated_simply_swords:iceandfire/dragonbone_fire/greataxe',
            'integrated_simply_swords:iceandfire/dragonbone_ice/greataxe',
            'integrated_simply_swords:iceandfire/dragonbone_lightning/greataxe',
            'integrated_simply_swords:iceandfire/myrmex_jungle/longsword',
            'integrated_simply_swords:iceandfire/myrmex_desert/longsword',
            'integrated_simply_swords:iceandfire/myrmex_jungle/greataxe',
            'integrated_simply_swords:iceandfire/myrmex_desert/greataxe',
            'integrated_simply_swords:silver/longsword',
            'integrated_simply_swords:silver/greataxe',
            'alexscaves_torpedoes:scarlet_sword',
            'alexscaves_torpedoes:azure_sword',
            'alexscaves_torpedoes:shadow_sword',
            'legendary_monsters:enderitium_sword',
            'legendary_monsters:knights_sword',
            'legendary_monsters:soul_great_sword',
            'create:cardboard_sword'
        ]
    )

    multiTag(
        ['minecraft:axes', 'c:axes', 'forge:tools/axes'],
        [
            'eeeabsmobs:guardian_axe',
            'eeeabsmobs:immortal_axe',
            'cataclysm:black_steel_axe',
            'unusualend:pearlescent_axe',
            'mowziesmobs:wrought_axe',
            'alexscaves_torpedoes:scarlet_axe',
            'alexscaves_torpedoes:azure_axe',
            'alexscaves_torpedoes:shadow_axe',
            'legendary_monsters:enderitium_axe',
            'legendary_monsters:axe_of_lightning'
        ]
    )

    multiTag(
        ['minecraft:pickaxes', 'c:pickaxes', 'forge:tools/pickaxes'],
        [
            'cataclysm:black_steel_pickaxe',
            'unusualend:pearlescent_pickaxe',
            'unusualend:warped_anchor',
            'alexscaves_torpedoes:scarlet_pickaxe',
            'alexscaves_torpedoes:azure_pickaxe',
            'alexscaves_torpedoes:shadow_pickaxe',
            'legendary_monsters:enderitium_pickaxe'
        ]
    )

    multiTag(
        ['minecraft:shovels', 'c:shovels', 'forge:tools/shovels'],
        [
            'cataclysm:black_steel_shovel',
            'unusualend:pearlescent_shovel',
            'alexscaves_torpedoes:scarlet_shovel',
            'alexscaves_torpedoes:azure_shovel',
            'alexscaves_torpedoes:shadow_shovel',
            'legendary_monsters:enderitium_shovel'
        ]
    )

    multiTag(
        ['minecraft:hoes', 'c:hoes', 'forge:tools/hoes'],
        [
            'cataclysm:black_steel_hoe',
            'unusualend:pearlescent_hoe',
            'alexscaves_torpedoes:scarlet_hoe',
            'alexscaves_torpedoes:azure_hoe',
            'alexscaves_torpedoes:shadow_hoe',
            'legendary_monsters:enderitium_hoe'
        ]
    )


    // Custom new tags
    event.add('ae2:portable_item_cells', /^ae2:portable_item_cell.*$/)
    event.add('ae2:portable_fluid_cells', /^ae2:portable_fluid_cell.*$/)
    event.add('ae2:crafting_storage', /^ae2:.*_crafting_storage$/)


    // Macaw static copies
    event.get('mcwbridges:stone_bridges').add(["mcwbridges:brick_bridge", "mcwbridges:sandstone_bridge", "mcwbridges:stone_brick_bridge", "mcwbridges:orange_sandstone_bridge", "mcwbridges:blackstone_bridge", "mcwbridges:mossy_stone_brick_bridge", "mcwbridges:deepslate_brick_bridge", "mcwbridges:deepslate_tile_bridge", "mcwbridges:mud_brick_bridge", "mcwbridges:cobblestone_bridge", "mcwbridges:mossy_cobblestone_bridge", "mcwbridges:andesite_bridge", "mcwbridges:granite_bridge", "mcwbridges:diorite_bridge", "mcwbridges:prismarine_bricks_bridge", "mcwbridges:nether_bricks_bridge", "mcwbridges:end_stone_bricks_bridge", "mcwbridges:balustrade_stone_bricks_bridge", "mcwbridges:balustrade_sandstone_bridge", "mcwbridges:balustrade_bricks_bridge", "mcwbridges:balustrade_orange_sandstone_bridge", "mcwbridges:balustrade_blackstone_bridge", "mcwbridges:balustrade_mossy_stone_bricks_bridge", "mcwbridges:balustrade_deepslate_bricks_bridge", "mcwbridges:balustrade_deepslate_tiles_bridge", "mcwbridges:balustrade_mud_bricks_bridge", "mcwbridges:balustrade_cobblestone_bridge", "mcwbridges:balustrade_mossy_cobblestone_bridge", "mcwbridges:balustrade_andesite_bridge", "mcwbridges:balustrade_granite_bridge", "mcwbridges:balustrade_diorite_bridge", "mcwbridges:balustrade_prismarine_bricks_bridge", "mcwbridges:balustrade_nether_bricks_bridge", "mcwbridges:balustrade_end_stone_bricks_bridge"])
    event.get('mcwbridges:stone_stairs').add(["mcwbridges:stone_brick_bridge_stair", "mcwbridges:sandstone_bridge_stair", "mcwbridges:brick_bridge_stair", "mcwbridges:red_sandstone_bridge_stair", "mcwbridges:blackstone_bridge_stair", "mcwbridges:mossy_stone_bridge_stair", "mcwbridges:deepslate_brick_bridge_stair", "mcwbridges:deepslate_tile_bridge_stair", "mcwbridges:mud_brick_bridge_stair", "mcwbridges:glass_bridge_stair", "mcwbridges:cobblestone_bridge_stair", "mcwbridges:mossy_cobblestone_bridge_stair", "mcwbridges:andesite_bridge_stair", "mcwbridges:granite_bridge_stair", "mcwbridges:diorite_bridge_stair", "mcwbridges:prismarine_bricks_bridge_stair", "mcwbridges:nether_bricks_bridge_stair", "mcwbridges:end_stone_bricks_bridge_stair"])

})
