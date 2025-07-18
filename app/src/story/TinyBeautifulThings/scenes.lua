--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.scenes = {scene_spring_meet_clare = {
    id = "scene_spring_meet_clare",
    title = "初识Clare",
    description = "玩家收集褪色布料后解锁废弃小屋互动",
    tags = {"spring", "introduction", "clare"},
    speakers = {"Clare", "Player"},
    dialogueId = "dialogue_clare_initial",
    dependentSceneIds = {},
    locationId = "location_abandoned_cabin"
}, scene_summer_lila_fishing = {
    id = "scene_summer_lila_fishing",
    title = "帮助Lila钓彩虹鳟鱼",
    description = "夏季帮助Lila钓彩虹鳟鱼，触发情感爆发",
    tags = {"summer", "lila", "fishing", "emotional"},
    speakers = {"Lila", "Clare", "Player"},
    dialogueId = "dialogue_lila_fear",
    dependentSceneIds = {"scene_spring_meet_clare"},
    locationId = "location_river"
}, scene_fall_recipe_memory = {
    id = "scene_fall_recipe_memory",
    title = "秘密森林的食谱",
    description = "秋季在秘密森林找到Margaret的食谱，触发厨房回忆",
    tags = {"fall", "memory", "margaret"},
    speakers = {"Clare", "Margaret"},
    dialogueId = "dialogue_margaret_memory",
    dependentSceneIds = {"scene_summer_lila_fishing"},
    locationId = "location_secret_forest"
}, scene_winter_storytelling = {
    id = "scene_winter_storytelling",
    title = "星露故事会",
    description = "冬季酒馆举办故事会，Clare朗读专栏回信",
    tags = {"winter", "community", "ending"},
    speakers = {"Clare", "Lila", "Player", "Villagers"},
    dialogueId = "dialogue_clare_late",
    dependentSceneIds = {"scene_fall_recipe_memory"},
    locationId = "location_saloon"
}}
return ____exports
