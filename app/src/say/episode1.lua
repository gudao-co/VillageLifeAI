--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____saySystem = require("src.system.saySystem")
local saySystem = ____saySystem.saySystem
____exports.default = {
    description = "第一集：初识与棱角",
    features = {"剧情", "初识", "冲突"},
    run = function(self)
        saySystem:say({name = "山姆"}, "嘿，新来的！能帮我们搬下设备吗？鼓手把镲片忘在车里了！")
        saySystem:say({name = "玩家"}, "哦，好的！在哪里？")
        saySystem:say({name = "阿比盖尔"}, "山姆，别随便拉人……算了，快点，演出要开始了。")
        saySystem:say({name = "海莉"}, "这个角度拍打鼓超酷！")
        saySystem:say({name = "阿比盖尔"}, "拍什么？觉得我打鼓的样子很奇怪？")
        saySystem:say({name = "海莉"}, "我只是觉得……很有活力啊。")
        saySystem:say({name = "亚历克斯"}, "新来的？这里不是你该待的地方。")
        saySystem:say({name = "玩家"}, "为什么？大家看起来都很友好。")
        saySystem:say({name = "亚历克斯"}, "等你待久了就知道了。")
        saySystem:say({name = "山姆"}, "跑！去我家躲雨！")
        saySystem:say({name = "潘妮"}, "这里的星星很亮。")
        saySystem:say({name = "塞巴斯蒂安"}, "……比城市亮。")
    end
}
return ____exports
