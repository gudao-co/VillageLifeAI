--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
____exports.default = {
    name = "Robin",
    description = "罗宾",
    gender = Gender.Female,
    features = {},
    birthday = {season = GDateSeason.Winter, day = 21, year = 0, weekday = GDateWeekday.Wednesday},
    like = {
        "山羊奶酪",
        "钻石",
        "铱锭",
        "枫糖浆",
        "所有矿石",
        "宝石(除钻石)",
        "木材",
        "硬木",
        "蜂蜜"
    },
    dislike = {
        "黏土",
        "石头",
        "杂草",
        "垃圾",
        "海草",
        "绿藻",
        "浮木",
        "蜗牛"
    },
    address = {name = "木匠的商店", x = 0, y = 0}
}
return ____exports
