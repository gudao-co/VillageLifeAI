local ____lualib = require("lualib_bundle")
local __TS__New = ____lualib.__TS__New
local __TS__Class = ____lualib.__TS__Class
local __TS__ClassExtends = ____lualib.__TS__ClassExtends
local ____exports = {}
local ____EventEmiter = require("src.core.EventEmiter")
local EventEmiter = ____EventEmiter.EventEmiter
local globalEvent = __TS__New(EventEmiter)
____exports.App = __TS__Class()
local App = ____exports.App
App.name = "App"
__TS__ClassExtends(App, EventEmiter)
function App.prototype.____constructor(self, runtime)
    EventEmiter.prototype.____constructor(self)
    self.runtime = runtime
end
function App.prototype.exec(self, cb, serviceName, methodName, ...)
    self.runtime:exec(cb, serviceName, methodName, ...)
end
function App.prototype.call(self, serviceName, methodName, ...)
    return self.runtime:call(serviceName, methodName, ...)
end
function App.getInstance(self)
    return self.instance
end
function App.setInstance(self, runtime)
    local ____opt_0 = self.instance
    if ____opt_0 ~= nil then
        ____opt_0:emit("exit")
    end
    self.instance = __TS__New(____exports.App, runtime)
end
function App.emit(self, name, ...)
    globalEvent:emit(name, ...)
end
function App.on(self, name, fn)
    globalEvent:on(name, fn)
end
function App.off(self, name, fn)
    globalEvent:off(name, fn)
end
App.instance = nil
return ____exports
