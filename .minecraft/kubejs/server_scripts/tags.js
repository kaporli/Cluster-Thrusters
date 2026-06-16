ServerEvents.tags("item", function (event) {
    // Smithing templates
    event.add("minecraft:smithing_templates", "minecraft:netherite_upgrade_smithing_template");
    event.add("minecraft:smithing_templates", "traveloptics:tectonic_upgrade_smithing_template");
    event.add("minecraft:smithing_templates", "traveloptics:darkness_upgrade_smithing_template");
    event.add("minecraft:smithing_templates", "traveloptics:abyssal_upgrade_smithing_template");
    event.add("minecraft:smithing_templates", "traveloptics:witherite_upgrade_smithing_template");
    event.add("minecraft:smithing_templates", "traveloptics:ocean_sovereign_upgrade_smithing_template");
    event.add("minecraft:smithing_templates", "eeeabsmobs:ghost_warrior_upgrade_smithing_template");
    event.add("minecraft:smithing_templates", "cataclysm:ignitium_upgrade_smithing_template");
    event.add("minecraft:smithing_templates", "cataclysm:cursium_upgrade_smithing_template");
    event.add("minecraft:smithing_templates", "unusualend:pearlescent_upgrade_smithing_template");
    event.add("minecraft:smithing_templates", "aether_treasure_reforging:neptune_upgrade_smithing_template");
    event.add("minecraft:smithing_templates", "aether_treasure_reforging:valkyrie_upgrade_smithing_template");
    event.add("minecraft:smithing_templates", "aether_treasure_reforging:phoenix_upgrade_smithing_template");
    event.add("minecraft:smithing_templates", "deep_aether:stormforged_smithing_template");
    event.add("minecraft:smithing_templates", "wan_ancient_beasts:ancient_upgrade_smithing_template");
    event.add("minecraft:smithing_templates", "lowlands_clothing:sea_upgrade_template");
    event.add("minecraft:smithing_templates", "ae2:fluix_upgrade_smithing_template");

    event.remove("minecraft:trim_templates", "legendary_monsters:annihilator_upgrade_smithing_template");
    event.remove("minecraft:trim_templates", "legendary_monsters:enderitium_upgrade_smithing_template");
    event.remove("minecraft:trim_templates", "deep_aether:stratus_smithing_template");

    event.add("farmersdelight:cabinets", "mynethersdelight:blackstone_bricks_cabinet");
    event.add("farmersdelight:cabinets", "mynethersdelight:red_nether_bricks_cabinet");
    event.add("farmersdelight:cabinets", "aethersdelight:skyroot_cabinet");

    // Alexscaves
    event.add("forge:ores/uranium", "alexscaves:radrock_uranium_ore");

    // Create Diesel Generators
    event.add("forge:sawdust", "createdieselgenerators:wood_chip");

    // Mekanism tin items removed by reliable_remover — clean dead references from tags
    event.remove("forge:ores/uranium", "mekanism:uranium_ore");
    event.remove("forge:ores/uranium", "mekanism:deepslate_uranium_ore");
    event.remove("forge:raw_materials/uranium", "mekanism:raw_uranium");
    event.remove("forge:ingots/tin", "mekanism:ingot_tin");
    event.remove("forge:nuggets/tin", "mekanism:nugget_tin");
    event.remove("forge:storage_blocks/tin", "mekanism:block_tin");
    event.remove("forge:storage_blocks/raw_tin", "mekanism:block_raw_tin");
    event.remove("forge:raw_materials/tin", "mekanism:raw_tin");
    event.remove("forge:ores/tin", "mekanism:tin_ore");
    event.remove("forge:ores/tin", "mekanism:deepslate_tin_ore");
    event.remove("forge:ore_rates/singular", "mekanism:tin_ore");
    event.remove("forge:ore_rates/singular", "mekanism:deepslate_tin_ore");
    event.remove("forge:ores_in_ground/stone", "mekanism:tin_ore");
    event.remove("forge:ores_in_ground/deepslate", "mekanism:deepslate_tin_ore");
    event.remove("minecraft:beacon_payment_items", "mekanism:ingot_tin");
});