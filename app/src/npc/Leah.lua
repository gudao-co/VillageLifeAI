--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____def = require("src.def")
local Village = ____def.Village
____exports.default = {
    name = "Leah",
    description = "莉亚",
    gender = Village.Gender.Female,
    features = {},
    birthday = {season = Village.GDateSeason.Spring, day = 23, year = 0, weekday = Village.GDateWeekday.Wednesday},
    like = {
        "沙拉",
        "山羊奶酪",
        "葡萄酒",
        "枫糖浆",
        "所有蔬菜(除大蒜)",
        "所有水果",
        "所有宝石",
        "蘑菇",
        "坚果"
    },
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
        "蜗牛",
        "竹节"
    },
    address = {name = Village.GLocationName.LeahHouse, x = 0, y = 0}
}
return ____exports
