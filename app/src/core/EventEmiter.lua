local ____lualib = require("lualib_bundle")
local __TS__Class = ____lualib.__TS__Class
local __TS__ArrayPushArray = ____lualib.__TS__ArrayPushArray
local __TS__Delete = ____lualib.__TS__Delete
local __TS__ArrayIndexOf = ____lualib.__TS__ArrayIndexOf
local __TS__ArraySplice = ____lualib.__TS__ArraySplice
local ____exports = {}
____exports.EventEmiter = __TS__Class()
local EventEmiter = ____exports.EventEmiter
EventEmiter.name = "EventEmiter"
function EventEmiter.prototype.____constructor(self)
    self.itemSet = {}
    self.emitItems = {}
end
function EventEmiter.prototype.beginInterceptor(self)
    local vs = {}
    local ____self_emitItems_0 = self.emitItems
    ____self_emitItems_0[#____self_emitItems_0 + 1] = vs
    return function()
        for ____, v in ipairs(vs) do
            v()
        end
    end
end
function EventEmiter.prototype.endInterceptor(self)
    table.remove(self.emitItems)
end
function EventEmiter.prototype.emit(self, name, ...)
    local args = {...}
    if #self.emitItems > 0 then
        local vs = self.emitItems[#self.emitItems]
        vs[#vs + 1] = function()
            self:_emit(
                name,
                table.unpack(args)
            )
        end
        return
    end
    self:_emit(
        name,
        table.unpack(args)
    )
end
function EventEmiter.prototype._emit(self, name, ...)
    if self.itemSet == nil or self.itemSet == nil then
        return
    end
    local handlers = {}
    local eventHandlers = self.itemSet[name]
    if eventHandlers ~= nil then
        __TS__ArrayPushArray(handlers, eventHandlers)
    end
    if name ~= "*" then
        local wildcardHandlers = self.itemSet["*"]
        if wildcardHandlers ~= nil then
            __TS__ArrayPushArray(handlers, wildcardHandlers)
        end
    end
    for ____, handler in ipairs(handlers) do
        handler(...)
    end
end
function EventEmiter.prototype.on(self, name, fn)
    if not self.itemSet[name] then
        self.itemSet[name] = {}
    end
    local ____self_itemSet_name_1 = self.itemSet[name]
    ____self_itemSet_name_1[#____self_itemSet_name_1 + 1] = fn
end
function EventEmiter.prototype.off(self, name, fn)
    if not name then
        self.itemSet = {}
        return
    end
    if not fn then
        __TS__Delete(self.itemSet, name)
        return
    end
    local handlers = self.itemSet[name]
    if handlers ~= nil then
        local index = __TS__ArrayIndexOf(handlers, fn)
        if index ~= -1 then
            __TS__ArraySplice(handlers, index, 1)
        end
        if #handlers == 0 then
            __TS__Delete(self.itemSet, name)
        end
    end
end
return ____exports
