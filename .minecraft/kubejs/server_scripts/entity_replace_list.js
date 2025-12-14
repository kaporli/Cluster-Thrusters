const replacements = {
    "savage_and_ravage:iceologer": "friendsandfoes:iceologer",
    "neapolitan:chimpanzee": "alexsmobs:capuchin_monkey"
};

EntityEvents.spawned(event => {
    const oldType = event.entity.type;
    const newType = replacements[oldType];

    if (newType) {
        const { x, y, z, level } = event.entity;

        event.entity.remove();

        let replacement = level.createEntity(newType);
        replacement.x = x;
        replacement.y = y;
        replacement.z = z;
        replacement.spawn();
    }
});
