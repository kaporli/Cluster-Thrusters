const replacements = {
    "savage_and_ravage:iceologer": "friendsandfoes:iceologer"
    // "neapolitan:chimpanzee": "alexsmobs:capuchin_monkey"
};

EntityEvents.checkSpawn(event => {
    const oldType = event.entity.type.toString();
    const newType = replacements[oldType];

    if (!newType) return;

    const { x, y, z, level } = event.entity;

    event.cancel();
    
    level.server.scheduleInTicks(1, () => {
        const replacement = level.createEntity(newType);
        if (!replacement) return;

        replacement.setPos(x, y, z);
        replacement.spawn();
    });
});
