local json = require("lib/json")
local ver = require("lib/ver")
_G.Ver = ver
_G.console = {
    log = function(...)
        print('[LOG]', ...)
    end,
    error = function(...)
        print("[ERROR]", ...)
    end,
    warn = function(...)
        print("[WARN]", ...)
    end,
    info = function(...)
        print("[INFO]", ...)
    end
}

_G.encodeURIComponent = function(s)
    if s == nil then return "" end
    s = tostring(s)
    return string.gsub(s, "([^%w%-_%.%!%~%*%'%(%)])", function(c)
        return string.format("%%%02X", string.byte(c))
    end)
end

local App = require("src.core.App").App
local main = require("src.main")

local Runtime = { eventId = 0, waitSet = {}, items = {} }

Runtime.newEventId = function(self)
    local eventId = self.eventId + 1
    self.eventId = eventId
    return eventId
end

Runtime.wait = function(self, eventId, fn)
    self.waitSet[tostring(eventId)] = fn
end

Runtime.exit = function(self)
    for eventId, fn in pairs(self.waitSet) do
        fn(tonumber(eventId), 3, "app exit")
    end
    self.waitSet = {}
end

Runtime.createSay = function(self)
    local eventId = self:newEventId()
    local co = coroutine.running()
    self:wait(
        eventId,
        function(...)
            local success, error = coroutine.resume(co, ...)
            if not success then
                print("coroutine.resume error", error)
            end
        end
    )
    table.insert(self.items, { eventId, "createSay" })
    ---@diagnostic disable-next-line: await-in-sync
    local _, type, rs = coroutine.yield()
    if type == 1 then
        return rs
    else
        error("createSay error: " .. rs)
        return nil
    end
end

Runtime.say = function(self, id, profile, text, options)
    local eventId = self:newEventId()
    local co = coroutine.running()
    self:wait(
        eventId,
        function(...)
            local success, error = coroutine.resume(co, ...)
            if not success then
                print("coroutine.resume error", error)
            end
        end
    )
    table.insert(self.items, { eventId, "say", id, profile, text, options })
    ---@diagnostic disable-next-line: await-in-sync
    local _, type, rs = coroutine.yield()
    if type == 1 then
        return rs
    else
        error("say error: " .. rs)
        return nil
    end
end

Runtime.bg = function(self, id, res)
    local eventId = self:newEventId()
    table.insert(self.items, { eventId, "bg", id, res })
end

Runtime.tap = function(self, id, anchor)
    local eventId = self:newEventId()
    local co = coroutine.running()
    self:wait(
        eventId,
        function(...)
            local success, error = coroutine.resume(co, ...)
            if not success then
                print("coroutine.resume error", error)
            end
        end
    )
    table.insert(self.items, { eventId, "tap", id, anchor })
    ---@diagnostic disable-next-line: await-in-sync
    local _, type, rs = coroutine.yield()
    if type == 1 then
        return rs
    else
        error("say error: " .. rs)
        return nil
    end
end

Runtime.reward = function(self, id, name, value)
    local eventId = self:newEventId()
    local co = coroutine.running()
    self:wait(
        eventId,
        function(...)
            local success, error = coroutine.resume(co, ...)
            if not success then
                print("coroutine.resume error", error)
            end
        end
    )
    table.insert(self.items, { eventId, "reward", id, name, value })
    ---@diagnostic disable-next-line: await-in-sync
    local _, type, rs = coroutine.yield()
    if type == 1 then
        return rs
    else
        error("say error: " .. rs)
        return nil
    end
end

Runtime.pay = function(self, id, name, value)
    local eventId = self:newEventId()
    local co = coroutine.running()
    self:wait(
        eventId,
        function(...)
            local success, error = coroutine.resume(co, ...)
            if not success then
                print("coroutine.resume error", error)
            end
        end
    )
    table.insert(self.items, { eventId, "pay", id, name, value })
    ---@diagnostic disable-next-line: await-in-sync
    local _, type, rs = coroutine.yield()
    if type == 1 then
        return rs
    else
        error("say error: " .. rs)
        return nil
    end
end

Runtime.levelIndex = function(self, name)
    local eventId = self:newEventId()
    local co = coroutine.running()
    self:wait(
        eventId,
        function(...)
            local success, error = coroutine.resume(co, ...)
            if not success then
                print("coroutine.resume error", error)
            end
        end
    )
    table.insert(self.items, { eventId, "levelIndex", name })
    ---@diagnostic disable-next-line: await-in-sync
    local _, type, rs = coroutine.yield()
    if type == 1 then
        return rs
    else
        error("say error: " .. rs)
        return nil
    end
