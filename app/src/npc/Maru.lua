--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
____exports.default = {
    name = "Maru",
    description = "马鲁住在木匠的商店。",
    gender = Gender.Female,
    features = {"可结婚"},
    birthday = {season = GDateSeason.Summer, day = 10, year = 0, weekday = GDateWeekday.Wednesday},
    like = {
        "铱锭",
        "钻石",
        "热可可",
        "机器人玩具",
        "所有矿石(除铜/铁/金锭)",
        "所有宝石",
        "牛奶(所有品质)",
        "电池组"
    },
    dislike = {
        "黏土",
        "石头",
        "杂草",
        "木材",
        "硬木",
        "垃圾",
        "海草",
        "绿藻",
        "浮木",
        "蜗牛"
    },
    address = {name = "木匠的商店", x = 0, y = 0}
}
return ____exports
