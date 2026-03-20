// Custom interval-based spawning for Dawnera mobs in the primordial_caves biome.
// Fires via LevelEvents.tick (overworld only) — no need to fetch the level manually.
// Spawns 100-120 blocks from a random player; biome check ensures primordial_caves only.
// Entity cap uses a single getEntities() pass per player per second (not per rule).

const SPAWNER_RULES = [
  // Ceratopsians — reduced; AC already has grottoceratops as the dominant herbivore
  { mob: 'dawnera:diabloceratops',    persecond: 0.2,  minAmount: 1, maxAmount: 2, groupDist: 40, minDist: 100, maxDist: 120, inWater: false, maxThis: 6  },
  { mob: 'dawnera:triceratops',       persecond: 0.15, minAmount: 1, maxAmount: 2, groupDist: 40, minDist: 110, maxDist: 120, inWater: false, maxThis: 4  },

  // Prey / browser dinosaurs — unique role, kept at mod-default rates
  { mob: 'dawnera:struthiomimus',     persecond: 0.25, minAmount: 2, maxAmount: 4, groupDist: 40, minDist: 100, maxDist: 120, inWater: false, maxThis: 8  },
  { mob: 'dawnera:psittacosaurus',    persecond: 0.2,  minAmount: 2, maxAmount: 3, groupDist: 40, minDist: 100, maxDist: 120, inWater: false, maxThis: 8  },
  { mob: 'dawnera:dodo',              persecond: 0.3,  minAmount: 2, maxAmount: 3, groupDist: 40, minDist: 100, maxDist: 120, inWater: false, maxThis: 8  },
  { mob: 'dawnera:worm',              persecond: 0.5,  minAmount: 1, maxAmount: 1, groupDist: 40, minDist: 100, maxDist: 120, inWater: false, maxThis: 6  },
  { mob: 'dawnera:diplocaulus',       persecond: 0.15, minAmount: 1, maxAmount: 1, groupDist: 40, minDist: 100, maxDist: 120, inWater: false, maxThis: 6  },

  // Pack hunters — reduced; AC has vallumraptor packs
  { mob: 'dawnera:deinonychus',       persecond: 0.1,  minAmount: 2, maxAmount: 2, groupDist: 40, minDist: 100, maxDist: 120, inWater: false, maxThis: 6  },

  // Apex predators — reduced; AC has tremorsaurus as the top predator
  { mob: 'dawnera:ceratosaurus',      persecond: 0.05, minAmount: 1, maxAmount: 1, groupDist: 0,  minDist: 100, maxDist: 120, inWater: false, maxThis: 3  },
  { mob: 'dawnera:torvosaurus',       persecond: 0.05, minAmount: 1, maxAmount: 1, groupDist: 0,  minDist: 100, maxDist: 120, inWater: false, maxThis: 2  },
  { mob: 'dawnera:tyrannosaurus',     persecond: 0.05, minAmount: 1, maxAmount: 1, groupDist: 0,  minDist: 100, maxDist: 120, inWater: false, maxThis: 2  },

  // Flyers — reduced; AC has subterranodon
  { mob: 'dawnera:dimorphodon',       persecond: 0.05, minAmount: 2, maxAmount: 2, groupDist: 40, minDist: 100, maxDist: 120, inWater: false, maxThis: 6  },

  // Aquatics — fill the cave lake niche; AC only has trilocaris in water
  { mob: 'dawnera:dunkleosteus',      persecond: 0.2,  minAmount: 1, maxAmount: 1, groupDist: 0,  minDist: 100, maxDist: 120, inWater: true,  maxThis: 4  },
  { mob: 'dawnera:sturgeon',          persecond: 0.33, minAmount: 2, maxAmount: 2, groupDist: 0,  minDist: 100, maxDist: 120, inWater: true,  maxThis: 6  },
  { mob: 'dawnera:alligator_gar',     persecond: 0.22, minAmount: 1, maxAmount: 1, groupDist: 0,  minDist: 100, maxDist: 120, inWater: true,  maxThis: 4  },
  { mob: 'dawnera:sabertooth_salmon', persecond: 0.25, minAmount: 2, maxAmount: 2, groupDist: 0,  minDist: 100, maxDist: 120, inWater: true,  maxThis: 4  },
  { mob: 'dawnera:coelacanth',        persecond: 0.3,  minAmount: 2, maxAmount: 3, groupDist: 0,  minDist: 100, maxDist: 120, inWater: true,  maxThis: 6  },
  { mob: 'dawnera:mixosaurus',        persecond: 0.17, minAmount: 3, maxAmount: 3, groupDist: 0,  minDist: 100, maxDist: 120, inWater: true,  maxThis: 8  },
  { mob: 'dawnera:aegirocassis',      persecond: 0.3,  minAmount: 1, maxAmount: 2, groupDist: 0,  minDist: 100, maxDist: 120, inWater: true,  maxThis: 6  },
]

var TWO_PI = 6.283185307179586
var CAP_RADIUS_SQ = 152 * 152  // maxDist(120) + 32, squared

LevelEvents.tick('minecraft:overworld', event => {
  if (event.server.tickCount % 20 !== 0) return

  var level = event.level
  var rand = level.random
  if (level.players.size() === 0) return

  level.players.forEach(function(player) {
    var px = player.x
    var pz = player.z

    // Single entity pass per player: count all nearby dawnera mobs at once
    var counts = {}
    level.getEntities().forEach(function(e) {
      var t = e.type.toString()
      if (t.startsWith('dawnera:')) {
        var dx = e.x - px
        var dz = e.z - pz
        if (dx * dx + dz * dz < CAP_RADIUS_SQ) {
          counts[t] = (counts[t] || 0) + 1
        }
      }
    })

    for (var ri = 0; ri < SPAWNER_RULES.length; ri++) {
      var rule = SPAWNER_RULES[ri]

      if (rand.nextFloat() >= rule.persecond) continue
      if ((counts[rule.mob] || 0) >= rule.maxThis) continue

      // Pick a random position in a ring around the player
      var angle = rand.nextFloat() * TWO_PI
      var dist = rule.minDist + rand.nextFloat() * (rule.maxDist - rule.minDist)
      var spawnX = px + Math.cos(angle) * dist
      var spawnZ = pz + Math.sin(angle) * dist
      // Y range covers full primordial_caves depth (bedrock ~-60 up to ~Y 40)
      var spawnY = -60 + rand.nextFloat() * 100

      // Only spawn in primordial_caves; reuse block for water check
      var spawnBlock = level.getBlock(Math.floor(spawnX), Math.floor(spawnY), Math.floor(spawnZ))
      if (spawnBlock.getBiomeId().toString() != 'alexscaves:primordial_caves') continue
      if (rule.inWater && spawnBlock.id != 'minecraft:water') continue

      // Spawn the group
      var groupSize = rule.minAmount + Math.floor(rand.nextFloat() * (rule.maxAmount - rule.minAmount + 1))
      for (var i = 0; i < groupSize; i++) {
        var offsetX = rule.groupDist > 0 ? (rand.nextFloat() - 0.5) * rule.groupDist : 0
        var offsetZ = rule.groupDist > 0 ? (rand.nextFloat() - 0.5) * rule.groupDist : 0

        var entity = level.createEntity(rule.mob)
        if (entity) {
          entity.setPosition(spawnX + offsetX, spawnY, spawnZ + offsetZ)
          entity.spawn()
        }
      }
    }
  })
})
