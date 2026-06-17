# Lumen — Complete Specification

---

## 1. Overview

Lumen is a Forge 1.20.1 client-side item browser written in Kotlin. It replaces JEI's sidebar UI in the same screen position with no additional keybind. JEI continues running as a soft dependency used only for embedding recipe renderers for recipe types Lumen does not natively support. Lumen is fully functional without JEI installed.

The primary design goals are:
- Item organisation by **taxonomy** (what an item is) and **mod family** (where it came from), switchable via a single toggle
- A **persistent differential cache** so the indexing cost is paid once per mod change, not on every world join
- **Dev tooltips** replacing the unmaintained Better Tags mod
- A **blacklist** system operable both by pack maintainers and individual players

---

## 2. Technical Stack

| Concern | Choice |
|---|---|
| Mod loader | Forge 1.20.1 |
| Language | Kotlin (main logic) + Java (Mixin classes only) |
| JEI | Soft dependency (`mandatory = false`) |
| Side | Client only (`@OnlyIn(Dist.CLIENT)` throughout) |
| Async | Kotlin coroutines — `Dispatchers.IO` for indexing, `Dispatchers.Main` for all MC API calls |
| Config | ForgeConfigSpec (`lumen-client.toml`) |
| Mixin | Mixin 0.8.5+ (`@Pseudo` for optional JEI targets) |

`mods.toml` dependency block:
```toml
[[dependencies.lumen]]
    modId = "jei"
    mandatory = false
    versionRange = "[15,)"
    ordering = "NONE"
    side = "CLIENT"
```

---

## 3. JEI Relationship

### What Lumen owns entirely
- Item discovery
- Recipe data retrieval
- All UI rendering
- Search
- Grouping and taxonomy
- Blacklist
- Dev tooltips

### What JEI contributes (when installed)
- `IRecipeLayoutDrawable` — JEI renders an unrecognised recipe type into a drawable that Lumen embeds inline in its recipe panel. No popup, no separate screen.
- JEI-plugin-contributed items not in any creative tab (rare — some JEI plugins register dynamic ingredient lists outside the creative tab system). These supplement Lumen's item list only when JEI is present.

### What JEI does not contribute
- Item list (sourced from creative tabs)
- Recipe data (sourced from `RecipeManager`)
- Any core functionality

---

## 4. JEI UI Suppression

Two Java Mixin classes. Must be Java — Mixin does not support Kotlin for `@Pseudo` targets.

```java
// JeiIngredientListOverlayMixin.java
@Mixin(value = mezz.jei.gui.overlay.IngredientListOverlay.class, remap = false)
public abstract class JeiIngredientListOverlayMixin {
    @Inject(method = {"drawScreen", "drawTooltips", "drawOnForeground"},
            at = @At("HEAD"), cancellable = true)
    private void lumen$suppress(CallbackInfo ci) {
        if (LumenOverlayManager.INSTANCE.isActive()) ci.cancel();
    }
}

// JeiGuiEventHandlerMixin.java
@Mixin(value = mezz.jei.gui.events.GuiEventHandler.class, remap = false)
public abstract class JeiGuiEventHandlerMixin {
    @Inject(method = {"onGuiInit", "onGuiOpen", "onDrawForeground",
                      "onDrawScreenPost", "renderCompactPotionIndicators"},
            at = @At("HEAD"), cancellable = true)
    private void lumen$suppress(CallbackInfo ci) {
        if (LumenOverlayManager.INSTANCE.isActive()) ci.cancel();
    }
}
```

Both registered in `mixin.json` as `"required": false`. `LumenOverlayManager.isActive()` is a `@Volatile Boolean`, `true` by default, set `false` when the user navigates to a JEI-native recipe screen that Lumen explicitly hands off.

---

## 5. Item Discovery

Primary source — creative mode tabs (full variant-expanded list including NBT variants, potions, enchanted books, AE2 facades, etc.):

