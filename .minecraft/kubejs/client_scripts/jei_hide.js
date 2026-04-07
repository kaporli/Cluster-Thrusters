const HIDDEN_ITEMS = [
    'mekanism:block_raw_uranium',
    'biomesoplenty:redwood_log',
    'biomesoplenty:fir_log',
    'create_jetpack:jetpack_placeable',
    'create_jetpack:netherite_jetpack_placeable',
    "moonlight:placeable_item",
    "create_connected:incomplete_control_chip",
    "extra_compat:foul_soup_cup",
    "extra_compat:cavern_explorer_stew_soup",
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
];

JEIEvents.hideItems(event => {
    HIDDEN_ITEMS.forEach(id => event.hide(id));

    event.hide(/xaeroworldmap:.*/);
    event.hide(/xaerominimap:.*/);
    event.hide(/citadel:.*/);
    event.hide(/structure_gel:.*/);
    event.hide(/dragonlib:.*/);
});
