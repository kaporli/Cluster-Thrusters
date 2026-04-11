var taxonomy = global.taxonomy;
var standaloneTags = global.standaloneTags;
var customEmiGroups = global.customEmiGroups;
var modifierTokens = global.modifierTokens;
var materials = global.materials || {};
var globalExcludes = global.excludes || {};

ServerEvents.tags("item", function (event) {
    event.add("kubejs:dummy_empty_override", "minecraft:structure_void");

    // ── Compile global excludes ──────────────────────────────────────────
    var globalExcludeRegex = (globalExcludes.pattern && globalExcludes.pattern.length > 0)
        ? new RegExp(globalExcludes.pattern.join("|"))
        : null;
    var globalExcludeSet = new Set();
    if (globalExcludes.exact) {
        globalExcludes.exact.forEach(function (id) { globalExcludeSet.add(id); });
    }
    function isGloballyExcluded(idStr) {
        if (globalExcludeSet.has(idStr)) return true;
        if (globalExcludeRegex && globalExcludeRegex.test(idStr)) return true;
        return false;
    }

    Object.keys(customEmiGroups).forEach(function (tag) {
        event.add(tag, new RegExp(customEmiGroups[tag]));
    });

    var allItemIds;
    try {
        allItemIds = Ingredient.all.itemIds;
    } catch (e) {
        allItemIds = Item.getList().map(function (i) { return i.id; });
    }

    // ── Modifier fingerprinting ──────────────────────────────────────────
    function getItemFingerprint(idStr, excludedModifiers) {
        var excludes = excludedModifiers || [];
        var path = idStr.split(":")[1] || idStr;
        var found = [];
        Object.keys(modifierTokens).forEach(function (key) {
            if (excludes.indexOf(key) !== -1) return;
            var tokenDef = modifierTokens[key];
            var tokenPattern = typeof tokenDef === "string" ? tokenDef : tokenDef.pattern;
            var pattern = new RegExp(
                "(?:^|[_/])" + tokenPattern + "(?:[_/]|$)"
            );
            if (!pattern.test(path)) return;
            if (typeof tokenDef === "object" && tokenDef.exclude) {
                var tokenExcludeRegex = new RegExp(
                    Array.isArray(tokenDef.exclude) ? tokenDef.exclude.join("|") : tokenDef.exclude
                );
                if (tokenExcludeRegex.test(idStr)) return;
            }
            found.push(key);
        });
        found = found.filter(function (key) {
            var tokenDef = modifierTokens[key];
            if (typeof tokenDef === "object" && tokenDef.requires) {
                return tokenDef.requires.some(function (req) {
                    return found.indexOf(req) !== -1;
                });
            }
            return true;
        });
        return found.sort();
    }

    // ── Material matching (longest pattern first for specificity) ────────
    var globalMatExcludeRegex = (globalExcludes.materialPattern && globalExcludes.materialPattern.length > 0)
        ? new RegExp(globalExcludes.materialPattern.join("|"))
        : null;

    var matEntries = Object.keys(materials).map(function (key) {
        var def = materials[key];
        var pat = typeof def === "string" ? def : def.pattern;
        var excl = null;
        if (typeof def === "object" && def.exclude) {
            excl = new RegExp(Array.isArray(def.exclude) ? def.exclude.join("|") : def.exclude);
        }
        return {
            key: key,
            regex: new RegExp("(?:^|[_/:])" + pat + "(?:[_/:]|$)"),
            excludeRegex: excl
        };
    });
    matEntries.sort(function (a, b) { return b.key.length - a.key.length; });

    function getItemMaterial(idStr) {
        if (globalMatExcludeRegex && globalMatExcludeRegex.test(idStr)) return null;
        for (var mi = 0; mi < matEntries.length; mi++) {
            if (matEntries[mi].regex.test(idStr)) {
                if (matEntries[mi].excludeRegex && matEntries[mi].excludeRegex.test(idStr)) continue;
                return matEntries[mi].key;
            }
        }
        return null;
    }

    // ── Build descriptor cache ───────────────────────────────────────────
    var descriptorCache = {};
    var tagNodeMap = {};

    function buildDescriptorCache(nodeObj) {
        for (var key in nodeObj) {
            var nodeData = nodeObj[key];
            var regStr = "",
                exactSet = new Set(),
                exactExcludeSet = new Set(),
                children = {},
                isDisabled = false;

            if (typeof nodeData === "string") {
                regStr = nodeData;
            } else if (Array.isArray(nodeData)) {
                regStr = nodeData[0];
                nodeData.slice(1).forEach(function (i) {
                    if (i.indexOf("-") === 0)
                        exactExcludeSet.add(i.substring(1));
                    else exactSet.add(i);
                });
            } else {
                regStr = nodeData.pattern || "";
                isDisabled = nodeData.disabled === true;
                if (nodeData.tag) {
                    tagNodeMap[key] = nodeData.tag;
                }
                if (nodeData.exact)
                    nodeData.exact.forEach(function (i) {
                        if (i.indexOf("-") === 0)
                            exactExcludeSet.add(i.substring(1));
                        else exactSet.add(i);
                    });
                if (nodeData.children) children = nodeData.children;
            }

            descriptorCache[key] = {
                regex: regStr ? new RegExp("^.*(?:^|[_/:])" + regStr) : null,
                exactSet: exactSet,
                exactExcludeSet: exactExcludeSet,
                disabled: isDisabled,
                allDescendantKeys: []
            };

            if (Object.keys(children).length > 0)
                buildDescriptorCache(children);
            for (var cKey in children) {
                descriptorCache[key].allDescendantKeys.push(cKey);
                var cEntry = descriptorCache[cKey];
                if (cEntry)
                    cEntry.allDescendantKeys.forEach(function (dk) {
                        descriptorCache[key].allDescendantKeys.push(dk);
                    });
            }
        }
    }
    buildDescriptorCache(taxonomy);

    // ── Process taxonomy nodes ───────────────────────────────────────────
    var consumedIds = new Set();
    var excludedByNode = new Set();

    function processNormalNode(
        key,
        nodeData,
        parentChildrenObj,
        inheritedDynamic,
        inheritedExcludes
    ) {
        if (nodeData.isSink) return;

        var children =
            nodeData && typeof nodeData === "object" && !Array.isArray(nodeData)
                ? nodeData.children || {}
                : {};
        var excludeRegex =
            nodeData && nodeData.exclude
                ? new RegExp(
                      Array.isArray(nodeData.exclude)
                          ? nodeData.exclude.join("|")
                          : nodeData.exclude
                  )
                : null;

        var passDownDynamic = nodeData.dynamicGrouping || inheritedDynamic || false;
        var currentDynamic = passDownDynamic;
        var useMods = currentDynamic && !nodeData.noModifiers;
        var useMats = currentDynamic && !nodeData.noMaterials;
        var currentExcludes = (nodeData.excludeModifiers || []).concat(
            inheritedExcludes || []
        );

        for (var cKey in children)
            processNormalNode(
                cKey,
                children[cKey],
                children,
                passDownDynamic,
                currentExcludes
            );

        if (nodeData.disabled) return;

        var myEntry = descriptorCache[key];
        var childNodes = myEntry.allDescendantKeys
            .map(function (k) { return descriptorCache[k]; })
            .filter(function (c) { return c && !c.disabled; });
        var siblingDescendants = [];
        for (var sKey in parentChildrenObj) {
            if (sKey === key) continue;
            var sEntry = descriptorCache[sKey];
            if (sEntry)
                sEntry.allDescendantKeys.forEach(function (dk) {
                    var dkEntry = descriptorCache[dk];
                    if (dkEntry && !dkEntry.disabled)
                        siblingDescendants.push(dkEntry);
                });
        }

        var hasPattern = myEntry.regex || myEntry.exactSet.size > 0;
        if (!hasPattern) return;

        for (var _i = 0; _i < allItemIds.length; _i++) {
            var idStr = String(allItemIds[_i]);
            if (consumedIds.has(idStr)) continue;
            if (isGloballyExcluded(idStr)) continue;

            var isExactInclude = myEntry.exactSet.has(idStr);
            if (
                !(
                    (myEntry.regex && myEntry.regex.test(idStr)) ||
                    isExactInclude
                )
            )
                continue;

            if (!isExactInclude) {
                if (myEntry.exactExcludeSet.has(idStr)) {
                    excludedByNode.add(idStr);
                    continue;
                }
                if (excludeRegex && excludeRegex.test(idStr)) {
                    excludedByNode.add(idStr);
                    continue;
                }
            }

            if (
                childNodes.some(function (c) {
                    return (c.regex && c.regex.test(idStr)) ||
                        c.exactSet.has(idStr);
                })
            )
                continue;
            if (
                siblingDescendants.some(function (s) {
                    return (s.regex && s.regex.test(idStr)) ||
                        s.exactSet.has(idStr);
                })
            )
                continue;

            consumedIds.add(idStr);

            if (useMods || useMats) {
                var fingerprint = useMods ? getItemFingerprint(idStr, currentExcludes) : [];
                var material = useMats ? getItemMaterial(idStr) : null;
                if (fingerprint.length > 0 || material) {
                    var parts = [];
                    if (fingerprint.length > 0) parts.push(fingerprint.join("_"));
                    if (material) parts.push(material);
                    parts.push(key);
                    event.add("kubejs:" + parts.join("_"), idStr);
                } else {
                    event.add("kubejs:" + key, idStr);
                }
            } else {
                event.add("kubejs:" + key, idStr);
            }
        }
    }

    Object.keys(taxonomy).forEach(function (pk) {
        processNormalNode(pk, taxonomy[pk], taxonomy, false, []);
    });

    // ── Tag-to-tag copying ───────────────────────────────────────────────
    for (var tagKey in tagNodeMap) {
        var refs = tagNodeMap[tagKey];
        for (var ti = 0; ti < refs.length; ti++) {
            event.add("kubejs:" + tagKey, "#" + refs[ti]);
        }
        for (var tj = 0; tj < refs.length; tj++) {
            try {
                var tagIds = Ingredient.of("#" + refs[tj]).itemIds;
                if (tagIds) {
                    for (var tk = 0; tk < tagIds.length; tk++) {
                        consumedIds.add(String(tagIds[tk]));
                    }
                }
            } catch (e) {}
        }
    }

    // ── Standalone tags ──────────────────────────────────────────────────
    Object.keys(standaloneTags).forEach(function (k) {
        var tagRegex = new RegExp("^.*(?:^|[_/:])" + standaloneTags[k]);
        for (var _i = 0; _i < allItemIds.length; _i++) {
            var idStr = String(allItemIds[_i]);
            if (isGloballyExcluded(idStr)) continue;
            if (tagRegex.test(idStr)) {
                event.add("kubejs:" + k, idStr);
                consumedIds.add(idStr);
            }
        }
    });

    // ── Consume items from native EMI groups ─────────────────────────────
    // These tags are managed by mods, not by us. Mark their items as consumed
    // so they don't leak into the blocks sink or get double-grouped.
    var nativeEmiGroups = global.nativeEmiGroups || [];
    nativeEmiGroups.forEach(function (k) {
        var tagName = k.indexOf("#") === 0 ? k.substring(1) : k;
        try {
            var tagIds = Ingredient.of("#" + tagName).itemIds;
            if (tagIds) {
                for (var ni = 0; ni < tagIds.length; ni++) {
                    consumedIds.add(String(tagIds[ni]));
                }
            }
        } catch (e) {}
    });

    // ── Blocks sink ──────────────────────────────────────────────────────
    var blocksConfig = taxonomy["blocks"];
    var sinkForceInclude = (blocksConfig && blocksConfig.forceInclude)
        ? new RegExp(Array.isArray(blocksConfig.forceInclude) ? blocksConfig.forceInclude.join("|") : blocksConfig.forceInclude)
        : null;

    // Pre-compute which items are full solid building blocks.
    // canOcclude() catches most cases; forceInclude overrides for known exceptions.
    var blockItemIds = new Set();
    for (var _bi = 0; _bi < allItemIds.length; _bi++) {
        var biStr = String(allItemIds[_bi]);
        if (sinkForceInclude && sinkForceInclude.test(biStr)) {
            blockItemIds.add(biStr);
            continue;
        }
        try {
            var biItem = Item.of(biStr).item;
            if (biItem.getClass().getName().indexOf("BlockItem") !== -1) {
                var blockState = biItem.getBlock().defaultBlockState();
                if (blockState.canOcclude()) {
                    blockItemIds.add(biStr);
                }
            }
        } catch (e) {}
    }

    if (blocksConfig && !blocksConfig.disabled) {
        var blockExcludeRegex = blocksConfig.exclude
            ? new RegExp(
                  Array.isArray(blocksConfig.exclude)
                      ? blocksConfig.exclude.join("|")
                      : blocksConfig.exclude
              )
            : null;
        var blockExactExclude = new Set();
        if (blocksConfig.exact)
            blocksConfig.exact.forEach(function (i) {
                if (i.indexOf("-") === 0) blockExactExclude.add(i.substring(1));
            });
        var sinkExcludes = blocksConfig.excludeModifiers || [];

        for (var _i2 = 0; _i2 < allItemIds.length; _i2++) {
            var idStr = String(allItemIds[_i2]);
            if (consumedIds.has(idStr)) continue;
            if (excludedByNode.has(idStr)) continue;
            if (isGloballyExcluded(idStr)) continue;
            if (!blockItemIds.has(idStr)) continue;
            if (
                blockExactExclude.has(idStr) ||
                (blockExcludeRegex && blockExcludeRegex.test(idStr))
            )
                continue;

            var fingerprint = getItemFingerprint(idStr, sinkExcludes);
            var material = getItemMaterial(idStr);

            if (fingerprint.length === 0 && !material) continue;

            var parts = [];
            if (fingerprint.length > 0) parts.push(fingerprint.join("_"));
            if (material) parts.push(material);
            parts.push("blocks");
            event.add("kubejs:" + parts.join("_"), idStr);
        }
    }
});