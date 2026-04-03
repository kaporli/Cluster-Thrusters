ServerEvents.tags('item', event => {
    let items = [];
    Utils.getRegistry('item').keySet().forEach(key => {
        items.push(key.toString());
    });
    JsonIO.write('kubejs/data/item_dump.json', { items: items });
});
