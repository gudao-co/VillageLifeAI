--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.scenes = {
    scene_awakening = {
        id = "scene_awakening",
        title = "魔法棋盘的觉醒",
        description = "主角在农场废弃小屋发现发光魔法棋盘，触发格斯的梦中指导",
        tags = {"开端", "教程", "魔法元素"},
        speakerIds = {"speaker_player", "speaker_gus"},
        dialogueId = "dialogue_player_discovery",
        dependentSceneIds = {},
        locationId = "location_farm_hut"
    },
    scene_gus_training = {
        id = "scene_gus_training",
        title = "格斯的酿酒哲学",
        description = "格斯在酒馆吧台用酿酒比喻教导主角下棋耐心",
        tags = {"训练", "导师互动", "哲学"},
        speakerIds = {"speaker_gus", "speaker_player"},
        dialogueId = "dialogue_gus_teach",
        dependentSceneIds = {"scene_awakening"},
        locationId = "location_saloon"
    },
    scene_wizard_revelation = {
        id = "scene_wizard_revelation",
        title = "沉默棋局的秘密",
        description = "法师在巫师塔用魔杖绘制棋盘，揭示古代棋局历史",
        tags = {"剧情推进", "魔法揭秘", "对手互动"},
        speakerIds = {"speaker_wizard", "speaker_player"},
        dialogueId = "dialogue_wizard_secret",
        dependentSceneIds = {"scene_gus_training"},
        locationId = "location_wizard_tower"
    },
    scene_leah_encouragement = {
        id = "scene_leah_encouragement",
        title = "森林的智慧",
        description = "莉亚在森林画室用橡树比喻安慰焦虑的主角",
        tags = {"情感支持", "自然元素", "艺术"},
        speakerIds = {"speaker_leah", "speaker_player"},
        dialogueId = "dialogue_leah_comfort",
        dependentSceneIds = {"scene_wizard_revelation"},
        locationId = "location_leah_cabin"
    },
    scene_tournament_final = {
        id = "scene_tournament_final",
        title = "社区中心的决战",
        description = "主角在修复后的社区中心迎战法师，放弃能量饮料靠农场作息获胜",
        tags = {"高潮", "决赛", "成长线完成"},
        speakerIds = {"speaker_player", "speaker_wizard", "speaker_lewis"},
        dialogueId = "dialogue_lewis_intro",
        dependentSceneIds = {"scene_leah_encouragement"},
        locationId = "location_community_center"
    }
}
return ____exports
