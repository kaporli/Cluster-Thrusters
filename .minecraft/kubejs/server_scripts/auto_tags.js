// --- Dynamic Parent/Child Tagging System ---
// Every child rule is automatically cut out from its parent group using negative lookaheads.
// This prevents cross-contamination without manually writing massive lists of exclusions.

// Data imported from startup_scripts/shared_taxonomy.js
const taxonomy = global.taxonomy;
const standaloneTags = global.standaloneTags;
const customEmiGroups = global.customEmiGroups;

ServerEvents.tags('item', event => {
    event.add('kubejs:dummy_empty_override', 'minecraft:structure_void');

    Object.keys(customEmiGroups).forEach(tag => {
        event.add(tag, new RegExp(customEmiGroups[tag]));
    });

    // 1. Process parent-child taxonomy
    let allItemIds;
    try {
        allItemIds = Ingredient.all.itemIds;
        if (!allItemIds) throw "undefined";
    } catch(e) {
        try {
            allItemIds = Utils.getRegistry('item').keySet();
        } catch(e2) {
            allItemIds = Item.getList();
        }
    }

    // --- Pre-computation pass ---
    // Walk the entire taxonomy tree once and build a flat cache of descriptors.
    // Each entry: { regex, exactSet, tagsIn, allDescendantKeys }
    // This eliminates repeated getAllDescendants() calls during processing.
    const descriptorCache = {};

    function buildDescriptorCache(nodeObj) {
        for (let key in nodeObj) {
            let nodeData = nodeObj[key];
            let regStr = "";
            let exactSet = new Set();
            let tagsIn = [];
            let children = {};

            if (typeof nodeData === 'string') {
                regStr = nodeData;
            } else if (Array.isArray(nodeData)) {
                regStr = nodeData[0];
                nodeData.slice(1).forEach(i => {
                    if (i.startsWith('-')) return;
                    if (i.startsWith('#')) tagsIn.push(i.substring(1));
                    else exactSet.add(i);
                });
            } else {
                if (nodeData.modifierBases && nodeData.modifierPrefix) {
                    let baseWords = nodeData.modifierBases.filter(b => !b.startsWith('#'));
                    if (baseWords.length > 0) {
                        let unique = Array.from(new Set(baseWords));
                        regStr = `${nodeData.modifierPrefix}_(?:[a-z0-9_]*_)?(?:${unique.join('|')})$`;
                    }
                } else {
                    regStr = nodeData.pattern || "";
                }
                if (nodeData.exact) {
                    nodeData.exact.forEach(i => {
                        if (i.startsWith('-')) return;
                        if (i.startsWith('#')) tagsIn.push(i.substring(1));
                        else exactSet.add(i);
                    });
                }
                if (nodeData.children) children = nodeData.children;
            }

            descriptorCache[key] = {
                regex: regStr ? new RegExp(`^.*(?:^|[_/:])${regStr}`) : null,
                exactSet: exactSet,
                tagsIn: tagsIn,
                allDescendantKeys: []
            };

            // Recurse into children first so their entries exist before we read them back
            if (Object.keys(children).length > 0) {
                buildDescriptorCache(children);
            }

            // Populate allDescendantKeys: direct children + their descendants
            for (let cKey in children) {
                descriptorCache[key].allDescendantKeys.push(cKey);
                let cEntry = descriptorCache[cKey];
                if (cEntry) {
                    cEntry.allDescendantKeys.forEach(dk => descriptorCache[key].allDescendantKeys.push(dk));
                }
            }
        }
    }

    buildDescriptorCache(taxonomy);

    // --- Processing pass ---
    function processTaxonomyNode(key, nodeData, parentChildrenObj) {
        let regStr = "";
        let exactIn = [];
        let exactOut = [];
        let tagsIn = [];
        let tagsOut = [];
        let children = {};
        let excludeRegex = null;

        if (parentChildrenObj === undefined) parentChildrenObj = {};

        if (typeof nodeData === 'string') {
            regStr = nodeData;
        } else if (Array.isArray(nodeData)) {
            regStr = nodeData[0];
            exactIn  = nodeData.slice(1).filter(i => !i.startsWith('-') && !i.startsWith('#'));
            exactOut = nodeData.slice(1).filter(i => i.startsWith('-') && !i.startsWith('-#')).map(i => i.substring(1));
            tagsIn   = nodeData.slice(1).filter(i => i.startsWith('#')).map(i => i.substring(1));
            tagsOut  = nodeData.slice(1).filter(i => i.startsWith('-#')).map(i => i.substring(2));
        } else {
            regStr = nodeData.pattern || "";
            if (nodeData.modifierBases && nodeData.modifierPrefix) {
                let baseWords = nodeData.modifierBases.filter(b => !b.startsWith('#'));
                if (baseWords.length > 0) {
                    let uniqueWords = Array.from(new Set(baseWords));
                    regStr = `${nodeData.modifierPrefix}_(?:[a-z0-9_]*_)?(?:${uniqueWords.join('|')})$`;
                }
            }
            if (nodeData.exact) {
                exactIn  = nodeData.exact.filter(i => !i.startsWith('-') && !i.startsWith('#'));
                exactOut = nodeData.exact.filter(i => i.startsWith('-') && !i.startsWith('-#')).map(i => i.substring(1));
                tagsIn   = nodeData.exact.filter(i => i.startsWith('#')).map(i => i.substring(1));
                tagsOut  = nodeData.exact.filter(i => i.startsWith('-#')).map(i => i.substring(2));
            }
            if (nodeData.exclude) {
                excludeRegex = new RegExp(Array.isArray(nodeData.exclude) ? nodeData.exclude.join('|') : nodeData.exclude);
            }
            if (nodeData.children) children = nodeData.children;
        }

        let myRegex = regStr ? new RegExp(`^.*(?:^|[_/:])${regStr}`) : null;
        let exactInSet  = new Set(exactIn);
        let exactOutSet = new Set(exactOut);

        // Look up pre-cached descriptors instead of recomputing getAllDescendants
        let myEntry = descriptorCache[key];
        let childDescKeys = myEntry ? myEntry.allDescendantKeys : [];
        let childNodes = childDescKeys.map(k => descriptorCache[k]).filter(Boolean);

        let siblingDescKeys = [];
        for (let sKey in parentChildrenObj) {
            if (sKey === key) continue;
            let sEntry = descriptorCache[sKey];
            if (sEntry) sEntry.allDescendantKeys.forEach(dk => siblingDescKeys.push(dk));
        }
        let siblingDescendants = siblingDescKeys.map(k => descriptorCache[k]).filter(Boolean);

        // Recurse into children FIRST so they register correctly
        for (let cKey in children) {
            processTaxonomyNode(cKey, children[cKey], children);
        }

        // Evaluate this node against all items
        for (let id of allItemIds) {
            let idStr = String(id);

            let matchedMe = (myRegex && myRegex.test(idStr)) || exactInSet.has(idStr);
            if (!matchedMe) continue;
            if (exactOutSet.has(idStr)) continue;
            // exactIn wins over excludeRegex — explicitly listed items bypass the exclude filter
            if (excludeRegex && !exactInSet.has(idStr) && excludeRegex.test(idStr)) continue;

            let matchesChild = childNodes.some(c => (c.regex && c.regex.test(idStr)) || c.exactSet.has(idStr));
            if (matchesChild) continue;

            let matchesSibling = siblingDescendants.some(s => (s.regex && s.regex.test(idStr)) || s.exactSet.has(idStr));
            if (!matchesSibling) {
                event.add(`kubejs:${key}`, idStr);
            }
        }

        // Native injection: add external tags directly, then remove child/sibling overlap
        tagsIn.forEach(t => event.add(`kubejs:${key}`, `#${t}`));

        if (tagsIn.length > 0) {
            exactOut.forEach(idStr => event.remove(`kubejs:${key}`, idStr));
            tagsOut.forEach(t => event.remove(`kubejs:${key}`, `#${t}`));
            if (excludeRegex) event.remove(`kubejs:${key}`, excludeRegex);

            childNodes.forEach(c => {
                if (c.regex) event.remove(`kubejs:${key}`, c.regex);
                c.exactSet.forEach(idStr => event.remove(`kubejs:${key}`, idStr));
                c.tagsIn.forEach(ct => event.remove(`kubejs:${key}`, `#${ct}`));
            });

            siblingDescendants.forEach(s => {
                if (s.regex) event.remove(`kubejs:${key}`, s.regex);
                s.exactSet.forEach(idStr => event.remove(`kubejs:${key}`, idStr));
                s.tagsIn.forEach(st => event.remove(`kubejs:${key}`, `#${st}`));
            });
        }
    }

    Object.keys(taxonomy).forEach(parentKey => {
        processTaxonomyNode(parentKey, taxonomy[parentKey], taxonomy);
    });

    // 2. Process standalone tags
    Object.keys(standaloneTags).forEach(key => {
        event.add(`kubejs:${key}`, new RegExp(`^.*(?:^|[_/:])${standaloneTags[key]}`));
    });
});

ServerEvents.tags('item', event => {
    console.log("AUTO_TAGS_REACHED_THE_VERY_END_SUCCESSFULLY!");
});
