--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
____exports.default = {
    name = "Gus",
    description = "格斯",
    gender = Gender.Male,
    features = {},
    birthday = {season = GDateSeason.Summer, day = 8, year = 0, weekday = GDateWeekday.Friday},
    like = {"钻石", "意大利面", "法式洋葱汤", "啤酒"},
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
    address = {name = "星露谷沙龙", x = 0, y = 0}
}
return ____exports
