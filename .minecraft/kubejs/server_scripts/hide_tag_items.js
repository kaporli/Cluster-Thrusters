// Remove recipes for items that must stay registered but be inaccessible
ServerEvents.recipes(event => {
  event.remove({ output: 'mekanism:block_raw_uranium' })
  event.remove({ output: 'biomesoplenty:redwood_log' })
  event.remove({ output: 'biomesoplenty:fir_log' })
})
