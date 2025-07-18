--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
____exports.default = {
    name = "Demetrius",
    description = "德米特里厄斯",
    gender = Gender.Male,
    features = {},
    birthday = {season = GDateSeason.Summer, day = 19, year = 0, weekday = GDateWeekday.Wednesday},
    like = {
        "铱锭",
        "蘑菇",
        "五彩碎片",
        "电池组",
        "所有矿石",
        "宝石(除五彩碎片)",
        "蔬菜",
        "水果"
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
