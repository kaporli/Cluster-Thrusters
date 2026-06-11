# Composite Machines

A Mekanism addon for the Cluster-Thrusters pack (Forge 1.20.1) that replaces single-block
machines with Create-style **composed multiblocks**. Proof of concept: the **Composite Smelter**.

## The Composite Smelter

A hollow cuboid, anywhere from **3x3x3 to 9x9x9**:

| Part | Block | Rules |
|---|---|---|
| Walls / frame | Mekanism **Steel Casing** or **Structural Glass** | the entire hull |
| Controller | **Smelter Core** (this mod) | exactly 1, in a wall, facing outward |
| Heat source | **Heating Unit** (this mod) | ≥ 1, placed *inside* the chamber |
| I/O | **Item Input Port / Item Output Port / Energy Port** (this mod) | anywhere in the walls |
| Interior | air + Heating Units only | |

Right-click the Smelter Core with an empty hand to **form** the structure (errors tell you the
exact offending block position). Right-click a formed core to open the **GUI**: 3x3 input grid,
3x3 output grid, energy gauge, progress arrow and a parallel-operations counter.

While smelting, the core and all Heating Units light up and throw flame/smoke/lava particles
inside the chamber (build the walls from Structural Glass to watch it work), with furnace
crackle sounds. The item ports are 3D frames with a recessed hole on every face — blue chevrons
converging inward for input, orange radiating outward for output; both glow brighter when formed.

- Smelts everything Mekanism's Energized Smelter can (vanilla furnace recipes + `mekanism:smelting`).
- Powered with **Forge Energy** through the Energy Port — Mekanism Universal Cables connect directly.
- Item ports expose standard item handlers — Logistical Transporters, hoppers, every pipe works.
- Bigger chamber + more Heating Units = more parallel smelting; more heaters = faster smelting
  (baseline mirrors the Energized Smelter: 20 FE/t, 10s per item). Tuning lives in `SmelterTuning.java`.
- Breaking any wall/heater unforms the machine within 1 second (the core revalidates the
  structure every 20 ticks, since Mekanism's casing blocks can't notify us).

## Building & deploying

```sh
cd CompositeMachines
./gradlew deployJar   # builds and copies the jar into ../../.minecraft/mods/
```

Gradle runs on Temurin 22 (pinned in `gradle.properties` because the system Java 25 is too new
for Gradle 8.8); the Java 17 compile toolchain is auto-provisioned. The Mekanism compile
dependency comes from ModMaven; if that's down, swap to the commented local-jar fallback in
`build.gradle`.

Generated assets (all need Pillow, all deterministic): `python3 tools/gen_textures.py` (block
textures), `tools/gen_gui.py` (GUI texture — coordinates must stay in sync with SmelterMenu and
SmelterScreen), `tools/gen_port_models.py` (3D port model JSONs). Edit the scripts, not the output.

## In-game test checklist

1. Build a hollow 3x3x3 of Steel Casing; put the Smelter Core in a wall facing out, one Heating
   Unit in the single interior cell, and swap three casings for the three ports.
2. Right-click the core → "Composite Smelter formed: 3x3x3, 1 heating unit(s), …".
3. Energy Cube → Universal Cable → Energy Port; chest → Logistical Transporter → Input Port;
   Output Port → Transporter → chest. Feed iron ore, get ingots.
4. Feed Mekanism iron dust (`mekanism:smelting` recipe) — also smelts.
5. Break a casing mid-run → unforms within a second, pipes disconnect, buffers stay in the core.
6. Break the core → buffered items drop.

## Architecture notes

- Own formation logic (`multiblock/SmelterFormationValidator`) — deliberately does **not** use
  Mekanism's internal multiblock framework.
- The only class touching Mekanism internals (`mekanism.common.*`) is
  `machine/SmeltingRecipeLookup` — verified against Mekanism 10.4.16.80. If a Mekanism update
  breaks it, the fallback is documented in that class.
- All machine state lives in `SmelterCoreBlockEntity`; ports are stateless capability proxies.
