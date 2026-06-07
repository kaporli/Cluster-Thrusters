// Mecharmorer Bullets - Create Armorer gun recipes ported to KubeJS
// Only ca_* gun entries (GunId: create_armorer:*), counterpart to Create Immersive TaCZ gun recipes
ServerEvents.recipes(event => {
  // ca_cannon_40mm_salamander
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  BB  ",
    "  BB  ",
    "OOOOBB",
    "OOOOBB",
    "  CC  ",
    "  S   ",
    "  PFP ",
    "  GDE ",
    "   TX "
  ],
  "key": {
    "B": { "item": "create:brass_block" },
    "O": { "tag": "minecraft:logs" },
    "C": { "item": "create:andesite_casing" },
    "S": { "item": "create:steam_engine" },
    "P": { "item": "create:precision_mechanism" },
    "F": { "item": "create:flywheel" },
    "G": { "item": "create:cogwheel" },
    "D": { "item": "create:deployer" },
    "E": { "item": "create:electron_tube" },
    "T": { "item": "create:gearbox" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"create_armorer:cannon_40mm_salamander\",GunFireMode:\"SEMI\"}" }
})

  // ca_gl_revolver_devastator
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  BB  ",
    "  BB  ",
    "  BB  ",
    "OOOOII",
    "OOOOII",
    "  CC  ",
    "  O   ",
    "  PMP ",
    "  GDTX"
  ],
  "key": {
    "B": { "item": "minecraft:iron_block" },
    "O": { "tag": "minecraft:logs" },
    "I": { "item": "minecraft:iron_block" },
    "C": { "item": "create:andesite_casing" },
    "P": { "item": "create:precision_mechanism" },
    "M": { "item": "create:mechanical_piston" },
    "G": { "item": "create:cogwheel" },
    "D": { "item": "create:deployer" },
    "T": { "item": "create:gearbox" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"create_armorer:gl_revolver_devastator\",GunFireMode:\"SEMI\"}" }
})

  // ca_mg_platemag_flywheel
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BBBBB ",
    " BBBBB ",
    "ZZZZIII",
    "ZZZZIII",
    "  CCC  ",
    "  DDD  ",
    "  FRPG ",
    "  TTEX "
  ],
  "key": {
    "B": { "item": "create:brass_block" },
    "Z": { "item": "create:zinc_block" },
    "I": { "item": "minecraft:iron_block" },
    "C": { "item": "create:copper_casing" },
    "D": { "item": "create:deployer" },
    "F": { "item": "create:flywheel" },
    "R": { "item": "create:cogwheel" },
    "P": { "item": "create:precision_mechanism" },
    "G": { "item": "create:gearbox" },
    "T": { "item": "create:gearbox" },
    "E": { "item": "create:electron_tube" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"create_armorer:mg_platemag_flywheel\",GunFireMode:\"AUTO\"}" }
})

  // ca_pistol_auto_stress
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BB ",
    " BB ",
    "CC  ",
    "AA  ",
    " M  ",
    "PFX "
  ],
  "key": {
    "B": { "item": "create:brass_sheet" },
    "C": { "item": "create:andesite_casing" },
    "A": { "item": "create:andesite_alloy" },
    "M": { "item": "create:brass_sheet" },
    "P": { "item": "create:precision_mechanism" },
    "F": { "item": "create:flywheel" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"create_armorer:pistol_auto_stress\",GunFireMode:\"SEMI\"}" }
})

  // ca_pistol_revolver_torque
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BB ",
    " BB ",
    "CC  ",
    "AA  ",
    " T  ",
    "PDGX"
  ],
  "key": {
    "B": { "item": "create:iron_sheet" },
    "C": { "item": "create:andesite_casing" },
    "A": { "item": "create:andesite_alloy" },
    "T": { "item": "create:gearbox" },
    "P": { "item": "create:precision_mechanism" },
    "D": { "item": "create:deployer" },
    "G": { "item": "create:cogwheel" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"create_armorer:pistol_revolver_torque\",GunFireMode:\"SEMI\"}" }
})

  // ca_rifle_assult_crane
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BBB   ",
    " BBB   ",
    "ZBBBZBB",
    "ZCCCCCZ",
    "  AAA  ",
    "  MMM  ",
    "GPMTE X"
  ],
  "key": {
    "B": { "item": "create:brass_block" },
    "Z": { "item": "create:zinc_block" },
    "C": { "item": "create:brass_casing" },
    "A": { "item": "create:andesite_alloy_block" },
    "M": { "item": "create:iron_sheet" },
    "G": { "item": "create:cogwheel" },
    "P": { "item": "create:precision_mechanism" },
    "T": { "item": "create:gearbox" },
    "E": { "item": "create:electron_tube" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"create_armorer:rifle_assult_crane\",GunFireMode:\"AUTO\"}" }
})

  // ca_rifle_assult_roller
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BBB   ",
    " BBB   ",
    "ZCCCCCZ",
    "ZIIIZZZ",
    "  AAA  ",
    "  MMM  ",
    "GPMFT X"
  ],
  "key": {
    "B": { "item": "minecraft:iron_block" },
    "Z": { "item": "create:zinc_block" },
    "C": { "item": "create:brass_casing" },
    "I": { "item": "minecraft:iron_block" },
    "A": { "item": "create:andesite_alloy_block" },
    "M": { "item": "create:iron_sheet" },
    "G": { "item": "create:cogwheel" },
    "P": { "item": "create:precision_mechanism" },
    "F": { "item": "create:flywheel" },
    "T": { "item": "create:gearbox" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"create_armorer:rifle_assult_roller\",GunFireMode:\"AUTO\"}" }
})

  // ca_shotgun_db_stone
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BB  ",
    " BB  ",
    "SSII ",
    "SSII ",
    " CC  ",
    " M   ",
    "GPMTX"
  ],
  "key": {
    "B": { "item": "minecraft:iron_block" },
    "S": { "item": "minecraft:cobblestone" },
    "I": { "item": "minecraft:iron_block" },
    "C": { "item": "create:andesite_casing" },
    "M": { "item": "create:iron_sheet" },
    "G": { "item": "create:cogwheel" },
    "P": { "item": "create:precision_mechanism" },
    "T": { "item": "create:gearbox" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"create_armorer:shotgun_db_stone\",GunFireMode:\"SEMI\"}" }
})

  // ca_shotgun_pump_bearing
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BBB ",
    " BBB ",
    "OIIIZ",
    "OIIIZ",
    " CCC ",
    "  O  ",
    "GPFTX"
  ],
  "key": {
    "B": { "item": "minecraft:iron_block" },
    "O": { "tag": "minecraft:logs" },
    "I": { "item": "minecraft:iron_block" },
    "Z": { "item": "create:zinc_block" },
    "C": { "item": "create:andesite_casing" },
    "G": { "item": "create:cogwheel" },
    "P": { "item": "create:precision_mechanism" },
    "F": { "item": "create:flywheel" },
    "T": { "item": "create:gearbox" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"create_armorer:shotgun_pump_bearing\",GunFireMode:\"SEMI\"}" }
})

  // ca_smg_auto_crank
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BBB ",
    " BBB ",
    " BBB ",
    "CCCCC",
    " AAA ",
    " MMM ",
    "GPFTX"
  ],
  "key": {
    "B": { "item": "create:brass_block" },
    "C": { "item": "create:andesite_casing" },
    "A": { "item": "create:andesite_alloy_block" },
    "M": { "item": "create:iron_sheet" },
    "G": { "item": "create:cogwheel" },
    "P": { "item": "create:precision_mechanism" },
    "F": { "item": "create:flywheel" },
    "T": { "item": "create:gearbox" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"create_armorer:smg_auto_crank\",GunFireMode:\"AUTO\"}" }
})

  // ca_sniper_semi_clockwork
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BBB   ",
    " BBB   ",
    "OOOOBBB",
    "OOOOBBB",
    "  CCC  ",
    "  AAA  ",
    "  PFT  ",
    "  GDEX "
  ],
  "key": {
    "B": { "item": "create:brass_block" },
    "O": { "tag": "minecraft:logs" },
    "C": { "item": "create:copper_casing" },
    "A": { "item": "create:andesite_alloy_block" },
    "P": { "item": "create:precision_mechanism" },
    "F": { "item": "create:flywheel" },
    "T": { "item": "create:gearbox" },
    "G": { "item": "create:cogwheel" },
    "D": { "item": "create:deployer" },
    "E": { "item": "create:electron_tube" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"create_armorer:sniper_semi_clockwork\",GunFireMode:\"SEMI\"}" }
})

  // ca_sniper_semi_m1
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " BBB   ",
    " BBB   ",
    "OOOOIII",
    "OOOOIII",
    "  CCC  ",
    "  AAA  ",
    "  PME  ",
    "  GDTX "
  ],
  "key": {
    "B": { "item": "minecraft:iron_block" },
    "O": { "tag": "minecraft:logs" },
    "I": { "item": "minecraft:iron_block" },
    "C": { "item": "create:copper_casing" },
    "A": { "item": "create:andesite_alloy_block" },
    "P": { "item": "create:precision_mechanism" },
    "M": { "item": "create:mechanical_piston" },
    "E": { "item": "create:electron_tube" },
    "G": { "item": "create:cogwheel" },
    "D": { "item": "create:deployer" },
    "T": { "item": "create:gearbox" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"create_armorer:sniper_semi_m1\",GunFireMode:\"SEMI\"}" }
})

  // ca_special_melee_wrench
  event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  B  ",
    "  B  ",
    " BPB ",
    "  C  ",
    "  G  ",
    "  EX "
  ],
  "key": {
    "B": { "item": "minecraft:iron_block" },
    "P": { "item": "create:precision_mechanism" },
    "C": { "item": "create:andesite_casing" },
    "G": { "item": "create:cogwheel" },
    "E": { "item": "create:electron_tube" },
    "X": { "item": "create:blaze_burner" }
  },
  "result": { "item": "tacz:modern_kinetic_gun", "nbt": "{GunId:\"create_armorer:special_melee_wrench\",GunFireMode:\"SEMI\"}" }
})

})
