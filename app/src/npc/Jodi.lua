--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
____exports.default = {
    name = "Jodi",
    description = "乔迪",
    gender = Gender.Female,
    features = {"所有水果", "鸡蛋(所有品质)", "牛奶(所有品质)", "蔬菜"},
    birthday = {season = GDateSeason.Autumn, day = 11, year = 0, weekday = GDateWeekday.Monday},
    like = {"钻石", "煎蛋卷", "草莓", "完美早餐"},
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
    address = {name = "戈特利布家", x = 0, y = 0}
}
return ____exports
