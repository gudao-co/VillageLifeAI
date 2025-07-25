--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____village = require("src.def.village")
local GDateSeason = ____village.GDateSeason
local GDateWeekday = ____village.GDateWeekday
local Gender = ____village.Gender
local GLocationName = ____village.GLocationName
____exports.default = {
    name = "Krobus",
    description = "居住在下水道的影子人，性格温和且神秘",
    gender = Gender.Male,
    features = {"影子人", "居住在下水道", "喜欢宝石"},
    birthday = {season = GDateSeason.Winter, day = 1, year = 0, weekday = GDateWeekday.Wednesday},
    like = {
        "虚空蛋",
        "南瓜",
        "钻石",
        "铱锭",
        "除钻石外的宝石",
        "虚空精华",
        "太阳精华",
        "怪物战利品"
    },
    dislike = {
        "光精华",
        "蔬菜",
        "水果",
        "垃圾",
        "海藻",
        "绿藻",
        "浮木",
        "蜗牛"
    },
    address = {name = GLocationName.Town, x = 85, y = 62}
}
return ____exports
