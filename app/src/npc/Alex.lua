--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
local GLocationName = ____village.GLocationName
____exports.default = {
    name = "Alex",
    description = "前高中橄榄球明星，现在帮助祖母经营农场",
    gender = Gender.Male,
    features = {"金发", "喜欢运动", "关心祖母"},
    birthday = {season = GDateSeason.Summer, day = 13, year = 0, weekday = GDateWeekday.Sunday},
    like = {"蛋白棒", "哑铃", "牛排"},
    dislike = {"鱼", "海藻", "蜗牛"},
    address = {name = GLocationName.Town, x = 35, y = 42}
}
return ____exports