```kotlin
val items = mutableListOf<ItemStack>()
val params = CreativeModeTab.ItemDisplayParameters(enabledFeatures, false, registryAccess)

BuiltInRegistries.CREATIVE_MODE_TAB.forEach { tab ->
    val contents = CreativeModeTab.ItemDisplayBuilder(params, tab)
    tab.displayItemsGenerator.accept(params, contents)
    items.addAll(contents.tabContents)
}

// Supplement: items in ForgeRegistries absent from all creative tabs
val seenIds = items.map { it.item }.toSet()
ForgeRegistries.ITEMS.values
    .filter { it !in seenIds }
    .forEach { items.add(ItemStack(it)) }

// If JEI loaded: supplement with JEI-plugin-only ingredients
if (ModList.get().isLoaded("jei")) {
    jeiRuntime?.ingredientManager
        ?.getAllIngredients(VanillaTypes.ITEM_STACK)
        ?.filter { stack -> items.none { it.sameItem(stack) } }
        ?.let { items.addAll(it) }
}
```

The count of this final list is what goes into the cache manifest for invalidation comparison.

---

## 6. Indexing Pipeline

Runs once after the client connects to a world (`ClientPlayerNetworkEvent.LoggingIn` or equivalent). Executes on `Dispatchers.IO`.

### Progress

```kotlin
data class IndexProgress(
    val active: Boolean = false,
    val phase: String = "",
    val detail: String = "",
    val current: Int = 0,
    val total: Int = 0,
    val startedAt: Long = 0L
) {
    val percent: Int get() = if (total > 0) (current * 100) / total else -1
    val elapsedSeconds: Double get() = (System.currentTimeMillis() - startedAt) / 1000.0
}

// In LumenIndexer:
val progress = MutableStateFlow(IndexProgress())
```

Render thread collects from `progress` as a `StateFlow`. When `active == true`, the results panel shows:
```
[████████░░░░░░░░░░]  44%
Building recipe graph — create_jetpack (312 / 700)    2.1s
```

### Phases

```
"Checking cache"
"Loading cached items"      — concurrent per-namespace file reads
"Classifying new items"     — instanceof + tag checks for changed namespaces
"Building recipe graph"     — RecipeManager walk for changed namespaces
"Updating cross-references" — merge adjacency edges across all namespaces
"Saving cache"
"Ready"
```

---

## 7. Cache Design

### Philosophy

Namespace files are **never deleted**, even if a mod is uninstalled. If a mod is re-added at the same version, its namespace file is valid immediately — no rescan. Stale files accumulate harmlessly and are ignored when the mod is not in the current install.

### On-disk layout

```
config/lumen/
  manifest.json              ← mod fingerprints, total item count, schema version
  items/
    minecraft.json.gz        ← ItemEntry list for minecraft:* items
    create.json.gz
    mekanism.json.gz
    ...                      ← one file per namespace, kept forever
  recipes/
    minecraft.json.gz        ← RecipeEntry list for recipes with ID minecraft:*
    create.json.gz
    ...                      ← one file per namespace, kept forever
  cross_refs.json.gz         ← adjacency edges that cross namespace boundaries
  families.json.gz           ← computed family assignments (rebuilt on any change)
  blacklist.json             ← local player blacklist
  ui-state.json              ← scroll, expanded groups, last mode, search text
```

### Manifest

```json
{
  "schema": 1,
  "totalItems": 18423,
  "mods": {
    "create": {
      "version": "0.5.1.f",
      "itemCount": 847,
      "cachedAt": 1718567200
    },
    "mekanism": {
      "version": "10.4.5.19",
      "itemCount": 1203,
      "cachedAt": 1718567200
    }
  }
}
```

### Startup diff algorithm

```
1. Read manifest.json → previousMods map
2. Collect currentMods from ModList + item counts from creative tabs per-namespace
3. For each namespace in currentMods:
     if not in previousMods               → ADDED
     if version differs                   → UPDATED
     if version same, itemCount same      → UNCHANGED → load from namespace file
     if version same, itemCount differs   → UPDATED   (items added/removed within same version)
4. For each namespace in previousMods not in currentMods:
     → ABSENT: do not load, leave file on disk
5. For all ADDED and UPDATED namespaces:
     → re-classify all items in namespace
     → re-scan all recipes owned by namespace (full, not diffed — catches recipe-only changes)
6. Rebuild cross_refs.json.gz if any namespace changed
7. Rebuild families.json.gz (always fast — no JEI needed)
8. Write updated manifest.json
```

**Why full namespace recipe rescan on any version bump:** Recipe changes (balance patches, new recipes, removal of recipes) do not affect the item list. Item count matching is not sufficient to detect recipe changes. Any version bump triggers a full recipe rescan for that namespace to guarantee correctness.

### Namespace item file structure

