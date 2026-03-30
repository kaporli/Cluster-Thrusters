// priority: 0

ItemEvents.modification(event => {
  const chestplates = [
    'ice_and_fire_spellbooks:lightning_dragon_priest_chestplate',
    'ice_and_fire_spellbooks:ice_dragon_priest_chestplate',
    'ice_and_fire_spellbooks:fire_dragon_priest_chestplate'
  ]

  const leggings = [
    'ice_and_fire_spellbooks:lightning_dragon_priest_leggings',
    'ice_and_fire_spellbooks:ice_dragon_priest_leggings',
    'ice_and_fire_spellbooks:fire_dragon_priest_leggings'
  ]

  const boots = [
    'ice_and_fire_spellbooks:lightning_dragon_priest_boots',
    'ice_and_fire_spellbooks:ice_dragon_priest_boots',
    'ice_and_fire_spellbooks:fire_dragon_priest_boots'
  ]

  const helmets = [
    'ice_and_fire_spellbooks:lightning_dragon_priest_helmet',
    'ice_and_fire_spellbooks:ice_dragon_priest_helmet',
    'ice_and_fire_spellbooks:fire_dragon_priest_helmet'
  ]

  chestplates.forEach(id => {
    event.modify(id, item => {
      item.armorProtection = 6
      item.armorToughness = 2
    })
  })

  leggings.forEach(id => {
    event.modify(id, item => {
      item.armorToughness = 2
    })
  })

  boots.forEach(id => {
    event.modify(id, item => {
      item.armorProtection = 4
      item.armorToughness = 2
    })
  })

  helmets.forEach(id => {
    event.modify(id, item => {
      item.armorProtection = 4
      item.armorToughness = 2
    })
  })
})