// Dawnera mobs are only allowed to spawn naturally in Alex's Caves primordial_caves biome.
// All other natural spawns are denied. Custom spawner (dawnera_spawner.js) is unaffected
// because it uses level.createEntity + entity.spawn() which bypasses this check.

const DAWNERA_MOBS = new Set([
  'dawnera:diabloceratops',
  'dawnera:struthiomimus',
  'dawnera:ceratosaurus',
  'dawnera:torvosaurus',
  'dawnera:dunkleosteus',
  'dawnera:dimorphodon',
  'dawnera:tyrannosaurus',
  'dawnera:psittacosaurus',
  'dawnera:triceratops',
  'dawnera:sturgeon',
  'dawnera:alligator_gar',
  'dawnera:sabertooth_salmon',
  'dawnera:coelacanth',
  'dawnera:mixosaurus',
  'dawnera:worm',
  'dawnera:pond_snail',
  'dawnera:dodo',
  'dawnera:deinonychus',
  'dawnera:diplocaulus',
  'dawnera:sachicasaurus',
  'dawnera:aegirocassis',
])

EntityEvents.checkSpawn(event => {
  if (!DAWNERA_MOBS.has(event.entity.type)) return

  var pos = event.entity.blockPosition()
  var biome = event.level.getBlock(pos.x, pos.y, pos.z).getBiomeId().toString()

  if (biome === 'alexscaves:primordial_caves') {
    event.setResult('allow')
  } else {
    event.setResult('deny')
  }
})
