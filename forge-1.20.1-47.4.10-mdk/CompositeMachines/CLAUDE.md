# CLAUDE.md — Composite Machines

Mekanism addon mod for the Cluster-Thrusters pack: replaces single-block Mekanism machines
with Create-style **composed multiblocks**. PoC (done): the Composite Smelter.

**Read `docs/PROJECT.md` first** — it holds the original vision, all design decisions, the
architecture, and the roadmap for continuing this mod. `README.md` is the user-facing doc
(building, structure rules, in-game test checklist).

## Quick facts

- Forge 1.20.1-47.4.10, Mekanism 10.4.16.80 (dep via ModMaven `fg.deobf`, local-jar fallback
  commented in `build.gradle`). Java 17 toolchain; Gradle must run on Temurin 22 — pinned in
  `gradle.properties`, do not remove (system Java 25 breaks Gradle 8.8).
- Build & deploy into the pack: `./gradlew deployJar` (copies jar to `../../.minecraft/mods/`).
- Textures are generated: `python3 tools/gen_textures.py` (Pillow). Edit the script, not the PNGs.
- modid `compositemachines`, package `com.compositemachines`.

## Hard rules (decided with the user — don't re-litigate)

1. **Own formation logic** (`multiblock/SmelterFormationValidator`) — never extend Mekanism's
   internal `TileEntityMultiblock`/`MultiblockData`/`FormationProtocol` framework.
2. Walls reuse Mekanism blocks (steel casing / structural glass) via the data-driven
   `#compositemachines:smelter_wall` tag; functional blocks are ours.
3. Energy is Forge Energy (Mekanism cables handle FE natively). Recipes come from Mekanism's
   SMELTING cache (covers vanilla furnace recipes too).
4. `machine/SmeltingRecipeLookup` is the **only** class allowed to import `mekanism.common.*`
   (internal API, verified against 10.4.16.80; fallback documented in the class javadoc).
   `mekanism.api.*` is fine anywhere.
5. All machine state lives in `SmelterCoreBlockEntity`; ports are stateless capability proxies
   that resolve the core through their stored `corePos`.
6. Structure integrity = 20-tick revalidation by the core (Mekanism wall blocks can't notify us).
   Balance numbers live only in `machine/SmelterTuning.java`.
