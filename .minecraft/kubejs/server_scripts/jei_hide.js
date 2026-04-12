ServerEvents.tags('item', event => {
    const HIDDEN_ITEMS = [
        'mekanism:block_raw_uranium',
        'biomesoplenty:redwood_log',
        'biomesoplenty:fir_log',
        'create_jetpack:jetpack_placeable',
        'create_jetpack:netherite_jetpack_placeable',
        "moonlight:placeable_item",
        "create_connected:incomplete_control_chip",
        "extra_compat:foul_soup_cup",
        "extra_compat:cavern_explorer_stew_cup",
        "extra_compat:miso_with_bamboo_sprouts_cup",
        "extra_compat:mosquito_repellent_stew_cup",
        "extra_compat:acacia_blossom_soup_cup",
        "extra_compat:kangaroo_stew_cup",
        "wither_spawn_animation:no_w",
        "cinematiccataclysm:debug_stick",
        "monolib:debug_block",
        "monolib:debug_item",
        "fdlib:test_multiblock",
        "alexsmobsinteraction:eggs",
        // "cataclysm:stone_tiles",
        // "cataclysm:stone_tile_slab",
        // "cataclysm:stone_tile_stairs",
        // "cataclysm:stone_tile_wall",
    ];

    HIDDEN_ITEMS.forEach(id => {
        event.add('forge:hidden_from_recipe_viewers', id);
    });

    event.add('forge:hidden_from_recipe_viewers', /minecraft:.*sapling.*/);
    event.add('forge:hidden_from_recipe_viewers', /biomesoplenty:.*sapling.*/);
    event.add('forge:hidden_from_recipe_viewers', /natures_spirit:.*sapling.*/);
    event.add('forge:hidden_from_recipe_viewers', /autumnity:.*sapling.*/);
    event.add('forge:hidden_from_recipe_viewers', /quark:.*sapling.*/);
    event.add('forge:hidden_from_recipe_viewers', /aether:.*sapling.*/);
    event.add('forge:hidden_from_recipe_viewers', /deep_aether:.*sapling.*/);
    event.add('forge:hidden_from_recipe_viewers', /ancient_aether:.*sapling.*/);
    event.add('forge:hidden_from_recipe_viewers', /upgrade_aquatic:.*sapling.*/);
    event.add('forge:hidden_from_recipe_viewers', /minecraft:.*propagule.*/);
    event.add('forge:hidden_from_recipe_viewers', /xaeroworldmap:.*/);
    event.add('forge:hidden_from_recipe_viewers', /xaerominimap:.*/);
    event.add('forge:hidden_from_recipe_viewers', /citadel:.*/);
    event.add('forge:hidden_from_recipe_viewers', /structure_gel:.*/);
    event.add('forge:hidden_from_recipe_viewers', /dragonlib:.*/);
});
