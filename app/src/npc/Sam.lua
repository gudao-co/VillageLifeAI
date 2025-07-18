--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
____exports.default = {
    name = "Sam",
    description = "山姆是住在鹈鹕镇西侧房子的居民，与文森特、乔迪同住。",
    gender = Gender.Male,
    features = {"可结婚"},
    birthday = {season = GDateSeason.Summer, day = 17, year = 0, weekday = GDateWeekday.Wednesday},
    like = {
        "披萨",
        "仙人掌果",
        "老虎机",
        "曲棍球棒",
        "所有水果",
        "所有宝石(除五彩碎片)",
        "鸡蛋(所有品质)",
        "啤酒"
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
    address = {name = "鹈鹕镇西侧房子(与文森特、乔迪同住)", x = 0, y = 0}
}
return ____exports
