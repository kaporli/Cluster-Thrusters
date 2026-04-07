// --- Dynamic Parent/Child Tagging System ---
// Every child rule is automatically cut out from its parent group using negative lookaheads.
// This prevents cross-contamination without manually writing massive lists of exclusions.

// Data imported from startup_scripts/shared_taxonomy.js
const taxonomy = global.taxonomy;
const standaloneTags = global.standaloneTags;
const allShapes = global.allShapes;
const basicSuffixes = global.basicSuffixes;
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

function processTaxonomyNode(key, nodeData) {
        let regStr = "";
        let exactIn = [];
        let exactOut = [];
        let tagsIn = [];
        let tagsOut = [];
        let children = {};
        let excludeRegex = null;

        if (typeof nodeData === 'string') {
            regStr = nodeData;
        } else if (Array.isArray(nodeData)) {
            regStr = nodeData[0];
            exactIn = nodeData.slice(1).filter(i => !i.startsWith('-') && !i.startsWith('#'));
            exactOut = nodeData.slice(1).filter(i => i.startsWith('-') && !i.startsWith('-#')).map(i => i.substring(1));
            tagsIn = nodeData.slice(1).filter(i => i.startsWith('#')).map(i => i.substring(1));
            tagsOut = nodeData.slice(1).filter(i => i.startsWith('-#')).map(i => i.substring(2));
        } else {
            regStr = nodeData.pattern || "";
            if (nodeData.exact) {
                exactIn = nodeData.exact.filter(i => !i.startsWith('-') && !i.startsWith('#'));
                exactOut = nodeData.exact.filter(i => i.startsWith('-') && !i.startsWith('-#')).map(i => i.substring(1));
                tagsIn = nodeData.exact.filter(i => i.startsWith('#')).map(i => i.substring(1));
                tagsOut = nodeData.exact.filter(i => i.startsWith('-#')).map(i => i.substring(2));
            }
            if (nodeData.exclude) {
                excludeRegex = new RegExp(nodeData.exclude);
            }
            if (nodeData.children) {
                children = nodeData.children;
            }
        }

        let myRegex = regStr ? new RegExp(`^.*(?:^|[_/:])${regStr}`) : null;
        
        let childNodes = Object.keys(children).map(cKey => {
            let cData = children[cKey];
            let cRegStr = typeof cData === 'string' ? cData : (Array.isArray(cData) ? cData[0] : cData.pattern);
            let cExact = [];
            let cTagsIn = [];
            if (Array.isArray(cData)) {
                cExact = cData.slice(1).filter(i => !i.startsWith('-') && !i.startsWith('#'));
                cTagsIn = cData.slice(1).filter(i => i.startsWith('#')).map(i => i.substring(1));
            } else if (typeof cData === 'object' && cData.exact) {
                cExact = cData.exact.filter(i => !i.startsWith('-') && !i.startsWith('#'));
                cTagsIn = cData.exact.filter(i => i.startsWith('#')).map(i => i.substring(1));
            }
            
            return {
                key: cKey,
                regex: cRegStr ? new RegExp(`^.*(?:^|[_/:])${cRegStr}`) : null,
                exactIn: cExact,
                tagsIn: cTagsIn
            };
        });

        // Recurse into children FIRST so they register correctly
        for (let cKey in children) {
            processTaxonomyNode(cKey, children[cKey]);
        }

// Evaluate this node against all items for exactIn and regex matches
        for (let id of allItemIds) {
            let idStr = String(id);
            
            // Does it belong in my group natively (via regex or explicit ID)?
            let matchedMe = false;
            if (myRegex && myRegex.test(idStr)) matchedMe = true;
            if (exactIn.includes(idStr)) matchedMe = true;
            // Removed: tagsIn logic because .getObjectIds() is empty during this phase!
            
            if (matchedMe && !exactOut.includes(idStr)) {
                if (excludeRegex && excludeRegex.test(idStr)) continue;

                // It fits in my group. Does it fit into a child's?
                let matchesChild = childNodes.some(c => (c.regex && c.regex.test(idStr)) || c.exactIn.includes(idStr));
                
                // If it doesn't fit a child, put it in this parent
                if (!matchesChild) {
                    event.add(`kubejs:${key}`, idStr);
                }
            }
        }

        // Native Injection phase: For any external tags requested (#forge:something),
        // we add them directly to our group since we cannot read their IDs dynamically.
        tagsIn.forEach(t => {
            event.add(`kubejs:${key}`, `#${t}`);
        });

        // However, if we blindly inherit an external tag, it might contain items that belong
        // to our children! So we must explicitly tell KubeJS to REMOVE everything our
        // children would capture natively, as well as exclusions!
        if (tagsIn.length > 0) {
            exactOut.forEach(idStr => event.remove(`kubejs:${key}`, idStr));
            tagsOut.forEach(t => event.remove(`kubejs:${key}`, `#${t}`));
            
            if (excludeRegex) {
                event.remove(`kubejs:${key}`, excludeRegex);
            }

            childNodes.forEach(c => {
                if (c.regex) event.remove(`kubejs:${key}`, c.regex);
                c.exactIn.forEach(idStr => event.remove(`kubejs:${key}`, idStr));
                c.tagsIn.forEach(ct => event.remove(`kubejs:${key}`, `#${ct}`));
            });
        }
    }

    Object.keys(taxonomy).forEach(parentKey => {
        processTaxonomyNode(parentKey, taxonomy[parentKey]);
    });

    // 2. Process standalone tags
    Object.keys(standaloneTags).forEach(key => {
        event.add(`kubejs:${key}`, new RegExp(`^.*(?:^|[_/:])${standaloneTags[key]}`));
    });

    // 3. Process modifier tags
    let mods = ['smooth', 'cut', 'chiseled', 'polished'];
    mods.forEach(mod => {
        event.add(`kubejs:${mod}_blocks`, new RegExp(`^.*(?:^|[_/:])${mod}_(?!sandstone|red_sandstone)(?!.*(?:${allShapes})$)[a-z0-9_]+$`));
    });

    // 4. Processing basic fallbacks
    basicSuffixes.forEach(suffix => {
        event.add(`kubejs:${suffix}`, new RegExp(`^.*:(?:.*[_/])?${suffix}$`));
    });
});

ServerEvents.tags('item', event => {
    console.log("AUTO_TAGS_REACHED_THE_VERY_END_SUCCESSFULLY!");
});


ServerEvents.tags('item', event => {
    // Let's test the actual logs regex match against an item
    let testStr = "minecraft:stripped_oak_log";
    let regStr = "^(?!.*(?:hollow_.*_log$|stripped_.*_log$)).*(?:^|[_/:])log$";
    let regex = new RegExp(regStr);
    console.log(`TEST REGEX MATCH on ${testStr}: ${regex.test(testStr)}`);
    console.log("DEBUG LOGS: " + event.get("kubejs:logs").getObjectIds());

});

ServerEvents.tags('item', event => {
    console.log("DEBUG: items in kubejs:logs tags after processing: " + event.get("kubejs:logs").getObjectIds());
});
    
ServerEvents.tags('item', event => {
    try {
        let items = Ingredient.all.getItemIds();
        console.log("Ingredient.all length: " + items.length);
    } catch(e) {
        console.log("Ingredient.all error: " + e);
    }
});
    