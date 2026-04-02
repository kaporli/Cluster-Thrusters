// Auto-generated from the create_applied_energistics_recipes_alts datapack.
// This ports all recipes into KubeJS and rewrites Fabric-style c:* tags to Forge tags.
ServerEvents.recipes(event => {
  const recipeEntries = [
    {
      "id": "ae2:charger/charged_certus_quartz_crystal_calt",
      "recipe": {
        "type": "ae2:charger",
        "ingredient": {
          "item": "create:polished_rose_quartz"
        },
        "result": {
          "item": "ae2:charged_certus_quartz_crystal"
        }
      }
    },
    {
      "id": "ae2:charger/charged_certus_quartz_crystal_calt2",
      "recipe": {
        "type": "extendedae:ex_charger",
        "ingredient": {
          "item": "create:polished_rose_quartz"
        },
        "result": {
          "item": "ae2:charged_certus_quartz_crystal"
        }
      }
    },
    {
      "id": "ae2:decorative/quartz_fixture_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:charged_certus_quartz_crystal"
          },
          "b": {
            "item": "create:andesite_alloy"
          }
        },
        "pattern": [
          "ab"
        ],
        "result": {
          "count": 2,
          "item": "ae2:quartz_fixture"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:decorative/quartz_glass_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:dusts/obsidian"
          },
          "b": {
            "tag": "forge:glass"
          }
        },
        "pattern": [
          "aba",
          "bab",
          "aba"
        ],
        "result": {
          "count": 4,
          "item": "ae2:quartz_glass"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:inscriber/calculation_processor",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "item": "ae2:printed_silicon"
          },
          "middle": {
            "item": "minecraft:redstone"
          },
          "top": {
            "item": "ae2:printed_calculation_processor"
          }
        },
        "mode": "press",
        "result": {
          "item": "ae2:calculation_processor"
        }
      }
    },
    {
      "id": "ae2:inscriber/calculation_processor_press_calt",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": "create:andesite_alloy_block"
          },
          "top": {
            "item": "ae2:calculation_processor_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:calculation_processor_press"
        }
      }
    },
    {
      "id": "ae2:inscriber/calculation_processor_print_calt",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": "twigs:polished_amethyst" // TODO
          },
          "top": {
            "item": "ae2:calculation_processor_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:printed_calculation_processor"
        }
      }
    },
    {
      "id": "ae2:inscriber/certus_quartz_dust_calt",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": "create_new_age:overcharged_diamond" // TODO
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:certus_quartz_dust"
        }
      }
    },
    {
      "id": "ae2:inscriber/ender_dust",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": "minecraft:ender_pearl"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:ender_dust"
        }
      }
    },
    {
      "id": "ae2:inscriber/engineering_processor",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "item": "ae2:printed_silicon"
          },
          "middle": {
            "item": "minecraft:redstone"
          },
          "top": {
            "item": "ae2:printed_engineering_processor"
          }
        },
        "mode": "press",
        "result": {
          "item": "ae2:engineering_processor"
        }
      }
    },
    {
      "id": "ae2:inscriber/engineering_processor_press_calt",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": "create:andesite_alloy_block"
          },
          "top": {
            "item": "ae2:engineering_processor_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:engineering_processor_press"
        }
      }
    },
    {
      "id": "ae2:inscriber/engineering_processor_print",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "tag": "forge:gems/diamond"
          },
          "top": {
            "item": "ae2:engineering_processor_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:printed_engineering_processor"
        }
      }
    },
    {
      "id": "ae2:inscriber/fluix_dust_calt",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "tag": "forge:dusts/obsidian"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:fluix_dust"
        }
      }
    },
    {
      "id": "ae2:inscriber/logic_processor",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "item": "ae2:printed_silicon"
          },
          "middle": {
            "item": "minecraft:redstone"
          },
          "top": {
            "item": "ae2:printed_logic_processor"
          }
        },
        "mode": "press",
        "result": {
          "item": "ae2:logic_processor"
        }
      }
    },
    {
      "id": "ae2:inscriber/logic_processor_press_calt",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": "create:andesite_alloy_block"
          },
          "top": {
            "item": "ae2:logic_processor_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:logic_processor_press"
        }
      }
    },
    {
      "id": "ae2:inscriber/logic_processor_print_calt",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": "create_new_age:overcharged_gold" // TODO
          },
          "top": {
            "item": "ae2:logic_processor_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:printed_logic_processor"
        }
      }
    },
    {
      "id": "ae2:inscriber/silicon_press_calt",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": "create:andesite_alloy_block"
          },
          "top": {
            "item": "ae2:silicon_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:silicon_press"
        }
      }
    },
    {
      "id": "ae2:inscriber/silicon_print",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "tag": "forge:silicon"
          },
          "top": {
            "item": "ae2:silicon_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:printed_silicon"
        }
      }
    },
    {
      "id": "ae2:inscriber/sky_stone_dust",
      "recipe": {
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": "ae2:sky_stone_block"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:sky_dust"
        }
      }
    },
    {
      "id": "ae2:materials/advancedcard_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create_new_age:overcharged_diamond" // TODO
          },
          "b": {
            "item": "create_new_age:overcharged_iron_sheet" // TODO
          },
          "c": {
            "tag": "forge:dusts/redstone"
          },
          "d": {
            "item": "create:precision_mechanism"
          }
        },
        "pattern": [
          "ab ",
          "cdb",
          "ab "
        ],
        "result": {
          "count": 2,
          "item": "ae2:advanced_card"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:materials/annihilationcore_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "ae2:all_nether_quartz"
          },
          "b": {
            "item": "create:sturdy_sheet"
          },
          "c": {
            "item": "create:precision_mechanism"
          }
        },
        "pattern": [
          "abc"
        ],
        "result": {
          "count": 2,
          "item": "ae2:annihilation_core"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:materials/basiccard_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create_new_age:overcharged_golden_sheet" // TODO
          },
          "b": {
            "item": "create_new_age:overcharged_iron_sheet" // TODO
          },
          "c": {
            "tag": "forge:dusts/redstone"
          },
          "d": {
            "item": "create:precision_mechanism"
          }
        },
        "pattern": [
          "ab ",
          "cdb",
          "ab "
        ],
        "result": {
          "count": 2,
          "item": "ae2:basic_card"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:materials/cardcapacity",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "tag": "ae2:all_certus_quartz"
          },
          {
            "item": "ae2:basic_card"
          }
        ],
        "result": {
          "item": "ae2:capacity_card"
        }
      }
    },
    {
      "id": "ae2:materials/cardcrafting",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "minecraft:crafting_table"
          },
          {
            "item": "ae2:basic_card"
          }
        ],
        "result": {
          "item": "ae2:crafting_card"
        }
      }
    },
    {
      "id": "ae2:materials/carddistribution",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "ae2:advanced_card"
          },
          {
            "item": "ae2:calculation_processor"
          }
        ],
        "result": {
          "item": "ae2:equal_distribution_card"
        }
      }
    },
    {
      "id": "ae2:materials/cardenergy",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:dense_energy_cell"
          },
          "b": {
            "item": "ae2:advanced_card"
          }
        },
        "pattern": [
          "ab"
        ],
        "result": {
          "item": "ae2:energy_card"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:materials/cardfuzzy",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "ae2:advanced_card"
          },
          {
            "tag": "minecraft:wool"
          }
        ],
        "result": {
          "item": "ae2:fuzzy_card"
        }
      }
    },
    {
      "id": "ae2:materials/cardinverter",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "minecraft:redstone_torch"
          },
          {
            "item": "ae2:advanced_card"
          }
        ],
        "result": {
          "item": "ae2:inverter_card"
        }
      }
    },
    {
      "id": "ae2:materials/cardredstone",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "minecraft:redstone_torch"
          },
          {
            "item": "ae2:basic_card"
          }
        ],
        "result": {
          "item": "ae2:redstone_card"
        }
      }
    },
    {
      "id": "ae2:materials/cardspeed_calt",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "ae2:advanced_card"
          },
          {
            "item": "create:polished_rose_quartz"
          }
        ],
        "result": {
          "item": "ae2:speed_card"
        }
      }
    },
    {
      "id": "ae2:materials/cardvoid",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "ae2:calculation_processor"
          },
          {
            "item": "ae2:basic_card"
          }
        ],
        "result": {
          "item": "ae2:void_card"
        }
      }
    },
    {
      "id": "ae2:materials/formationcore_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create:polished_rose_quartz"
          },
          "b": {
            "tag": "forge:plates/obsidian"
          },
          "c": {
            "item": "create:precision_mechanism"
          }
        },
        "pattern": [
          "abc"
        ],
        "result": {
          "count": 2,
          "item": "ae2:formation_core"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:misc/fluixpearl_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:dusts/obsidian"
          },
          "b": {
            "item": "create:polished_rose_quartz"
          },
          "c": {
            "tag": "forge:ender_pearls"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "aba"
        ],
        "result": {
          "item": "ae2:fluix_pearl"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:misc/tank_sky_stone_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:sky_stone_block"
          },
          "b": {
            "item": "create:fluid_tank"
          }
        },
        "pattern": [
          "aaa",
          "aba",
          "aaa"
        ],
        "result": {
          "item": "ae2:sky_stone_tank"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/cell_workbench_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create:polished_rose_quartz"
          },
          "b": {
            "item": "ae2:calculation_processor"
          },
          "c": {
            "item": "create:andesite_alloy"
          },
          "d": {
            "tag": "forge:chests/wooden"
          }
        },
        "pattern": [
          "aba",
          "cdc",
          "ccc"
        ],
        "result": {
          "item": "ae2:cell_workbench"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/controller_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:smooth_sky_stone_block"
          },
          "b": {
            "tag": "forge:storage_blocks/bronze"
          },
          "c": {
            "item": "ae2:engineering_processor"
          },
          "d": {
            "item": "create:polished_rose_quartz"
          }
        },
        "pattern": [
          "dba",
          "bcb",
          "abd"
        ],
        "result": {
          "item": "ae2:controller"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/crank_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:rods/wooden"
          },
          "b": {
            "item": "create:andesite_alloy"
          }
        },
        "pattern": [
          "aaa",
          "  a",
          "  b"
        ],
        "result": {
          "item": "ae2:crank"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/crystal_processing_charger_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create:andesite_alloy"
          },
          "b": {
            "tag": "forge:ingots/copper"
          }
        },
        "pattern": [
          "aba",
          "a  ",
          "aba"
        ],
        "result": {
          "item": "ae2:charger"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/crystal_processing_growth_accelerator_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create:andesite_alloy"
          },
          "b": {
            "item": "ae2:fluix_glass_cable"
          },
          "c": {
            "item": "ae2:quartz_glass"
          },
          "d": {
            "item": "create_new_age:fluxuated_magnetite" // TODO
          }
        },
        "pattern": [
          "aba",
          "cdc",
          "aba"
        ],
        "result": {
          "item": "ae2:growth_accelerator"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/energy_dense_energy_cell_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:energy_cell"
          },
          "b": {
            "item": "create:precision_mechanism"
          }
        },
        "pattern": [
          "aaa",
          "aba",
          "aaa"
        ],
        "result": {
          "item": "ae2:dense_energy_cell"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/energy_energy_acceptor_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create:andesite_alloy"
          },
          "b": {
            "item": "ae2:quartz_glass"
          },
          "c": {
            "tag": "forge:ingots/brass"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "aba"
        ],
        "result": {
          "item": "ae2:energy_acceptor"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/energy_energy_cell_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "createaddition:modular_accumulator"
          },
          "b": {
            "item": "create:precision_mechanism"
          },
          "c": {
            "item": "create:polished_rose_quartz"
          },
          "d": {
            "tag": "forge:ingots/brass"
          }
        },
        "pattern": [
          "abd",
          "bcb",
          "dbd"
        ],
        "result": {
          "item": "ae2:energy_cell"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/energy_vibration_chamber_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create:andesite_alloy"
          },
          "b": {
            "item": "minecraft:furnace"
          },
          "c": {
            "item": "ae2:energy_acceptor"
          },
          "d": {
            "tag": "forge:ingots/bronze"
          },
          "e": {
            "tag": "forge:dusts/obsidian"
          }
        },
        "pattern": [
          "ded",
          "aba",
          "aca"
        ],
        "result": {
          "item": "ae2:vibration_chamber"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/inscribers_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create:andesite_alloy"
          },
          "b": {
            "item": "create:sticky_mechanical_piston"
          },
          "c": {
            "tag": "forge:ingots/bronze"
          }
        },
        "pattern": [
          "aba",
          "c a",
          "aba"
        ],
        "result": {
          "item": "ae2:inscriber"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/interfaces_interface_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create:andesite_alloy"
          },
          "b": {
            "tag": "forge:glass"
          },
          "c": {
            "item": "ae2:annihilation_core"
          },
          "d": {
            "item": "ae2:formation_core"
          }
        },
        "pattern": [
          "aba",
          "c d",
          "aba"
        ],
        "result": {
          "item": "ae2:interface"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/io_condenser_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:ingots/brass"
          },
          "b": {
            "item": "create:mechanical_press"
          },
          "c": {
            "item": "create:polished_rose_quartz"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "aba"
        ],
        "result": {
          "item": "ae2:condenser"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/io_port_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:glass"
          },
          "b": {
            "item": "ae2:drive"
          },
          "c": {
            "item": "ae2:fluix_glass_cable"
          },
          "d": {
            "item": "create:andesite_alloy"
          },
          "e": {
            "item": "ae2:logic_processor"
          }
        },
        "pattern": [
          "aaa",
          "bcb",
          "ded"
        ],
        "result": {
          "item": "ae2:io_port"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/pattern_providers_interface_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:ingots/brass"
          },
          "b": {
            "item": "minecraft:crafting_table"
          },
          "c": {
            "item": "ae2:annihilation_core"
          },
          "d": {
            "item": "ae2:formation_core"
          }
        },
        "pattern": [
          "aba",
          "c d",
          "aba"
        ],
        "result": {
          "item": "ae2:pattern_provider"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/quantum_link_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "item": "create_new_age:overcharged_diamond" // TODO
          }
        },
        "pattern": [
          "aba",
          "bbb",
          "aba"
        ],
        "result": {
          "item": "ae2:quantum_link"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/quantum_ring_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create:sturdy_sheet"
          },
          "c": {
            "item": "create:precision_mechanism"
          },
          "d": {
            "item": "createaddition:modular_accumulator"
          },
          "e": {
            "tag": "ae2:smart_dense_cable"
          }
        },
        "pattern": [
          "aca",
          "ede",
          "aca"
        ],
        "result": {
          "item": "ae2:quantum_ring"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/spatial_anchor_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:spatial_pylon"
          },
          "b": {
            "item": "ae2:fluix_glass_cable"
          },
          "c": {
            "item": "ae2:spatial_cell_component_128"
          },
          "d": {
            "item": "create:andesite_alloy"
          },
          "e": {
            "item": "create:precision_mechanism"
          }
        },
        "pattern": [
          "aaa",
          "bcb",
          "ded"
        ],
        "result": {
          "item": "ae2:spatial_anchor"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/spatial_io_port_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:dusts/obsidian"
          },
          "b": {
            "item": "ae2:fluix_glass_cable"
          },
          "c": {
            "item": "ae2:io_port"
          },
          "d": {
            "item": "create:andesite_alloy"
          },
          "e": {
            "item": "ae2:engineering_processor"
          }
        },
        "pattern": [
          "aaa",
          "bcb",
          "ded"
        ],
        "result": {
          "item": "ae2:spatial_io_port"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/spatial_io_pylon_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "item": "ae2:fluix_glass_cable"
          },
          "c": {
            "tag": "forge:dusts/obsidian"
          },
          "d": {
            "item": "create:polished_rose_quartz"
          }
        },
        "pattern": [
          "aba",
          "cdc",
          "aba"
        ],
        "result": {
          "item": "ae2:spatial_pylon"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/storage_chest_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:glass"
          },
          "b": {
            "item": "ae2:terminal"
          },
          "c": {
            "item": "ae2:fluix_glass_cable"
          },
          "d": {
            "item": "create:andesite_alloy"
          },
          "e": {
            "tag": "forge:ingots/bronze"
          }
        },
        "pattern": [
          "aba",
          "c c",
          "ded"
        ],
        "result": {
          "item": "ae2:chest"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/blocks/storage_drive_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create:andesite_alloy"
          },
          "b": {
            "item": "create:precision_mechanism"
          },
          "c": {
            "item": "ae2:fluix_glass_cable"
          }
        },
        "pattern": [
          "aba",
          "c c",
          "aba"
        ],
        "result": {
          "item": "ae2:drive"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cables/dense_smart_fluix_calt",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "ae2:fluix_covered_dense_cable"
          },
          {
            "item": "create:polished_rose_quartz"
          },
          {
            "item": "create:polished_rose_quartz"
          },
          {
            "tag": "forge:dusts/glowstone"
          }
        ],
        "result": {
          "item": "ae2:fluix_smart_dense_cable"
        }
      }
    },
    {
      "id": "ae2:network/cables/glass_fluix_calt",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "ae2:quartz_fiber"
          },
          {
            "item": "create:polished_rose_quartz"
          },
          {
            "item": "create:polished_rose_quartz"
          },
          {
            "item": "create:polished_rose_quartz"
          },
          {
            "item": "create:polished_rose_quartz"
          }
        ],
        "result": {
          "count": 4,
          "item": "ae2:fluix_glass_cable"
        }
      }
    },
    {
      "id": "ae2:network/cables/smart_fluix_calt",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "ae2:fluix_covered_cable"
          },
          {
            "item": "create:polished_rose_quartz"
          },
          {
            "tag": "forge:dusts/glowstone"
          }
        ],
        "result": {
          "item": "ae2:fluix_smart_cable"
        }
      }
    },
    {
      "id": "ae2:network/cells/fluid_cell_housing_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "tag": "forge:ingots/brass"
          }
        },
        "pattern": [
          "aba",
          "b b",
          "ccc"
        ],
        "result": {
          "item": "ae2:fluid_cell_housing"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/fluid_storage_cell_16k_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "ae2:cell_component_16k"
          },
          "d": {
            "tag": "forge:ingots/brass"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "item": "ae2:fluid_storage_cell_16k"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/fluid_storage_cell_1k_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "ae2:cell_component_1k"
          },
          "d": {
            "tag": "forge:ingots/brass"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "item": "ae2:fluid_storage_cell_1k"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/fluid_storage_cell_256k_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "ae2:cell_component_256k"
          },
          "d": {
            "tag": "forge:ingots/brass"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "item": "ae2:fluid_storage_cell_256k"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/fluid_storage_cell_4k_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "ae2:cell_component_4k"
          },
          "d": {
            "tag": "forge:ingots/brass"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "item": "ae2:fluid_storage_cell_4k"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/fluid_storage_cell_64k_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "ae2:cell_component_64k"
          },
          "d": {
            "tag": "forge:ingots/brass"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "item": "ae2:fluid_storage_cell_64k"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/item_cell_housing_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "create:andesite_alloy"
          }
        },
        "pattern": [
          "aba",
          "b b",
          "ccc"
        ],
        "result": {
          "item": "ae2:item_cell_housing"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/item_storage_cell_16k_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "ae2:cell_component_16k"
          },
          "d": {
            "item": "create:andesite_alloy"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "item": "ae2:item_storage_cell_16k"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/item_storage_cell_1k_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "ae2:cell_component_1k"
          },
          "d": {
            "item": "create:andesite_alloy"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "item": "ae2:item_storage_cell_1k"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/item_storage_cell_256k_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "ae2:cell_component_256k"
          },
          "d": {
            "item": "create:andesite_alloy"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "item": "ae2:item_storage_cell_256k"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/item_storage_cell_4k_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "ae2:cell_component_4k"
          },
          "d": {
            "item": "create:andesite_alloy"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "item": "ae2:item_storage_cell_4k"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/item_storage_cell_64k_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "ae2:cell_component_64k"
          },
          "d": {
            "item": "create:andesite_alloy"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "item": "ae2:item_storage_cell_64k"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/item_storage_components_cell_1k_part_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:dusts/redstone"
          },
          "b": {
            "item": "create:polished_rose_quartz"
          },
          "c": {
            "item": "ae2:logic_processor"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "aba"
        ],
        "result": {
          "item": "ae2:cell_component_1k"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/spatial_components_0_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:dusts/obsidian"
          },
          "b": {
            "item": "ae2:spatial_cell_component_2"
          },
          "c": {
            "item": "ae2:engineering_processor"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "aba"
        ],
        "result": {
          "item": "ae2:spatial_cell_component_16"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/spatial_components_1_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:dusts/obsidian"
          },
          "b": {
            "item": "ae2:spatial_cell_component_16"
          },
          "c": {
            "item": "ae2:engineering_processor"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "aba"
        ],
        "result": {
          "item": "ae2:spatial_cell_component_128"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/spatial_components_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:dusts/obsidian"
          },
          "b": {
            "item": "ae2:fluix_pearl"
          },
          "c": {
            "item": "ae2:engineering_processor"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "aba"
        ],
        "result": {
          "item": "ae2:spatial_cell_component_2"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/spatial_storage_cell_128_cubed_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "ae2:spatial_cell_component_128"
          },
          "d": {
            "item": "create:andesite_alloy"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "item": "ae2:spatial_storage_cell_128"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/spatial_storage_cell_16_cubed_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "ae2:spatial_cell_component_16"
          },
          "d": {
            "item": "create:andesite_alloy"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "item": "ae2:spatial_storage_cell_16"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/spatial_storage_cell_2_cubed_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "ae2:spatial_cell_component_2"
          },
          "d": {
            "item": "create:andesite_alloy"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "item": "ae2:spatial_storage_cell_2"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/view_cell_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/redstone"
          },
          "c": {
            "item": "create:polished_rose_quartz"
          },
          "d": {
            "tag": "forge:ingots/brass"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "item": "ae2:view_cell"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/cells/view_cell_storage_calt",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "ae2:item_cell_housing"
          },
          {
            "item": "create:polished_rose_quartz"
          }
        ],
        "result": {
          "item": "ae2:view_cell"
        }
      }
    },
    {
      "id": "ae2:network/crafting/cpu_crafting_unit_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:ingots/brass"
          },
          "b": {
            "item": "ae2:calculation_processor"
          },
          "c": {
            "item": "ae2:fluix_glass_cable"
          },
          "d": {
            "item": "ae2:logic_processor"
          }
        },
        "pattern": [
          "aba",
          "cdc",
          "aba"
        ],
        "result": {
          "item": "ae2:crafting_unit"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/crafting/molecular_assembler_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:ingots/brass"
          },
          "b": {
            "item": "ae2:quartz_glass"
          },
          "c": {
            "item": "ae2:annihilation_core"
          },
          "d": {
            "item": "minecraft:crafting_table"
          },
          "e": {
            "item": "ae2:formation_core"
          }
        },
        "pattern": [
          "aba",
          "cde",
          "aba"
        ],
        "result": {
          "item": "ae2:molecular_assembler"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/crafting/patterns_blank_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:quartz_glass"
          },
          "b": {
            "tag": "forge:dusts/glowstone"
          },
          "c": {
            "tag": "ae2:all_certus_quartz"
          },
          "d": {
            "tag": "forge:ingots/brass"
          }
        },
        "pattern": [
          "aba",
          "bcb",
          "ddd"
        ],
        "result": {
          "count": 2,
          "item": "ae2:blank_pattern"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/crystal_resonance_generator_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "c": {
            "tag": "forge:ingots/brass"
          },
          "f": {
            "item": "create_new_age:layered_magnet" // TODO
          },
          "i": {
            "item": "create:andesite_alloy"
          },
          "q": {
            "item": "ae2:charged_certus_quartz_crystal"
          }
        },
        "pattern": [
          "cfc",
          "cqc",
          "iii"
        ],
        "result": {
          "item": "ae2:crystal_resonance_generator"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/parts/annihilation_plane_alt2_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create:andesite_alloy"
          },
          "b": {
            "tag": "ae2:all_fluix"
          },
          "c": {
            "item": "ae2:annihilation_core"
          }
        },
        "pattern": [
          "aba",
          "cba",
          "aba"
        ],
        "result": {
          "item": "ae2:annihilation_plane"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/parts/annihilation_plane_alt_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "ae2:all_fluix"
          },
          "b": {
            "item": "create:andesite_alloy"
          },
          "c": {
            "item": "ae2:annihilation_core"
          }
        },
        "pattern": [
          "aaa",
          "bcb",
          "bbb"
        ],
        "result": {
          "item": "ae2:annihilation_plane"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/parts/export_bus_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:ingots/copper"
          },
          "b": {
            "item": "ae2:formation_core"
          },
          "c": {
            "item": "minecraft:piston"
          }
        },
        "pattern": [
          "aba",
          " c "
        ],
        "result": {
          "item": "ae2:export_bus"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/parts/formation_plane_alt_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create:andesite_alloy"
          },
          "b": {
            "tag": "ae2:all_fluix"
          },
          "c": {
            "item": "ae2:formation_core"
          }
        },
        "pattern": [
          "aba",
          "cba",
          "aba"
        ],
        "result": {
          "item": "ae2:formation_plane"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/parts/formation_plane_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "ae2:all_fluix"
          },
          "b": {
            "item": "create:andesite_alloy"
          },
          "c": {
            "item": "ae2:formation_core"
          }
        },
        "pattern": [
          "aaa",
          "bcb",
          "bbb"
        ],
        "result": {
          "item": "ae2:formation_plane"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/parts/import_bus_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:annihilation_core"
          },
          "b": {
            "tag": "forge:ingots/copper"
          },
          "c": {
            "item": "minecraft:sticky_piston"
          }
        },
        "pattern": [
          " a ",
          "bcb"
        ],
        "result": {
          "item": "ae2:import_bus"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/parts/level_emitter_calt",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "minecraft:redstone_torch"
          },
          {
            "item": "create:precision_mechanism"
          }
        ],
        "result": {
          "item": "ae2:level_emitter"
        }
      }
    },
    {
      "id": "ae2:network/parts/monitors_storage_calt",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "create:redstone_link"
          },
          {
            "tag": "ae2:illuminated_panel"
          }
        ],
        "result": {
          "item": "ae2:storage_monitor"
        }
      }
    },
    {
      "id": "ae2:network/parts/quartz_fiber_part_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:glass"
          },
          "b": {
            "item": "create:polished_rose_quartz"
          },
          "c": {
            "item": "create_new_age:magnetite_block" // TODO
          }
        },
        "pattern": [
          "aaa",
          "bcb",
          "aaa"
        ],
        "result": {
          "count": 3,
          "item": "ae2:quartz_fiber"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/parts/storage_bus_calt",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "minecraft:sticky_piston"
          },
          {
            "tag": "ae2:interface"
          },
          {
            "item": "create:item_vault"
          }
        ],
        "result": {
          "item": "ae2:storage_bus"
        }
      }
    },
    {
      "id": "ae2:network/parts/terminals_calt",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "ae2:formation_core"
          },
          {
            "tag": "ae2:illuminated_panel"
          },
          {
            "item": "create:precision_mechanism"
          },
          {
            "item": "ae2:annihilation_core"
          }
        ],
        "result": {
          "item": "ae2:terminal"
        }
      }
    },
    {
      "id": "ae2:network/parts/terminals_crafting_calt",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "ae2:terminal"
          },
          {
            "item": "create:mechanical_crafter"
          },
          {
            "item": "create:precision_mechanism"
          }
        ],
        "result": {
          "item": "ae2:crafting_terminal"
        }
      }
    },
    {
      "id": "ae2:network/parts/tunnels_me_andesite_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create:andesite_alloy"
          },
          "b": {
            "item": "ae2:engineering_processor"
          },
          "c": {
            "tag": "ae2:all_fluix"
          }
        },
        "pattern": [
          " a ",
          "aba",
          "ccc"
        ],
        "result": {
          "item": "ae2:me_p2p_tunnel"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/upgrade_wireless_crafting_terminal_calt",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "item": "ae2:wireless_terminal"
          },
          {
            "item": "create:mechanical_crafter"
          },
          {
            "item": "ae2:calculation_processor"
          }
        ],
        "result": {
          "item": "ae2:wireless_crafting_terminal"
        }
      }
    },
    {
      "id": "ae2:network/wireless_booster_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "create:rose_quartz"
          },
          "b": {
            "item": "create_new_age:overcharged_diamond" // TODO
          },
          "c": {
            "tag": "forge:dusts/ender_pearl"
          },
          "d": {
            "item": "create:andesite_alloy"
          }
        },
        "pattern": [
          "abc",
          "ddd"
        ],
        "result": {
          "count": 2,
          "item": "ae2:wireless_booster"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/wireless_crafting_terminal_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:wireless_receiver"
          },
          "b": {
            "item": "ae2:crafting_terminal"
          },
          "c": {
            "item": "createaddition:modular_accumulator"
          }
        },
        "pattern": [
          " a ",
          " b ",
          "ccc"
        ],
        "result": {
          "item": "ae2:wireless_crafting_terminal"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/wireless_part_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:fluix_pearl"
          },
          "b": {
            "item": "create:andesite_alloy"
          },
          "c": {
            "item": "ae2:quartz_fiber"
          }
        },
        "pattern": [
          " a ",
          "bcb",
          " b "
        ],
        "result": {
          "item": "ae2:wireless_receiver"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:network/wireless_terminal_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "item": "ae2:wireless_receiver"
          },
          "b": {
            "item": "ae2:terminal"
          },
          "c": {
            "item": "createaddition:modular_accumulator"
          }
        },
        "pattern": [
          " a ",
          " b ",
          "ccc"
        ],
        "result": {
          "item": "ae2:wireless_terminal"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:smelting/silicon_from_overcharged_diamond",
      "recipe": {
        "type": "minecraft:smelting",
        "category": "misc",
        "cookingtime": 100,
        "experience": 0.35,
        "ingredient": {
          "tag": "forge:dusts/obsidian"
        },
        "result": "ae2:silicon"
      }
    },
    {
      "id": "ae2:tools/matter_cannon_calt",
      "recipe": {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
          "a": {
            "tag": "forge:ingots/iron"
          },
          "b": {
            "item": "ae2:formation_core"
          },
          "c": {
            "item": "ae2:cell_component_4k"
          },
          "d": {
            "item": "create:potato_cannon"
          }
        },
        "pattern": [
          "aab",
          "cd ",
          "a  "
        ],
        "result": {
          "item": "ae2:matter_cannon"
        },
        "show_notification": true
      }
    },
    {
      "id": "ae2:tools/network_tool_calt",
      "recipe": {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          {
            "tag": "ae2:illuminated_panel"
          },
          {
            "tag": "forge:chests/wooden"
          },
          {
            "tag": "ae2:quartz_wrench"
          },
          {
            "item": "createaddition:redstone_relay"
          }
        ],
        "result": {
          "item": "ae2:network_tool"
        }
      }
    },
    {
      "id": "ae2:transform/certus_quartz_crystals_calt",
      "recipe": {
        "type": "ae2:transform",
        "circumstance": {
          "type": "fluid",
          "tag": "minecraft:water"
        },
        "ingredients": [
          {
            "item": "create_new_age:overcharged_diamond" // TODO
          },
          {
            "item": "create_new_age:overcharged_diamond" // TODO
          },
          {
            "item": "ae2:certus_quartz_dust"
          }
        ],
        "result": {
          "count": 2,
          "item": "ae2:certus_quartz_crystal"
        }
      }
    },
    {
      "id": "ae2:transform/fluix_crystals_calt",
      "recipe": {
        "type": "ae2:transform",
        "circumstance": {
          "type": "fluid",
          "tag": "minecraft:water"
        },
        "ingredients": [
          {
            "item": "create:polished_rose_quartz"
          },
          {
            "item": "create:rose_quartz"
          },
          {
            "tag": "ae2:all_nether_quartz"
          }
        ],
        "result": {
          "item": "ae2:fluix_crystal"
        }
      }
    }
  ];

  for (const entry of recipeEntries) {
    event.remove({ id: entry.id });
    event.custom(entry.recipe).id(entry.id);
  }
});
