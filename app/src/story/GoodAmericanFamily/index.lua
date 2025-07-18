--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.speakers = {speaker_tom = {id = "speaker_tom", name = "Tom", description = "前城市白领，现经营蜂场，性格内敛务实，初期焦虑后期释怀", tags = {"父亲", "蜂场主", "内敛", "务实"}}, speaker_claire = {id = "speaker_claire", name = "Claire", description = "前烘焙师，开「小镇甜屋」甜品店，热情细心，小镇「知心姐姐」", tags = {"母亲", "烘焙师", "热情", "细心"}}, speaker_lila = {id = "speaker_lila", name = "Lila", description = "16岁高中生，性格内向敏感，从抵触到融入，与阿比盖尔/山姆成为朋友", tags = {"女儿", "高中生", "内向", "敏感"}}, speaker_player = {id = "speaker_player", name = "Player", description = "星露谷农场主", tags = {"主角", "农场主"}}}
____exports.locations = {
    location_winter_festival = {id = "location_winter_festival", title = "冰雪节场地", description = "冬季冰雪节举办地，复用「冰雪节装饰_08」「溜冰场_02」资产", tags = {"冬季", "节日", "asset:winter_decor_08", "asset:ice_rink_02"}},
    location_farm_community = {id = "location_farm_community", title = "社区农场区域", description = "暴风雨夜互助地点，复用「玛妮牧场_03」「皮埃尔田地_05」资产", tags = {"秋季", "暴风雨", "asset:marnie_barn_03", "asset:pierre_field_05"}},
    location_fairgrounds = {id = "location_fairgrounds", title = "展览会场地", description = "秋季展览会举办地，复用「皮埃尔商店展台_02」「节日装饰_05」资产", tags = {"秋季", "展览会", "asset:pierre_booth_02", "asset:fair_decor_05"}},
    location_town_square = {id = "location_town_square", title = "小镇广场", description = "花舞节举办地点，复用原有广场场景资产", tags = {"公共区域", "节日场地", "asset:town_square_01", "asset:flower_dance_decor_02"}},
    location_greenhedge_cottage = {id = "location_greenhedge_cottage", title = "绿篱小屋", description = "家庭住所，改造森林入口闲置空地，复用「玛妮牧场小屋」模型（外墙浅绿+门口蜂箱/自行车）", tags = {"家庭住所", "森林入口", "蜂箱", "自行车"}},
    location_town_sweetshop = {id = "location_town_sweetshop", title = "小镇甜屋", description = "克莱尔的甜品店，改造广场东侧废弃小屋，复用「皮埃尔商店」柜台+果酱罐资产", tags = {"甜品店", "广场东侧", "皮埃尔商店柜台_01", "果酱罐_03"}},
    location_library = {id = "location_library", title = "图书馆", description = "莉拉常去的看书地点，复用原有图书馆场景资产", tags = {"公共设施", "阅读", "莉拉活动点"}},
    location_secret_forest = {id = "location_secret_forest", title = "秘密森林", description = "探险地点，复用原有秘密森林场景资产", tags = {"自然区域", "探险", "采集"}},
    location_saloon = {id = "location_saloon", title = "星露谷酒吧", description = "汤姆社交地点，复用原有酒吧场景资产", tags = {"社交场所", "汤姆活动点", "夜间场景"}},
    location_community_center = {id = "location_community_center", title = "社区中心", description = "克莱尔烘焙俱乐部活动地点，复用社区中心大厅资产", tags = {"公共设施", "社区活动", "克莱尔活动点"}}
}
____exports.dialogues = {
    dialogue_s1e1_tom_greet = {id = "dialogue_s1e1_tom_greet", speakerId = "speaker_tom", text = "嘿，你就是新来的农夫吧？欢迎。我们刚搬来星露谷，这是自家蜂场产的蜂蜜，不成敬意。", next = "dialogue_s1e1_claire_greet"},
    dialogue_s1e1_claire_greet = {id = "dialogue_s1e1_claire_greet", speakerId = "speaker_claire", text = "汤姆总是这么严肃~ 别听他的，欢迎来到小镇！这是我烤的曲奇，刚出炉的，尝尝看？", next = "dialogue_s1e1_lila_quiet"},
    dialogue_s1e1_lila_quiet = {id = "dialogue_s1e1_lila_quiet", speakerId = "speaker_lila", text = "...嗨。（低头玩着手机）", next = nil},
    dialogue_s1e2_tom_anxious = {id = "dialogue_s1e2_tom_anxious", speakerId = "speaker_tom", text = "该死的暴雨...蜂箱全淋湿了，今年的收成要完了...", next = "dialogue_s1e2_claire_comfort"},
    dialogue_s1e2_claire_comfort = {id = "dialogue_s1e2_claire_comfort", speakerId = "speaker_claire", text = "别担心，汤姆。我们可以找邻居帮忙收集硬木修复蜂箱，总会有办法的。", next = "dialogue_s1e2_lila_concern"},
    dialogue_s1e2_lila_concern = {id = "dialogue_s1e2_lila_concern", speakerId = "speaker_lila", text = "爸，我...我可以去秘密森林帮你找野花吗？书上说野花能吸引蜜蜂...", next = nil},
    dialogue_s1e3_lila_invite = {id = "dialogue_s1e3_lila_invite", speakerId = "speaker_player", text = "莉拉，花舞节要一起跳舞吗？", next = "dialogue_s1e3_lila_response"},
    dialogue_s1e3_lila_response = {id = "dialogue_s1e3_lila_response", speakerId = "speaker_lila", text = "...真的吗？（脸红）好吧，就这一次。", next = "dialogue_s1e3_tom_smile"},
    dialogue_s1e3_tom_smile = {id = "dialogue_s1e3_tom_smile", speakerId = "speaker_tom", text = "（远远看着，嘴角微微上扬）", next = nil}
}
____exports.scenes = {
    scene_s1e7_winter_choice = {
        id = "scene_s1e7_winter_choice",
        title = "冰雪节抉择",
        description = "莉拉拒绝回城市，确认小镇归属感",
        tags = {"冬季", "冰雪节", "情感抉择"},
        speakerIds = {"speaker_tom", "speaker_claire", "speaker_lila"},
        dialogueId = "dialogue_s1e7_return_discuss",
        dependentSceneIds = {"scene_s1e6_storm_help"},
        locationId = "location_winter_festival"
    },
    scene_s1e8_festival_day = {
        id = "scene_s1e8_festival_day",
        title = "星露谷日",
        description = "家庭邀请玩家过节，汤姆举杯致敬「真正的家」",
        tags = {"冬末", "结局", "温馨团聚"},
        speakerIds = {"speaker_claire", "speaker_tom", "speaker_lila", "speaker_player"},
        dialogueId = "dialogue_s1e8_invite",
        dependentSceneIds = {"scene_s1e7_winter_choice"},
        locationId = "location_greenhedge_cottage"
    },
    scene_s1e6_storm_help = {
        id = "scene_s1e6_storm_help",
        title = "社区互助",
        description = "暴风雨夜帮邻居收作物，体现小镇凝聚力",
        tags = {"秋末", "暴风雨", "任务：协助转移 livestock/收作物"},
        speakerIds = {"speaker_tom", "speaker_claire", "speaker_lila", "speaker_player"},
        dialogueId = "dialogue_s1e6_storm",
        dependentSceneIds = {"scene_s1e5_fair_coop"},
        locationId = "location_farm_community"
    },
    scene_s1e5_fair_coop = {
        id = "scene_s1e5_fair_coop",
        title = "展览会合作",
        description = "全家协作参展蜂蜜苹果派，获「最暖心奖」",
        tags = {"秋季", "展览会", "任务：制作蜂蜜苹果派"},
        speakerIds = {"speaker_claire", "speaker_tom", "speaker_lila", "speaker_player"},
        dialogueId = "dialogue_s1e5_prepare",
        dependentSceneIds = {"scene_s1e4_secret"},
        locationId = "location_fairgrounds"
    },
    scene_s1e4_secret = {
        id = "scene_s1e4_secret",
        title = "家庭秘密",
        description = "汤姆酒后吐露搬离城市因债务压力，克莱尔展现包容",
        tags = {"夏末", "情感爆发", "任务：倾听对话"},
        speakerIds = {"speaker_tom", "speaker_claire", "speaker_lila"},
        dialogueId = "dialogue_s1e4_tom_drunk",
        dependentSceneIds = {"scene_s1e3_flower_dance"},
        locationId = "location_saloon"
    },
    scene_s1e3_flower_dance = {
        id = "scene_s1e3_flower_dance",
        title = "花舞节融入",
        description = "玩家邀请莉拉跳舞，家庭与小镇居民互动升温",
        tags = {"夏季", "花舞节", "任务：邀请莉拉跳舞"},
        speakerIds = {"speaker_lila", "speaker_player", "speaker_tom", "speaker_claire"},
        dialogueId = "dialogue_s1e3_lila_invite",
        dependentSceneIds = {"scene_s1e2_crisis"},
        locationId = "location_town_square"
    },
    scene_s1e1_arrival = {
        id = "scene_s1e1_arrival",
        title = "初来乍到",
        description = "玩家协助搬家，汤姆送蜂蜜小样，克莱尔赠曲奇",
        tags = {"春季", "初次见面", "任务：协助搬家"},
        speakerIds = {"speaker_tom", "speaker_claire", "speaker_lila", "speaker_player"},
        dialogueId = "dialogue_s1e1_tom_greet",
        dependentSceneIds = {},
        locationId = "location_greenhedge_cottage"
    },
    scene_s1e2_crisis = {
        id = "scene_s1e2_crisis",
        title = "农场危机",
        description = "蜂箱淋雨损坏，玩家收集硬木/野花修复，莉拉首次关心父亲",
        tags = {"春末", "危机事件", "任务：收集硬木/野花"},
        speakerIds = {"speaker_tom", "speaker_claire", "speaker_lila", "speaker_player"},
        dialogueId = "dialogue_s1e2_tom_anxious",
        dependentSceneIds = {},
        locationId = "location_greenhedge_cottage"
    }
}
____exports.chapters = {
    chapter_s1e7 = {
        id = "chapter_s1e7",
        title = "S1E7（冬）冰雪节抉择",
        description = "莉拉拒绝回城市，确认小镇归属感",
        tags = {"冬季", "身份认同", "情感转折"},
        speakerIds = {"speaker_tom", "speaker_claire", "speaker_lila"},
        sceneIds = {"scene_s1e7_winter_choice"}
    },
    chapter_s1e8 = {
        id = "chapter_s1e8",
        title = "S1E8（冬末）星露谷日",
        description = "家庭邀请玩家过节，汤姆举杯致敬「真正的家」",
        tags = {"冬末", "结局", "小镇融入"},
        speakerIds = {"speaker_claire", "speaker_tom", "speaker_lila", "speaker_player"},
        sceneIds = {"scene_s1e8_festival_day"}
    },
    chapter_s1e6 = {
        id = "chapter_s1e6",
        title = "S1E6（秋末）社区互助",
        description = "暴风雨夜帮邻居收作物，体现小镇凝聚力",
        tags = {"秋末", "社区互助", "团队协作"},
        speakerIds = {"speaker_tom", "speaker_claire", "speaker_lila", "speaker_player"},
        sceneIds = {"scene_s1e6_storm_help"}
    },
    chapter_s1e5 = {
        id = "chapter_s1e5",
        title = "S1E5（秋）展览会合作",
        description = "全家协作参展蜂蜜苹果派，获「最暖心奖」",
        tags = {"秋季", "团队合作", "展览会"},
        speakerIds = {"speaker_claire", "speaker_tom", "speaker_lila", "speaker_player"},
        sceneIds = {"scene_s1e5_fair_coop"}
    },
    chapter_s1e4 = {
        id = "chapter_s1e4",
        title = "S1E4（夏末）家庭秘密",
        description = "汤姆酒后吐露搬离城市因债务压力，克莱尔展现包容",
        tags = {"夏末", "家庭秘密", "情感线"},
        speakerIds = {"speaker_tom", "speaker_claire", "speaker_lila"},
        sceneIds = {"scene_s1e4_secret"}
    },
    chapter_s1e3 = {
        id = "chapter_s1e3",
        title = "S1E3（夏）花舞节融入",
        description = "玩家邀请莉拉跳舞，家庭与小镇居民互动升温",
        tags = {"夏季", "花舞节", "社交"},
        speakerIds = {"speaker_lila", "speaker_player", "speaker_tom", "speaker_claire"},
        sceneIds = {"scene_s1e3_flower_dance"}
    },
    chapter_s1e1 = {
        id = "chapter_s1e1",
        title = "S1E1（春）初来乍到",
        description = "玩家协助搬家，汤姆送蜂蜜小样，克莱尔赠曲奇",
        tags = {"春季", "第一集", "家庭引入"},
        speakerIds = {"speaker_tom", "speaker_claire", "speaker_lila", "speaker_player"},
        sceneIds = {"scene_s1e1_arrival"}
    },
    chapter_s1e2 = {
        id = "chapter_s1e2",
        title = "S1E2（春末）农场危机",
        description = "蜂箱淋雨损坏，玩家收集硬木/野花修复，莉拉首次关心父亲",
        tags = {"春末", "第二集", "家庭危机", "角色成长"},
        speakerIds = {"speaker_tom", "speaker_claire", "speaker_lila", "speaker_player"},
        sceneIds = {"scene_s1e2_crisis"}
    }
}
____exports.script = {
    id = "script_good_american_family",
    title = "Good American Family",
    description = "星露谷MOD故事剧本，突出「家庭关系与小镇融入」的温馨主线",
    tags = {
        "家庭",
        "温馨",
        "小镇融入",
        "四季剧情",
        "节日活动"
    },
    chapterIds = {
        "chapter_s1e1",
        "chapter_s1e2",
        "chapter_s1e3",
        "chapter_s1e4",
        "chapter_s1e5",
        "chapter_s1e6",
        "chapter_s1e7",
        "chapter_s1e8"
    },
    speakerIds = {"speaker_tom", "speaker_claire", "speaker_lila", "speaker_player"}
}
return ____exports