```json
{
  "namespace": "create",
  "version": "0.5.1.f",
  "items": [
    {
      "id": "create:cogwheel",
      "taxonomy": "FULL_BLOCK",
      "material": "andesite",
      "styleModifiers": [],
      "displayName": "Cogwheel"
    }
  ]
}
```

### Namespace recipe file structure

```json
{
  "namespace": "create",
  "recipes": [
    {
      "id": "create:crafting/kinetics/cogwheel",
      "type": "minecraft:crafting_shaped",
      "inputs": ["minecraft:stick", "minecraft:stick", "minecraft:stick",
                 "c:wooden_buttons", "c:wooden_buttons"],
      "outputs": ["create:cogwheel"]
    }
  ]
}
```

### Cross-refs file

Adjacency edges only — no recipe details:
```json
{
  "producedBy": {
    "create:cogwheel": ["create:crafting/kinetics/cogwheel"]
  },
  "consumedBy": {
    "minecraft:stick": ["create:crafting/kinetics/cogwheel"]
  }
}
```

---

## 8. Taxonomy System

### Sealed class tree

```kotlin
sealed class TaxonomyLeaf {
    sealed class Blocks : TaxonomyLeaf() {
        object FullBlock : Blocks()
        object Stair : Blocks()
        object Slab : Blocks()
        object Wall : Blocks()
        object Fence : Blocks()
        object Door : Blocks()
        object Trapdoor : Blocks()
        object OtherBlock : Blocks()
    }
    sealed class Tools : TaxonomyLeaf() {
        object Sword : Tools()
        object Axe : Tools()
        object Pickaxe : Tools()
        object Shovel : Tools()
        object Hoe : Tools()
        object Ranged : Tools()  // Bow, Crossbow
        object Shield : Tools()
        object OtherTool : Tools()
    }
    sealed class Armor : TaxonomyLeaf() {
        object Helmet : Armor()
        object Chestplate : Armor()
        object Leggings : Armor()
        object Boots : Armor()
    }
    sealed class Materials : TaxonomyLeaf() {
        object Ingot : Materials()
        object Nugget : Materials()
        object Gem : Materials()
        object Ore : Materials()
        object RawMaterial : Materials()
        object Dust : Materials()
        object Plate : Materials()
        object Rod : Materials()
        object Gear : Materials()
        object StorageBlock : Materials()
    }
    object Food : TaxonomyLeaf()
    object Bucket : TaxonomyLeaf()
    object Misc : TaxonomyLeaf()
}
```

### Classification priority (first match wins)

```kotlin
fun classify(stack: ItemStack, item: Item, registryAccess: RegistryAccess): TaxonomyLeaf {
    val blockItem = item as? BlockItem
    val block = blockItem?.block

    if (blockItem != null && block != null) {
        val blockTags = ForgeRegistries.BLOCKS.tags()!!.getReverseTag(block)
            .map { it.key.location }.toSet()
        return when {
            BlockTags.STAIRS.location in blockTags         -> Blocks.Stair
            BlockTags.SLABS.location in blockTags          -> Blocks.Slab
            BlockTags.WALLS.location in blockTags          -> Blocks.Wall
            BlockTags.FENCES.location in blockTags ||
            BlockTags.FENCE_GATES.location in blockTags    -> Blocks.Fence
            BlockTags.DOORS.location in blockTags          -> Blocks.Door
            BlockTags.TRAPDOORS.location in blockTags      -> Blocks.Trapdoor
            block.defaultBlockState().canOcclude()         -> Blocks.FullBlock
            else                                           -> Blocks.OtherBlock
        }
    }

    return when (item) {
        is SwordItem      -> Tools.Sword
        is AxeItem        -> Tools.Axe
        is PickaxeItem    -> Tools.Pickaxe
        is ShovelItem     -> Tools.Shovel
        is HoeItem        -> Tools.Hoe
        is BowItem,
        is CrossbowItem   -> Tools.Ranged
        is ShieldItem     -> Tools.Shield
        is ArmorItem      -> when (item.slots.first()) {
            EquipmentSlot.HEAD  -> Armor.Helmet
            EquipmentSlot.CHEST -> Armor.Chestplate
            EquipmentSlot.LEGS  -> Armor.Leggings
            else                -> Armor.Boots
        }
        is BucketItem     -> Bucket
        else -> {
            val itemTags = ForgeRegistries.ITEMS.tags()!!
                .getReverseTag(item).map { it.key.location }.toSet()
            when {
                Tags.Items.INGOTS.location in itemTags         -> Materials.Ingot
                Tags.Items.NUGGETS.location in itemTags        -> Materials.Nugget
                Tags.Items.GEMS.location in itemTags           -> Materials.Gem
                Tags.Items.ORES.location in itemTags           -> Materials.Ore
                Tags.Items.RAW_MATERIALS.location in itemTags  -> Materials.RawMaterial
                Tags.Items.DUSTS.location in itemTags          -> Materials.Dust
                ResourceLocation("forge","plates") in itemTags -> Materials.Plate
                ResourceLocation("forge","rods") in itemTags   -> Materials.Rod
                ResourceLocation("forge","gears") in itemTags  -> Materials.Gear
                ResourceLocation("forge","storage_blocks") in itemTags -> Materials.StorageBlock
                item.getFoodProperties(stack, null) != null    -> Food
                else                                           -> Misc
            }
        }
    }
}
```

