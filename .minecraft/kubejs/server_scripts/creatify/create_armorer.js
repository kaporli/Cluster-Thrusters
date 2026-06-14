ServerEvents.recipes(event => {

    // ==========================================================
    // ATTACHMENTS
    // ==========================================================

    // ap_projectile -> muzzle_refit_ap_grenade
    event.remove({ id: 'createimmersivetacz:attachments/ap_projectile' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { F: { item: 'create:fluid_tank' }, B: { item: 'createimmersivetacz:gunbarrel' } },
        pattern: [
            'BFF'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:muzzle_refit_ap_grenade"}' }
    });

    // bigger_cylinder -> muzzle_refit_bigger_cylinder
    event.remove({ id: 'createimmersivetacz:attachments/bigger_cylinder' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { P: { item: 'create:fluid_pipe' }, A: { item: 'create:andesite_alloy' } },
        pattern: [
            'PAA'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:muzzle_refit_bigger_cylinder"}' }
    });

    // blasting_protocol -> refit_blasting_protocol
    event.remove({ id: 'createimmersivetacz:attachments/blasting_protocol' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { S: { item: 'create:shaft' }, T: { item: 'minecraft:tnt' } },
        pattern: [
            'STS'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:refit_blasting_protocol"}' }
    });

    // brass_retractor -> muzzle_refit_brass_retractor
    event.remove({ id: 'createimmersivetacz:attachments/brass_retractor' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { B: { item: 'create:brass_ingot' } },
        pattern: [
            'BB'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:muzzle_refit_brass_retractor"}' }
    });

    // extended_mag_1 -> extended_mag_ca_1
    event.remove({ id: 'createimmersivetacz:attachments/extended_mag_1' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { B: { item: 'create:brass_sheet' } },
        pattern: [
            'B B',
            'B B',
            'BBB'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:extended_mag_ca_1"}' }
    });

    // extended_mag_2 -> extended_mag_ca_2
    event.remove({ id: 'createimmersivetacz:attachments/extended_mag_2' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { B: { item: 'create:brass_sheet' }, D: { item: 'minecraft:diamond' } },
        pattern: [
            'B B',
            'BDB',
            'BBB'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:extended_mag_ca_2"}' }
    });

    // extended_mag_3 -> extended_mag_ca_3
    event.remove({ id: 'createimmersivetacz:attachments/extended_mag_3' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { B: { item: 'create:brass_sheet' }, N: { item: 'minecraft:netherite_ingot' } },
        pattern: [
            'B B',
            'BNB',
            'BBB'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:extended_mag_ca_3"}' }
    });

    // fluid_pipe_grip -> grip_pipe
    event.remove({ id: 'createimmersivetacz:attachments/fluid_pipe_grip' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { F: { item: 'create:fluid_pipe' } },
        pattern: [
            'F',
            'F'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:grip_pipe"}' }
    });

    // fluid_pipe_muzzle -> muzzle_pipe
    event.remove({ id: 'createimmersivetacz:attachments/fluid_pipe_muzzle' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { F: { item: 'create:fluid_pipe' } },
        pattern: [
            'FF'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:muzzle_pipe"}' }
    });

    // fluid_pipe_scope -> scope_pipe
    event.remove({ id: 'createimmersivetacz:attachments/fluid_pipe_scope' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { F: { item: 'create:fluid_pipe' }, G: { item: 'minecraft:glass_pane' } },
        pattern: [
            'FGF'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:scope_pipe"}' }
    });

    // gantry_shaft_grip -> grip_gantry_shaft
    event.remove({ id: 'createimmersivetacz:attachments/gantry_shaft_grip' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { G: { item: 'create:gantry_shaft' } },
        pattern: [
            'G',
            'G'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:grip_gantry_shaft"}' }
    });

    // lava_perfusion_bottle -> muzzle_refit_lava_perfusion_bottle
    event.remove({ id: 'createimmersivetacz:attachments/lava_perfusion_bottle' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { L: { item: 'create:blaze_burner' }, B: { item: 'create:brass_ingot' } },
        pattern: [
            'BLB'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:muzzle_refit_lava_perfusion_bottle"}' }
    });

    // medium_distance_scope -> sight_medium_distance
    event.remove({ id: 'createimmersivetacz:attachments/medium_distance_scope' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { B: { item: 'create:brass_sheet' }, G: { item: 'minecraft:glass_pane' } },
        pattern: [
            'BGB'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:sight_medium_distance"}' }
    });

    // muzzle_refit_energy_blade
    event.remove({ id: 'createimmersivetacz:attachments/muzzle_refit_energy_blade' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { D: { item: 'minecraft:diamond' } },
        pattern: [
            'DDDDD',
            '    D'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:muzzle_refit_energy_blade"}' }
    });

    // shaft_grip -> grip_shaft
    event.remove({ id: 'createimmersivetacz:attachments/shaft_grip' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { I: { item: 'create:andesite_alloy' }, S: { item: 'create:shaft' } },
        pattern: [
            'III',
            ' SS'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:grip_shaft"}' }
    });

    // sight_reflex
    event.remove({ id: 'createimmersivetacz:attachments/sight_reflex' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { B: { item: 'create:brass_sheet' }, G: { item: 'minecraft:glass_pane' }, R: { item: 'minecraft:redstone' } },
        pattern: [
            'BGRB'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:sight_reflex"}' }
    });

    // simple_mechanical_sight -> sight_simple
    event.remove({ id: 'createimmersivetacz:attachments/simple_mechanical_sight' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { B: { item: 'create:brass_sheet' }, S: { item: 'create:shaft' } },
        pattern: [
            'BSSB'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:sight_simple"}' }
    });

    // standard_scope -> sight_standard
    event.remove({ id: 'createimmersivetacz:attachments/standard_scope' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { B: { item: 'create:brass_sheet' }, G: { item: 'minecraft:glass_pane' } },
        pattern: [
            'GB'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:sight_standard"}' }
    });

    // telephoto_scope -> scope_telephoto
    event.remove({ id: 'createimmersivetacz:attachments/telephoto_scope' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { B: { item: 'create:brass_sheet' }, G: { item: 'minecraft:glass_pane' } },
        pattern: [
            'BGGB'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:scope_telephoto"}' }
    });

    // wooden_grip -> grip_wooden
    event.remove({ id: 'createimmersivetacz:attachments/wooden_grip' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { W: { tag: 'minecraft:planks' } },
        pattern: [
            'W',
            'W',
            'W'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:grip_wooden"}' }
    });

    // wrench_iron_spike -> muzzle_refit_iron_spike
    event.remove({ id: 'createimmersivetacz:attachments/wrench_iron_spike' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: { I: { item: 'minecraft:iron_ingot' } },
        pattern: [
            'II',
            ' I'
        ],
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"create_armorer:muzzle_refit_iron_spike"}' }
    });

    // ==========================================================
    // GUNS
    // ==========================================================

    // assault_rifle -> rifle_assult_crane
    event.remove({ id: 'createimmersivetacz:guns/assault_rifle' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            M: { item: 'create:precision_mechanism' },
            F: { item: 'createimmersivetacz:firing_mechanism' },
            I: { item: 'minecraft:iron_ingot' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            W: { tag: 'minecraft:planks' },
            N: { item: 'create:industrial_iron_block' },
            // R: { item: 'create:brass_casing' },
            E: { item: 'create:electron_tube' },
            C: { item: 'create:brass_block' },
            G: { item: 'create:cogwheel' },
        },
        pattern: [
            '    E  ',
            'BCMFNII',
            ' WGT  I'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"create_armorer:rifle_assult_crane", GunFireMode:"AUTO"}' }
    });

    // double_barrel_shotgun -> shotgun_db_stone (SEMI)
    event.remove({ id: 'createimmersivetacz:guns/double_barrel_shotgun' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            C: { item: 'create:brass_block' },
            F: { item: 'createimmersivetacz:firing_mechanism' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            W: { tag: 'minecraft:planks' },
            I: { item: 'create:industrial_iron_block' },
            R: { item: 'create:brass_casing' },
            M: { item: 'create:precision_mechanism' },
        },
        pattern: [
            'BIRCF',
            'BIMTW',
            '    W'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"create_armorer:shotgun_db_stone", GunFireMode:"SEMI"}' }
    });

    // field_gun -> cannon_40mm_salamander (SEMI)
    event.remove({ id: 'createimmersivetacz:guns/field_gun' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            F: { item: 'createimmersivetacz:firing_mechanism' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            W: { tag: 'minecraft:planks' },
            I: { item: 'createbigcannons:very_large_nethersteel_cannon_layer' },
            L: { item: 'createbigcannons:large_nethersteel_cannon_layer' },
            X: { item: 'createbigcannons:thick_nethersteel_cannon_chamber' },
            O: { item: "create:brass_block" },
            G: { item: 'create:gantry_shaft' },
            S: { item: 'createbigcannons:nethersteel_block'},
            M: { item: 'create:precision_mechanism' },
            R: { item: 'create:brass_casing' },
            H: { item: 'createbigcannons:he_shell'},
            Z: { item: 'createbigcannons:nethersteel_sliding_breech' },
        },
        pattern: [
            ' OLIOIO  ',
            ' OLIOIO  ',
            'BOHHOHOXX',
            ' MORTFZSS',
            '   G   SW'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"create_armorer:cannon_40mm_salamander", GunFireMode:"SEMI"}' }
    });

    // grenade_launcher -> gl_revolver_devastator
    event.remove({ id: 'createimmersivetacz:guns/grenade_launcher' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            C: { item: 'create:cogwheel' },
            F: { item: 'createimmersivetacz:firing_mechanism' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            W: { tag: 'minecraft:planks' },
            G: { item: 'create:gantry_shaft' },
            R: { item: 'create:brass_casing' },
            I: { item: 'createbigcannons:medium_steel_cannon_layer' },
            L: { item: 'createbigcannons:large_steel_cannon_layer' },
            X: { item: 'createbigcannons:thick_steel_cannon_chamber' },
            O: { item: "create:brass_block" },
            M: { item: 'create:precision_mechanism' },
            H: { item: 'createbigcannons:he_shell'},
            Z: { item: 'createbigcannons:steel_sliding_breech' },
        },
        pattern: [
            '      C  ',
            'BOILGFMO ',
            'RORZMTOW ',
            ' HHH  XOO'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"create_armorer:gl_revolver_devastator", GunFireMode:"SEMI"}' }
    });

    // lmg -> mg_platemag_flywheel
    event.remove({ id: 'createimmersivetacz:guns/lmg' });
      event.custom({
        "type": "create:mechanical_crafting",
        "key": {
            B: { item: "createimmersivetacz:gunbarrel" },
            O: { item: "create:brass_block" },
            F: { item: "createimmersivetacz:firing_mechanism" },
            C: { item: "create:flywheel" },
            T: { item: "createimmersivetacz:gun_trigger" },
            W: { tag: "minecraft:planks" },
            // E: { item: "create:andesite_casing"},
            S: { item: 'create:steam_engine' },
            A: { item: 'create:shaft' },
            M: { item: 'create:precision_mechanism' },
            V: { item: 'create:chain_conveyor' },
            L: { item: 'create:copper_valve_handle' },
            D: { item: 'createdieselgenerators:engine_piston' },
            I: { item: 'create:industrial_iron_block' },
            R: { item: 'create:metal_bracket' },
            G: { item: 'create:brass_casing' },
        },
        "pattern": [
            '   LV R  ',
            ' SDOOOOII',
            'BOMMFTG I', 
            'RDSIC W I',
            'I A   W  '
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"create_armorer:mg_platemag_flywheel", GunFireMode:"AUTO"}' }
    });

    // pistol -> pistol_auto_stress (SEMI)
    event.remove({ id: 'createimmersivetacz:guns/pistol' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            C: { item: 'create:brass_block' },
            F: { item: 'createimmersivetacz:firing_mechanism' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            // W: { tag: 'minecraft:planks' },
            M: { item: 'create:precision_mechanism' },
            E: { item: 'create:electron_tube' },
            R: { item: 'create:brass_casing' },
            I: { item: 'create:industrial_iron_block' }
        },
        pattern: [
            '  E ',
            'BCFM',
            'ITCR',
            '   R'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"create_armorer:pistol_auto_stress", GunFireMode:"SEMI"}' }
    });

    // pump_shotgun -> shotgun_pump_bearing
    event.remove({ id: 'createimmersivetacz:guns/pump_shotgun' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            C: { item: 'create:cogwheel' },
            A: { item: 'create:brass_block' },
            F: { item: 'createimmersivetacz:firing_mechanism' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            W: { tag: 'minecraft:planks' },
            I: { item: 'create:industrial_iron_block' },
            R: { item: 'create:brass_casing' },
            // S: { tag: 'minecraft:wooden_slabs' }
            M: { item: 'create:precision_mechanism' },
        },
        pattern: [
            '      C ',
            'BIIF AIW',
            ' ATMRWW ',
            // '     S  '
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"create_armorer:shotgun_pump_bearing", GunFireMode:"SEMI"}' }
    });

    // revolver -> pistol_revolver_torque
    event.remove({ id: 'createimmersivetacz:guns/revolver' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            C: { item: 'create:brass_block' },
            F: { item: 'createimmersivetacz:firing_mechanism' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            W: { tag: 'minecraft:planks' },
            M: { item: 'create:precision_mechanism' },
            // E: { item: 'create:electron_tube' },
            R: { item: 'create:brass_casing' },
            I: { item: 'create:industrial_iron_block' },
            G: { item: 'create:cogwheel' },
        },
        pattern: [
            'GCIR',
            'BFTM',
            '   W'
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"create_armorer:pistol_revolver_torque", GunFireMode:"SEMI"}' }
    });

    // roller -> rifle_assult_roller (AUTO)
    event.remove({ id: 'createimmersivetacz:guns/roller' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            P: { item: 'create:precision_mechanism' },
            F: { item: 'createimmersivetacz:firing_mechanism' },
            Y: { item: 'create:flywheel' },
            I: { item: 'minecraft:iron_ingot' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            W: { tag: 'minecraft:planks' },
        },
        pattern: [
            'BPFFYI',
            '   TW '
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"create_armorer:rifle_assult_roller", GunFireMode:"AUTO"}' }
    });

    // semi_rifle -> sniper_semi_m1
    event.remove({ id: 'createimmersivetacz:guns/semi_rifle' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            C: { item: 'create:cogwheel' },
            F: { item: 'createimmersivetacz:firing_mechanism' },
            I: { item: 'minecraft:iron_ingot' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            W: { tag: 'minecraft:planks' },
            N: { item: 'create:industrial_iron_block' },
            R: { item: 'create:brass_casing' },
            M: { item: 'create:precision_mechanism' },
            C: { item: 'create:brass_block' },
            A: { item: 'create:shaft' }
        },
        pattern: [
            'BICFMC RW',
            ' WT WNIRW',
            '       A '
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"create_armorer:sniper_semi_m1", GunFireMode:"SEMI"}' }
    });

    // smg -> smg_auto_crank
    event.remove({ id: 'createimmersivetacz:guns/smg' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            // P: { item: 'create:brass_ingot' },
            F: { item: 'createimmersivetacz:firing_mechanism' },
            I: { item: 'minecraft:iron_ingot' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            // W: { tag: 'minecraft:planks' },
            S: { item: 'create:steam_engine' },
            N: { item: 'create:industrial_iron_block' },
            E: { item: 'create:electron_tube' },
            C: { item: 'create:brass_block' },
            M: { item: 'create:precision_mechanism' },
            O: { item: 'create:cogwheel' },
        },
        pattern: [
            '     E   ',
            'BSCMOCIN ',
            '  CTF  NN',
            '   N     '
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"create_armorer:smg_auto_crank", GunFireMode:"AUTO"}' }
    });

    // sniper -> sniper_semi_clockwork
    event.remove({ id: 'createimmersivetacz:guns/sniper' });
    event.custom({
        type: 'create:mechanical_crafting',
        key: {
            B: { item: 'createimmersivetacz:gunbarrel' },
            F: { item: 'createimmersivetacz:firing_mechanism' },
            T: { item: 'createimmersivetacz:gun_trigger' },
            W: { tag: 'minecraft:planks' },
            P: { item: 'create:copper_casing' },
            E: { item: 'create:brass_ingot' },
            I: { item: 'create:industrial_iron_block' },
            O: { item: 'create:brass_block' },
            M: { item: 'create:precision_mechanism' },
            Z: { item: 'minecraft:copper_ingot'},
            G: { item: 'minecraft:iron_ingot' },
        },
        pattern: [
            'EEEZZZ   ',
            'BIOOMPPGI',
            ' EZPFTW I',
            '      W  '
        ],
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"create_armorer:sniper_semi_clockwork", GunFireMode:"SEMI"}' }
    });
});
