ServerEvents.recipes(event => {
    // storagenetwork:stock_upgrade recipe
    event.remove({ output: 'storagenetwork:stock_upgrade' });
    event.shaped('storagenetwork:stock_upgrade', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: 'minecraft:redstone',
        B: '#balm:wooden_chests',
        C: 'storagenetwork:kabel'
    });

    // irons_spellbooks:common_ink recipe
    event.shapeless('irons_spellbooks:common_ink', [
        'irons_spellbooks:arcane_essence',
        Ingredient.of(['supplementaries:antique_ink', 'minecraft:ink_sac'])
    ]).id('kubejs:common_ink_from_ink_and_essence');

    // alexsmobs:sopa_de_macaco alternate recipe with neapolitan banana
    // event.shaped('alexsmobs:sopa_de_macaco', [
    //     'AB ',
    //     'CD ',
    //     '   '
    // ], {
    //     A: 'minecraft:bowl',
    //     B: 'neapolitan:banana',
    //     C: 'minecraft:brown_mushroom',
    //     D: 'minecraft:bone'
    // }).id('kubejs:sopa_de_macaco_neapolitan');
});