### Style modifier detection

Scan the registry path for tokens after classification. Stored separately from `TaxonomyLeaf`:

```kotlin
val STYLE_TOKENS = setOf(
    "cut", "smooth", "polished", "chiseled", "cracked",
    "mossy", "cobbled", "tiled", "brick", "gilded",
    "waxed", "exposed", "weathered", "oxidized", "carved"
)

fun detectStyle(id: ResourceLocation): Set<String> =
    id.path.split("_").filter { it in STYLE_TOKENS }.toSet()
```

When `style_modifiers_separate = true` (config): style tokens form sub-groups within material groups.
When `false` (default): style variants collapse into the parent material group.

### Material grouping

Within a `TaxonomyLeaf`, items are grouped into material clusters:

1. **Tag-based (preferred):** shared `forge:storage_blocks/{material}`, `forge:ores/{material}`, `forge:ingots/{material}`, etc. → named material group
2. **Jaccard similarity fallback:** items sharing ≥ 0.65 proportion of their item tags → inferred cluster
3. **Name affinity last resort:** ID path token overlap
4. **No match → singleton group**

---

## 9. Family Detection

### Datapack family definitions (highest priority)

Live in the modpack git repo. Pack maintainers ship and maintain these:

```
data/lumen/families/create.json
data/lumen/families/mekanism.json
data/lumen/families/ae2.json
```

```json
{
  "display_name": "Create",
  "icon_item": "create:cogwheel",
  "root_namespaces": ["create"],
  "explicit_namespaces": ["copycats", "railways", "sliceanddice"],
  "explicit_items": [],
  "auto_detect_dependents": true,
  "detection_threshold": 50
}
```

- `root_namespaces` — mods that define this family
- `explicit_namespaces` — forced inclusions regardless of score (catches oddly named addons)
- `explicit_items` — specific item IDs forced into this family regardless of namespace
- `auto_detect_dependents` — run the scoring pipeline to find other addons automatically

### Scoring pipeline (runs for `auto_detect_dependents: true`)

For each installed mod `M` not already assigned via explicit lists:

```
score = 0
For each required dependency D in M's mods.toml [[dependencies]]:
    if D.modId in any family's root_namespaces → score += 80 for that family
For each optional dependency D:
    if D.modId in any family's root_namespaces → score += 25
If score >= threshold → assign M to that family

If use_prefix_heuristics = true (config, default false):
    if M.namespace starts with known root namespace → score += 40
    if M's creative tab name contains known ownership keywords → score += 30
```

### Outcome

- Score ≥ threshold for one family → assigned
- Score ≥ threshold for multiple families → assigned to all of them
- Score < threshold for all families → `Uncategorized`
- Disabled family (config `enabled = false`) → its items go to `Uncategorized` in family view; unaffected in taxonomy view

### Multi-family membership

An item in multiple families appears in each family's section in **family view**. In **taxonomy view** it appears exactly once. There is no conflict — the two views have independent membership rules.

---

## 10. Recipe System

### Tier 1 — Native Lumen renderers (always available, no JEI)

Sourced directly from `Minecraft.getInstance().level.recipeManager`.

