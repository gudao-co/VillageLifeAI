--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.dialogues = {
    dialogue_festival_meet_sam = {id = "dialogue_festival_meet_sam", speaker = "Sam", text = "嘿！你看起来迷路了！正好我们乐队缺个临时帮手，来帮忙搬下设备吧？哇哦，你真是救星！", next = "dialogue_festival_meet_abigail"},
    dialogue_festival_meet_abigail = {id = "dialogue_festival_meet_abigail", speaker = "Abigail", text = "哇哦，新人？别被山姆的热情吓到，他只是想找个人免费劳力。我是阿比盖尔，负责打鼓。", next = "dialogue_festival_meet_sebastian"},
    dialogue_festival_meet_sebastian = {id = "dialogue_festival_meet_sebastian", speaker = "Sebastian", text = "……", next = "dialogue_festival_haley_conflict"},
    dialogue_festival_haley_conflict = {id = "dialogue_festival_haley_conflict", speaker = "Haley", text = "（举着相机）这个角度拍鼓组肯定很棒……", next = "dialogue_festival_abigail_response"},
    dialogue_festival_abigail_response = {id = "dialogue_festival_abigail_response", speaker = "Abigail", text = "喂！你拍什么呢？觉得我鼓打得很可笑吗？", next = "dialogue_festival_haley_defense"},
    dialogue_festival_haley_defense = {id = "dialogue_festival_haley_defense", speaker = "Haley", text = "我只是在拍照记录！你也太敏感了吧？", next = "dialogue_festival_alex_snark"},
    dialogue_festival_alex_snark = {id = "dialogue_alex", speaker = "Alex", text = "哼，又来个城里来的？别以为星露谷是什么度假村。", next = "dialogue_festival_sam_mediate"},
    dialogue_festival_sam_mediate = {id = "dialogue_festival_sam_mediate", speaker = "Sam", text = "好啦好啦，都冷静点！演出快开始了，我们先去餐吧吃点东西怎么样？我请客！", next = "dialogue_saloon_penny_quiet"},
    dialogue_saloon_penny_quiet = {id = "dialogue_saloon_penny_quiet", speaker = "Penny", text = "（小声）这里的果汁很好喝……", next = "dialogue_bonfire_rain"},
    dialogue_bonfire_rain = {id = "dialogue_bonfire_rain", speaker = "Sam", text = "我去！怎么突然下雨了？快！去我家躲雨！", next = "dialogue_sam_house_awkward"},
    dialogue_sam_house_awkward = {id = "dialogue_sam_house_awkward", speaker = "Penny", text = "（望着窗外）这里的星星……比城市亮多了。", next = nil}
}
return ____exports
