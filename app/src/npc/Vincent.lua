--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
____exports.default = {
    name = "Vincent",
    description = "文森特",
    gender = Gender.Male,
    features = {},
    birthday = {season = GDateSeason.Spring, day = 10, year = 0, weekday = GDateWeekday.Wednesday},
    like = {
        "葡萄",
        "草莓",
        "小丑鱼",
        "巧克力",
        "所有水果",
        "糖果",
        "花",
        "玩具"
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
    address = {name = "戈特利布家", x = 0, y = 0}
}
return ____exports
