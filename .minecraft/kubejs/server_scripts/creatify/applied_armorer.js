ServerEvents.recipes(event => {

    // ==========================================================
    // AMMO  (Tesla Coil charging)
    // ==========================================================

    // etched_quartz_bullet — standard rifle/SMG/pistol ammo
    event.remove({ id: 'applied_armorer:ammo/etched_quartz_bullet' });
    event.custom({
        type: 'createaddition:charging',
        input: { type: 'forge:nbt', item: 'tacz:ammo', nbt: '{AmmoId:"create_armorer:gas_pistol_ammo"}' },
        result: { item: 'tacz:ammo', count: 8, nbt: '{AmmoId:"applied_armorer:etched_quartz_bullet"}' },
        energy: 4000,
        maxChargeRate: 200
    })

    // hard_core_quartz_bullet — sniper ammo
    event.remove({ id: 'applied_armorer:ammo/hard_core_quartz_bullet' });
    event.custom({
        type: 'createaddition:charging',
        input: { type: 'forge:nbt', item: 'tacz:ammo', nbt: '{AmmoId:"create_armorer:rbapb"}' },
        result: { item: 'tacz:ammo', count: 4, nbt: '{AmmoId:"applied_armorer:hard_core_quartz_bullet"}' },
        energy: 8000,
        maxChargeRate: 200
    })

    // cluster_quartz_bullet — shotgun pellet ammo
    event.remove({ id: 'applied_armorer:ammo/cluster_quartz_bullet' });
    event.custom({
        type: 'createaddition:charging',
        input: { type: 'forge:nbt', item: 'tacz:ammo', nbt: '{AmmoId:"tacz:12g"}' },
        result: { item: 'tacz:ammo', count: 8, nbt: '{AmmoId:"applied_armorer:cluster_quartz_bullet"}' },
        energy: 4000,
        maxChargeRate: 200
    })

    // fluix_battery — EMG energy cell ammo (3 ingredients → shapeless craft)
    event.remove({ id: 'applied_armorer:ammo/fluix_battery' });
    event.shapeless(
        Item.of('tacz:ammo', 4, '{AmmoId:"applied_armorer:fluix_battery"}'),
        ['ae2:silicon', 'ae2:calculation_processor', 'ae2:fluix_crystal']
    )

    // fluix_infused_grenade — grenade launcher explosive
    event.remove({ id: 'applied_armorer:ammo/fluix_infused_grenade' });
    event.custom({
        type: 'createaddition:charging',
        input: { type: 'forge:nbt', item: 'tacz:ammo', nbt: '{AmmoId:"create_armorer:gernade"}' },
        result: { item: 'tacz:ammo', count: 2, nbt: '{AmmoId:"applied_armorer:fluix_infused_grenade"}' },
        energy: 6000,
        maxChargeRate: 200
    })

    // ==========================================================
    // GUNS  (Create Mechanical Crafting — AE2 components)
    // ==========================================================

    // ── Tier 1: Pistols ───────────────────────────────────────

    // niklas_pistol_semi_pride
    event.remove({ id: 'applied_armorer:gun/niklas_pistol_semi_pride' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            Y: { item: 'ae2:fluix_smart_cable' },
            W: { item: 'create:precision_mechanism' },
            N: { item: 'createimmersivetacz:firing_mechanism' },
            H: { item: 'ae2:flawless_budding_quartz' },
            S: { item: 'ae2:sky_stone_block' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            O: { item: 'ae2:quartz_block' },
            K: { item: 'ae2:certus_quartz_crystal' },
            U: { item: 'ae2:fluix_block' },
            V: { item: 'ae2:dense_energy_cell' }
        },
        pattern: [
            '    K',
            'BYWNH',
            ' VSTO',
            '    U'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:niklas_pistol_semi_pride"}' }
    })

    // niklas_pistol_semi_right
    event.remove({ id: 'applied_armorer:gun/niklas_pistol_semi_right' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            C: { item: 'ae2:fluix_covered_dense_cable' },
            W: { item: 'create:precision_mechanism' },
            N: { item: 'createimmersivetacz:firing_mechanism' },
            H: { item: 'ae2:flawless_budding_quartz' },
            S: { item: 'ae2:sky_stone_block' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            J: { item: 'ae2:quartz_cluster' },
            U: { item: 'ae2:fluix_block' },
            O: { item: 'ae2:quartz_block' },
            D: { item: 'ae2:dense_energy_cell' }
        },
        pattern: [
            '     J',
            'BCWNDH',
            ' ST SO',
            '   O U',
            '     U'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:niklas_pistol_semi_right"}' }
    })

    // niklas_pistol_semi_union
    event.remove({ id: 'applied_armorer:gun/niklas_pistol_semi_union' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            Y: { item: 'ae2:fluix_smart_cable' },
            W: { item: 'create:precision_mechanism' },
            N: { item: 'createimmersivetacz:firing_mechanism' },
            H: { item: 'ae2:flawless_budding_quartz' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            S: { item: 'ae2:sky_stone_block' },
            J: { item: 'ae2:quartz_cluster' },
            E: { item: 'ae2:energy_cell' },
        },
        pattern: [
            '    J',
            'BYWNH',
            '  ETS',
            '    S',
            '    S'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:niklas_pistol_semi_union"}' }
    })

    // niklas_pistol_double_win_win
    event.remove({ id: 'applied_armorer:gun/niklas_pistol_double_win_win' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            Y: { item: 'ae2:fluix_smart_cable' },
            W: { item: 'create:precision_mechanism' },
            N: { item: 'createimmersivetacz:firing_mechanism' },
            H: { item: 'ae2:flawless_budding_quartz' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            S: { item: 'ae2:sky_stone_block' },
            J: { item: 'ae2:quartz_cluster' },
            E: { item: 'ae2:energy_cell' },
        },
        pattern: [
            '    J    ',
            'BYWNH   J',
            '  ETBYWNH',
            '      ETS'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:niklas_pistol_double_win_win"}' }
    })

    // ── Tier 2: Lever Action ──────────────────────────────────

    // niklas_lever_vigenere
    event.remove({ id: 'applied_armorer:gun/niklas_lever_vigenere' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            C: { item: 'ae2:fluix_covered_dense_cable' },
            W: { item: 'create:precision_mechanism' },
            N: { item: 'createimmersivetacz:firing_mechanism' },
            O: { item: 'ae2:quartz_block' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            S: { item: 'ae2:sky_stone_block' },
            J: { item: 'ae2:quartz_cluster' },
            E: { item: 'ae2:energy_cell' },
            D: { item: 'ae2:dense_energy_cell' },
            U: { item: 'ae2:fluix_block' },
            H: { item: 'ae2:flawless_budding_quartz' },
            K: { item: 'ae2:certus_quartz_crystal' },
            Z: { item: 'ae2:sky_stone_stairs'}
        },
        pattern: [
            ' K    J  ',
            'BCEDWNH  ',
            '  ST SUSZ',
            '    OOUSS'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:niklas_lever_vigenere"}' }
    })

    // ── Tier 2: SMG ───────────────────────────────────────────

    // niklas_smg_freedom
    event.remove({ id: 'applied_armorer:gun/niklas_smg_freedom' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            K: { item: 'ae2:certus_quartz_crystal' },
            J: { item: 'ae2:quartz_cluster' },
            O: { item: 'ae2:quartz_block' },
            S: { item: 'ae2:sky_stone_block' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            N: { item: 'createimmersivetacz:firing_mechanism' },
            W: { item: 'create:precision_mechanism' },
            U: { item: 'ae2:fluix_block' },
            E: { item: 'ae2:energy_cell' },
            D: { item: 'ae2:dense_energy_cell' },
            Z: { item: 'ae2:sky_stone_stairs'},
            Y: { item: 'ae2:fluix_smart_cable' },
            
        },
        pattern: [
            'KO     J ',
            ' BYDWWNS ',
            '  EZ  TU ',
            '       UU',
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:niklas_smg_freedom"}' }
    })

    // ── Tier 2: Assault Rifle ─────────────────────────────────

    // moritz_rifle_ar77
    event.remove({ id: 'applied_armorer:gun/moritz_rifle_ar77' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            C: { item: 'ae2:fluix_covered_dense_cable' },
            K: { item: 'ae2:certus_quartz_crystal' },
            J: { item: 'ae2:quartz_cluster' },
            O: { item: 'ae2:quartz_block' },
            S: { item: 'ae2:sky_stone_block' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            N: { item: 'createimmersivetacz:firing_mechanism' },
            W: { item: 'create:precision_mechanism' },
            U: { item: 'ae2:fluix_block' },
            D: { item: 'ae2:dense_energy_cell' },
            H: { item: 'ae2:flawless_budding_quartz' },
            A: { item: 'create:shaft' },
            Z: { item: 'ae2:sky_stone_stairs'}
        },
        pattern: [
            ' K     KJ',
            'BCCOWWWNH',
            ' ODDS OND',
            '  OS  T U',
            '   A  ZSS'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:moritz_rifle_ar77"}' }
    })

    // ── Tier 2: Shotgun ───────────────────────────────────────

    // moritz_shotgun_sg914
    event.remove({ id: 'applied_armorer:gun/moritz_shotgun_sg914' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            C: { item: 'ae2:fluix_covered_dense_cable' },
            K: { item: 'ae2:certus_quartz_crystal' },
            J: { item: 'ae2:quartz_cluster' },
            O: { item: 'ae2:quartz_block' },
            S: { item: 'ae2:sky_stone_block' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            N: { item: 'createimmersivetacz:firing_mechanism' },
            W: { item: 'create:precision_mechanism' },
            U: { item: 'ae2:fluix_block' },
            D: { item: 'ae2:dense_energy_cell' },
            H: { item: 'ae2:flawless_budding_quartz' },
            A: { item: 'create:shaft' },
            Y: { item: 'ae2:sky_stone_slab'},
            Z: { item: 'ae2:sky_stone_stairs'},
            Z: { item: 'ae2:sky_stone_stairs'}
        },
        pattern: [
            ' KYYY  YJ',
            'BCCOWWWNH',
            ' ODDZ TND',
            '  OS  ZSU',
            '   A     '
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:moritz_shotgun_sg914"}' }
    })

    // ── Tier 3: Grenade Launcher ──────────────────────────────

    // moritz_gernade_gl3
    event.remove({ id: 'applied_armorer:gun/moritz_gernade_gl3' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            K: { item: 'ae2:certus_quartz_crystal' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            S: { item: 'createbigcannons:small_steel_cannon_layer' },
            L: { item: 'createbigcannons:small_steel_cannon_layer' },
            H: { item: 'ae2:flawless_budding_quartz' },
            C: { item: 'ae2:fluix_covered_dense_cable' },
            O: { item: 'ae2:quartz_block' },
            B: { item: 'createimmersivetacz:gunbarrel' },
            W: { item: 'create:precision_mechanism' },
            N: { item: 'createimmersivetacz:firing_mechanism' },
            P: { item: 'minecraft:spyglass' },
            U: { item: 'ae2:fluix_block' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            A: { item: 'create:shaft' },
            D: { item: 'ae2:dense_energy_cell' },
            Z: { item: 'createbigcannons:steel_sliding_breech' },
            V: { item: 'createbigcannons:steel_block' },
            R: { item: 'createbigcannons:he_shell'},
            X: { item: 'createbigcannons:thick_steel_cannon_chamber' },

        },
        pattern: [
            '     P   ',
            '   KOQ   ',
            '    OWWNH',
            'BCDDD  TU',
            '  RRXV  U',
            '    SLZ A'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:moritz_gernade_gl3"}' }
    })

    // ── Tier 4: Sniper Rifle ──────────────────────────────────

    // moritz_sniper_semi_k30
    // p = minecraft:spyglass   a = create:shaft
    event.remove({ id: 'applied_armorer:gun/moritz_sniper_semi_k30' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            K: { item: 'ae2:certus_quartz_crystal' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            S: { item: 'ae2:sky_stone_block' },
            H: { item: 'ae2:flawless_budding_quartz' },
            C: { item: 'ae2:fluix_covered_dense_cable' },
            O: { item: 'ae2:quartz_block' },
            B: { item: 'createimmersivetacz:gunbarrel' },
            W: { item: 'create:precision_mechanism' },
            N: { item: 'createimmersivetacz:firing_mechanism' },
            p: { item: 'minecraft:spyglass' },
            U: { item: 'ae2:fluix_block' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            A: { item: 'create:shaft' },
            D: { item: 'ae2:dense_energy_cell' }
        },
        pattern: [
            ' K     pQ',
            'BCDWWNNHO',
            ' UU SDD O',
            ' AA   WTU'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:moritz_sniper_semi_k30"}' }
    })

    // ── Tier 4: Heavy Machine Gun ─────────────────────────────

    // moritz_mg_hmg22
    // n = ae2:cell_component_16k   (C row-3 is undefined in original pattern — preserved as-is)
    event.remove({ id: 'applied_armorer:gun/moritz_mg_hmg22' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            K: { item: 'ae2:certus_quartz_crystal' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            S: { item: 'ae2:sky_stone_block' },
            H: { item: 'ae2:flawless_budding_quartz' },
            C: { item: 'ae2:fluix_covered_dense_cable' },
            O: { item: 'ae2:quartz_block' },
            B: { item: 'createimmersivetacz:gunbarrel' },
            W: { item: 'create:precision_mechanism' },
            N: { item: 'createimmersivetacz:firing_mechanism' },
            P: { item: 'minecraft:spyglass' },
            U: { item: 'ae2:fluix_block' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            A: { item: 'create:shaft' },
            D: { item: 'ae2:dense_energy_cell' },
        },
        pattern: [
            'KOQQ   P ',
            ' SWWNNNH ',
            'BCCDDSTWH',
            ' UDDU  UH',
            ' A  A   U'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:moritz_mg_hmg22"}' }
    })

    // ── Tier 5: EMG Prototype (MAXIMUM ENDGAME) ───────────────
    // o = ae2:controller   s = ae2:singularity   q = ae2:quantum_entangled_singularity
    event.remove({ id: 'applied_armorer:gun/moritz_mg_emg_prototype' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            // K: { item: 'ae2:certus_quartz_crystal' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            H: { item: 'ae2:flawless_budding_quartz' },
            // C: { item: 'ae2:fluix_covered_dense_cable' },
            O: { item: 'ae2:quartz_block' },
            // B: { item: 'createimmersivetacz:gunbarrel' },
            W: { item: 'create:precision_mechanism' },
            N: { item: 'createimmersivetacz:firing_mechanism' },
            U: { item: 'ae2:fluix_block' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            D: { item: 'ae2:dense_energy_cell' },
            G: { item: 'ae2:quantum_entangled_singularity' },
            S: { item: 'ae2:singularity' },
            F: { item: 'ae2:controller' },
            L: { item: 'ae2:fluix_crystal' },
            R: { item: 'ae2:mysterious_cube'},
            X: { item: 'minecraft:nether_star'},
            P: { type: 'forge:nbt', item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:moritz_mg_hmg22"}' },
            C: { type: 'forge:nbt', item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:moritz_rifle_ar77"}' },
            Z: { type: 'forge:nbt', item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:niklas_smg_freedom"}' },
            J: { type: 'forge:nbt', item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:niklas_pistol_semi_pride"}' }
        },
        pattern: [
            '  P   P  ',
            ' CH   HC ',
            ' UHH HHU ',
            'LDDHFHDDL',
            'JWNGSGNWJ',
            '  DWNWD  ',
            'LUUDXDUUL',
            'ZO R R OZ',
            ' Q T T Q '
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:moritz_mg_emg_prototype"}' }
    })

    // ==========================================================
    // ATTACHMENTS  (Create Mechanical Crafting — AE2 components)
    // ==========================================================

    // ── Extended Magazines ────────────────────────────────────

    // extended_mag_aa_1
    event.remove({ id: 'applied_armorer:attachments/extended_mag_aa_1' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IKI', ' K ', 'III' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:extended_mag_aa_1"}' }
    })

    // extended_mag_aa_2
    event.remove({ id: 'applied_armorer:attachments/extended_mag_aa_2' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IKI', 'ILI', 'IKI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' },
            L: { item: 'ae2:logic_processor' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:extended_mag_aa_2"}' }
    })

    // extended_mag_aa_3
    event.remove({ id: 'applied_armorer:attachments/extended_mag_aa_3' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IQI', 'IAI', 'IQI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            A: { item: 'ae2:calculation_processor' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:extended_mag_aa_3"}' }
    })

    // ── Extended Mid-Capacity Magazines ───────────────────────

    // extended_mid_mag_aa_1
    event.remove({ id: 'applied_armorer:attachments/extended_mid_mag_aa_1' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'KIK', ' I ', 'KIK' ],
        key: {
            K: { item: 'ae2:certus_quartz_crystal' },
            I: { item: 'minecraft:iron_ingot' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:extended_mid_mag_aa_1"}' }
    })

    // extended_mid_mag_aa_2
    event.remove({ id: 'applied_armorer:attachments/extended_mid_mag_aa_2' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'KIK', 'ILI', 'KIK' ],
        key: {
            K: { item: 'ae2:certus_quartz_crystal' },
            I: { item: 'minecraft:iron_ingot' },
            L: { item: 'ae2:logic_processor' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:extended_mid_mag_aa_2"}' }
    })

    // extended_mid_mag_aa_3
    event.remove({ id: 'applied_armorer:attachments/extended_mid_mag_aa_3' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'QIQ', 'IAI', 'QIQ' ],
        key: {
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            I: { item: 'minecraft:iron_ingot' },
            A: { item: 'ae2:calculation_processor' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:extended_mid_mag_aa_3"}' }
    })

    // ── Extended Batteries ────────────────────────────────────

    // extended_battery_aa_1
    event.remove({ id: 'applied_armorer:attachments/extended_battery_aa_1' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IPI', 'IKI', 'IPI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            P: { item: 'ae2:energy_cell' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:extended_battery_aa_1"}' }
    })

    // extended_battery_aa_2
    event.remove({ id: 'applied_armorer:attachments/extended_battery_aa_2' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IPI', 'PQP', 'IPI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            P: { item: 'ae2:energy_cell' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:extended_battery_aa_2"}' }
    })

    // extended_battery_aa_3
    event.remove({ id: 'applied_armorer:attachments/extended_battery_aa_3' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IVI', 'VEV', 'IVI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            V: { item: 'ae2:dense_energy_cell' },
            E: { item: 'ae2:engineering_processor' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:extended_battery_aa_3"}' }
    })

    // ── Grips ─────────────────────────────────────────────────

    // grip_eazy
    event.remove({ id: 'applied_armorer:attachments/grip_eazy' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'XIK', 'IKI', ' I ' ],
        key: {
            X: { item: 'minecraft:iron_nugget' },
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:grip_eazy"}' }
    })

    // grip_hf_17
    event.remove({ id: 'applied_armorer:attachments/grip_hf_17' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IFI', 'IKI', ' I ' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            F: { item: 'ae2:fluix_crystal' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:grip_hf_17"}' }
    })

    // grip_lf11
    event.remove({ id: 'applied_armorer:attachments/grip_lf11' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IKI', 'ILI', ' I ' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' },
            L: { item: 'ae2:logic_processor' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:grip_lf11"}' }
    })

    // grip_light
    event.remove({ id: 'applied_armorer:attachments/grip_light' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'XDX', 'XDX', ' X ' ],
        key: {
            X: { item: 'minecraft:iron_nugget' },
            D: { item: 'ae2:certus_quartz_dust' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:grip_light"}' }
    })

    // grip_sl_2  (j = ae2:printed_silicon)
    event.remove({ id: 'applied_armorer:attachments/grip_sl_2' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IjI', 'IKI', ' I ' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            j: { item: 'ae2:printed_silicon' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:grip_sl_2"}' }
    })

    // grip_stable
    event.remove({ id: 'applied_armorer:attachments/grip_stable' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IRI', 'IKI', 'IKI', 'IRI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            R: { item: 'ae2:quartz_fiber' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:grip_stable"}' }
    })

    // grip_static_1
    event.remove({ id: 'applied_armorer:attachments/grip_static_1' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IQI', 'IKI', 'IKI', 'IQI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:grip_static_1"}' }
    })

    // grip_storm
    event.remove({ id: 'applied_armorer:attachments/grip_storm' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IFI', 'IQI', 'IQI', 'IFI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            F: { item: 'ae2:fluix_crystal' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:grip_storm"}' }
    })

    // ── Muzzle Chips  (AE2 Inscriber — no key/pattern system) ─
    event.remove({ id: 'applied_armorer:attachments/muzzle_chip_atm_x2' });
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            top: { item: 'ae2:logic_processor' },
            middle: { item: 'create_connected:control_chip' },
            bottom: { item: 'create_connected:kinetic_battery' }
        },
        mode: 'inscribe',
        result: { item: 'tacz:attachment', nbt: { AttachmentId: 'applied_armorer:muzzle_chip_atm_x2' } }
    })

    event.remove({ id: 'applied_armorer:attachments/muzzle_chip_fat_boy' });
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            top: { item: 'quark:gunpowder_sack' },
            middle: { item: 'create_connected:control_chip' },
            bottom: { item: 'create_connected:kinetic_battery' }
        },
        mode: 'inscribe',
        result: { item: 'tacz:attachment', nbt: { AttachmentId: 'applied_armorer:muzzle_chip_fat_boy' } }
    })

    event.remove({ id: 'applied_armorer:attachments/muzzle_chip_firefly' });
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            top: { item: 'create:blaze_cake' },
            middle: { item: 'create_connected:control_chip' },
            bottom: { item: 'create_connected:kinetic_battery' }
        },
        mode: 'inscribe',
        result: { item: 'tacz:attachment', nbt: { AttachmentId: 'applied_armorer:muzzle_chip_firefly' } }
    })

    event.remove({ id: 'applied_armorer:attachments/muzzle_chip_firework' });
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            top: { item: 'minecraft:firework_rocket' },
            middle: { item: 'create_connected:control_chip' },
            bottom: { item: 'create_connected:kinetic_battery' }
        },
        mode: 'inscribe',
        result: { item: 'tacz:attachment', nbt: { AttachmentId: 'applied_armorer:muzzle_chip_firework' } }
    })

    event.remove({ id: 'applied_armorer:attachments/muzzle_chip_hyper_propellant' });
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            top: { item: 'create:blaze_burner' },
            middle: { item: 'create_connected:control_chip' },
            bottom: { item: 'create_connected:kinetic_battery' }
        },
        mode: 'inscribe',
        result: { item: 'tacz:attachment', nbt: { AttachmentId: 'applied_armorer:muzzle_chip_hyper_propellant' } }
    })

    event.remove({ id: 'applied_armorer:attachments/muzzle_chip_pcs_x1' });
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            top: { item: 'ae2:spatial_storage_cell_2' },
            middle: { item: 'create_connected:control_chip' },
            bottom: { item: 'create_connected:kinetic_battery' }
        },
        mode: 'inscribe',
        result: { item: 'tacz:attachment', nbt: { AttachmentId: 'applied_armorer:muzzle_chip_pcs_x1' } }
    })

    // ── Standard Muzzles  (Mechanical Crafting) ───────────────

    // muzzle_bs_mod4
    event.remove({ id: 'applied_armorer:attachments/muzzle_bs_mod4' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IKI', 'III', ' I ' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:muzzle_bs_mod4"}' }
    })

    // muzzle_classic
    event.remove({ id: 'applied_armorer:attachments/muzzle_classic' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IKI', 'IDI', 'IDI', 'IKI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' },
            D: { item: 'ae2:certus_quartz_dust' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:muzzle_classic"}' }
    })

    // muzzle_commander
    event.remove({ id: 'applied_armorer:attachments/muzzle_commander' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IFI', 'IKI', 'IKI', 'IFI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            F: { item: 'ae2:fluix_crystal' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:muzzle_commander"}' }
    })

    // muzzle_ns_1
    event.remove({ id: 'applied_armorer:attachments/muzzle_ns_1' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IRI', 'IKI', 'IKI', 'IRI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            R: { item: 'ae2:quartz_fiber' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:muzzle_ns_1"}' }
    })

    // ── Scopes ────────────────────────────────────────────────

    // scope_ms_14
    event.remove({ id: 'applied_armorer:attachments/scope_ms_14' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'GKG', 'GKG', 'GAG', 'GKG', 'GKG' ],
        key: {
            G: { item: 'ae2:quartz_glass' },
            K: { item: 'ae2:certus_quartz_crystal' },
            A: { item: 'ae2:calculation_processor' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:scope_ms_14"}' }
    })

    // scope_xgs_905
    event.remove({ id: 'applied_armorer:attachments/scope_xgs_905' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'GQG', 'GQG', 'GEG', 'GQG', 'GQG' ],
        key: {
            G: { item: 'ae2:quartz_glass' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            E: { item: 'ae2:engineering_processor' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:scope_xgs_905"}' }
    })

    // ── Sights / Optics ───────────────────────────────────────

    // si_simple_3
    event.remove({ id: 'applied_armorer:attachments/si_simple_3' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'GDG', 'IDI', ' I ' ],
        key: {
            G: { item: 'ae2:quartz_glass' },
            D: { item: 'ae2:certus_quartz_dust' },
            I: { item: 'minecraft:iron_ingot' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:si_simple_3"}' }
    })

    // si_ms_12
    event.remove({ id: 'applied_armorer:attachments/si_ms_12' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'GKG', 'IKI', ' I ' ],
        key: {
            G: { item: 'ae2:quartz_glass' },
            K: { item: 'ae2:certus_quartz_crystal' },
            I: { item: 'minecraft:iron_ingot' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:si_ms_12"}' }
    })

    // si_xs_07
    event.remove({ id: 'applied_armorer:attachments/si_xs_07' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'GKG', 'GAG', 'IKI', ' I ' ],
        key: {
            G: { item: 'ae2:quartz_glass' },
            K: { item: 'ae2:certus_quartz_crystal' },
            A: { item: 'ae2:calculation_processor' },
            I: { item: 'minecraft:iron_ingot' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:si_xs_07"}' }
    })

    // si_double_sided_mirror
    event.remove({ id: 'applied_armorer:attachments/si_double_sided_mirror' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'GIG', 'GKG', 'GKG', 'GIG' ],
        key: {
            G: { item: 'ae2:quartz_glass' },
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:si_double_sided_mirror"}' }
    })

    // si_pride_default
    event.remove({ id: 'applied_armorer:attachments/si_pride_default' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'GFG', 'IKI', ' I ' ],
        key: {
            G: { item: 'ae2:quartz_glass' },
            F: { item: 'ae2:fluix_crystal' },
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:si_pride_default"}' }
    })

    // si_pricision
    event.remove({ id: 'applied_armorer:attachments/si_pricision' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'GQG', 'IKI', ' I ' ],
        key: {
            G: { item: 'ae2:quartz_glass' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:si_pricision"}' }
    })

    // si_profession
    event.remove({ id: 'applied_armorer:attachments/si_profession' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'GLG', 'IKI', ' I ' ],
        key: {
            G: { item: 'ae2:quartz_glass' },
            L: { item: 'ae2:logic_processor' },
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:si_profession"}' }
    })

    // si_zako_2403
    event.remove({ id: 'applied_armorer:attachments/si_zako_2403' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'GFG', 'GAG', 'IKI', ' I ' ],
        key: {
            G: { item: 'ae2:quartz_glass' },
            F: { item: 'ae2:fluix_crystal' },
            A: { item: 'ae2:calculation_processor' },
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:si_zako_2403"}' }
    })

    // sight_type_3741
    event.remove({ id: 'applied_armorer:attachments/sight_type_3741' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'GQG', 'GAG', 'IKI', ' I ' ],
        key: {
            G: { item: 'ae2:quartz_glass' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            A: { item: 'ae2:calculation_processor' },
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:sight_type_3741"}' }
    })

    // ── Bayonets ──────────────────────────────────────────────

    // bayonet_er
    event.remove({ id: 'applied_armorer:attachments/bayonet_er' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IK', ' K', ' K', ' I' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:bayonet_er"}' }
    })

    // bayonet_gladius
    event.remove({ id: 'applied_armorer:attachments/bayonet_gladius' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IF', ' F', ' F', ' I' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            F: { item: 'ae2:fluix_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:bayonet_gladius"}' }
    })

    // ── Bracelets ─────────────────────────────────────────────

    // bracelet_aerial_wristband
    event.remove({ id: 'applied_armorer:attachments/bracelet_aerial_wristband' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'XFX', 'FKF', 'XFX' ],
        key: {
            X: { item: 'minecraft:iron_nugget' },
            F: { item: 'ae2:fluix_crystal' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:bracelet_aerial_wristband"}' }
    })

    // bracelet_broken_handcuffs
    event.remove({ id: 'applied_armorer:attachments/bracelet_broken_handcuffs' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'XIX', 'IKI', 'XIX' ],
        key: {
            X: { item: 'minecraft:iron_nugget' },
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:bracelet_broken_handcuffs"}' }
    })

    // bracelet_broken_watch  (y = gold_ingot  z = gold_nugget)
    event.remove({ id: 'applied_armorer:attachments/bracelet_broken_watch' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'zyz', 'yKy', 'zyz' ],
        key: {
            z: { item: 'minecraft:gold_nugget' },
            y: { item: 'minecraft:gold_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:bracelet_broken_watch"}' }
    })

    // bracelet_exo
    event.remove({ id: 'applied_armorer:attachments/bracelet_exo' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'IEI', 'EME', 'IEI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            E: { item: 'ae2:engineering_processor' },
            M: { item: 'ae2:smooth_sky_stone_block' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:bracelet_exo"}' }
    })

    // bracelet_koeis_armband
    event.remove({ id: 'applied_armorer:attachments/bracelet_koeis_armband' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'KIK', 'IFI', 'KIK' ],
        key: {
            K: { item: 'ae2:certus_quartz_crystal' },
            I: { item: 'minecraft:iron_ingot' },
            F: { item: 'ae2:fluix_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:bracelet_koeis_armband"}' }
    })

    // bracelet_magma_wristband  (m = minecraft:magma_cream)
    event.remove({ id: 'applied_armorer:attachments/bracelet_magma_wristband' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'XmX', 'mQm', 'XmX' ],
        key: {
            X: { item: 'minecraft:iron_nugget' },
            m: { item: 'minecraft:magma_cream' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:bracelet_magma_wristband"}' }
    })

    // bracelet_niklas
    event.remove({ id: 'applied_armorer:attachments/bracelet_niklas' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [ 'KFK', 'FIF', 'KFK' ],
        key: {
            K: { item: 'ae2:certus_quartz_crystal' },
            F: { item: 'ae2:fluix_crystal' },
            I: { item: 'minecraft:iron_ingot' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:bracelet_niklas"}' }
    })

    // bracelet_zenith
    event.remove({ id: 'applied_armorer:attachments/bracelet_zenith' });
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '  QEEQ  ',
            ' VVVVVV ',
            'EV    VE',
            'QV    VQ',
            'EV    VE',
            ' VVVVVV ',
            '  QEEQ  '
        ],
        key: {
            E: { item: 'ae2:engineering_processor' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            V: { item: 'ae2:dense_energy_cell' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:bracelet_zenith"}' }
    })

})
