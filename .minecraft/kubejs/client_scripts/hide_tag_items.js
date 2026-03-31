// Items that must stay registered (for tag integrity) but should be hidden everywhere
const HIDDEN_ITEMS = [
  'mekanism:block_raw_uranium',
  'biomesoplenty:redwood_log',
  'biomesoplenty:fir_log'
]

JEIEvents.hideItems(event => {
  HIDDEN_ITEMS.forEach(id => event.hide(id))
})

EMIEvents.hideItems(event => {
  HIDDEN_ITEMS.forEach(id => event.hide(Item.of(id)))
})
