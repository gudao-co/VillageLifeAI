--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
____exports.default = {
    name = "Sandy",
    description = "桑迪",
    gender = Gender.Female,
    features = {},
    birthday = {season = GDateSeason.Summer, day = 4, year = 0, weekday = GDateWeekday.Monday},
    like = {"椰子", "星露炸弹", "凤凰坚果", "五彩碎片"},
    dislike = {
        "黏土",
        "石头",
        "杂草",
        "木材",
        "硬木"
    },
    address = {name = "沙漠商店", x = 0, y = 0}
}
return ____exports
