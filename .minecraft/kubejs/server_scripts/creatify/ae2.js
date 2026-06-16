ServerEvents.recipes(event => {
    let remove = [
        // 'ae2:inscriber',
        // 'expatternprovider:ex_inscriber',
        'ae2:charger',
        'expatternprovider:ex_charger',
        'aeinfinitybooster:dimension_card'
    ]

    remove.forEach(element => {
        event.remove({output:element})
    })
});

const addChargingRecipeAE2 = (event, input, result, energy, rate) => {
    event.remove({output: result})
    event.custom({
        type: "createaddition:charging",
        input: { item: input, count: 1 },
        result: { item: result, count: 1 },
        energy: energy,
        maxChargeRate: rate
    })
}
function addFocusingRecipeAE2(event, input, output, beamType, processingTime) {
    event.custom({
        type: "create_optical:focusing",
        ingredients: [{ item: input }],
        processingTime: processingTime,
        required_beam_type: beamType,
        results: [{ item: output }]
    })
}

ServerEvents.recipes(event => {
    // blank_circuit: superheated compacting
    event.custom({
        type: 'create:compacting',
        heatRequirement: 'superheated',
        ingredients: [
            { tag: 'forge:stone' },
            { item: 'minecraft:redstone' },
            { item: 'minecraft:iron_ingot' },
            { item: 'minecraft:quartz' }
        ],
        results: [{ count: 4, item: 'kubejs:blank_circuit' }]
    })

    // copper_circuit: deploy copper wire onto blank_circuit
    event.custom({
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:blank_circuit' }, { item: 'createaddition:copper_wire' }],
        results: [{ item: 'kubejs:copper_circuit' }]
    })

    // Vibrant Quartz Glass
    event.remove({output: 'ae2:quartz_vibrant_glass'})
    addFocusingRecipeAE2(event, 'ae2:quartz_glass', 'ae2:quartz_vibrant_glass', 3, 50)

    // Certus Quartz (mixing, superheated)
    event.custom({
        type: 'create:mixing',
        heatRequirement: 'superheated',
        ingredients: [
            { count: 2, item: 'minecraft:quartz' },
            { item: 'ae2:certus_quartz_dust' },
            { amount: 500, fluid: 'minecraft:water', nbt: {} }
        ],
        results: [{ count: 2, item: 'ae2:certus_quartz_crystal' }]
    })

    // Sky Stone (mixing, superheated)
    event.custom({
        type: 'create:mixing',
        heatRequirement: 'superheated',
        ingredients: [
            { count: 2, item: 'create:powdered_obsidian' },
            { item: 'minecraft:ice' },
            { amount: 500, fluid: 'minecraft:water', nbt: {} }
        ],
        results: [{ count: 2, item: 'ae2:sky_stone_block' }]
    })

    // Fluix Pearl (mixing, superheated)
    event.remove({output: 'ae2:fluix_pearl'})
    event.custom({
        type: 'create:mixing',
        heatRequirement: 'superheated',
        ingredients: [
            { count: 2, item: 'ae2:fluix_dust' },
            { count: 2, item: 'ae2:ender_dust' },
            { tag: 'aether:swet_balls' },
            { amount: 500, fluid: 'minecraft:water', nbt: {} }
        ],
        results: [{ item: 'ae2:fluix_pearl' }]
    })

    // Fluix Crystal (mixing, superheated)
    event.remove({id: 'create:mixing/compat/ae2/fluix_crystal'})
    event.remove({id: 'ae2:transform/fluix_crystals'})
    event.remove({id: 'ae2:transform/fluix_crystal'})
    event.custom({
        type: 'create:mixing',
        heatRequirement: 'superheated',
        ingredients: [
            { count: 4, item: 'minecraft:amethyst_shard' },
            { count: 2, item: 'ae2:fluix_dust' },
            { item: 'ae2:charged_certus_quartz_crystal' },
            { amount: 500, fluid: 'minecraft:water', nbt: {} }
        ],
        results: [
            { item: 'ae2:fluix_crystal' },
            { item: 'ae2:fluix_crystal', chance: 0.5 }
        ]
    })

    // Overcharged items (Tesla Coil)
    addChargingRecipeAE2(event, "minecraft:diamond",        "kubejs:overcharged_diamond",       10000, 400)
    addChargingRecipeAE2(event, "minecraft:gold_ingot",     "kubejs:overcharged_gold",           6000, 200)
    addChargingRecipeAE2(event, "create:iron_sheet",        "kubejs:overcharged_iron_sheet",     4000, 200)
    addChargingRecipeAE2(event, "create:golden_sheet",      "kubejs:overcharged_golden_sheet",   6000, 200)

    // Charged Certus Quartz, Guide, Compass
    addChargingRecipeAE2(event, "ae2:certus_quartz_crystal", "ae2:charged_certus_quartz_crystal", 6000, 200)
    addChargingRecipeAE2(event, "minecraft:book", "ae2:guide", 1000, 200)
    addChargingRecipeAE2(event, "minecraft:compass", "ae2:meteorite_compass", 1000, 200)

    // Press dies — crafted one-way from the press (press consumed, die lasts indefinitely)
    const dieData = [
        { press: "ae2:silicon_press",               die: "kubejs:silicon_press_die" },
        { press: "ae2:calculation_processor_press", die: "kubejs:calculation_press_die" },
        { press: "ae2:logic_processor_press",       die: "kubejs:logic_press_die" },
        { press: "ae2:engineering_processor_press", die: "kubejs:engineering_press_die" },
    ]
    dieData.forEach(element => {
        event.shapeless(element.die, [element.press])
    })

    // Press (sequenced assembly — deployer holds die to differentiate which press is made)
    const pressData = [
        { press: "ae2:silicon_press",               incomplete: "kubejs:incomplete_silicon_press",               die: "kubejs:silicon_press_die" },
        { press: "ae2:calculation_processor_press", incomplete: "kubejs:incomplete_calculation_processor_press", die: "kubejs:calculation_press_die" },
        { press: "ae2:logic_processor_press",       incomplete: "kubejs:incomplete_logic_processor_press",       die: "kubejs:logic_press_die" },
        { press: "ae2:engineering_processor_press", incomplete: "kubejs:incomplete_engineering_processor_press", die: "kubejs:engineering_press_die" },
    ]
    pressData.forEach(element => {
        event.remove({ output: element.press })
        event.custom({
            type: 'create:sequenced_assembly',
            ingredient: { item: 'create:iron_sheet' },
            loops: 5,
            results: [{ item: element.press }],
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: element.incomplete }, { item: element.die }],
                    results: [{ item: element.incomplete }]
                },
                {
                    type: 'create:pressing',
                    ingredients: [{ item: element.incomplete }],
                    results: [{ item: element.incomplete }]
                }
            ],
            transitionalItem: { item: element.incomplete }
        })
    })

    // Name press — loot only (no sequenced assembly recipe)

    // Formation Core
    event.remove({output: 'ae2:formation_core'})
    event.shaped('ae2:formation_core', [
        ' C ',
        'BAB',
        ' D '
    ], {
        A: 'ae2:logic_processor',
        B: 'createaddition:electrum_wire',
        C: 'ae2:fluix_dust',
        D: 'kubejs:copper_circuit'
    })

    // Annihilation Core
    event.remove({output: 'ae2:annihilation_core'})
    event.shaped('ae2:annihilation_core', [
        ' C ',
        'BAB',
        ' D '
    ], {
        A: 'ae2:logic_processor',
        B: 'createaddition:copper_wire',
        C: 'ae2:fluix_dust',
        D: 'kubejs:copper_circuit'
    })

    // Printed Circuit (sequenced assembly)
    const printedCircuitDatas = [
        {
            die:         "kubejs:calculation_press_die",
            incomplete:  "kubejs:incomplete_printed_calculation_circuit",
            inputDeploy: "ae2:charged_certus_quartz_crystal",
            output:      "ae2:printed_calculation_processor",
            input:       "kubejs:blank_circuit"
        },
        {
            die:         "kubejs:logic_press_die",
            incomplete:  "kubejs:incomplete_printed_logic_circuit",
            inputDeploy: "create:golden_sheet",
            output:      "ae2:printed_logic_processor",
            input:       "kubejs:blank_circuit"
        },
        {
            die:         "kubejs:engineering_press_die",
            incomplete:  "kubejs:incomplete_printed_engineering_circuit",
            inputDeploy: "kubejs:overcharged_diamond",
            output:      "ae2:printed_engineering_processor",
            input:       "kubejs:blank_circuit"
        }
    ]
    printedCircuitDatas.forEach(recipe => {
        event.remove({output: recipe.output})
        event.custom({
            type: 'create:sequenced_assembly',
            ingredient: { item: recipe.input },
            loops: 1,
            results: [{ item: recipe.output }],
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: recipe.incomplete }, { item: recipe.inputDeploy }],
                    results: [{ item: recipe.incomplete }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: recipe.incomplete }, { item: recipe.die }],
                    results: [{ item: recipe.incomplete }]
                },
                {
                    type: 'create_optical:focusing',
                    ingredients: [{ item: recipe.incomplete }],
                    processingTime: 50,
                    required_beam_type: 2,
                    results: [{ item: recipe.incomplete }]
                },
                {
                    type: 'create:pressing',
                    ingredients: [{ item: recipe.incomplete }],
                    results: [{ item: recipe.incomplete }]
                }
            ],
            transitionalItem: { item: recipe.incomplete }
        })
    })

    // Printed Silicon
    event.remove({ output: 'ae2:printed_silicon' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: { item: 'ae2:silicon' },
        loops: 1,
        results: [{ item: 'ae2:printed_silicon' }],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [{ item: 'kubejs:incomplete_silicon_print' }, { item: 'kubejs:silicon_press_die' }],
                results: [{ item: 'kubejs:incomplete_silicon_print' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'kubejs:incomplete_silicon_print' }],
                results: [{ item: 'kubejs:incomplete_silicon_print' }]
            }
        ],
        transitionalItem: { item: 'kubejs:incomplete_silicon_print' }
    })

    // Processor (sequenced assembly)
    const processorData = [
        {
            output:     "ae2:logic_processor",
            input:      "ae2:printed_silicon",
            deploy1:    "ae2:printed_logic_processor",
            deploy2:    "minecraft:redstone",
            fluid:      "createdieselgenerators:ethanol",
            incomplete: "kubejs:incomplete_logic_processor"
        },
        {
            output:     "ae2:calculation_processor",
            input:      "ae2:printed_silicon",
            deploy1:    "ae2:printed_calculation_processor",
            deploy2:    "ae2:fluix_dust",
            fluid:      "createdieselgenerators:ethanol",
            incomplete: "kubejs:incomplete_calculation_processor"
        },
        {
            output:     "ae2:engineering_processor",
            input:      "ae2:printed_silicon",
            deploy1:    "ae2:printed_engineering_processor",
            deploy2:    "minecraft:blaze_powder",
            fluid:      "createdieselgenerators:ethanol",
            incomplete: "kubejs:incomplete_engineering_processor"
        }
    ]
    processorData.forEach(element => {
        event.remove({ output: element.output })
        event.custom({
            type: 'create:sequenced_assembly',
            ingredient: { item: element.input },
            loops: 1,
            results: [{ item: element.output }],
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: element.incomplete }, { item: element.deploy1 }],
                    results: [{ item: element.incomplete }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: element.incomplete }, { item: element.deploy2 }],
                    results: [{ item: element.incomplete }]
                },
                {
                    type: 'create:filling',
                    ingredients: [{ item: element.incomplete }, { amount: 250, fluid: element.fluid }],
                    results: [{ item: element.incomplete }]
                },
                {
                    type: 'create:pressing',
                    ingredients: [{ item: element.incomplete }],
                    results: [{ item: element.incomplete }]
                }
            ],
            transitionalItem: { item: element.incomplete }
        })
    })
})

LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.1)
        .addLoot("ae2:name_press")
})
