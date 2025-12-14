ServerEvents.recipes(event => {
  event.remove({ output: 'storagenetwork:stock_upgrade' });

  event.shaped('storagenetwork:stock_upgrade', [
    ' A ',
    'BCB',
    ' A '
  ], {
    A: 'minecraft:redstone',
    B: Ingredient.of('#balm:wooden_chests'),
    C: 'storagenetwork:kabel'
  });

});
