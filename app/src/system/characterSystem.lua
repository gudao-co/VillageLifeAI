local ____lualib = require("lualib_bundle")
local __TS__Class = ____lualib.__TS__Class
local __TS__ClassExtends = ____lualib.__TS__ClassExtends
local __TS__New = ____lualib.__TS__New
local ____exports = {}
local ____EventEmiter = require("src.core.EventEmiter")
local EventEmiter = ____EventEmiter.EventEmiter
____exports.CharacterSystem = __TS__Class()
local CharacterSystem = ____exports.CharacterSystem
CharacterSystem.name = "CharacterSystem"
__TS__ClassExtends(CharacterSystem, EventEmiter)
function CharacterSystem.prototype.init(self, app)
    self._app = app
end
function CharacterSystem.prototype.all(self)
    if not self._app then
        return {}
    end
    local rs, err = table.unpack(self._app:call("character", "all"))
    if err then
        return {}
    end
    return rs
end
____exports.characterSystem = __TS__New(____exports.CharacterSystem)
return ____exports
