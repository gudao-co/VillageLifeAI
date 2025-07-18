--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____saySystem = require("src.system.saySystem")
local saySystem = ____saySystem.saySystem
____exports.default = {
    description = "春季对话",
    features = {"季节", "通用", "春季"},
    run = function(self, a)
        saySystem:say({name = a.name}, "春天来了，万物复苏。")
    end
}
return ____exports
