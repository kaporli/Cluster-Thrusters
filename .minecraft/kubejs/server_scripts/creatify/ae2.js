ServerEvents.recipes(event => {
    let remove = [
        'ae2:inscriber',
        'ae2:charger',
        'aeinfinitybooster:dimension_card',
        'expatternprovider:ex_inscriber',
        'expatternprovider:ex_charger'
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
    event.recipes.create.compacting(['4x kubejs:blank_circuit'], [
        '#forge:stone', 'minecraft:redstone', 'minecraft:iron_ingot', 'minecraft:quartz'
    ]).superheated()

    // copper_circuit: deploy copper wire onto blank_circuit
    event.recipes.create.deploying('kubejs:copper_circuit', ['kubejs:blank_circuit', 'createaddition:copper_wire'])

    // Vibrant Quartz Glass
    event.remove({output: 'ae2:quartz_vibrant_glass'})
    addFocusingRecipeAE2(event, 'ae2:quartz_glass', 'ae2:quartz_vibrant_glass', 3, 50)

    // Certus Quartz (mixing, superheated)
    event.recipes.create.mixing(['2x ae2:certus_quartz_crystal'], [
        '2x minecraft:quartz', 'ae2:certus_quartz_dust', Fluid.of('minecraft:water', 500)
    ]).superheated()

    // Sky Stone (mixing, superheated)
    event.recipes.create.mixing(['2x ae2:sky_stone_block'], [
        '2x create:powdered_obsidian', 'minecraft:ice', Fluid.of('minecraft:water', 500)
    ]).superheated()

    // Fluix Pearl (mixing, superheated)
    event.remove({output: 'ae2:fluix_pearl'})
    event.recipes.create.mixing(['ae2:fluix_pearl'], [
        '2x ae2:fluix_dust', '2x ae2:ender_dust', '#aether:swet_balls', Fluid.of('minecraft:water', 500)
    ]).superheated()

    // Fluix Crystal (mixing, superheated)
    event.remove({id: 'create:mixing/compat/ae2/fluix_crystal'})
    event.remove({id: 'ae2:transform/fluix_crystals'})
    event.remove({id: 'ae2:transform/fluix_crystal'})
    event.recipes.create.mixing([
        'ae2:fluix_crystal',
        Item.of('ae2:fluix_crystal').withChance(0.5)
    ], [
        '4x minecraft:amethyst_shard', '2x ae2:fluix_dust', 'ae2:charged_certus_quartz_crystal', Fluid.of('minecraft:water', 500)
    ]).superheated()

    // Overcharged items (Tesla Coil)
    addChargingRecipeAE2(event, "minecraft:diamond",        "kubejs:overcharged_diamond",       10000, 400)
    addChargingRecipeAE2(event, "minecraft:gold_ingot",     "kubejs:overcharged_gold",           6000, 200)
    addChargingRecipeAE2(event, "create:iron_sheet",        "kubejs:overcharged_iron_sheet",     4000, 200)
    addChargingRecipeAE2(event, "create:golden_sheet",      "kubejs:overcharged_golden_sheet",   6000, 200)

    // Charged Certus Quartz, Guide, Compass
    addChargingRecipeAE2(event, "ae2:certus_quartz_crystal", "ae2:charged_certus_quartz_crystal", 6000, 200)
    addChargingRecipeAE2(event, "minecraft:book", "ae2:guide", 1000, 200)
    addChargingRecipeAE2(event, "minecraft:compass", "ae2:meteorite_compass", 1000, 200)

    // Press (sequenced assembly, 2x pressing instead of curving)
    const pressData = [
        { press: "ae2:silicon_press",               incomplete: "createappliedkinetics:incomplete_silicon_press" },
        { press: "ae2:calculation_processor_press", incomplete: "createappliedkinetics:incomplete_calculation_processor_press" },
        { press: "ae2:logic_processor_press",       incomplete: "createappliedkinetics:incomplete_logic_processor_press" },
        { press: "ae2:engineering_processor_press", incomplete: "createappliedkinetics:incomplete_engineering_processor_press" },
        { press: "ae2:name_press",                  incomplete: "kubejs:incomplete_name_press" },
    ]
    pressData.forEach(element => {
        event.remove({ output: element.press })
        let inter1 = element.incomplete
        event.recipes.create.sequenced_assembly([
            Item.of(element.press),
        ], 'create:iron_sheet', [
            event.recipes.create.pressing(inter1, inter1),
            event.recipes.create.pressing(inter1, inter1),
        ]).transitionalItem(inter1).loops(15)
    })

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
            press:       "ae2:calculation_processor_press",
            incomplete:  "createappliedkinetics:incomplete_printed_calculation_circuit",
            inputDeploy: "ae2:charged_certus_quartz_crystal",
            output:      "ae2:printed_calculation_processor",
            input:       "kubejs:blank_circuit"
        },
        {
            press:       "ae2:logic_processor_press",
            incomplete:  "createappliedkinetics:incomplete_printed_logic_circuit",
            inputDeploy: "create:golden_sheet",
            output:      "ae2:printed_logic_processor",
            input:       "kubejs:blank_circuit"
        },
        {
            press:       "ae2:engineering_processor_press",
            incomplete:  "createappliedkinetics:incomplete_printed_engineering_circuit",
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
    let inter1 = 'createappliedkinetics:incomplete_silicon_print'
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:printed_silicon'),
    ], 'ae2:silicon', [
        event.recipes.create.pressing(inter1, inter1),
        event.recipes.create.pressing(inter1, inter1),
    ]).transitionalItem(inter1).loops(1)

    // Processor (sequenced assembly)
    const processorData = [
        {
            output:     "ae2:logic_processor",
            input:      "ae2:printed_silicon",
            deploy1:    "ae2:printed_logic_processor",
            deploy2:    "minecraft:redstone",
            fluid:      "createdieselgenerators:ethanol",
            incomplete: "createappliedkinetics:incomplete_logic_processor"
        },
        {
            output:     "ae2:calculation_processor",
            input:      "ae2:printed_silicon",
            deploy1:    "ae2:printed_calculation_processor",
            deploy2:    "ae2:fluix_dust",
            fluid:      "createdieselgenerators:ethanol",
            incomplete: "createappliedkinetics:incomplete_calculation_processor"
        },
        {
            output:     "ae2:engineering_processor",
            input:      "ae2:printed_silicon",
            deploy1:    "ae2:printed_engineering_processor",
            deploy2:    "minecraft:blaze_powder",
            fluid:      "createdieselgenerators:ethanol",
            incomplete: "createappliedkinetics:incomplete_engineering_processor"
        }
    ]
    processorData.forEach(element => {
        event.remove({ output: element.output })
        event.recipes.create.sequenced_assembly([
            Item.of(element.output),
        ], element.input, [
            event.recipes.create.deploying(element.incomplete, [element.incomplete, element.deploy1]),
            event.recipes.create.deploying(element.incomplete, [element.incomplete, element.deploy2]),
            event.recipes.create.filling(element.incomplete, [Fluid.of(element.fluid, 250), element.incomplete]),
            event.recipes.create.pressing(element.incomplete, element.incomplete),
        ]).transitionalItem(element.incomplete).loops(1)
    })
})

LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.1)
        .addLoot("ae2:name_press")
})
