--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
local GLocationName = ____village.GLocationName
____exports.default = {
    name = "Willy",
    description = "经营海滩鱼店的渔夫，热爱大海和捕鱼",
    gender = Gender.Male,
    features = {"渔夫", "经营海滩鱼店", "喜欢出海"},
    birthday = {season = GDateSeason.Summer, day = 24, year = 0, weekday = GDateWeekday.Saturday},
    like = {
        "龙虾",
        "螃蟹",
        "鲟鱼",
        "钻石",
        "所有鱼类",
        "海鲜",
        "除钻石外的宝石",
        "啤酒"
    },
    dislike = {
        "垃圾",
        "海藻",
        "绿藻",
        "浮木",
        "蜗牛",
        "蔬菜",
        "黏土",
        "石头",
        "杂草"
    },
    address = {name = GLocationName.Beach, x = 60, y = 70}
}
return ____exports
