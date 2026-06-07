// Mecharmorer Bullets - tacz default gun Create Mechanical Crafting recipes
// Source: mecharmorer_bullets-3.0.6.jar (recipes_new/mecharmorer/, non-ca_* entries)
ServerEvents.recipes(event => {
  // aa12
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " CCC ",
    " AAA ",
    "WIGG ",
    "WIGG ",
    "  AA ",
    "  S  ",
    "PMFTX"
  ],
  "key": {
    "C": {
      "item": "create:andesite_casing"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "S": {
      "item": "create:steam_engine"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "F": {
      "item": "create:flywheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:aa12\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // ai_awp
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  BBB  ",
    "  BBB  ",
    "WWCC   ",
    "WWII   ",
    "  AA   ",
    "  MMM  ",
    " PKGETX"
  ],
  "key": {
    "B": {
      "item": "create:brass_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:copper_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "K": {
      "item": "create:hand_crank"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "E": {
      "item": "create:electron_tube"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:ai_awp\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // ak47
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " AAA   ",
    " AAA   ",
    "WWCC   ",
    "WWII   ",
    "  AA   ",
    "  MMM  ",
    "PMGT X "
  ],
  "key": {
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:ak47\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // ammo_final_40mm
  event.custom({
  "type": "create:haunting",
  "ingredients": [
    {
      "item": "mecharmorer_bullets:bullet_filled_40mm"
    }
  ],
   param($m) $m.Value -replace '"item":', '"item":' })

  // ammo_final_gas
  event.custom({
  "type": "create:haunting",
  "ingredients": [
    {
      "item": "mecharmorer_bullets:bullet_filled_gas"
    }
  ],
   param($m) $m.Value -replace '"item":', '"item":' })

  // ammo_final_grenade
  event.custom({
  "type": "create:haunting",
  "ingredients": [
    {
      "item": "mecharmorer_bullets:bullet_filled_grenade"
    }
  ],
   param($m) $m.Value -replace '"item":', '"item":' })

  // ammo_final_rbapb
  event.custom({
  "type": "create:haunting",
  "ingredients": [
    {
      "item": "mecharmorer_bullets:bullet_filled_rbapb"
    }
  ],
   param($m) $m.Value -replace '"item":', '"item":' })

  // ammo_final_slap
  event.custom({
  "type": "create:haunting",
  "ingredients": [
    {
      "item": "mecharmorer_bullets:bullet_filled_slap"
    }
  ],
   param($m) $m.Value -replace '"item":', '"item":' })

  // ammo_mod_fmj
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " N ",
    "BIB",
    " N "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:iron_sheet"
    },
    "N": {
      "item": "minecraft:iron_nugget"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:ammo_mod_fmj\"}"
  }
})

  // ammo_mod_he
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " N ",
    "BIB",
    " N "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:iron_sheet"
    },
    "N": {
      "item": "minecraft:tnt"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:ammo_mod_he\"}"
  }
})

  // ammo_mod_hp
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " N ",
    "BIB",
    " N "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:iron_sheet"
    },
    "N": {
      "item": "minecraft:gold_nugget"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:ammo_mod_hp\"}"
  }
})

  // ammo_mod_i
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " N ",
    "BIB",
    " N "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:iron_sheet"
    },
    "N": {
      "item": "minecraft:lapis_lazuli"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:ammo_mod_i\"}"
  }
})

  // ammo_mod_slug
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " N ",
    "BIB",
    " N "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:iron_sheet"
    },
    "N": {
      "item": "create:copper_nugget"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:ammo_mod_slug\"}"
  }
})

  // aug
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "BBB    ",
    "BBB    ",
    "CCCGGGF",
    "IIIGGGF",
    "AAA    ",
    "MMM    ",
    "PMTE X "
  ],
  "key": {
    "B": {
      "item": "create:brass_block"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "F": {
      "item": "create:flywheel"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "T": {
      "item": "create:gearbox"
    },
    "E": {
      "item": "create:electron_tube"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:aug\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // b93r
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " ZZ ",
    " ZZ ",
    "III ",
    "AA  ",
    " M  ",
    "PMGX"
  ],
  "key": {
    "Z": {
      "item": "create:zinc_ingot"
    },
    "I": {
      "item": "create:iron_sheet"
    },
    "A": {
      "item": "create:andesite_alloy"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:b93r\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // bayonet_6h3
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "BIB",
    " I ",
    "B B"
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "minecraft:iron_sword"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:bayonet_6h3\"}"
  }
})

  // bayonet_m9
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "minecraft:iron_sword"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:bayonet_m9\"}"
  }
})

  // bullet_casing_brass
  event.custom({
  "type": "create:pressing",
  "ingredients": [
    {
      "item": "create:brass_sheet"
    }
  ],
   param($m) $m.Value -replace '"item":', '"item":' })

  // bullet_filled_40mm
  event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": { "item": "mecharmorer_bullets:annealed_large_brass_casing" },
  "transitionalItem": { "item": "mecharmorer_bullets:annealed_large_brass_casing" },
  "sequence": [
    { "type": "create:filling", "ingredients": [ { "item": "mecharmorer_bullets:annealed_large_brass_casing" }, { "fluid": "minecraft:water", "amount": 10 } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:deploying", "ingredients": [ { "item": "mecharmorer_bullets:annealed_large_brass_casing" }, { "item": "mecharmorer_bullets:long_ammunition_gunpowder" } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:deploying", "ingredients": [ { "item": "mecharmorer_bullets:annealed_large_brass_casing" }, { "item": "minecraft:tnt" } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:deploying", "ingredients": [ { "item": "mecharmorer_bullets:annealed_large_brass_casing" }, { "item": "mecharmorer_bullets:slug_40mm" } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:pressing", "ingredients": [ { "item": "mecharmorer_bullets:annealed_large_brass_casing" } ],  param($m) $m.Value -replace '"item":', '"item":' }
  ],
   param($m) $m.Value -replace '"item":', '"item":' ,
  })

  // bullet_filled_gas
  event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": { "item": "mecharmorer_bullets:annealed_brass_pistol_casing" },
  "transitionalItem": { "item": "mecharmorer_bullets:annealed_brass_pistol_casing" },
  "sequence": [
    { "type": "create:deploying", "ingredients": [ { "item": "mecharmorer_bullets:annealed_brass_pistol_casing" }, { "item": "mecharmorer_bullets:small_ammunition_gunpowder" } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:filling", "ingredients": [ { "item": "mecharmorer_bullets:annealed_brass_pistol_casing" }, { "fluid": "minecraft:water", "amount": 10 } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:deploying", "ingredients": [ { "item": "mecharmorer_bullets:annealed_brass_pistol_casing" }, { "item": "mecharmorer_bullets:small_brass_core" } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:pressing", "ingredients": [ { "item": "mecharmorer_bullets:annealed_brass_pistol_casing" } ],  param($m) $m.Value -replace '"item":', '"item":' }
  ],
   param($m) $m.Value -replace '"item":', '"item":' ,
  })

  // bullet_filled_grenade
  event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": { "item": "mecharmorer_bullets:annealed_brass_pistol_casing" },
  "transitionalItem": { "item": "mecharmorer_bullets:annealed_brass_pistol_casing" },
  "sequence": [
    { "type": "create:deploying", "ingredients": [ { "item": "mecharmorer_bullets:annealed_brass_pistol_casing" }, { "item": "mecharmorer_bullets:medium_ammunition_gunpowder" } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:deploying", "ingredients": [ { "item": "mecharmorer_bullets:annealed_brass_pistol_casing" }, { "item": "mecharmorer_bullets:medium_ammunition_gunpowder" } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:filling", "ingredients": [ { "item": "mecharmorer_bullets:annealed_brass_pistol_casing" }, { "fluid": "minecraft:water", "amount": 10 } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:deploying", "ingredients": [ { "item": "mecharmorer_bullets:annealed_brass_pistol_casing" }, { "item": "mecharmorer_bullets:large_brass_core" } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:pressing", "ingredients": [ { "item": "mecharmorer_bullets:annealed_brass_pistol_casing" } ],  param($m) $m.Value -replace '"item":', '"item":' }
  ],
   param($m) $m.Value -replace '"item":', '"item":' ,
  })

  // bullet_filled_rbapb
  event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": { "item": "mecharmorer_bullets:annealed_steel_sniper_casing" },
  "transitionalItem": { "item": "mecharmorer_bullets:annealed_steel_sniper_casing" },
  "sequence": [
    { "type": "create:deploying", "ingredients": [ { "item": "mecharmorer_bullets:annealed_steel_sniper_casing" }, { "item": "mecharmorer_bullets:propellant_powder" } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:deploying", "ingredients": [ { "item": "mecharmorer_bullets:annealed_steel_sniper_casing" }, { "item": "mecharmorer_bullets:large_brass_core" } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:pressing", "ingredients": [ { "item": "mecharmorer_bullets:annealed_steel_sniper_casing" } ],  param($m) $m.Value -replace '"item":', '"item":' }
  ],
   param($m) $m.Value -replace '"item":', '"item":' ,
  })

  // bullet_filled_slap
  event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": { "item": "mecharmorer_bullets:annealed_steel_rifle_casing" },
  "transitionalItem": { "item": "mecharmorer_bullets:annealed_steel_rifle_casing" },
  "sequence": [
    { "type": "create:filling", "ingredients": [ { "item": "mecharmorer_bullets:annealed_steel_rifle_casing" }, { "fluid": "minecraft:water", "amount": 10 } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:deploying", "ingredients": [ { "item": "mecharmorer_bullets:annealed_steel_rifle_casing" }, { "item": "mecharmorer_bullets:long_ammunition_gunpowder" } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:deploying", "ingredients": [ { "item": "mecharmorer_bullets:annealed_steel_rifle_casing" }, { "item": "mecharmorer_bullets:medium_brass_core" } ],  param($m) $m.Value -replace '"item":', '"item":' },
    { "type": "create:pressing", "ingredients": [ { "item": "mecharmorer_bullets:annealed_steel_rifle_casing" } ],  param($m) $m.Value -replace '"item":', '"item":' }
  ],
   param($m) $m.Value -replace '"item":', '"item":' ,
  })

  // cz75
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " II ",
    " II ",
    "II  ",
    "AA  ",
    " M  ",
    "PGX "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "A": {
      "item": "create:andesite_alloy"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:cz75\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // db_long
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " CC  ",
    " BB  ",
    "WII  ",
    "WII  ",
    " AA  ",
    "PMGTX"
  ],
  "key": {
    "C": {
      "item": "create:andesite_casing"
    },
    "B": {
      "item": "create:brass_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:db_long\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // db_short
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " CC  ",
    " BB  ",
    "WI   ",
    "WI   ",
    " AA  ",
    "PMGTX"
  ],
  "key": {
    "C": {
      "item": "create:andesite_casing"
    },
    "B": {
      "item": "create:brass_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:db_short\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // deagle_golden_long_barrel
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BGB",
    " G "
  ],
  "key": {
    "G": {
      "item": "minecraft:gold_block"
    },
    "B": {
      "item": "create:brass_sheet"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:deagle_golden_long_barrel\"}"
  }
})

  // deagle_golden
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BB  ",
    " BB  ",
    "II   ",
    "AA   ",
    " M   ",
    "PSFGX"
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:iron_sheet"
    },
    "A": {
      "item": "create:andesite_alloy"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "S": {
      "item": "create:steam_engine"
    },
    "F": {
      "item": "create:flywheel"
    },
    "G": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:deagle_golden\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // deagle
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " ZZ ",
    " ZZ ",
    "II  ",
    "AA  ",
    " M  ",
    "PFGX"
  ],
  "key": {
    "Z": {
      "item": "create:zinc_ingot"
    },
    "I": {
      "item": "create:iron_sheet"
    },
    "A": {
      "item": "create:andesite_alloy"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "F": {
      "item": "create:flywheel"
    },
    "G": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:deagle\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // extended_mag_1
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "IBI",
    "IBI",
    " N "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "N": {
      "item": "minecraft:iron_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:extended_mag_1\"}"
  }
})

  // extended_mag_2
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "IBI",
    "IBI",
    " N "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "N": {
      "item": "minecraft:gold_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:extended_mag_2\"}"
  }
})

  // extended_mag_3
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "IBI",
    "IBI",
    " N "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "N": {
      "item": "minecraft:diamond"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:extended_mag_3\"}"
  }
})

  // fn_evolys
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " CCCCC ",
    " CCCCC ",
    "WWIIII ",
    "WWIIII ",
    "  AA   ",
    "  DDD  ",
    "  FF   ",
    "  PMEX ",
    "  TGT  "
  ],
  "key": {
    "C": {
      "item": "create:copper_casing"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "D": {
      "item": "create:deployer"
    },
    "F": {
      "item": "create:flywheel"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "M": {
      "item": "create:mechanical_piston"
    },
    "E": {
      "item": "create:electron_tube"
    },
    "T": {
      "item": "create:gearbox"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:fn_evolys\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // fn_fal
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " III   ",
    " III   ",
    "WWCC   ",
    "WWII   ",
    "  AA   ",
    "  MMM  ",
    "PMGT X "
  ],
  "key": {
    "I": {
      "item": "minecraft:iron_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:fn_fal\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // g36k
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " AAA   ",
    " AAA   ",
    "WCGGGFF",
    "WIGGGFF",
    "  AA   ",
    "  MMM  ",
    "PMFT X "
  ],
  "key": {
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "F": {
      "item": "create:flywheel"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:g36k\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // glock_17
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " III ",
    " III ",
    "II   ",
    "AA   ",
    " M   ",
    "PF X "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "A": {
      "item": "create:andesite_alloy"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "F": {
      "item": "create:flywheel"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:glock_17\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // grip_cobra
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:redstone_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:grip_cobra\"}"
  }
})

  // grip_cqr
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:lapis_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:grip_cqr\"}"
  }
})

  // grip_magpul_afg_2
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:brass_sheet"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:grip_magpul_afg_2\"}"
  }
})

  // grip_osovets_black
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:coal_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:grip_osovets_black\"}"
  }
})

  // grip_rk0
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:gold_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:grip_rk0\"}"
  }
})

  // grip_rk1_b25u
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:diamond"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:grip_rk1_b25u\"}"
  }
})

  // grip_rk6
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:zinc_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:grip_rk6\"}"
  }
})

  // grip_se_5
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:emerald"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:grip_se_5\"}"
  }
})

  // grip_td
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:iron_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:grip_td\"}"
  }
})

  // grip_vertical_military
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:iron_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:grip_vertical_military\"}"
  }
})

  // grip_vertical_ranger
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:andesite_alloy"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:grip_vertical_ranger\"}"
  }
})

  // grip_vertical_talon
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:copper_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:grip_vertical_talon\"}"
  }
})

  // hk_g3
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " III   ",
    " III   ",
    "WWCC   ",
    "WWII   ",
    "  AA   ",
    "  MMM  ",
    "PMGT X "
  ],
  "key": {
    "I": {
      "item": "minecraft:iron_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:hk_g3\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // hk_mp5a5
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " ZZZ ",
    " ZZZ ",
    "WCCC ",
    "WIII ",
    "  AA ",
    "  M  ",
    "PFGTX"
  ],
  "key": {
    "Z": {
      "item": "create:zinc_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:andesite_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "F": {
      "item": "create:flywheel"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:hk_mp5a5\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // hk416d
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " AAA   ",
    " AAA   ",
    "WCGGGFF",
    "WIGGGFF",
    "  AA   ",
    "  MMM  ",
    "PMDTFX "
  ],
  "key": {
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "F": {
      "item": "create:flywheel"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "D": {
      "item": "create:deployer"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:hk416d\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // laser_compact
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    " R "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:laser_compact\"}"
  }
})

  // laser_lopro
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    " R "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:glowstone_dust"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:laser_lopro\"}"
  }
})

  // laser_nightstick
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    " R "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:sea_lantern"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:laser_nightstick\"}"
  }
})

  // laser_peq15
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    " R "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:laser_peq15\"}"
  }
})

  // light_extended_mag_1
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "IBI",
    "IBI",
    " N "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "N": {
      "item": "create:zinc_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:light_extended_mag_1\"}"
  }
})

  // light_extended_mag_2
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "IBI",
    "IBI",
    " N "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "N": {
      "item": "create:andesite_alloy"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:light_extended_mag_2\"}"
  }
})

  // light_extended_mag_3
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "IBI",
    "IBI",
    " N "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "N": {
      "item": "create:brass_sheet"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:light_extended_mag_3\"}"
  }
})

  // m1014
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " CCC ",
    " III ",
    "WII  ",
    "WII  ",
    " AA  ",
    "  M  ",
    "PGMTX"
  ],
  "key": {
    "C": {
      "item": "create:andesite_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:m1014\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // m107
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  CCC  ",
    "  III  ",
    "  III  ",
    "WWII   ",
    "WWII   ",
    "  AA   ",
    "  DDD  ",
    "PSKGETX"
  ],
  "key": {
    "C": {
      "item": "create:copper_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "D": {
      "item": "create:deployer"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "S": {
      "item": "create:steam_engine"
    },
    "K": {
      "item": "create:hand_crank"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "E": {
      "item": "create:electron_tube"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:m107\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // m16a1
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " III   ",
    " III   ",
    "WWCC   ",
    "WWII   ",
    "  AA   ",
    "  MMM  ",
    "PMGT X "
  ],
  "key": {
    "I": {
      "item": "minecraft:iron_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:m16a1\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // m16a4
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " AAA   ",
    " AAA   ",
    "WCGGGFF",
    "WIGGGFF",
    "  AA   ",
    "  MMM  ",
    "PMFT X "
  ],
  "key": {
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "F": {
      "item": "create:flywheel"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:m16a4\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // m1911
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BBB ",
    " BBB ",
    "II   ",
    "AA   ",
    " M   ",
    "PFGX "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:iron_sheet"
    },
    "A": {
      "item": "create:andesite_alloy"
    },
    "M": {
      "item": "create:brass_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "F": {
      "item": "create:flywheel"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:m1911\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // m249
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BBBBB ",
    " BBBBB ",
    "WWCCCC ",
    "WWIIII ",
    "  AA   ",
    "  DDD  ",
    "  FF   ",
    "  PMEX ",
    "  TGT  "
  ],
  "key": {
    "B": {
      "item": "create:brass_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:copper_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "D": {
      "item": "create:deployer"
    },
    "F": {
      "item": "create:flywheel"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "M": {
      "item": "create:mechanical_piston"
    },
    "E": {
      "item": "create:electron_tube"
    },
    "T": {
      "item": "create:gearbox"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:m249\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // m320
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " CC  ",
    " AA  ",
    " II  ",
    " AA  ",
    "PMETX"
  ],
  "key": {
    "C": {
      "item": "create:andesite_casing"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "M": {
      "item": "create:mechanical_piston"
    },
    "E": {
      "item": "create:electron_tube"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:m320\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // m4a1
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BBB   ",
    " BBB   ",
    "WCGGGFF",
    "WIGGGFF",
    "  AA   ",
    "  MMM  ",
    "PMDTFX "
  ],
  "key": {
    "B": {
      "item": "create:brass_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "F": {
      "item": "create:flywheel"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "D": {
      "item": "create:deployer"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:m4a1\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // m700
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  CC   ",
    "  II   ",
    "WWII   ",
    "WWII   ",
    "  AA   ",
    "  MMM  ",
    " PKGETX"
  ],
  "key": {
    "C": {
      "item": "create:copper_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "K": {
      "item": "create:hand_crank"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "E": {
      "item": "create:electron_tube"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:m700\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // m870
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " CCC ",
    " III ",
    "WII  ",
    "WII  ",
    " AA  ",
    "  M  ",
    "PGMTX"
  ],
  "key": {
    "C": {
      "item": "create:andesite_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:m870\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // m95
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "IIIIIII",
    "IIIIIII",
    "AACCCAA",
    "WWBPPBW",
    "WWBPPBW",
    "AACCCAA",
    " SSSS  ",
    " PKEGT ",
    "  XFX  "
  ],
  "key": {
    "I": {
      "item": "minecraft:iron_block"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "C": {
      "item": "create:copper_casing"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "B": {
      "item": "create:brass_block"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "S": {
      "item": "create:steam_engine"
    },
    "K": {
      "item": "create:hand_crank"
    },
    "E": {
      "item": "create:electron_tube"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    },
    "F": {
      "item": "create:flywheel"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:m95\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // m9a4
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " III ",
    " III ",
    "BB   ",
    "AA   ",
    " M   ",
    "PETX "
  ],
  "key": {
    "I": { "item": "create:iron_sheet" },
    "B": { "item": "create:brass_sheet" },
    "A": { "item": "create:andesite_alloy" },
    "M": { "item": "create:iron_sheet" },
    "P": { "item": "create:precision_mechanism" },
    "E": { "item": "create:electron_tube" },
    "T": { "item": "create:gearbox" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{\"GunId\":\"tacz:m9a4\",\"GunFireMode\":\"SEMI\"}" }
})

  // minigun
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "CCCCCCC",
    "CCCCCCC",
    "  AAA  ",
    "WWII   ",
    "WWII   ",
    "  DDD  ",
    "  SFF  ",
    "  PMEX ",
    "  TGT  "
  ],
  "key": {
    "C": {
      "item": "create:copper_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "D": {
      "item": "create:deployer"
    },
    "S": {
      "item": "create:steam_engine"
    },
    "F": {
      "item": "create:flywheel"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "M": {
      "item": "create:mechanical_piston"
    },
    "E": {
      "item": "create:electron_tube"
    },
    "T": {
      "item": "create:gearbox"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:minigun\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // mk14
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BBB   ",
    " BBB   ",
    "WWCC   ",
    "WWII   ",
    "  AA   ",
    "  MMM  ",
    " PGETX "
  ],
  "key": {
    "B": {
      "item": "create:brass_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:copper_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "E": {
      "item": "create:electron_tube"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:mk14\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // muzzle_brake_cthulhu
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "create:andesite_alloy"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_brake_cthulhu\"}"
  }
})

  // muzzle_brake_cyclone_d2
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "minecraft:iron_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_brake_cyclone_d2\"}"
  }
})

  // muzzle_brake_mastiff_sg
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "create:zinc_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_brake_mastiff_sg\"}"
  }
})

  // muzzle_brake_pioneer
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "minecraft:copper_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_brake_pioneer\"}"
  }
})

  // muzzle_brake_timeless50
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "minecraft:gold_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_brake_timeless50\"}"
  }
})

  // muzzle_brake_trex
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "minecraft:iron_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_brake_trex\"}"
  }
})

  // muzzle_choke_sg
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "minecraft:lapis_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_choke_sg\"}"
  }
})

  // muzzle_compensator_trident
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "minecraft:redstone_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_compensator_trident\"}"
  }
})

  // muzzle_duckbill_sg
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "minecraft:coal_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_duckbill_sg\"}"
  }
})

  // muzzle_silencer_knight_qd
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "minecraft:copper_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_silencer_knight_qd\"}"
  }
})

  // muzzle_silencer_mirage
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "create:andesite_alloy"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_silencer_mirage\"}"
  }
})

  // muzzle_silencer_phantom_s1
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "minecraft:iron_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_silencer_phantom_s1\"}"
  }
})

  // muzzle_silencer_ptilopsis
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "minecraft:diamond"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_silencer_ptilopsis\"}"
  }
})

  // muzzle_silencer_sg
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "create:zinc_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_silencer_sg\"}"
  }
})

  // muzzle_silencer_ursus
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "create:brass_sheet"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_silencer_ursus\"}"
  }
})

  // muzzle_silencer_vulture
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " B ",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:iron_sheet"
    },
    "I": {
      "item": "minecraft:gold_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:muzzle_silencer_vulture\"}"
  }
})

  // oem_stock_heavy
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "B B",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:jungle_planks"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:oem_stock_heavy\"}"
  }
})

  // oem_stock_light
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "B B",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:birch_planks"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:oem_stock_light\"}"
  }
})

  // oem_stock_tactical
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "B B",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:dark_oak_planks"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:oem_stock_tactical\"}"
  }
})

  // p320
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " III ",
    " III ",
    "II   ",
    "AA   ",
    " M   ",
    "PEX  "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "A": {
      "item": "create:andesite_alloy"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "E": {
      "item": "create:electron_tube"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:p320\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // p90
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " AAA ",
    " AAA ",
    " CCC ",
    "IIIII",
    "  AA ",
    "  M  ",
    "PFGTX"
  ],
  "key": {
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "C": {
      "item": "create:andesite_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "F": {
      "item": "create:flywheel"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:p90\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // qbz_191
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " AAA   ",
    " AAA   ",
    "WCGGGFF",
    "WIGGGFF",
    "  AA   ",
    "  MMM  ",
    "PMFT X "
  ],
  "key": {
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "F": {
      "item": "create:flywheel"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:qbz_191\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // qbz_95
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " AAA   ",
    " AAA   ",
    "WWCC   ",
    "WWII   ",
    "  AA   ",
    "  MMM  ",
    "PMGT X "
  ],
  "key": {
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:qbz_95\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // rhino357
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " III ",
    "BIB  ",
    "WW   ",
    "WW   ",
    " M   ",
    "PFEX "
  ],
  "key": {
    "I": { "item": "create:iron_sheet" },
    "B": { "item": "create:brass_sheet" },
    "W": { "tag": "minecraft:logs" },
    "M": { "item": "create:iron_sheet" },
    "P": { "item": "create:precision_mechanism" },
    "F": { "item": "create:flywheel" },
    "E": { "item": "create:electron_tube" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"tacz:rhino357\",GunFireMode:\"SEMI\"}" }
})

  // rpg7
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  CC  ",
    "  II  ",
    "  II  ",
    "WWII  ",
    "WWII  ",
    "  AA  ",
    "  S   ",
    "  PMEX",
    "  TGT "
  ],
  "key": {
    "C": {
      "item": "create:andesite_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "S": {
      "item": "create:steam_engine"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "M": {
      "item": "create:mechanical_piston"
    },
    "E": {
      "item": "create:electron_tube"
    },
    "T": {
      "item": "create:gearbox"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:rpg7\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // rpk
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " CCCCC ",
    " CCCCC ",
    "WWIIII ",
    "WWIIII ",
    "  AA   ",
    "  DDD  ",
    "  FF   ",
    "  PMTX ",
    "       "
  ],
  "key": {
    "C": {
      "item": "create:copper_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "D": {
      "item": "create:deployer"
    },
    "F": {
      "item": "create:flywheel"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "M": {
      "item": "create:mechanical_piston"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:rpk\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // scar_h
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  BBB  ",
    "  BBB  ",
    "WCGGGFF",
    "WIGGGFF",
    "  AA   ",
    "  MMM  ",
    "PMFETX "
  ],
  "key": {
    "B": {
      "item": "create:brass_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "F": {
      "item": "create:flywheel"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "E": {
      "item": "create:electron_tube"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:scar_h\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // scar_l
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  BBB  ",
    "  BBB  ",
    "WCGGGFF",
    "WIGGGFF",
    "  AA   ",
    "  MMM  ",
    "PMFT X "
  ],
  "key": {
    "B": {
      "item": "create:brass_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "F": {
      "item": "create:flywheel"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:scar_l\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // scope_1873_6x
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " GG  ",
    " BBB ",
    "BRPRB",
    " BXB ",
    " BBB ",
    "  S  "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:emerald_block"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "X": {
      "item": "create:gearbox"
    },
    "S": {
      "item": "create:shaft"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:scope_1873_6x\"}"
  }
})

  // scope_acog_ta31
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " GG  ",
    " BBB ",
    "BRPRB",
    " BXB ",
    " BBB "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone_block"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "X": {
      "item": "create:gearbox"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:scope_acog_ta31\"}"
  }
})

  // scope_aug_default
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "create:cogwheel"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:scope_aug_default\"}"
  }
})

  // scope_contender
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  G  ",
    " BBB ",
    "BPPPB",
    " BXB ",
    " BBB ",
    "  N  "
  ],
  "key": {
    "G": {
      "item": "minecraft:spyglass"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "X": {
      "item": "create:gearbox"
    },
    "N": {
      "item": "create:gearbox"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:scope_contender\"}"
  }
})

  // scope_elcan_4x
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " GG  ",
    " BBB ",
    "BRPRB",
    " BXB ",
    " BBB "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:iron_block"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "X": {
      "item": "create:gearbox"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:scope_elcan_4x\"}"
  }
})

  // scope_hamr
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " GG  ",
    " BBB ",
    "BRPRB",
    " BXB ",
    " BBB "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:gold_block"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "X": {
      "item": "create:gearbox"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:scope_hamr\"}"
  }
})

  // scope_lpvo_1_6
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " GG  ",
    " BBB ",
    "BRPRB",
    " BXB ",
    " BBB "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:copper_block"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "X": {
      "item": "create:gearbox"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:scope_lpvo_1_6\"}"
  }
})

  // scope_mk5hd
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  G  ",
    " BBB ",
    "BPPPB",
    " BXB ",
    " BBB ",
    "  N  "
  ],
  "key": {
    "G": {
      "item": "minecraft:spyglass"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "X": {
      "item": "create:gearbox"
    },
    "N": {
      "item": "create:electron_tube"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:scope_mk5hd\"}"
  }
})

  // scope_qmk152
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " GG  ",
    " BBB ",
    "BRPRB",
    " BXB ",
    " BBB "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "create:zinc_block"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "X": {
      "item": "create:gearbox"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:scope_qmk152\"}"
  }
})

  // scope_retro_2x
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BIB",
    " E "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "I": {
      "item": "create:iron_sheet"
    },
    "E": {
      "item": "create:electron_tube"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:scope_retro_2x\"}"
  }
})

  // scope_standard_8x
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  G  ",
    " BBB ",
    "BPPPB",
    " BXB ",
    " BBB ",
    "  N  "
  ],
  "key": {
    "G": {
      "item": "minecraft:spyglass"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "X": {
      "item": "create:gearbox"
    },
    "N": {
      "item": "create:shaft"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:scope_standard_8x\"}"
  }
})

  // scope_vudu
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  G  ",
    " BBB ",
    "BPPPB",
    " BXB ",
    " BBB ",
    "  N  "
  ],
  "key": {
    "G": {
      "item": "minecraft:spyglass"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "X": {
      "item": "create:gearbox"
    },
    "N": {
      "item": "create:precision_mechanism"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:scope_vudu\"}"
  }
})

  // shotgun_extended_mag_1
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "IBI",
    "IBI",
    " N "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "N": {
      "item": "minecraft:copper_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:shotgun_extended_mag_1\"}"
  }
})

  // shotgun_extended_mag_2
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "IBI",
    "IBI",
    " N "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "N": {
      "item": "minecraft:redstone_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:shotgun_extended_mag_2\"}"
  }
})

  // shotgun_extended_mag_3
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "IBI",
    "IBI",
    " N "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "N": {
      "item": "minecraft:lapis_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:shotgun_extended_mag_3\"}"
  }
})

  // sight_552
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "create:copper_nugget"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_552\"}"
  }
})

  // sight_acro_pistol
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "N": {
      "item": "minecraft:iron_nugget"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_acro_pistol\"}"
  }
})

  // sight_acro_rifle
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "create:zinc_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_acro_rifle\"}"
  }
})

  // sight_coyote
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "minecraft:diamond"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_coyote\"}"
  }
})

  // sight_deltapoint_pistol
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "N": {
      "item": "minecraft:gold_nugget"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_deltapoint_pistol\"}"
  }
})

  // sight_deltapoint_rifle
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "minecraft:quartz"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_deltapoint_rifle\"}"
  }
})

  // sight_exp3
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "minecraft:lapis_lazuli"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_exp3\"}"
  }
})

  // sight_fastfire_pistol
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "N": {
      "item": "create:copper_nugget"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_fastfire_pistol\"}"
  }
})

  // sight_fastfire_rifle
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "minecraft:amethyst_shard"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_fastfire_rifle\"}"
  }
})

  // sight_okp7
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "minecraft:coal"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_okp7\"}"
  }
})

  // sight_p90
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "create:andesite_alloy"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_p90\"}"
  }
})

  // sight_pk06_pistol
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "N": {
      "item": "minecraft:lapis_lazuli"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_pk06_pistol\"}"
  }
})

  // sight_pk06_rifle
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "minecraft:prismarine_shard"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_pk06_rifle\"}"
  }
})

  // sight_rmr_dot
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "N": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_rmr_dot\"}"
  }
})

  // sight_sro_dot
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "minecraft:gold_nugget"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_sro_dot\"}"
  }
})

  // sight_srs_02
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "create:brass_nugget"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_srs_02\"}"
  }
})

  // sight_t1
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_t1\"}"
  }
})

  // sight_t2
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "minecraft:iron_nugget"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_t2\"}"
  }
})

  // sight_uh1
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " G ",
    "BRB",
    "BSB",
    " N "
  ],
  "key": {
    "G": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "R": {
      "item": "minecraft:redstone"
    },
    "S": {
      "item": "create:shaft"
    },
    "N": {
      "item": "minecraft:emerald"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sight_uh1\"}"
  }
})

  // sks_tactical
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " III   ",
    " III   ",
    "WWCC   ",
    "WWII   ",
    "  AA   ",
    "  MMM  ",
    "PMGT X "
  ],
  "key": {
    "I": {
      "item": "create:brass_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:sks_tactical\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // sniper_extended_mag_1
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "IBI",
    "IBI",
    " N "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "N": {
      "item": "minecraft:emerald"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sniper_extended_mag_1\"}"
  }
})

  // sniper_extended_mag_2
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "IBI",
    "IBI",
    " N "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "N": {
      "item": "minecraft:emerald_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sniper_extended_mag_2\"}"
  }
})

  // sniper_extended_mag_3
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "IBI",
    "IBI",
    " N "
  ],
  "key": {
    "I": {
      "item": "create:iron_sheet"
    },
    "B": {
      "item": "create:brass_sheet"
    },
    "N": {
      "item": "minecraft:diamond_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:sniper_extended_mag_3\"}"
  }
})

  // spas_12
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " CCC ",
    " AAA ",
    "WIGG ",
    "WIGG ",
    "  AA ",
    "  M  ",
    "PMFTX"
  ],
  "key": {
    "C": {
      "item": "create:andesite_casing"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "F": {
      "item": "create:flywheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:spas_12\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // special_lonetrail
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BBB  ",
    " BBB  ",
    "IIII  ",
    "AAAA  ",
    "WWWW  ",
    "PMGTX "
  ],
  "key": {
    "B": {
      "item": "create:brass_block"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:lonetrail\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // spr15hb
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BBB   ",
    " BBB   ",
    "WCGGGFF",
    "WIGGGFF",
    "  AA   ",
    "  MMM  ",
    "PMFETX "
  ],
  "key": {
    "B": {
      "item": "create:brass_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "F": {
      "item": "create:flywheel"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "E": {
      "item": "create:electron_tube"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:spr15hb\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // springfield1873
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  CC   ",
    "  BB   ",
    "WWII   ",
    "WWII   ",
    "  AA   ",
    "  MMM  ",
    " PKGT X"
  ],
  "key": {
    "C": {
      "item": "create:copper_casing"
    },
    "B": {
      "item": "create:brass_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "K": {
      "item": "create:hand_crank"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:springfield1873\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // stock_ak12
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "B B",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:acacia_planks"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:stock_ak12\"}"
  }
})

  // stock_carbon_bone_c5
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "B B",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:bone_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:stock_carbon_bone_c5\"}"
  }
})

  // stock_heavy_spas_12
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "B B",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:iron_block"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:stock_heavy_spas_12\"}"
  }
})

  // stock_hk_slim_line
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "B B",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:andesite_alloy"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:stock_hk_slim_line\"}"
  }
})

  // stock_m4ss
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "B B",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:spruce_planks"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:stock_m4ss\"}"
  }
})

  // stock_militech_b5
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "B B",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:brass_sheet"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:stock_militech_b5\"}"
  }
})

  // stock_moe
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "B B",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "tag": "minecraft:logs"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:stock_moe\"}"
  }
})

  // stock_ripstock
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "B B",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "minecraft:iron_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:stock_ripstock\"}"
  }
})

  // stock_sba3
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "B B",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:iron_sheet"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:stock_sba3\"}"
  }
})

  // stock_tactical_ar
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "B B",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:zinc_ingot"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:stock_tactical_ar\"}"
  }
})

  // stock_tactical_spas_12
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "B B",
    "BIB",
    " B "
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:andesite_alloy"
    }
  },
  "result": {
    "item": "tacz:attachment",
    "nbt": "{\"AttachmentId\":\"tacz:stock_tactical_spas_12\"}"
  }
})

  // taurus500
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " III ",
    "BIB  ",
    "WW   ",
    "WW   ",
    " S   ",
    "PFEX "
  ],
  "key": {
    "I": { "item": "create:iron_sheet" },
    "B": { "item": "create:brass_sheet" },
    "W": { "tag": "minecraft:logs" },
    "S": { "item": "create:steam_engine" },
    "P": { "item": "create:precision_mechanism" },
    "F": { "item": "create:flywheel" },
    "E": { "item": "create:electron_tube" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"tacz:taurus500\",GunFireMode:\"SEMI\"}" }
})

  // taurus943
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " II  ",
    "BIB  ",
    "WW   ",
    " M   ",
    "PFEX "
  ],
  "key": {
    "I": { "item": "create:iron_sheet" },
    "B": { "item": "create:brass_sheet" },
    "W": { "tag": "minecraft:logs" },
    "M": { "item": "create:iron_sheet" },
    "P": { "item": "create:precision_mechanism" },
    "F": { "item": "create:flywheel" },
    "E": { "item": "create:electron_tube" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{\"GunId\":\"tacz:taurus943\",\"GunFireMode\":\"SEMI\"}" }
})

  // timeless50
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BB ",
    " BB ",
    "II  ",
    "W   ",
    " M  ",
    "PFGX"
  ],
  "key": {
    "B": {
      "item": "create:brass_sheet"
    },
    "I": {
      "item": "create:iron_sheet"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "F": {
      "item": "create:flywheel"
    },
    "G": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:timeless50\",\"GunFireMode\":\"SEMI\"}"
  }
})

  // type_81
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " III   ",
    " III   ",
    "WWCC   ",
    "WWII   ",
    "  AA   ",
    "  MMM  ",
    "PMGT X "
  ],
  "key": {
    "I": {
      "item": "minecraft:iron_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:type_81\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // ump45
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " AAA ",
    " AAA ",
    "WCCC ",
    "WIII ",
    "  AA ",
    "  M  ",
    "PFGTX"
  ],
  "key": {
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:andesite_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "F": {
      "item": "create:flywheel"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:ump45\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // uzi
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  A  ",
    "  A  ",
    "  C  ",
    "  I  ",
    "WWWWW",
    "  M  ",
    "PGTX "
  ],
  "key": {
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "C": {
      "item": "create:andesite_casing"
    },
    "I": {
      "item": "minecraft:iron_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:uzi\",\"GunFireMode\":\"AUTO\"}"
  }
})

  // vector45
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " AAA ",
    " AAA ",
    "WCGG ",
    "  AA ",
    "  M  ",
    "PMFTX"
  ],
  "key": {
    "A": {
      "item": "create:andesite_alloy_block"
    },
    "W": {
      "tag": "minecraft:logs"
    },
    "C": {
      "item": "create:andesite_casing"
    },
    "G": {
      "item": "create:cogwheel"
    },
    "M": {
      "item": "create:iron_sheet"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "F": {
      "item": "create:flywheel"
    },
    "T": {
      "item": "create:gearbox"
    },
    "X": {
      "item": "create:blaze_burner"
    }
  },
  "result": {
    "item": "tacz:modern_kinetic_gun",
    "nbt": "{\"GunId\":\"tacz:vector45\",\"GunFireMode\":\"AUTO\"}"
  }
})

})
