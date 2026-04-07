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
        "alexsmobsinteraction:eggs"
    ];

    HIDDEN_ITEMS.forEach(id => {
        event.add('c:hidden_from_recipe_viewers', id);
    });

    event.add('c:hidden_from_recipe_viewers', /xaeroworldmap:.*/);
    event.add('c:hidden_from_recipe_viewers', /xaerominimap:.*/);
    event.add('c:hidden_from_recipe_viewers', /citadel:.*/);
    event.add('c:hidden_from_recipe_viewers', /structure_gel:.*/);
    event.add('c:hidden_from_recipe_viewers', /dragonlib:.*/);
});

ServerEvents.tags('item', event => {
    event.add('forge:hidden_from_recipe_viewers', '#c:hidden_from_recipe_viewers');
});
