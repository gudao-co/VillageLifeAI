--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
local GLocationName = ____village.GLocationName
____exports.default = {
    name = "Emily",
    description = "充满艺术气息的裁缝，Haley的姐姐",
    gender = Gender.Female,
    features = {"紫发", "喜欢手工", "能与灵魂交流"},
    birthday = {season = GDateSeason.Spring, day = 27, year = 0, weekday = GDateWeekday.Thursday},
    like = {"布料", "羊毛", "翡翠"},
    dislike = {"矿石", "肉类", "垃圾"},
    address = {name = GLocationName.Town, x = 48, y = 53}
}
return ____exports
