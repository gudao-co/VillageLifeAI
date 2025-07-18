--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
____exports.default = {
    name = "Jas",
    description = "Jas",
    gender = Gender.Female,
    features = {},
    birthday = {season = GDateSeason.Summer, day = 4, year = 0, weekday = GDateWeekday.Wednesday},
    like = {
        "粉色蛋糕",
        "草莓",
        "钻石",
        "曲奇",
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
    address = {name = "玛妮牧场", x = 0, y = 0}
}
return ____exports
