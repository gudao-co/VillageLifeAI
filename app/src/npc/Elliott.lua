--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
____exports.default = {
    name = "Elliott",
    description = "艾利欧特住在海滩小屋。",
    gender = Gender.Male,
    features = {"可结婚"},
    birthday = {season = GDateSeason.Autumn, day = 5, year = 0, weekday = GDateWeekday.Wednesday},
    like = {
        "龙虾浓汤",
        "鸭毛",
        "石榴",
        "五彩碎片",
        "所有宝石(除五彩碎片)",
        "所有花",
        "水果(除椰子)",
        "葡萄酒",
        "咖啡"
    },
    dislike = {
        "蔬菜",
        "黏土",
        "石头",
        "杂草",
        "垃圾",
        "海草",
        "绿藻",
        "浮木",
        "蜗牛"
    },
    address = {name = "海滩小屋", x = 0, y = 0}
}
return ____exports
