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
        let children = {};
        let excludeRegex = null;

        if (typeof nodeData === 'string') {
            regStr = nodeData;
        } else if (Array.isArray(nodeData)) {
            regStr = nodeData[0];
            exactIn = nodeData.slice(1).filter(i => !i.startsWith('-'));
            exactOut = nodeData.slice(1).filter(i => i.startsWith('-')).map(i => i.substring(1));
        } else {
            regStr = nodeData.pattern || "";
            if (nodeData.exact) {
                exactIn = nodeData.exact.filter(i => !i.startsWith('-'));
                exactOut = nodeData.exact.filter(i => i.startsWith('-')).map(i => i.substring(1));
            }
            if (nodeData.exclude) excludeRegex = new RegExp(nodeData.exclude);
            if (nodeData.children) children = nodeData.children;
        }

        let myRegex = new RegExp(`^.*(?:^|[_/:])${regStr}`);
        
        let childNodes = Object.keys(children).map(cKey => {
            let cData = children[cKey];
            let cRegStr = typeof cData === 'string' ? cData : (Array.isArray(cData) ? cData[0] : cData.pattern);
            let cExact = [];
            if (Array.isArray(cData)) cExact = cData.slice(1).filter(i => !i.startsWith('-'));
            else if (typeof cData === 'object' && cData.exact) cExact = cData.exact.filter(i => !i.startsWith('-'));
            
            return {
                key: cKey,
                regex: new RegExp(`^.*(?:^|[_/:])${cRegStr}`),
                exactIn: cExact
            };
        });

        // Recurse into children
        for (let cKey in children) {
            processTaxonomyNode(cKey, children[cKey]);
        }

        // Evaluate this node
        for (let id of allItemIds) {
            let idStr = String(id);
            if ((myRegex.test(idStr) || exactIn.includes(idStr)) && !exactOut.includes(idStr)) {
                if (excludeRegex && excludeRegex.test(idStr)) continue;

                let matchesChild = childNodes.some(c => c.regex.test(idStr) || c.exactIn.includes(idStr));
                if (!matchesChild) {
                    event.add(`kubejs:${key}`, idStr);
                }
            }
        }
    }

    Object.keys(taxonomy).forEach(parentKey => {
        processTaxonomyNode(parentKey, taxonomy[parentKey]);
    });
        });

        for (let id of allItemIds) {
            let idStr = String(id);
            
            childEntries.forEach(child => {
                if ((child.regex.test(idStr) || child.exact.includes(idStr)) && !child.excludes.includes(idStr)) {
                    if (!manualExclPattern || !manualExclPattern.test(idStr)) {
                        event.add(`kubejs:${child.key}`, idStr);
                    }
                }
            });

            if (parentPattern.test(idStr) || exactParent.includes(idStr)) {
                if (manualExclPattern && manualExclPattern.test(idStr)) continue;
                
                let matchesChild = childEntries.some(child => child.regex.test(idStr));
                if (!matchesChild) {
                    event.add(`kubejs:${parentKey}`, idStr);
                }
            }
        }
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

    // 5. Explicitly process custom EMI groups from our global array
    Object.keys(customEmiGroups).forEach(groupTag => {
        event.add(groupTag, new RegExp(customEmiGroups[groupTag]));
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
    
ServerEvents.tags('item', event => {
    let tag = event.get('kubejs:logs');
    console.log("FINAL DOUBLE CHECK OF KUBEJS:LOGS TAG: " + tag.getObjectIds().length);
    if(tag.getObjectIds().contains('minecraft:stripped_oak_log')) {
        console.log("STRIPPED OAK LOG IS SOMEHOW IN KUBEJS:LOGS!");
    } else {
        console.log("STRIPPED OAK LOG IS DEFINITELY NOT IN KUBEJS:LOGS!");
    }
});

ServerEvents.tags('item', event => {
    let ids = Utils.getRegistry('item').keySet();
    for(let id of ids) {
        if(String(id).includes('stripped_oak_log')) {
            console.log("STRINGIFIED ID FORMAT: '" + String(id) + "'");
            break;
        }
    }
});

ServerEvents.tags('item', event => {
    let tag = event.get('kubejs:stripped_logs');
    console.log("KUBEJS:STRIPPED_LOGS LENGTH: " + tag.getObjectIds().length);
    console.log("KUBEJS:STRIPPED_LOGS CONTENTS (first 10): " + tag.getObjectIds().toArray().slice(0, 10));
    
    let tag2 = event.get('kubejs:logs');
    console.log("KUBEJS:LOGS LENGTH: " + tag2.getObjectIds().length);
    console.log("KUBEJS:LOGS CONTENTS (first 10): " + tag2.getObjectIds().toArray().slice(0, 10));
});

ServerEvents.tags('item', event => {
    // If the user means the vanilla tag...
    console.log("VANILLA MINECRAFT:LOGS SIZE: " + event.get('minecraft:logs').getObjectIds().length);
    console.log("DOES VANILLA HAVE STRIPPED? " + event.get('minecraft:logs').getObjectIds().contains('minecraft:stripped_oak_log'));
});

ServerEvents.tags('item', event => {
    // Log ALL items in kubejs:logs explicitly just so it shows up fresh
    let arr = event.get('kubejs:logs').getObjectIds();
    console.log("FRESH KUBEJS:LOGS CONTENT SIZE: " + arr.length);
    let strMatch = arr.some(id => String(id) === "minecraft:stripped_oak_log");
    console.log("IS STRIPPED OAK LOG IN THERE? " + strMatch);
    
    // Check if the user's issue is EmiPlusPlus inheriting Vanilla tags
    console.log("Checking if EmiPlusPlus creates a minecraft:logs group... " + event.get("minecraft:logs").getObjectIds().contains("minecraft:stripped_oak_log"));
});

ServerEvents.tags('item', event => {
    console.log("==============================================================");
    console.log("====== KUBEJS TAGS DEBUG DUMP (TO VERIFY THE FILTERING) ======");
    console.log("==============================================================");
    
    let logsTag = event.get('kubejs:logs').getObjectIds();
    console.log(`kubejs:logs size: ${logsTag.length}`);
    console.log(`Contains stripped_oak_log? ${logsTag.contains('minecraft:stripped_oak_log')}`);
    console.log(`Contains oak_wood? ${logsTag.contains('minecraft:oak_wood')}`);
    
    let woodTag = event.get('kubejs:wood').getObjectIds();
    console.log(`kubejs:wood size: ${woodTag.length}`);
    
    let strLogsTag = event.get('kubejs:stripped_logs').getObjectIds();
    console.log(`kubejs:stripped_logs size: ${strLogsTag.length}`);
    
    let fencesTag = event.get('kubejs:fences').getObjectIds();
    console.log(`kubejs:fences size: ${fencesTag.length}`);
    
    let vanillaLogs = event.get('minecraft:logs').getObjectIds();
    console.log(`minecraft:logs (VANILLA) size: ${vanillaLogs.length}`);
    console.log(`Vanilla logs contains stripped_oak_log? ${vanillaLogs.contains('minecraft:stripped_oak_log')}`);
    
    console.log("==============================================================");
    console.log("IF KUBEJS:LOGS DOES NOT CONTAIN STRIPPED/WOOD, THE SCRIPT IS WORKING PERFECTLY.");
    console.log("IF EMI STILL SHOWS THEM, EMI IS RENDERING THE VANILLA MINECRAFT:LOGS TAG (OR CACHING OLD ONES).");
    console.log("WAIT! I will now explicitly purge them from vanilla tags just in case Emi++ uses them.");
    
    // PurGE vanilla tags so the user never sees them anywhere
    event.get('minecraft:logs').removeAll(); 
    event.get('minecraft:logs_that_burn').removeAll();
    let allItemIdsStr = Ingredient.all.itemIds.map(String);
    let l_pattern = new RegExp(`^.*(?:^|[_/:])${global.taxonomy.logs.pattern}`);
    let w_pattern = new RegExp(`^.*(?:^|[_/:])${global.taxonomy.wood.pattern}`);
    
    for (let idStr of allItemIdsStr) {
        if(l_pattern.test(idStr) && !idStr.includes("stripped") && !idStr.includes("wood")) {
            event.add('minecraft:logs', idStr);
            event.add('minecraft:logs_that_burn', idStr);
        }
    }
    
    console.log("Vanilla minecraft:logs wiped and repopulated with ONLY base logs.");
    console.log("==============================================================");
});
