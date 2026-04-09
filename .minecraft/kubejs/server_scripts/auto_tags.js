var taxonomy = global.taxonomy;
var standaloneTags = global.standaloneTags;
var customEmiGroups = global.customEmiGroups;
var modifierTokens = global.modifierTokens;
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
            if (pattern.test(path)) found.push(key);
        });
        // Filter out sub-modifiers whose requirements aren't met
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

    // ── Build descriptor cache ───────────────────────────────────────────
    var descriptorCache = {};

    // Collect tag references so we can copy them directly via event.add
    // (Ingredient.of("#tag").itemIds does NOT work during the tag event
    // because tags aren't finalized yet)
    var tagNodeMap = {}; // key → ["forge:stained_glass", ...]

    function buildDescriptorCache(nodeObj) {
        for (var key in nodeObj) {
            var nodeData = nodeObj[key];
            var regStr = "",
                exactSet = new Set(),
                exactExcludeSet = new Set(),
                children = {};

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

        // Property Inheritance (noModifiers breaks the chain)
        var currentDynamic = nodeData.noModifiers
            ? false
            : (nodeData.dynamicGrouping || inheritedDynamic || false);
        var currentExcludes = (nodeData.excludeModifiers || []).concat(
            inheritedExcludes || []
        );

        // Depth-first
        for (var cKey in children)
            processNormalNode(
                cKey,
                children[cKey],
                children,
                currentDynamic,
                currentExcludes
            );

        var myEntry = descriptorCache[key];
        var childNodes = myEntry.allDescendantKeys
            .map(function (k) { return descriptorCache[k]; })
            .filter(Boolean);
        var siblingDescendants = [];
        for (var sKey in parentChildrenObj) {
            if (sKey === key) continue;
            var sEntry = descriptorCache[sKey];
            if (sEntry)
                sEntry.allDescendantKeys.forEach(function (dk) {
                    if (descriptorCache[dk])
                        siblingDescendants.push(descriptorCache[dk]);
                });
        }

        // Skip pattern/exact matching for tag-only nodes (regex is null, exactSet is empty).
        // These are handled separately via direct tag-to-tag copying below.
        var hasPattern = myEntry.regex || myEntry.exactSet.size > 0;
        if (!hasPattern) return;

        for (var _i = 0; _i < allItemIds.length; _i++) {
            var idStr = String(allItemIds[_i]);
            if (consumedIds.has(idStr)) continue;
            if (isGloballyExcluded(idStr)) continue;

            // Must match this node's pattern or exact set to be relevant
            var isExactInclude = myEntry.exactSet.has(idStr);
            if (
                !(
                    (myEntry.regex && myEntry.regex.test(idStr)) ||
                    isExactInclude
                )
            )
                continue;

            // Excludes consume the item so it can't leak to parents or the blocks sink.
            // Exact includes always win over excludes.
            if (!isExactInclude) {
                if (myEntry.exactExcludeSet.has(idStr)) {
                    consumedIds.add(idStr);
                    continue;
                }
                if (excludeRegex && excludeRegex.test(idStr)) {
                    consumedIds.add(idStr);
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

            if (currentDynamic) {
                var fingerprint = getItemFingerprint(idStr, currentExcludes);
                if (fingerprint.length > 0) {
                    event.add(
                        "kubejs:" + fingerprint.join("_") + "_" + key,
                        idStr
                    );
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
    // Nodes with a `tag` field can't be resolved via Ingredient during the
    // tag event. Instead, copy the source tags directly using event.add,
    // which natively supports "#tag" references.
    for (var tagKey in tagNodeMap) {
        var refs = tagNodeMap[tagKey];
        for (var ti = 0; ti < refs.length; ti++) {
            event.add("kubejs:" + tagKey, "#" + refs[ti]);
        }
        // Mark items as consumed so they don't also land in the blocks sink.
        // Try Ingredient.of — it may work for some tags even during the tag event.
        for (var tj = 0; tj < refs.length; tj++) {
            try {
                var tagIds = Ingredient.of("#" + refs[tj]).itemIds;
                if (tagIds) {
                    for (var tk = 0; tk < tagIds.length; tk++) {
                        consumedIds.add(String(tagIds[tk]));
                    }
                }
            } catch (e) {
                // Tag not resolvable yet — consumption tracking skipped.
                // These items will only appear in blocks sink if they also
                // happen to have a modifier fingerprint, which is unlikely
                // for glass/ladder type items.
            }
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

    // ── Blocks sink (catch-all with modifier fingerprinting) ─────────────
    var blocksConfig = taxonomy["blocks"];
    if (blocksConfig) {
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
            if (isGloballyExcluded(idStr)) continue;
            if (
                blockExactExclude.has(idStr) ||
                (blockExcludeRegex && blockExcludeRegex.test(idStr))
            )
                continue;

            var fingerprint = getItemFingerprint(idStr, sinkExcludes);
            if (fingerprint.length > 0) {
                event.add("kubejs:" + fingerprint.join("_") + "_blocks", idStr);
            }
        }
    }
});