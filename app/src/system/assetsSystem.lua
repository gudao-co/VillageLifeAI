local ____lualib = require("lualib_bundle")
local __TS__Class = ____lualib.__TS__Class
local __TS__ClassExtends = ____lualib.__TS__ClassExtends
local __TS__New = ____lualib.__TS__New
local ____exports = {}
local ____EventEmiter = require("src.core.EventEmiter")
local EventEmiter = ____EventEmiter.EventEmiter
____exports.AssetsSystem = __TS__Class()
local AssetsSystem = ____exports.AssetsSystem
AssetsSystem.name = "AssetsSystem"
__TS__ClassExtends(AssetsSystem, EventEmiter)
function AssetsSystem.prototype.init(self, app)
    self._app = app
end
function AssetsSystem.prototype.preload(self, keys)
    if not self._app then
        return {false, "assetsSystem not init"}
    end
    return self._app:call("assets", "preload", keys)
end
____exports.assetsSystem = __TS__New(____exports.AssetsSystem)
return ____exports