end

Runtime.show = function(self, name)
    local eventId = self:newEventId()
    local co = coroutine.running()
    self:wait(
        eventId,
        function(...)
            local success, error = coroutine.resume(co, ...)
            if not success then
                print("coroutine.resume error", error)
            end
        end
    )
    table.insert(self.items, { eventId, "show", name })
    ---@diagnostic disable-next-line: await-in-sync
    local _, type, rs = coroutine.yield()
    if type == 1 then
        return rs
    else
        error("say error: " .. rs)
        return nil
    end
end

Runtime.open = function(self, name)
    local eventId = self:newEventId()
    local co = coroutine.running()
    self:wait(
        eventId,
        function(...)
            local success, error = coroutine.resume(co, ...)
            if not success then
                print("coroutine.resume error", error)
            end
        end
    )
    table.insert(self.items, { eventId, "open", name })
    ---@diagnostic disable-next-line: await-in-sync
    local _, type, rs = coroutine.yield()
    if type == 1 then
        return rs
    else
        error("say error: " .. rs)
        return nil
    end
end

Runtime.hide = function(self, name)
    local eventId = self:newEventId()
    local co = coroutine.running()
    self:wait(
        eventId,
        function(...)
            local success, error = coroutine.resume(co, ...)
            if not success then
                print("coroutine.resume error", error)
            end
        end
    )
    table.insert(self.items, { eventId, "hide", name })
    ---@diagnostic disable-next-line: await-in-sync
    local _, type, rs = coroutine.yield()
    if type == 1 then
        return rs
    else
        error("say error: " .. rs)
        return nil
    end
end


Runtime.act = function(self, name, eventName, eventData)
    local eventId = self:newEventId()
    table.insert(self.items, { eventId, "act", name, eventName, eventData })
end

Runtime.isCompleted = function(self, name)
    local eventId = self:newEventId()
    local co = coroutine.running()
    self:wait(
        eventId,
        function(...)
            local success, error = coroutine.resume(co, ...)
            if not success then
                print("coroutine.resume error", error)
            end
        end
    )
    table.insert(self.items, { eventId, "isCompleted", name })
    ---@diagnostic disable-next-line: await-in-sync
    local _, type, rs = coroutine.yield()
    if type == 1 then
        return rs
    else
        error("say error: " .. rs)
        return nil
    end
end

Runtime.analysis = function(self, eventName, eventData)
    local eventId = self:newEventId()
    table.insert(self.items, { eventId, "analysis", eventName, eventData })
end

if table.unpack == nil then
    ---@diagnostic disable-next-line: deprecated, access-invisible
    table.unpack = unpack
end

return function(inputData)
    ---@diagnostic disable-next-line: unnecessary-if
    if ver.packageType ~= "release" then
        print("[ui]", "inputData", json.encode(inputData))
    end
    if inputData.type == "main" then
        Runtime:exit()
        App:setInstance(Runtime)
        local co = coroutine.create(main.default)
        local success, error = coroutine.resume(co, main, App:getInstance())
        if not success then
            print("coroutine.resume error", error)
        end
    elseif inputData.type == "return" then
        if inputData.items ~= nil then
            for _, item in pairs(inputData.items) do
                local eventId = tostring(item[1])
                local fn = Runtime.waitSet[eventId]
                if fn ~= nil then
                    fn(table.unpack(item))
                    Runtime.waitSet[eventId] = nil
                end
            end
        end
    elseif inputData.type == "event" then
        local app = App:getInstance()
        if inputData.eventName and app ~= nil then
            local co =
                coroutine.create(
                    function(eventName, eventData)
                        app:emit(eventName, eventData)
                    end
                )
            local success, error = coroutine.resume(co, inputData.eventName, inputData.eventData)
            if not success then
                print("coroutine.resume error", error)
            end
        end
    end

    local co =
        coroutine.create(
            function(inData)
                if inData.type == "done" then
                    App:emit("done", inData.uri, inData.data)
                else
                    App:emit("done")
                end
            end
        )

    local success, error = coroutine.resume(co, inputData)
    if not success then
        print("coroutine.resume error", error)
    end

    local items = Runtime.items

    Runtime.items = {}

    return {
        items = items
    }
end
