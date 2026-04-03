ServerEvents.tags('item', event => {
    let tag = event.get('kubejs:emi_doors').getObjectIds();
    console.log("ACTUAL DOORS COUNT IN ENGINE: " + tag.size());
    let autoGroupCount = event.get('kubejs:auto_suffix_sword').getObjectIds();
    console.log("ACTUAL SWORDS COUNT IN ENGINE: " + autoGroupCount.size());
    let macawDoor = event.get('kubejs:emi_mcwdoors_japanese_doors').getObjectIds();
    console.log("ACTUAL MACAW DOORS COUNT: " + macawDoor.size());
});