| Recipe type | Renderer |
|---|---|
| `minecraft:crafting_shaped` | Shaped grid (up to 3×3) |
| `minecraft:crafting_shapeless` | Shapeless ingredient list → output |
| `minecraft:smelting` / `blasting` / `smoking` / `campfire_cooking` | Single ingredient → fuel → output with cook time |
| `minecraft:stonecutting` | Ingredient → output |
| `minecraft:smithing_transform` / `smithing_trim` | Base + addition + template → output |

### Tier 2 — JEI embedded rendering (JEI installed, recipe type unrecognised by Lumen)

```kotlin
// Called inline inside Lumen's recipe panel render pass
fun renderViaJei(
    recipe: Any,
    category: IRecipeCategory<Any>,
    focus: IFocus<ItemStack>,
    guiGraphics: GuiGraphics,
    x: Int, y: Int
) {
    val drawable = jeiHelpers.createRecipeLayoutDrawable(category, recipe, focus)
    drawable.setPosition(x, y)
    drawable.drawRecipe(guiGraphics, mouseX, mouseY)
}
```

Rendered inline in Lumen's panel — no popup, no separate screen. The user sees the recipe in JEI's visual style without leaving Lumen.

### Tier 3 — Generic fallback (JEI absent or type has no IRecipeLayoutDrawable)

```kotlin
// All Recipe<?> implement getIngredients() and getResultItem()
val inputs = recipe.getIngredients()             // List<Ingredient>
val output = recipe.getResultItem(registryAccess) // ItemStack
// Render as: [in1][in2][in3] → [output]
```

Basic but functional. User can see inputs and output without any modded renderer.

### Lumen plugin API (optional, for native integration)

Mods or pack scripts register their own renderer to replace Tier 3 with something styled to Lumen:

```kotlin
interface LumenRecipeRenderer<T : Any> {
    val recipeType: RecipeType<T>
    fun render(recipe: T, context: LumenRenderContext)
    fun getIngredients(recipe: T): LumenRecipeIngredients
}

// Register via:
@LumenPlugin
class MyPlugin : ILumenPlugin {
    override fun registerRecipeRenderers(registry: LumenRecipeRendererRegistry) {
        registry.register(MyRecipeRenderer())
    }
}
```

Discovered via `@LumenPlugin` annotation scanning, same pattern as JEI's `@JeiPlugin`.

### Recipe graph (built during indexing)

For each item, walk `RecipeManager` by recipe ID namespace (to build per-namespace recipe files):

```kotlin
recipeManager.recipes.forEach { (type, recipeMap) ->
    recipeMap.forEach { (id, recipe) ->
        val outputs = extractOutputs(recipe)
        val inputs = recipe.getIngredients().flatMap { it.items.toList() }
        // store in namespace file for id.namespace
    }
}
```

Cross-namespace edges (recipe in namespace A consuming item from namespace B) stored in `cross_refs.json.gz`, rebuilt whenever either involved namespace changes.

---

## 11. UI

### Position and injection

Lumen's panel occupies the same right-side region JEI uses, injected via `ScreenEvent.Render.Post` and `ContainerScreenEvent.Render.Background` on all container screens. `LumenOverlayManager.isActive()` gates rendering.

### Layout

```
┌────────────────────────────┐
│ [🔍 Search...      ] [⚙️] │
│ [TAXONOMY ●] [  FAMILIES ] │
├──────────┬─────────────────┤
│ ▼ Blocks │ ▪ ▪ ▪ ▪ ▪ ▪   │
│   FullBlk│ ▪ ▪ ▪ ▪ ▪ ▪   │
│   Stairs │ ▪ ▪ ▪ ▪ ▪ ▪   │
│ ▶ Tools  │                 │
│ ▶ Food   ├─────────────────┤
│ ▶ Matrl  │ Recipe tree     │
│          │ (expands below  │
│          │  grid on click) │
└──────────┴─────────────────┘
```

- **Top bar:** search field, taxonomy/family toggle, config gear button
- **Left panel:** collapsible group tree, scrollable independently
- **Right panel:** item grid, scrollable independently
- **Recipe panel:** expands below grid on item click, pushes grid up; collapses on second click or clicking elsewhere

### Search

Real-time filter. Operators:
- Plain text → matches display name and item ID
- `@create` → filter by namespace
- `#c:ingots` → filter by tag
- `$full_block` → filter by taxonomy leaf name

### State persistence (`config/lumen/ui-state.json`)

