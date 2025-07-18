--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
local GLocationName = ____village.GLocationName
____exports.default = {
    name = "Abigail",
    description = "星露谷的女主人公，镇长Lewis的女儿，喜欢冒险和神秘事物",
    gender = Gender.Female,
    features = {"紫色头发", "喜欢探索矿洞", "热爱音乐"},
    birthday = {season = GDateSeason.Autumn, day = 13, year = 0, weekday = GDateWeekday.Friday},
    like = {"紫水晶", "巧克力蛋糕", "南瓜", "虚空蛋黄酱"},
    dislike = {"牛奶", "鸡蛋", "普通蘑菇"},
    address = {name = GLocationName.Town, x = 42, y = 54}
}
return ____exports
