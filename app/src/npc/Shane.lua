--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
____exports.default = {
    name = "Shane",
    description = "谢恩",
    gender = Gender.Male,
    features = {},
    birthday = {season = GDateSeason.Spring, day = 20, year = 0, weekday = GDateWeekday.Wednesday},
    like = {
        "啤酒",
        "披萨",
        "辣椒",
        "腌菜",
        "鸡蛋(所有品质)",
        "牛奶(所有品质)",
        "所有水果",
        "薯片"
    },
    dislike = {
        "蔬菜(除辣椒)",
        "黏土",
        "石头",
        "杂草",
        "垃圾",
        "海草",
        "绿藻",
        "浮木",
        "蜗牛"
    },
    address = {name = "玛妮牧场", x = 0, y = 0}
}
return ____exports
