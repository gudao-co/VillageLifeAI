--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____def = require("src.def")
local Village = ____def.Village
____exports.default = {
    name = "Clint",
    description = "克林特",
    gender = Village.Gender.Male,
    features = {},
    birthday = {season = Village.GDateSeason.Winter, day = 26, year = 0, weekday = Village.GDateWeekday.Friday},
    like = {"黄金锭", "铱锭", "翡翠", "五彩碎片"},
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
    address = {name = "铁匠铺", x = 0, y = 0}
}
return ____exports
