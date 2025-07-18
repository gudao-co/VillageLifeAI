--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
____exports.default = {
    name = "Dwarf",
    description = "矮人",
    gender = Gender.Unknown,
    features = {},
    birthday = {season = GDateSeason.Spring, day = 1, year = 0, weekday = GDateWeekday.Monday},
    like = {"宝石(除五彩碎片)", "金锭", "铱锭"},
    dislike = {
        "黏土",
        "石头",
        "杂草",
        "木材",
        "硬木"
    },
    address = {name = "矿井(120层)", x = 0, y = 0}
}
return ____exports
