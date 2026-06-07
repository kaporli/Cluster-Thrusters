// Applied Armorer — AE2 Recipes
// Ammo:         ae2:inscriber  (kept — thematic and working)
// Muzzle chips: ae2:inscriber  (kept — chips = inscribed circuits)
// Guns:         create:mechanical_crafting  with AE2 components
// Attachments:  create:mechanical_crafting  with AE2 components
//
// Tier legend (guns):
//   Tier 1  — Logic Processor          (pistols)
//   Tier 2  — Calculation Processor    (lever, SMG, rifle, shotgun)
//   Tier 3  — Engineering Processor    (GL)
//   Tier 4  — Engineering + Energy     (sniper, HMG)
//   Tier 5  — Controller + Dense Cell  (EMG — maximum endgame)

ServerEvents.recipes(event => {

    // ==========================================================
    // AMMO  (AE2 Inscriber — unchanged, working well)
    // ==========================================================

    // etched_quartz_bullet — standard rifle/SMG/pistol ammo
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            top: { item: 'ae2:printed_silicon' },
            middle: { item: 'ae2:certus_quartz_crystal' }
        },
        mode: 'inscribe',
        result: { item: 'tacz:ammo', count: 8, nbt: { AmmoId: 'applied_armorer:etched_quartz_bullet' } }
    })

    // hard_core_quartz_bullet — sniper ammo
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            top: { item: 'ae2:printed_engineering_processor' },
            middle: { item: 'ae2:charged_certus_quartz_crystal' }
        },
        mode: 'inscribe',
        result: { item: 'tacz:ammo', count: 4, nbt: { AmmoId: 'applied_armorer:hard_core_quartz_bullet' } }
    })

    // cluster_quartz_bullet — shotgun pellet ammo
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            top: { item: 'ae2:printed_calculation_processor' },
            middle: { item: 'ae2:certus_quartz_dust' }
        },
        mode: 'inscribe',
        result: { item: 'tacz:ammo', count: 8, nbt: { AmmoId: 'applied_armorer:cluster_quartz_bullet' } }
    })

    // fluix_battery — EMG energy cell ammo
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            top: { item: 'ae2:printed_engineering_processor' },
            middle: { item: 'ae2:fluix_crystal' }
        },
        mode: 'inscribe',
        result: { item: 'tacz:ammo', count: 4, nbt: { AmmoId: 'applied_armorer:fluix_battery' } }
    })

    // fluix_infused_grenade — grenade launcher explosive
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            top: { item: 'ae2:engineering_processor' },
            middle: { item: 'ae2:fluix_crystal' }
        },
        mode: 'inscribe',
        result: { item: 'tacz:ammo', count: 2, nbt: { AmmoId: 'applied_armorer:fluix_infused_grenade' } }
    })

    // ==========================================================
    // GUNS  (Create Mechanical Crafting — AE2 components)
    // ==========================================================

    // ── Tier 1: Pistols ───────────────────────────────────────

    // niklas_pistol_semi_pride
    // B = certus_quartz_crystal barrel (crystal-lined precision bore)
    // I = iron_ingot slide (iron construction)
    // K = sky_stone_block grip (meteorite frame)
    // L = logic_processor trigger   F = fluix_crystal firing pin
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'BBBBBBBBBBBB',
            '  IIIIIIIIII',
            '          KK',
            '          LF',
        ],
        key: {
            B: { item: 'ae2:certus_quartz_crystal' },
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:sky_stone_block' },
            L: { item: 'ae2:logic_processor' },
            F: { item: 'ae2:fluix_crystal' }
        },
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:niklas_pistol_semi_pride"}' }
    })

    // niklas_pistol_semi_right  (massive barrel — same pattern shape, materials swapped in)
    // B = certus_quartz_crystal  (27-cell double barrel — crystal precision bore)
    // S = smooth_sky_stone_block (slide/upper frame)
    // G = quartz_glass           (front sight post | isolated cell)
    // Q = charged_certus         (rear sight / slide end cluster)
    // C = andesite_alloy         (lower receiver frame)   A = calculation_processor
    // L = logic_processor   F = fluix_crystal   K = sky_stone_block grip
    // X = silicon                (rubber grip coating, bottom row)
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'BBBBBBBBBBBBBBBBBBBBBBBBBBB',
            'BBBBBBBBBBBBBBBBBBBBBBBBBBB',
            '       SSSSSSSSSSSSSSSSSSSS',
            '                 G      QQQ',
            '                 CCAALFQQBB',
            '                        KKK',
            '                        XXX'
        ],
        key: {
            B: { item: 'ae2:certus_quartz_crystal' },
            S: { item: 'ae2:smooth_sky_stone_block' },
            G: { item: 'ae2:quartz_glass' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            C: { item: 'create:andesite_alloy' },
            A: { item: 'ae2:calculation_processor' },
            L: { item: 'ae2:logic_processor' },
            F: { item: 'ae2:fluix_crystal' },
            K: { item: 'ae2:sky_stone_block' },
            X: { item: 'ae2:silicon' }
        },
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:niklas_pistol_semi_right"}' }
    })

    // niklas_pistol_semi_union  (same pattern shape as semi_right, different ingredient focus)
    // B = certus barrel   S = smooth_sky_stone slide   G = quartz_glass sight
    // Q = charged_certus  C = andesite_alloy frame     A = calculation_processor
    // L = logic_processor (dual trigger → L appears twice)   F = fluix_crystal
    // K = sky_stone grip  X = silicon rubber grip
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [
        'BBBBBBBBBBBBBBBBBBBBBBBBBBB',
        'BBBBBBBBBBBBBBBBBBBBBBBBBBB',
               'SSSSSSSSSSSSSSSSSSSS',
                         'G      QQQ',
                         'CCAALLQQFF',
                                'KKK',
                                'XXX'
        ],
        key: {
            B: { item: 'ae2:certus_quartz_crystal' },
            S: { item: 'ae2:smooth_sky_stone_block' },
            G: { item: 'ae2:quartz_glass' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            C: { item: 'create:andesite_alloy' },
            A: { item: 'ae2:calculation_processor' },
            L: { item: 'ae2:logic_processor' },
            F: { item: 'ae2:fluix_crystal' },
            K: { item: 'ae2:sky_stone_block' },
            X: { item: 'ae2:silicon' }
        },
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:niklas_pistol_semi_union"}' }
    })

    // niklas_pistol_double_win_win  (akimbo)
    // B = certus barrel (upper gun, 11 cells)
    // S = smooth_sky_stone (shared connecting frame, full row)
    // C = andesite_alloy (lower gun body, 10 cells)
    // K = sky_stone grip (upper gun grip + lower gun grip bottom)
    // L = logic_processor trigger   F = fluix_crystal firing pin
    // X = silicon rubber grip patch
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [
                              '           BBBBBBBBBBB',
                              'SSSSSSSSSSSSSSSSSSSSSS',
                              ' CCCCCCCCCC         KK',
                              '         LF         KK',
                              '         KX           '
        ],
        key: {
            B: { item: 'ae2:certus_quartz_crystal' },
            S: { item: 'ae2:smooth_sky_stone_block' },
            C: { item: 'create:andesite_alloy' },
            K: { item: 'ae2:sky_stone_block' },
            L: { item: 'ae2:logic_processor' },
            F: { item: 'ae2:fluix_crystal' },
            X: { item: 'ae2:silicon' }
        },
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:niklas_pistol_double_win_win"}' }
    })

    // ── Tier 2: Lever Action ──────────────────────────────────

    // niklas_lever_vigenere  (lever action)
    // B = certus barrel (17 cells, crystal-bored precision)
    // S = smooth_sky_stone full receiver (23 cells)
    // L = logic_processor lever sear   C = andesite_alloy lever frame (×3)
    // K = sky_stone stock (11 cells — the long lever-action tube magazine stock)
    // Q = charged_certus chamber   A = calculation_processor ballistics
    // F = fluix_crystal spring   X = silicon rubber grip
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [
            'BBBBBBBBBBBBBBBBB         ',
            '   SSSSSSSSSSSSSSSSSSSSSSS',
            '    LCCC       KKKKKKKKKKK',
            '                      QALF',
            '                       KXX'
        ],
        key: {
            B: { item: 'ae2:certus_quartz_crystal' },
            S: { item: 'ae2:smooth_sky_stone_block' },
            L: { item: 'ae2:logic_processor' },
            C: { item: 'create:andesite_alloy' },
            K: { item: 'ae2:sky_stone_block' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            A: { item: 'ae2:calculation_processor' },
            F: { item: 'ae2:fluix_crystal' },
            X: { item: 'ae2:silicon' }
        },
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:niklas_lever_vigenere"}' }
    })

    // ── Tier 2: SMG ───────────────────────────────────────────

    // niklas_smg_freedom  (compact auto)
    // B = certus barrel (10 cells)   S = smooth_sky_stone receiver (13 cells)
    // K = sky_stone grip (already placed in pattern by user — kept)
    // C = andesite_alloy frame piece (single cell near trigger)
    // M = iron_block magazine housing (3 cells row 2, 5 cells row 3)
    // L/A/Q/F = logic/calc/charged_certus/fluix (trigger group — already placed by user)
    // X = silicon (trigger seal at pos 9, already placed by user)
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [
            'BBBBBBBBBB               ',
            '      SSSSSSSSSSSSSSK     ',
            '       CLK         MMM   ',
            '     QALFX         MMMMM ',
            '                     KKKK'
        ],
        key: {
            B: { item: 'ae2:certus_quartz_crystal' },
            S: { item: 'ae2:smooth_sky_stone_block' },
            K: { item: 'ae2:sky_stone_block' },
            C: { item: 'create:andesite_alloy' },
            M: { item: 'minecraft:iron_block' },
            L: { item: 'ae2:logic_processor' },
            A: { item: 'ae2:calculation_processor' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            F: { item: 'ae2:fluix_crystal' },
            X: { item: 'ae2:silicon' }
        },
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:niklas_smg_freedom"}' }
    })

    // ── Tier 2: Assault Rifle ─────────────────────────────────

    // moritz_rifle_ar77  (assault rifle)
    // B/S/K/A/Q/L/F already placed in pattern by user — kept as-is
    // X cells mapped by position:
    //   row 1 stock extension  → W = zinc_block (zinc alloy buttstock, Create)
    //   row 2 left barrel ext  → B = certus (barrel continues)
    //   row 2 receiver section → S = smooth_sky_stone
    //   row 2 stock section    → W = zinc_block
    //   row 3 near mechanism   → B = certus (breech area)
    //   row 3 receiver ext     → S = smooth_sky_stone
    //   row 3 sight post       → G = quartz_glass (optic)
    //   row 3 stock section    → W = zinc_block
    //   row 4 X in QALFX       → X = silicon (trigger seal, kept)
    //   row 4 stock end        → W = zinc_block
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [
            '        BBBBBSSSK',
            ' SSSSSSSSKWWWWWWWWWWWWWWWWWWWWWWW',
            'BBBBBBBBBBBKSSSSSS    WWWWWWWW',
            '    BBAKSSSS           G  WWWW',
            '         QALFX          WWWWWW'
        ],
        key: {
            B: { item: 'ae2:certus_quartz_crystal' },
            S: { item: 'ae2:smooth_sky_stone_block' },
            K: { item: 'ae2:sky_stone_block' },
            A: { item: 'ae2:calculation_processor' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            L: { item: 'ae2:logic_processor' },
            F: { item: 'ae2:fluix_crystal' },
            W: { item: 'create:zinc_block' },
            G: { item: 'ae2:quartz_glass' },
            X: { item: 'ae2:silicon' }
        },
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:moritz_rifle_ar77"}' }
    })

    // ── Tier 2: Shotgun ───────────────────────────────────────

    // moritz_shotgun_sg914
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [
            'BBQQSSSSK',
            'BBQQSSSSK',
            '        K',
            '      ALK',
            '   QAFFX '
        ],
        key: {
            B: { item: 'ae2:certus_quartz_crystal' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            S: { item: 'ae2:smooth_sky_stone_block' },
            K: { item: 'ae2:sky_stone_block' },
            A: { item: 'ae2:calculation_processor' },
            L: { item: 'ae2:logic_processor' },
            F: { item: 'ae2:fluix_crystal' },
            X: { item: 'ae2:silicon' }
        },
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:moritz_shotgun_sg914"}' }
    })

    // ── Tier 3: Grenade Launcher ──────────────────────────────

    // moritz_gernade_gl3
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [
            'BBBQSSSSK',
            'BBBQSSSSK',
            '        K',
            '       EK',
            '     NEAK',
            '   NEAFX '
        ],
        key: {
            B: { item: 'ae2:certus_quartz_crystal' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            S: { item: 'ae2:smooth_sky_stone_block' },
            K: { item: 'ae2:sky_stone_block' },
            E: { item: 'ae2:engineering_processor' },
            N: { item: 'ae2:energy_cell' },
            A: { item: 'ae2:calculation_processor' },
            F: { item: 'ae2:fluix_crystal' },
            X: { item: 'ae2:silicon' }
        },
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:moritz_gernade_gl3"}' }
    })

    // ── Tier 4: Sniper Rifle ──────────────────────────────────

    // moritz_sniper_semi_k30
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [
            'BBBBBBBSK',
            'SSSSSSSSK',
            '      EVK',
            '      EVK',
            '    EVALK',
            '   QVALFX'
        ],
        key: {
            B: { item: 'ae2:certus_quartz_crystal' },
            S: { item: 'ae2:smooth_sky_stone_block' },
            K: { item: 'ae2:sky_stone_block' },
            E: { item: 'ae2:engineering_processor' },
            V: { item: 'ae2:dense_energy_cell' },
            A: { item: 'ae2:calculation_processor' },
            L: { item: 'ae2:logic_processor' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            F: { item: 'ae2:fluix_crystal' },
            X: { item: 'ae2:silicon' }
        },
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:moritz_sniper_semi_k30"}' }
    })

    // ── Tier 4: Heavy Machine Gun ─────────────────────────────

    // moritz_mg_hmg22
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [
            'BBBBBBBBB',
            'BEEEEEEEB',
            'BEVVVVVEB',
            'BEEEEEEEB',
            'BWWWWWWWB',
            '       EK',
            '    QALFX'
        ],
        key: {
            B: { item: 'ae2:smooth_sky_stone_block' },
            E: { item: 'ae2:engineering_processor' },
            V: { item: 'ae2:dense_energy_cell' },
            W: { item: 'ae2:cell_component_16k' },
            K: { item: 'ae2:sky_stone_block' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' },
            A: { item: 'ae2:calculation_processor' },
            L: { item: 'ae2:logic_processor' },
            F: { item: 'ae2:fluix_crystal' },
            X: { item: 'ae2:silicon' }
        },
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:moritz_mg_hmg22"}' }
    })

    // ── Tier 5: EMG Prototype (MAXIMUM ENDGAME) ───────────────

    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [
            '  B   B  ',
            ' BB   BB ',
            ' BBB BBB ',
            'BVVVCVVVB',
            'BEEEEEEEB',
            '  BSTEB  ',
            '   EANX  '
        ],
        key: {
            B: { item: 'ae2:smooth_sky_stone_block' },
            V: { item: 'ae2:dense_energy_cell' },
            C: { item: 'ae2:controller' },
            E: { item: 'ae2:engineering_processor' },
            S: { item: 'ae2:singularity' },
            T: { item: 'ae2:quantum_entangled_singularity' },
            A: { item: 'ae2:calculation_processor' },
            N: { item: 'ae2:energy_cell' },
            X: { item: 'ae2:silicon' }
        },
        result: { item: 'tacz:modern_kinetic_gun', nbt: '{GunId:"applied_armorer:moritz_mg_emg_prototype"}' }
    })

    // ==========================================================
    // ATTACHMENTS  (Create Mechanical Crafting — AE2 components)
    // Smaller patterns than guns, still require crafter setup.
    // ==========================================================

    // ── Extended Magazines ────────────────────────────────────

    // extended_mag_aa_1
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
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [ 'INI', 'IKI', 'INI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            N: { item: 'ae2:energy_cell' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:extended_battery_aa_1"}' }
    })

    // extended_battery_aa_2
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [ 'INI', 'NQN', 'INI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            N: { item: 'ae2:energy_cell' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:extended_battery_aa_2"}' }
    })

    // extended_battery_aa_3e
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
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [ 'XDX', 'XDX', ' X ' ],
        key: {
            X: { item: 'minecraft:iron_nugget' },
            D: { item: 'ae2:certus_quartz_dust' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:grip_light"}' }
    })

    // grip_sl_2
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [ 'ISI', 'IKI', ' I ' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            S: { item: 'ae2:printed_silicon' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:grip_sl_2"}' }
    })

    // grip_stable
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [ 'IBI', 'IKI', 'IKI', 'IBI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            B: { item: 'ae2:quartz_fiber' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:grip_stable"}' }
    })

    // grip_static_1
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

    // ── Muzzle Chips  (AE2 Inscriber — kept thematic) ─────────

    event.custom({
        type: 'ae2:inscriber',
        ingredients: { top: { item: 'ae2:printed_logic_processor' }, middle: { item: 'ae2:certus_quartz_crystal' } },
        mode: 'inscribe',
        result: { item: 'tacz:attachment', nbt: { AttachmentId: 'applied_armorer:muzzle_chip_atm_x2' } }
    })

    event.custom({
        type: 'ae2:inscriber',
        ingredients: { top: { item: 'ae2:printed_calculation_processor' }, middle: { item: 'ae2:charged_certus_quartz_crystal' } },
        mode: 'inscribe',
        result: { item: 'tacz:attachment', nbt: { AttachmentId: 'applied_armorer:muzzle_chip_fat_boy' } }
    })

    event.custom({
        type: 'ae2:inscriber',
        ingredients: { top: { item: 'ae2:printed_logic_processor' }, middle: { item: 'ae2:fluix_crystal' } },
        mode: 'inscribe',
        result: { item: 'tacz:attachment', nbt: { AttachmentId: 'applied_armorer:muzzle_chip_firefly' } }
    })

    event.custom({
        type: 'ae2:inscriber',
        ingredients: { top: { item: 'ae2:printed_logic_processor' }, middle: { item: 'ae2:charged_certus_quartz_crystal' } },
        mode: 'inscribe',
        result: { item: 'tacz:attachment', nbt: { AttachmentId: 'applied_armorer:muzzle_chip_firework' } }
    })

    event.custom({
        type: 'ae2:inscriber',
        ingredients: { top: { item: 'ae2:printed_engineering_processor' }, middle: { item: 'ae2:charged_certus_quartz_crystal' } },
        mode: 'inscribe',
        result: { item: 'tacz:attachment', nbt: { AttachmentId: 'applied_armorer:muzzle_chip_hyper_propellant' } }
    })

    event.custom({
        type: 'ae2:inscriber',
        ingredients: { top: { item: 'ae2:printed_calculation_processor' }, middle: { item: 'ae2:fluix_crystal' } },
        mode: 'inscribe',
        result: { item: 'tacz:attachment', nbt: { AttachmentId: 'applied_armorer:muzzle_chip_pcs_x1' } }
    })

    // ── Standard Muzzles  (Mechanical Crafting) ───────────────

    // muzzle_bs_mod4
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
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [ 'IBI', 'IKI', 'IKI', 'IBI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            B: { item: 'ae2:quartz_fiber' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:muzzle_ns_1"}' }
    })

    // ── Scopes ────────────────────────────────────────────────

    // scope_ms_14
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
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [ 'IK', ' K', ' K', ' I' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:bayonet_er"}' }
    })

    // bayonet_gladiuS
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

    // bracelet_broken_watch
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [ 'XWX', 'WKW', 'XWX' ],
        key: {
            X: { item: 'minecraft:gold_nugget' },
            W: { item: 'minecraft:gold_ingot' },
            K: { item: 'ae2:certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:bracelet_broken_watch"}' }
    })

    // bracelet_exo
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [ 'IEI', 'ESE', 'IEI' ],
        key: {
            I: { item: 'minecraft:iron_ingot' },
            E: { item: 'ae2:engineering_processor' },
            S: { item: 'ae2:smooth_sky_stone_block' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:bracelet_exo"}' }
    })

    // bracelet_koeis_armband
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

    // bracelet_magma_wristband
    event.custom({
        type: 'create:mechanical_crafting',

        pattern: [ 'XMX', 'MQM', 'XMX' ],
        key: {
            X: { item: 'minecraft:iron_nugget' },
            M: { item: 'minecraft:magma_cream' },
            Q: { item: 'ae2:charged_certus_quartz_crystal' }
        },
        result: { item: 'tacz:attachment', nbt: '{AttachmentId:"applied_armorer:bracelet_magma_wristband"}' }
    })

    // bracelet_niklas
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
