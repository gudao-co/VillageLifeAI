--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.scenes = {
    scene_ch1_library = {
        id = "scene_ch1_library",
        title = "图书馆初接信件",
        description = "Emily在图书馆二楼角落发现匿名求助信，触发回忆闪回",
        tags = {"第一章", "回忆触发", "初始场景"},
        speakerIds = {"speaker_emily", "speaker_player"},
        dialogueId = "dialogue_ch1_lib_emily_intro",
        dependentSceneIds = {},
        locationId = "location_library_second_floor"
    },
    scene_ch2_beach_conflict = {
        id = "scene_ch2_beach_conflict",
        title = "海滩争吵",
        description = "日落时分Jas与Emily在潮汐池爆发争吵，Alex介入调解",
        tags = {"第二章", "冲突场景", "情感爆发"},
        speakerIds = {"speaker_jas", "speaker_emily", "speaker_alex"},
        dialogueId = "dialogue_ch2_beach_jas_angry",
        dependentSceneIds = {"scene_ch1_library"},
        locationId = "location_beach_tide_pool"
    },
    scene_ch3_greenhouse_memory = {
        id = "scene_ch3_greenhouse_memory",
        title = "温室回忆杀",
        description = "Emily在温室修复水管时触发Caroline的回忆片段",
        tags = {"第三章", "回忆场景", "关键转折"},
        speakerIds = {"speaker_caroline", "speaker_emily"},
        dialogueId = "dialogue_ch3_greenhouse_caroline_teach",
        dependentSceneIds = {"scene_ch2_beach_conflict"},
        locationId = "location_greenhouse"
    },
    scene_ch4_greenhouse_repair = {
        id = "scene_ch4_greenhouse_repair",
        title = "温室秘语",
        description = "玩家协助Emily修复温室水管，解锁Caroline的园艺日记",
        tags = {"第四章", "互动", "线索解锁"},
        speakerIds = {"speaker_emily", "speaker_player"},
        dialogueId = "dialogue_ch4_greenhouse_repair",
        dependentSceneIds = {"scene_ch3_greenhouse_memory"},
        locationId = "location_greenhouse"
    },
    scene_ch5_forest_letter = {
        id = "scene_ch5_forest_letter",
        title = "雨夜信件",
        description = "森林树桩发现小女孩求助信（寻找走失的猫）",
        tags = {"第五章", "探索", "外部冲突"},
        speakerIds = {"speaker_emily", "speaker_player"},
        dialogueId = "dialogue_ch5_forest_letter",
        dependentSceneIds = {"scene_ch4_greenhouse_repair"},
        locationId = "location_forest_stump"
    },
    scene_ch6_mountain_top = {
        id = "scene_ch6_mountain_top",
        title = "山顶暴雨",
        description = "Jas离家出走，Emily在山顶找到她并坦白心结",
        tags = {"第六章", "高潮", "情感释放"},
        speakerIds = {"speaker_jas", "speaker_emily"},
        dialogueId = "dialogue_ch6_mountain_confession",
        dependentSceneIds = {"scene_ch5_forest_letter"},
        locationId = "location_mountain_top"
    },
    scene_ch7_house_reveal = {
        id = "scene_ch7_house_reveal",
        title = "糖糖的真相",
        description = "Emily向Jas展示专栏读者的感谢信",
        tags = {"第七章", "真相揭露", "理解"},
        speakerIds = {"speaker_emily", "speaker_jas"},
        dialogueId = "dialogue_ch7_house_reveal",
        dependentSceneIds = {"scene_ch6_mountain_top"},
        locationId = "location_emily_house"
    },
    scene_ch8_square_confession = {
        id = "scene_ch8_square_confession",
        title = "丰收节告白",
        description = "Emily在鹈鹕镇广场公开专栏作者身份",
        tags = {"第八章", "结局", "公开和解"},
        speakerIds = {"speaker_emily", "speaker_alex", "speaker_jas", "speaker_player"},
        dialogueId = "dialogue_ch8_square_confession",
        dependentSceneIds = {"scene_ch7_house_reveal"},
        locationId = "location_town_square"
    }
}
return ____exports
