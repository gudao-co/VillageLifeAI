--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____assetsSystem = require("src.system.assetsSystem")
local assetsSystem = ____assetsSystem.assetsSystem
local ____characterSystem = require("src.system.characterSystem")
local characterSystem = ____characterSystem.characterSystem
local ____saySystem = require("src.system.saySystem")
local saySystem = ____saySystem.saySystem
function ____exports.default(app)
    console.info("App initialized", env)
    app:on(
        "day_start",
        function()
            saySystem:say({name = "main", title = "", res = "npc/yubo.png", style = "left"}, "Day Hello, World!")
            console.info("saySystem.say OK")
            local items = characterSystem:all()
            console.info("characterSystem.all OK")
            for ____, item in ipairs(items) do
                console.info(item)
            end
        end
    )
    app:on(
        "debug",
        function()
            local items = characterSystem:all()
            console.info("characterSystem.all OK")
            for ____, item in ipairs(items) do
                console.info(item)
            end
            local v = saySystem:say(
                {
                    name = items[math.floor(math.random() * #items) + 1].name,
                    title = "",
                    res = "npc/yubo.png",
                    style = "left"
                },
                "Hello, World!",
                {{name = "A", title = "A"}, {name = "B", title = "B"}}
            )
            console.info("saySystem.say OK", v)
        end
    )
    app:on(
        "npc_facing",
        function(name)
            saySystem:say({name = name, title = "", res = "npc/yubo.png", style = "left"}, "123123. Hello, World!")
            console.info("saySystem.say OK")
        end
    )
    saySystem:init(app)
    console.info("saySystem.init OK")
    assetsSystem:init(app)
    console.info("assetsSystem.init OK")
    characterSystem:init(app)
    console.info("characterSystem.init OK")
    assetsSystem:preload({"npc/yubo.png"})
    console.info("assetsSystem.preload OK")
end
return ____exports