```json
{
  "lastMode": "taxonomy",
  "expandedGroups": ["Blocks", "Blocks.FullBlock"],
  "scrollPositions": { "groupTree": 240, "itemGrid": 0 },
  "lastSelectedItem": "create:cogwheel",
  "devTooltipsEnabled": false,
  "searchText": ""
}
```

Saved on screen close, restored on screen open.

### Recipe tree navigation

Clicking an item in the grid:
1. Recipe panel expands showing all recipes that produce that item
2. Each recipe shows its type, inputs, and output
3. Clicking any ingredient navigates to that item (back button appears)
4. Navigation history maintained per session (not persisted)
5. Max depth: 4 (configurable), prevents infinite loops via visited-set check

---

## 12. Blacklist

### Two layers, both applied at runtime

**Pack-level** (`data/lumen/blacklist.json` in datapack — git repo):
```json
["alexsmobsinteraction:eggs", "monolib:debug_block", "fdlib:test_multiblock"]
```
Read-only for players. Replaces `emi_hide.js`. Applied to all players. Supports exact IDs and regex patterns.

**Local-level** (`config/lumen/blacklist.json` — per player):
```json
["create:goggles"]
```
Modified by the player. Keybind (default: `H` while hovering an item in the Lumen panel) appends the hovered item's ID. Un-hide available in the config screen.

### Behaviour

Hidden items are invisible in Lumen's grid and group tree. They are not tagged with `c:hidden_from_recipe_viewers` — they remain visible in JEI if JEI is shown, and they can still appear as recipe ingredients in the recipe tree.

---

## 13. Dev Tooltips

Replaces the unmaintained Better Tags mod. When enabled, every item tooltip anywhere in the game (inventory, JEI, any container — triggered by `ItemTooltipEvent`) shows additional lines:

```
minecraft:stone                          ← registry ID, always first
━━ Item Tags ━━━━━━━━━━━━━━━━━━━━━━━
  #minecraft:stone_ore_replaceables
  #c:stones
  #forge:stone
━━ Block Tags ━━━━━━━━━━━━━━━━━━━━━━  ← only if instanceof BlockItem
  #minecraft:mineable/pickaxe
  #minecraft:base_stone_overworld
  #minecraft:needs_stone_tool
━━ NBT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ← only if stack.tag != null
  {CustomName: '{"text":"My Stone"}'}
  ... (3 more)                          ← truncated if > 8 lines
━━ Lumen ━━━━━━━━━━━━━━━━━━━━━━━━━━━  ← Lumen debug metadata
  Taxonomy: Blocks > FullBlock > Stone
  Families: —
```

Tag sections use `ForgeRegistries.BLOCKS.tags().getReverseTag(block)` and `ForgeRegistries.ITEMS.tags().getReverseTag(item)`. Tags sorted alphabetically within each section. NBT truncated at 8 lines with `... (N more lines)` indicator.

**Toggle:**
- Keybind: `Alt + T` (default, rebindable)
- Config option: `dev_tooltips_enabled = false`
- State saved in `ui-state.json`
- Zero overhead when disabled — event listener returns immediately on first check

---

## 14. Config (`lumen-client.toml`)

```toml
[display]
default_mode = "taxonomy"           # "taxonomy" | "family"
remember_state = true

[taxonomy]
style_modifiers_separate = false    # cut/smooth/polished as sub-groups vs collapsed
block_subtypes_separate = true      # stairs/slabs/walls each separate
tool_subtypes_separate = true       # swords/axes/picks each separate

[family_detection]
use_prefix_heuristics = false       # toml-only by default; enable for regex fallback

[recipe_tree]
max_depth = 4

[dev_tooltips]
enabled = false
show_item_tags = true
show_block_tags = true
show_nbt = true
show_lumen_metadata = true
max_nbt_lines = 8

[families]
  [families.create]
  enabled = true
  [families.mekanism]
  enabled = true
  [families.ae2]
  enabled = true
  # add more as needed; disabled families → Uncategorized in family view

[cache]
schema_version = 1                  # bump to force full rescan of all namespaces

[logging]
log_level = "info"                  # "debug" | "info" | "warn" | "error"
keep_logs = 5                       # number of rotated log files to retain
```

---

## 15. Module Structure

