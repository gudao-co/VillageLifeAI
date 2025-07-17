local ____lualib = require("lualib_bundle")
local __TS__Class = ____lualib.__TS__Class
local __TS__ClassExtends = ____lualib.__TS__ClassExtends
local __TS__New = ____lualib.__TS__New
local ____exports = {}
local ____EventEmiter = require("src.core.EventEmiter")
local EventEmiter = ____EventEmiter.EventEmiter
____exports.SaySystem = __TS__Class()
local SaySystem = ____exports.SaySystem
SaySystem.name = "SaySystem"
__TS__ClassExtends(SaySystem, EventEmiter)
function SaySystem.prototype.init(self, app)
    self._app = app
end
function SaySystem.prototype.say(self, profile, text, options)
    if not self._app then
        return nil
    end
    local rs, err = table.unpack(self._app:call(
        "say",
        "say",
        profile,
        text,
        options
    ))
    if err then
        return nil
    end
    if options == nil then
        return nil
    end
    for ____, opt in ipairs(options) do
        if opt.name == rs then
            return opt
        end
    end
end
____exports.saySystem = __TS__New(____exports.SaySystem)
return ____exports
