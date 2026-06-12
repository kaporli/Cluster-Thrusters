ServerEvents.recipes(event => {
    event.remove({ id: 'mekanism:infusion_conversion/tin/from_dust' });
    event.remove({ id: 'mekanism:infusion_conversion/tin/from_enriched' });
    event.custom({
        type: 'mekanism:infusion_conversion',
        input: { ingredient: { tag: 'forge:ingots/tin' }, amount: 1 },
        output: { infuse_type: 'mekanism:tin', amount: 10 }
    }).id('kubejs:tin_infusion_from_ingot');

    event.remove({ id: 'mekanism:processing/uranium/slurry/dirty/from_raw_block' });
    event.remove({ id: 'mekanism:processing/uranium/uranium_oxide' });

    // Precision sawmill: redirect sawdust secondary output to wood_chip.
    // replaceOutput skips Mekanism's custom 'secondaryOutput' field, so patch via forEachRecipe.
    event.forEachRecipe({ type: 'mekanism:sawing' }, recipe => {
        const secondary = recipe.json.get('secondaryOutput')
        if (secondary !== null && secondary.isJsonObject()) {
            const secondaryObj = secondary.getAsJsonObject()
            const item = secondaryObj.get('item')
            if (item !== null && item.getAsString() === 'mekanism:sawdust') {
                secondaryObj.addProperty('item', 'createdieselgenerators:wood_chip')
            }
        }
    })

    // Remove all recipes that are processed IN scguns machines
    event.remove({ type: 'scguns:mechanical_pressing' });
    event.remove({ type: 'scguns:powered_mechanical_pressing' });
    event.remove({ type: 'scguns:macerating' });
    event.remove({ type: 'scguns:powered_macerating' });
    event.remove({ type: 'scguns:gun_bench' });

    // create_armorer:create_workbench recipes intentionally NOT removed — removing them
    // causes JEI to lose the create_armorer gun entries. The workbench itself is
    // uncraftable (item_obliterator + recipe removed), so these recipes are unreachable anyway.
    // Remove recipes processed IN the tacz workbenches (custom crafting station types)
    // event.remove({ type: 'tacz:gun_smith_table' });
    // event.remove({ type: 'tacz:gun_smith_table_crafting' });
    // event.remove({ type: 'tacz:attachment_workbench' });
    // event.remove({ type: 'tacz:ammo_workbench' });
    // Remove the vanilla crafting recipes that CRAFT the tacz workbench blocks themselves
    // event.remove({ id: 'tacz:ammo_workbench' });
    // event.remove({ id: 'tacz:attachment_workbench' });
    // event.remove({ id: 'tacz:gun_smith_table' });

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

    // legendary_monsters:withered_ribcage
    event.remove({ output: 'legendary_monsters:withered_ribcage' });
    event.shaped('legendary_monsters:withered_ribcage', [
        '   ',
        'ABA',
        ' B '
    ], {
        A: 'legendary_monsters:withered_horn',
        B: 'iceandfire:witherbone'
    });

    // legendary_monsters:withered_scythe
    event.remove({ output: 'legendary_monsters:withered_scythe' });
    event.shaped('legendary_monsters:withered_scythe', [
        ' AA',
        'CB ',
        ' B '
    ], {
        A: 'legendary_monsters:withered_horn',
        B: 'iceandfire:witherbone',
        C: 'minecraft:gold_block'
    });

    // lowlands_clothing furpelt -> alexsmobs:bear_fur replacements
    // event.remove({ id: 'lowlands_clothing:furpeltdecraft' });
    // event.stonecutting('minecraft:leather', 'alexsmobs:bear_fur').id('kubejs:bear_fur_to_leather');

    // event.remove({ id: 'lowlands_clothing:mountainmenbootscraft' });
    // event.shaped('lowlands_clothing:mountainmenclothes_boots', [
    //     'A A',
    //     'B B'
    // ], { A: 'alexsmobs:bear_fur', B: 'minecraft:leather' }).id('kubejs:mountainmen_boots');

    // event.remove({ id: 'lowlands_clothing:mountainmencloackcraft' });
    // event.shaped('lowlands_clothing:mountainmenclothes_chestplate', [
    //     'A A',
    //     'BAB',
    //     'AAA'
    // ], { A: 'alexsmobs:bear_fur', B: 'minecraft:leather' }).id('kubejs:mountainmen_chestplate');

    // event.remove({ id: 'lowlands_clothing:mountainmenhatcraft' });
    // event.shaped('lowlands_clothing:mountainmenclothes_helmet', [
    //     'AAA',
    //     'B B'
    // ], { A: 'alexsmobs:bear_fur', B: 'minecraft:leather' }).id('kubejs:mountainmen_helmet');

    // event.remove({ id: 'lowlands_clothing:mountainmenpantscraft' });
    // event.shaped('lowlands_clothing:mountainmenclothes_leggings', [
    //     'AAA',
    //     'A A',
    //     'B B'
    // ], { A: 'minecraft:leather', B: 'alexsmobs:bear_fur' }).id('kubejs:mountainmen_leggings');

    // event.remove({ id: 'lowlands_clothing:norsianbootscraft' });
    // event.shaped('lowlands_clothing:norsian_armor_boots', [
    //     'A A',
    //     'B B'
    // ], { A: 'alexsmobs:bear_fur', B: 'minecraft:iron_ingot' }).id('kubejs:norsian_boots');

    // event.remove({ id: 'lowlands_clothing:norsianchestplatecraft' });
    // event.shaped('lowlands_clothing:norsian_armor_chestplate', [
    //     'A A',
    //     'BBB',
    //     'BAB'
    // ], { A: 'alexsmobs:bear_fur', B: 'minecraft:iron_ingot' }).id('kubejs:norsian_chestplate');

    // event.remove({ id: 'lowlands_clothing:norsianarmorleggingscraft' });
    // event.shaped('lowlands_clothing:norsian_armor_leggings', [
    //     'AAA',
    //     'B B',
    //     'B B'
    // ], { A: 'alexsmobs:bear_fur', B: 'minecraft:iron_ingot' }).id('kubejs:norsian_leggings');

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

    // Wither armor recipes using iceandfire:witherbone
    // event.shaped('immersive_armors:wither_helmet', [
    //     'AAA',
    //     'A A',
    //     '   '
    // ], {
    //     A: 'iceandfire:witherbone'
    // });

    // event.shaped('immersive_armors:wither_chestplate', [
    //     'A A',
    //     'AAA',
    //     'AAA'
    // ], {
    //     A: 'iceandfire:witherbone'
    // });

    // event.shaped('immersive_armors:wither_leggings', [
    //     'AAA',
    //     'A A',
    //     'A A'
    // ], {
    //     A: 'iceandfire:witherbone'
    // });

    // event.shaped('immersive_armors:wither_boots', [
    //     '   ',
    //     'A A',
    //     'A A'
    // ], {
    //     A: 'iceandfire:witherbone'
    // });
});