```
src/main/
  java/
    net/example/lumen/mixin/
      JeiIngredientListOverlayMixin.java
      JeiGuiEventHandlerMixin.java
  kotlin/
    net/example/lumen/
      LumenMod.kt                    ← @Mod entry, event bus registration
      LumenOverlayManager.kt         ← isActive flag, screen injection
      LumenLog.kt                    ← dedicated file logger, log rotation

      indexer/
        LumenIndexer.kt              ← coroutine pipeline, StateFlow<IndexProgress>
        ItemDiscovery.kt             ← creative tab + ForgeRegistry item collection
        TaxonomyClassifier.kt        ← classify() + StyleDetector
        MaterialGrouper.kt           ← Jaccard + tag-based material clustering
        FamilyDetector.kt            ← toml parsing + scoring pipeline
        RecipeGraphBuilder.kt        ← RecipeManager walk + adjacency construction
        CacheManager.kt              ← manifest diff, namespace file read/write

      cache/
        Manifest.kt
        ItemEntry.kt
        RecipeEntry.kt
        CrossRefs.kt

      taxonomy/
        TaxonomyLeaf.kt              ← sealed class tree
        TaxonomyTree.kt              ← runtime tree with populated material groups

      family/
        FamilyDefinition.kt          ← datapack JSON model
        FamilyIndex.kt               ← computed runtime assignments

      recipe/
        LumenRecipeRenderer.kt       ← interface + registry
        LumenRecipeIngredients.kt
        renderers/
          ShapedCraftingRenderer.kt
          ShapelessCraftingRenderer.kt
          SmeltingRenderer.kt
          StonecuttingRenderer.kt
          SmithingRenderer.kt
        JeiEmbeddedRenderer.kt       ← IRecipeLayoutDrawable wrapper (JEI soft dep)
        GenericFallbackRenderer.kt   ← getIngredients() + getResultItem() display

      ui/
        LumenPanel.kt                ← top-level panel, layout coordinator
        GroupTreeView.kt             ← left panel, collapsible tree
        ItemGridView.kt              ← right panel, item grid + hover
        RecipeTreeView.kt            ← bottom panel, recipe navigation
        SearchBar.kt
        ProgressView.kt              ← indexing progress bar

      blacklist/
        BlacklistManager.kt
        BlacklistEntry.kt

      tooltip/
        DevTooltipHandler.kt         ← ItemTooltipEvent listener
        TooltipFormatter.kt

      plugin/
        ILumenPlugin.kt
        LumenRecipeRendererRegistry.kt
        PluginDiscovery.kt           ← @LumenPlugin annotation scanner

      config/
        LumenConfig.kt               ← ForgeConfigSpec
        UiState.kt                   ← ui-state.json read/write
```

---

## 16. Logging

### Philosophy

Lumen writes to its own log file separate from the main Minecraft log (`latest.log`). This mirrors how KubeJS maintains `kubejs/logs/` — the Lumen log captures everything relevant to indexing, grouping, and cache decisions without being buried in the global log stream.

### Log file location

```
logs/lumen/
  latest.log     ← current run, truncated each game start
  1.log          ← previous run
  2.log          ← run before that
  ...up to 5 retained
```

On each game start (before indexing begins), `latest.log` is renamed to `1.log`, previous `1.log` → `2.log`, etc., oldest is deleted. This gives 5 runs of history for comparison.

### Implementation

```kotlin
object LumenLog {
    private lateinit var writer: BufferedWriter

    fun init(gameDir: Path) {
        val logDir = gameDir.resolve("logs/lumen")
        logDir.toFile().mkdirs()
        rotateLogs(logDir)
        writer = logDir.resolve("latest.log").toFile().bufferedWriter()
        info("INIT", "Lumen log started")
    }

    fun info(section: String, msg: String) = write("INFO ", section, msg)
    fun warn(section: String, msg: String) = write("WARN ", section, msg)
    fun error(section: String, msg: String, t: Throwable? = null) {
        write("ERROR", section, msg)
        t?.let { write("ERROR", section, it.stackTraceToString()) }
    }
    fun debug(section: String, msg: String) {
        if (LumenConfig.logLevel == LogLevel.DEBUG) write("DEBUG", section, msg)
    }

    private fun write(level: String, section: String, msg: String) {
        val line = "[${timestamp()}] [$level] [$section] $msg"
        writer.write(line); writer.newLine(); writer.flush()
    }

    fun close() = writer.close()
}
```

Sections are fixed strings, not an enum, so callers are readable at a glance:

