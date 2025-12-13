import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;

val stockUpgrade = <item:storagenetwork:stock_upgrade>;
recipes.remove(stockUpgrade);

craftingTable.addShaped("custom_stock_upgrade", stockUpgrade, [
    [<item:minecraft:air>, <item:minecraft:redstone>, <item:minecraft:air>],
    [<tag:items:balm:wooden_chests>.asIIngredient(), <item:storagenetwork:kabel>, <tag:items:balm:wooden_chests>.asIIngredient()],
    [<item:minecraft:air>, <item:minecraft:redstone>, <item:minecraft:air>]
]);
