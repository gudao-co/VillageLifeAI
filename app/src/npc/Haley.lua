--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
local GLocationName = ____village.GLocationName
____exports.default = {
    name = "Haley",
    description = "热爱摄影和时尚的小镇女孩，有点娇生惯养",
    gender = Gender.Female,
    features = {"金发", "喜欢拍照", "注重外表"},
    birthday = {season = GDateSeason.Spring, day = 14, year = 0, weekday = GDateWeekday.Friday},
    like = {"向日葵", "粉色蛋糕", "钻石"},
    dislike = {"蔬菜", "昆虫", "粘土"},
    address = {name = GLocationName.Town, x = 48, y = 51}
}
return ____exports