| Section | Used for |
|---|---|
| `INIT` | Startup, log rotation, JEI detection |
| `CACHE` | Manifest read, namespace hit/miss, invalidation reasons |
| `INDEX` | Phase transitions, item counts, timing per phase |
| `TAXONOMY` | Per-item classification results (DEBUG only) |
| `TAXONOMY_MISS` | Every item that fell through to `Misc` (always logged at INFO) |
| `FAMILY` | Per-mod detection scores, threshold outcomes |
| `RECIPE` | Recipe graph stats, parse errors, unsupported types |
| `BLACKLIST` | Items hidden and from which source (pack vs local) |
| `ERROR` | Unexpected exceptions anywhere in the pipeline |

### What always gets logged (INFO level)

**On startup:**
```
[INFO ] [INIT  ] JEI detected: true (version 15.3.0.8)
[INFO ] [CACHE ] Manifest loaded — 47 namespaces cached
[INFO ] [CACHE ] create: UNCHANGED (v0.5.1.f, 847 items) — loaded from cache
[INFO ] [CACHE ] railways: UPDATED (v1.2.0 → v1.3.0) — rescanning
[INFO ] [CACHE ] createaddition: ADDED — scanning
[INFO ] [INDEX ] Phase: Classifying new items (2 namespaces, 1340 items)
[INFO ] [INDEX ] Phase: Building recipe graph (2 namespaces)
[INFO ] [INDEX ] Phase: Saving cache
[INFO ] [INDEX ] Done — 19841 items, 8 phases, 3.4s total
```

**Taxonomy misses (every item that lands in Misc):**
```
[INFO ] [TAXONOMY_MISS] railways:schedule_screen — no instanceof/tag match → Misc
[INFO ] [TAXONOMY_MISS] createaddition:energizer — no instanceof/tag match → Misc
```
This is the primary tool for expanding the taxonomy coverage over time.

**Family detection:**
```
[INFO ] [FAMILY] railways: score=80 (required dep: create) → assigned to Create
[INFO ] [FAMILY] createaddition: score=80 (required dep: create) → assigned to Create
[INFO ] [FAMILY] natures_spirit: score=0 → Uncategorized
```

**Recipe stats per namespace:**
```
[INFO ] [RECIPE] railways: 312 recipes indexed (craft:84, other:228)
[INFO ] [RECIPE] railways: 14 recipe types unrecognised → Tier 3 fallback
```

**Any error:**
```
[ERROR] [RECIPE] Failed to extract outputs for recipe railways:bogey/standard_bogey
java.lang.ClassCastException: ...
    at net.example.lumen.indexer.RecipeGraphBuilder.extractOutputs(RecipeGraphBuilder.kt:88)
```

### DEBUG level

When `log_level = "debug"` in config: additionally logs every single item's classification result. Verbose but useful when hunting why a specific item ended up in the wrong group.

```
[DEBUG] [TAXONOMY] create:cogwheel → Blocks.FullBlock (via canOcclude())
[DEBUG] [TAXONOMY] create:andesite_alloy → Materials.Ingot (via forge:ingots tag)
```

### Config entry

```toml
[logging]
log_level = "info"   # "debug" | "info" | "warn" | "error"
keep_logs = 5        # number of rotated log files to retain
```

---

## 17. Risk Register

| Component | Risk | Note |
|---|---|---|
| `IRecipeLayoutDrawable` embedding | Medium | Verify exact API surface in JEI 1.20.1 before writing `JeiEmbeddedRenderer` |
| Creative tab content population | Medium | `buildContents` call requires `ItemDisplayParameters` — may need to source `enabledFeatures` and `registryAccess` carefully from client state |
| Differential cross-ref rebuild | High | Novel — no prior art. Isolate so it can fall back to full rebuild on failure |
| `@Pseudo` Mixin target class names | Low | Verify `mezz.jei.gui.overlay.IngredientListOverlay` and `mezz.jei.gui.events.GuiEventHandler` are correct for the installed JEI version |
| Kotlin coroutines + Forge main thread | Medium | All `withContext(Dispatchers.Main)` calls must use Forge's client thread executor |
| Style modifier heuristic accuracy | Medium | Ship with `style_modifiers_separate = false` default; tune token list against actual pack |
| Recipe loop detection in tree traversal | Low | Visited-set per traversal path, max depth cap |
| `@LumenPlugin` annotation scanning | Low | Same mechanism as JEI's `@JeiPlugin` — well understood on Forge |
