// Items that must stay registered (for tag integrity) but should be hidden everywhere
const HIDDEN_ITEMS = [
    'mekanism:block_raw_uranium',
    'biomesoplenty:redwood_log',
    'biomesoplenty:fir_log',
    'create_jetpack:jetpack_placeable',
    'create_jetpack:netherite_jetpack_placeable',
    "moonlight:placeable_item",
    "create_connected:incomplete_control_chip"

]

JEIEvents.hideItems(event => {
    HIDDEN_ITEMS.forEach(id => event.hide(id))

    event.hide(/^xaeroworldmap:.*/);
    event.hide(/^xaerominimap:.*/);
    event.hide(/^citdadel:.*/);
    event.hide(/^structure_gel:.*/);
})
