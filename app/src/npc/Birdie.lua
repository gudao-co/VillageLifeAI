--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
____exports.default = {
    name = "Birdie",
    description = "伯尼",
    gender = Gender.Female,
    features = {},
    birthday = {season = GDateSeason.Spring, day = 4, year = 0, weekday = GDateWeekday.Monday},
    like = {"金核桃", "椰子", "菠萝", "热带鱼"},
    dislike = {
        "黏土",
        "石头",
        "杂草",
        "木材",
        "硬木"
    },
    address = {name = "姜岛东北部小屋", x = 0, y = 0}
}
return ____exports
