const taxonomy = global.taxonomy;
const standaloneTags = global.standaloneTags;
const customEmiGroups = global.customEmiGroups;
const nativeEmiGroups = global.nativeEmiGroups;
const modifierTokens = global.modifierTokens;

EmiPlusPlusEvents.registerGroups((event) => {
    function registerTaxonomyNode(key, nodeData, inheritedDynamic) {
        var currentDynamic =
            nodeData.dynamicGrouping || inheritedDynamic || false;

        if (key !== "blocks") {
            event.register("kubejs:" + key, "#kubejs:" + key);
        }

        if (currentDynamic) {
            var suffix = nodeData.isSink ? "blocks" : key;
            var tKeys = Object.keys(modifierTokens);
            tKeys.forEach((t1) => {
                event.register(
                    "kubejs:" + t1 + "_" + suffix,
                    "#kubejs:" + t1 + "_" + suffix,
                );
                tKeys.forEach((t2) => {
                    if (t1 >= t2) return;
                    var c2 = [t1, t2].sort().join("_");
                    event.register(
                        "kubejs:" + c2 + "_" + suffix,
                        "#kubejs:" + c2 + "_" + suffix,
                    );
                });
            });
        }

        var children =
            typeof nodeData === "object" &&
            !Array.isArray(nodeData) &&
            nodeData.children
                ? nodeData.children
                : {};
        Object.keys(children).forEach((ck) =>
            registerTaxonomyNode(ck, children[ck], currentDynamic),
        );
    }

    Object.keys(taxonomy).forEach((pk) =>
        registerTaxonomyNode(pk, taxonomy[pk], false),
    );
    Object.keys(standaloneTags).forEach((k) =>
        event.register("kubejs:" + k, "#kubejs:" + k),
    );
    Object.keys(customEmiGroups).forEach((k) => event.register(k, "#" + k));
    nativeEmiGroups.forEach((k) => {
        var isTag = k.indexOf("#") === 0;
        event.register(isTag ? k.substring(1) : k, isTag ? k : "#" + k);
    });
});
