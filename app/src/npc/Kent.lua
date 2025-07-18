--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____def = require("src.def")
local Village = ____def.Village
____exports.default = {
    name = "Kent",
    description = "肯特",
    gender = Village.Gender.Male,
    features = {"所有宝石", "肉类", "蔬菜(除大蒜)", "水果"},
    birthday = {season = Village.GDateSeason.Summer, day = 4, year = 0, weekday = Village.GDateWeekday.Monday},
    like = {"烤芦笋", "牛排", "啤酒", "辣椒"},
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
