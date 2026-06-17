ServerEvents.tags('item', event => {
    const HIDDEN_ITEMS = [
        "alexsmobsinteraction:eggs",
        "alexsmobsinteraction:tab_icon",
        "alexscaves:advancement_tab_icon",
        "alexscaves:dinosaur_train",
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
        "everycomp:all_woods",
        "stonezone:all_stones"
        // "cataclysm:stone_tiles",
        // "cataclysm:stone_tile_slab",
        // "cataclysm:stone_tile_stairs",
        // "cataclysm:stone_tile_wall",
    ];

    HIDDEN_ITEMS.forEach(id => {
        event.add('c:hidden_from_recipe_viewers', id);
    });

    event.add('c:hidden_from_recipe_viewers', /alexsmobs:.*dimensional_carver_shard.*/);
    event.add('c:hidden_from_recipe_viewers', /minecraft:.*sapling.*/);
    event.add('c:hidden_from_recipe_viewers', /biomesoplenty:.*sapling.*/);
    event.add('c:hidden_from_recipe_viewers', /natures_spirit:.*sapling.*/);
    event.add('c:hidden_from_recipe_viewers', /autumnity:.*sapling.*/);
    event.add('c:hidden_from_recipe_viewers', /quark:.*sapling.*/);
    event.add('c:hidden_from_recipe_viewers', /aether:.*sapling.*/);
    event.add('c:hidden_from_recipe_viewers', /deep_aether:.*sapling.*/);
    event.add('c:hidden_from_recipe_viewers', /aether_redux:.*sapling.*/);
    event.add('c:hidden_from_recipe_viewers', /ancient_aether:.*sapling.*/);
    event.add('c:hidden_from_recipe_viewers', /upgrade_aquatic:.*sapling.*/);
    event.add('c:hidden_from_recipe_viewers', /minecraft:.*propagule.*/);
    event.add('c:hidden_from_recipe_viewers', /xaeroworldmap:.*/);
    event.add('c:hidden_from_recipe_viewers', /xaerominimap:.*/);
    event.add('c:hidden_from_recipe_viewers', /citadel:.*/);
    event.add('c:hidden_from_recipe_viewers', /structure_gel:.*/);
    event.add('c:hidden_from_recipe_viewers', /dragonlib:.*/);
    event.add('c:hidden_from_recipe_viewers', /caverns_and_chasms:.*placed.*/);
    event.add('c:hidden_from_recipe_viewers', /create:.*placable.*/);
    event.add('c:hidden_from_recipe_viewers', /^dt[^:]*:.*(?:tree|branch).*$/);
    event.add('c:hidden_from_recipe_viewers', /.*debug.*/);
});
