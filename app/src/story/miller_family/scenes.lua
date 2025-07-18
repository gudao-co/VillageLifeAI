--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.scenes = {
    scene_spring_bus_stop_meet = {
        id = "scene_spring_bus_stop_meet",
        title = "巴士站初遇",
        description = "玩家在巴士站遇到正在搬运行李的汤姆",
        tags = {"spring", "introduction", "quest_start"},
        speakers = {"汤姆", "玩家"},
        dialogueId = "dialogue_tom_bus_stop_greeting",
        dependentSceneIds = {},
        locationId = "location_bus_stop"
    },
    scene_spring_farm_movein = {
        id = "scene_spring_farm_movein",
        title = "农场搬家",
        description = "帮助汤姆一家将行李搬到煤矿森林东侧的新家",
        tags = {"spring", "farm", "family"},
        speakers = {"汤姆", "莉娜", "艾米", "玩家"},
        dialogueId = "dialogue_lena_farm_greeting",
        dependentSceneIds = {"scene_spring_bus_stop_meet"},
        locationId = "location_miller_farm"
    },
    scene_spring_tractor_argue = {
        id = "scene_spring_tractor_argue",
        title = "拖拉机争执",
        description = "汤姆因拖拉机故障与莉娜发生轻微争执",
        tags = {"spring", "conflict", "family"},
        speakers = {"汤姆", "莉娜"},
        dialogueId = "dialogue_tom_tractor_argue",
        dependentSceneIds = {"scene_spring_farm_movein"},
        locationId = "location_miller_farm"
    },
    scene_summer_forest_amy_lost = {
        id = "scene_summer_forest_amy_lost",
        title = "森林迷路",
        description = "艾米在雨天森林迷路时被玛鲁救助",
        tags = {"summer", "rainy", "character_development"},
        speakers = {"艾米", "玛鲁"},
        dialogueId = "dialogue_amy_maru_meet",
        dependentSceneIds = {},
        locationId = "location_forest"
    },
    scene_fall_workbench_proud = {
        id = "scene_fall_workbench_proud",
        title = "木工成就",
        description = "汤姆完成艾米的画架，莉娜准备庆祝晚餐",
        tags = {"fall", "family", "crafting"},
        speakers = {"汤姆", "莉娜"},
        dialogueId = "dialogue_tom_workbench_proud",
        dependentSceneIds = {"scene_summer_forest_amy迷路"},
        locationId = "location_miller_farm"
    },
    scene_winter_blizzard_emergency = {
        id = "scene_winter_blizzard_emergency",
        title = "暴风雪抢修",
        description = "冬季暴风雪导致农场屋顶漏雨，全家合作抢修",
        tags = {"winter", "emergency", "teamwork"},
        speakers = {"汤姆", "莉娜", "艾米", "玩家"},
        dialogueId = "dialogue_blizzard_emergency",
        dependentSceneIds = {"scene_fall_workbench_proud"},
        locationId = "location_miller_farm"
    },
    scene_winter_christmas_dinner = {
        id = "scene_winter_christmas_dinner",
        title = "平安夜聚餐",
        description = "米勒全家在修复后的农场共进晚餐，赠送玩家礼物",
        tags = {"winter", "holiday", "resolution"},
        speakers = {"汤姆", "莉娜", "艾米", "玩家"},
        dialogueId = "dialogue_christmas_dinner",
        dependentSceneIds = {"scene_winter_blizzard_emergency"},
        locationId = "location_miller_farm"
    }
}
return ____exports
