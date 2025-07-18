--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____def = require("src.def")
local Village = ____def.Village
____exports.default = {
    name = "Pierre",
    description = "皮埃尔",
    gender = Village.Gender.Male,
    features = {"所有水果", "所有蔬菜", "宝石(除翡翠)", "蜂蜜"},
    birthday = {season = Village.GDateSeason.Spring, day = 26, year = 0, weekday = Village.GDateWeekday.Monday},
    like = {"蓝莓派", "翡翠", "甜瓜", "金星水果"},
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
    address = {name = "皮埃尔的杂货店", x = 0, y = 0}
}
return ____exports
