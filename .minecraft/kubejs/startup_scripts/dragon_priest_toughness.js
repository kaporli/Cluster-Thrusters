// priority: 0

const MOD_ID = 'ice_and_fire_spellbooks'

if (!Platform.isLoaded(MOD_ID)) {
  console.log('[Dragon Priest Toughness] Skipping patch: ' + MOD_ID + ' is not loaded')
} else {
  const AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')
  const Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
  const EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot')
  const DragonArmorMaterials = Java.loadClass('net.acetheeldritchking.ice_and_fire_spellbooks.items.armor.DragonArmorMaterials')
  const HashMultimap = Java.loadClass('com.google.common.collect.HashMultimap')

  const PRIEST_MATERIALS = [
    DragonArmorMaterials.FIRE_DRAGON_PRIEST,
    DragonArmorMaterials.ICE_DRAGON_PRIEST,
    DragonArmorMaterials.LIGHTNING_DRAGON_PRIEST
  ]

  const ARMOR_SLOTS = [
    EquipmentSlot.HEAD,
    EquipmentSlot.CHEST,
    EquipmentSlot.LEGS,
    EquipmentSlot.FEET
  ]

  let patched = false

  ItemEvents.modification(() => {
    if (patched) {
      return
    }

    patched = true

    try {
      PRIEST_MATERIALS.forEach(material => {
        const slotMap = material.getSlotToAttributeMap()

        ARMOR_SLOTS.forEach(slot => {
          const attributes = slotMap.get(slot)
          if (!attributes) {
            return
          }

          const mutableAttributes = HashMultimap.create(attributes)

          const toughnessMods = mutableAttributes.get(Attributes.ARMOR_TOUGHNESS)
          if (!toughnessMods || toughnessMods.size() === 0) {
            return
          }

          const copy = []
          const iterator = toughnessMods.iterator()
          while (iterator.hasNext()) {
            copy.push(iterator.next())
          }

          mutableAttributes.removeAll(Attributes.ARMOR_TOUGHNESS)

          copy.forEach(mod => {
            mutableAttributes.put(
              Attributes.ARMOR_TOUGHNESS,
              new AttributeModifier(mod.getId(), mod.getName(), 2.0, mod.getOperation())
            )
          })

          slotMap.put(slot, mutableAttributes)
        })
      })

      console.log('[Dragon Priest Toughness] Patched dragon priest armor material toughness to 2.0')
    } catch (e) {
      console.log('[Dragon Priest Toughness] Patch failed: ' + e)
    }
  })
}
