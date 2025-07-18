--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____def = require("src.def")
local Village = ____def.Village
____exports.default = {
    name = "Caroline",
    description = "卡洛琳",
    gender = Village.Gender.Female,
    features = {
        "所有花",
        "水果",
        "蔬菜",
        "宝石(除五彩碎片)",
        "蜂蜜"
    },
    birthday = {season = Village.GDateSeason.Winter, day = 7, year = 0, weekday = Village.GDateWeekday.Monday},
    like = {"绿茶", "夏季孢子", "五彩碎片", "兔子的脚"},
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
    address = {name = "皮埃尔的杂货店楼上", x = 0, y = 0}
}
return ____exports
