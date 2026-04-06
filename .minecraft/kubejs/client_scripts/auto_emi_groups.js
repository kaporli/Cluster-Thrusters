// --- Dynamic UI Group Registration ---
// This file mirrors the structure of auto_tags.js.
// Any new group added to the objects here will automatically be drawn as a tab in EMI.

// Data imported from startup_scripts/shared_taxonomy.js
const taxonomy = global.taxonomy;
const standaloneTags = global.standaloneTags;
const basicSuffixes = global.basicSuffixes;
const customEmiGroups = global.customEmiGroups;
const nativeEmiGroups = global.nativeEmiGroups;
const curiosTypes = global.curiosTypes;


EmiPlusPlusEvents.registerGroups(event => {
    
    // 1. Process parent-child taxonomy
    function registerTaxonomyNode(key, nodeData) {
        event.register(`kubejs:${key}`, `#kubejs:${key}`);
        let children = (typeof nodeData === 'object' && !Array.isArray(nodeData) && nodeData.children) ? nodeData.children : {};
        Object.keys(children).forEach(cKey => {
            registerTaxonomyNode(cKey, children[cKey]);
        });
    }

    Object.keys(taxonomy).forEach(parentKey => {
        registerTaxonomyNode(parentKey, taxonomy[parentKey]);
    });

    // 2. Process standalone tags
    Object.keys(standaloneTags).forEach(key => {
        event.register(`kubejs:${key}`, `#kubejs:${key}`);
    });

    // 3. Process modifier tags
    let mods = ['smooth', 'cut', 'chiseled', 'polished'];
    mods.forEach(mod => {
        event.register(`kubejs:${mod}_blocks`, `#kubejs:${mod}_blocks`);
    });

    // 4. Processing basic fallbacks
    basicSuffixes.forEach(suffix => {
        event.register(`kubejs:${suffix}`, `#kubejs:${suffix}`);
    });

    // 5. Explicitly Register Curios
    curiosTypes.forEach(c => {
        event.register(`curios:${c}s`, `#curios:${c}`);
    });

    // 6. Explicitly Register Custom Formed EMI Groups
    Object.keys(customEmiGroups).forEach(key => {
        event.register(key, `#${key}`);
    });

    // 7. Explicitly Register Native Mod Groups
    nativeEmiGroups.forEach(key => {
        event.register(key, `#${key}`);
    });

    console.log('EMI++ AUTO GROUPS REGISTRATION COMPLETE!');
});

EmiPlusPlusEvents.registerGroups(event => {
    console.log("=== EMI++ CLIENT REGISTRATION DEBUG ===");
    // Just registering is fine, but how do we dump? We can't really dump EMI tags easily.
});
