#!/bin/bash

MODS="/home/felikx/ketting/mods"

CLIENT_MODS=(
    "accurate-block-placement-1.2.1.jar"
    "appleskin-forge-mc1.20.1-2.5.1.jar"
    "AsyncParticles-2.4.0-beta.3+1.20.1.jar"
    "BadOptimizations-2.4.1-1.20.1.jar"
    "BetterAdvancements-NeoForge-1.20.1-0.4.2.25.jar"
    "BetterF3-7.0.2-Forge-1.20.1.jar"
    "BetterPingDisplay-1.20.1-1.1.jar"
    "BetterThirdPerson-Forge-1.20-1.9.0.jar"
    "BiomeParticleWeather-v4.1.0-1.20.1-Forge.jar"
    "Boat-Item-View-Forge-1.20.1-0.0.5.jar"
    "chat_heads-0.15.0-forge-1.20.jar"
    "chloride-FORGE-mc1.20.1-v1.7.5.jar"
    "colorwheel-forge-1.2.2+mc1.20.1.jar"
    "colorwheel_patcher-forge-1.0.4+mc1.20.1.jar"
    "Controlling-forge-1.20.1-12.0.2.jar"
    "DeleteWorldsToTrash-v8.0.0-1.20.1-Forge.jar"
    "Ding-1.20.1-Forge-1.5.0.jar"
    "dynamic-fps-3.11.4+minecraft-1.20.0-forge.jar"
    "eatinganimation-1.20.1-5.1.0.jar"
    "embeddium-0.3.31+mc1.20.1.jar"
    "EnchantmentDescriptions-Forge-1.20.1-17.1.21.jar"
    "entityculling-forge-1.9.5-mc1.20.1.jar"
    "entity_model_features_1.20.1-forge-3.0.12.jar"
    "entity_texture_features_1.20.1-forge-7.0.9.jar"
    "EuphoriaPatcher-1.8.6-r5.7.1-forge.jar"
    "fancytoasts-forge-1.20.1-1.4.6.jar"
    "fast-ip-ping-v1.0.8-mc1.20.4-forge.jar"
    "flerovium-forge-1.20.1-1.2.18-all.jar"
    "foodeffecttooltips+forge-1.20.1-1.3.0.jar"
    "footprintparticle-0.5.4b-mc1.20(.1).jar"
    "gnetum-2.4.1.jar"
    "[MC-1.20] Hide Key Binding v1.0.0.7 - 2025-3-31.jar"
    "highlight-forge-1.20-2.0.1.jar"
    "iChunUtil-1.20.1-Forge-1.0.3.jar"
    "ImmediatelyFast-Forge-1.5.4+1.20.4.jar"
    "InvMove-0.9.3+1.20.1-Forge.jar"
    "InvMoveCompats-0.5.0+1.20.4-Forge.jar"
    "Ixeris-4.1.3+1.20.1-forge.jar"
    "JustEnoughBeacons-Forge-1.20.4-1.2.0.jar"
    "LeaveMyBarsAlone-v8.0.0-1.20.1-Forge.jar"
    "LetSleepingDogsLie-1.20.1-Forge-1.3.0.jar"
    "LongNbtKiller-Forge-1.20.1-1.0.0.jar"
    "mica-1.0.2.jar"
    "modelfix-1.15.jar"
    "MouseTweaks-forge-mc1.20.1-2.25.1.jar"
    "NekosEnchantedBooks-1.19.3-2.0.3.jar"
    "no-telemetry-1.10.0.jar"
    "notenoughanimations-forge-1.11.3-mc1.20.1.jar"
    "notenoughcrashes-4.4.9+1.20.1-forge.jar"
    "oculus-mc1.20.1-1.8.0.jar"
    "particle_core-0.3.3+1.20.1+forge.jar"
    "particlerain-4.0.0-beta.5+1.20.1-forge.jar"
    "PresenceFootsteps-1.20.1-1.9.1-beta.1.jar"
    "raised-forge-1.20.1-5.1.2.jar"
    "ResourcePackOverrides-v8.0.3-1.20.1-Forge.jar"
    "rrls-4.0.6.1+mc1.20.1-forge.jar"
    "screenshot-to-clipboard-1.0.9-forge.jar"
    "sodiumoptionsapi-forge-1.0.10-1.20.1.jar"
    "sodiumoptionsmodcompat-forge-1.0.0-1.20.1.jar"
    "sound-physics-remastered-forge-1.20.1-1.5.1.jar"
    "Sounds-2.2.1+1.20.1+forge.jar"
    "SubtleEffects-forge-1.20.1-1.14.0.jar"
    "tia-1.20-1.1-forge.jar"
    "Tips-Forge-1.20.1-12.1.9.jar"
    "twod_projectiles-forge-1.1.1.jar"
    "Updating World Icon-forge-1.20.1-1.0.1.jar"
    "vanillin-forge-1.20.1-1.1.3.jar"
    "waveycapes-forge-1.8.2-mc1.20.1.jar"
    "worldplaytime-1.2.3-1.20.x-FORGE.jar"
    "xaerominimap-forge-1.20.1-25.3.10.jar"
    # "xaeroworldmap-forge-1.20.1-1.40.11.jar"
    "XaeroPlus-2.30.9+forge-1.20.1-WM1.40.11-MM25.3.10.jar"
    # "xaeros_waystones_compability-1.0.jar"
)

disabled=0
skipped=0
missing=0

for mod in "${CLIENT_MODS[@]}"; do
    src="$MODS/$mod"
    dst="$src.disabled"

    if [ -f "$dst" ]; then
        echo "SKIP (already disabled): $mod"
        ((skipped++))
    elif [ -f "$src" ]; then
        mv "$src" "$dst"
        echo "DISABLED: $mod"
        ((disabled++))
    else
        echo "NOT FOUND: $mod"
        ((missing++))
    fi
done

echo ""
echo "Done. $disabled disabled, $skipped already disabled, $missing not found."
