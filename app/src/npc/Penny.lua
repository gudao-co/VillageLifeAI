--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____def = require("src.def")
local Village = ____def.Village
____exports.default = {
    name = "Penny",
    description = "潘妮",
    gender = Village.Gender.Female,
    features = {},
    birthday = {season = Village.GDateSeason.Autumn, day = 2, year = 0, weekday = Village.GDateWeekday.Wednesday},
    like = {
        "钻石",
        "绿宝石",
        "罂粟",
        "沙鱼排",
        "所有水果",
        "所有宝石(除钻石/绿宝石)",
        "牛奶(所有品质)",
        "鸡蛋(所有品质)",
        "沙拉"
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
        "蜗牛"
    },
    address = {name = "trailer(玛妮牧场旁)", x = 0, y = 0}
}
return ____exports
