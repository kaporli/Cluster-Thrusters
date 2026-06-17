var taxonomy = global.taxonomy;
var standaloneTags = global.standaloneTags;
var customEmiGroups = global.customEmiGroups;
var nativeEmiGroups = global.nativeEmiGroups;
var modifierTokens = global.modifierTokens;
var materials = global.materials || {};

EmiPlusPlusEvents.registerGroups(function (event) {
    var tKeys = Object.keys(modifierTokens);
    var mKeys = Object.keys(materials);

    function safeRegister(id, tag) {
        try {
            event.register(id, tag);
        } catch (e) {}
    }

    function registerTaxonomyNode(key, nodeData, inheritedDynamic) {
        if (nodeData.disabled) return;

        var passDownDynamic = nodeData.dynamicGrouping || inheritedDynamic || false;
        var useMods = passDownDynamic && !nodeData.noModifiers;
        var useMats = passDownDynamic && !nodeData.noMaterials;

        if (key !== "blocks") {
            safeRegister("kubejs:" + key, "#kubejs:" + key);
        }

        if (useMods || useMats) {
            var suffix = nodeData.isSink ? "blocks" : key;

            if (useMods) {
                tKeys.forEach(function (t1) {
                    safeRegister("kubejs:" + t1 + "_" + suffix, "#kubejs:" + t1 + "_" + suffix);

                    if (useMats) {
                        mKeys.forEach(function (m) {
                            safeRegister("kubejs:" + t1 + "_" + m + "_" + suffix, "#kubejs:" + t1 + "_" + m + "_" + suffix);
                        });
                    }

                    tKeys.forEach(function (t2) {
                        if (t1 >= t2) return;
                        var c2 = [t1, t2].sort().join("_");
                        safeRegister("kubejs:" + c2 + "_" + suffix, "#kubejs:" + c2 + "_" + suffix);

                        if (useMats) {
                            mKeys.forEach(function (m) {
                                safeRegister("kubejs:" + c2 + "_" + m + "_" + suffix, "#kubejs:" + c2 + "_" + m + "_" + suffix);
                            });
                        }
                    });
                });
            }

            if (useMats) {
                mKeys.forEach(function (m) {
                    safeRegister("kubejs:" + m + "_" + suffix, "#kubejs:" + m + "_" + suffix);
                });
            }
        }

        // Recurse into children
        var children =
            typeof nodeData === "object" &&
            !Array.isArray(nodeData) &&
            nodeData.children
                ? nodeData.children
                : {};
        Object.keys(children).forEach(function (ck) {
            registerTaxonomyNode(ck, children[ck], passDownDynamic);
        });
    }

    Object.keys(taxonomy).forEach(function (pk) {
        registerTaxonomyNode(pk, taxonomy[pk], false);
    });

    Object.keys(standaloneTags).forEach(function (k) {
        safeRegister("kubejs:" + k, "#kubejs:" + k);
    });

    Object.keys(customEmiGroups).forEach(function (k) {
        safeRegister(k, "#" + k);
    });

    nativeEmiGroups.forEach(function (k) {
        var isTag = k.indexOf("#") === 0;
        safeRegister(isTag ? k.substring(1) : k, isTag ? k : "#" + k);
    });
});