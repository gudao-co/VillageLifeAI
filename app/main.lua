local App = require("src.core.App").App

local Runtime = { eventId = 0, waitSet = {}, items = {} }

Runtime.newEventId = function(self)
    local eventId = self.eventId + 1
    self.eventId = eventId
    return tostring(eventId)
end

Runtime.wait = function(self, eventId, fn)
    self.waitSet[eventId] = fn
end

Runtime.exit = function(self)
    for eventId, fn in pairs(self.waitSet) do
        fn(tonumber(eventId), 3, "app exit")
    end
    self.waitSet = {}
end

Runtime.exec = function(self, cb, serviceName, methodName, ...)
    local eventId = self:newEventId()
    self:wait(
        eventId,
        function(...)
            cb(...)
        end
    )
    table.insert(self.items, { id = eventId, serviceName = serviceName, methodName = methodName, args = { ... } })
end

Runtime.call = function(self, serviceName, methodName, ...)
    -- print('Runtime.call', serviceName, methodName)
    local eventId = self:newEventId()
    local co = coroutine.running();
    self:wait(
        eventId,
        function(rs, err)
            -- print('Runtime.call result', serviceName, methodName, rs, err)
            local success, error = coroutine.resume(co, { rs or false, err })
            if not success then
                print('Runtime.call', serviceName, methodName, "coroutine.resume error", error)
            end
        end
    )
    table.insert(self.items, { id = eventId, serviceName = serviceName, methodName = methodName, args = { ... } })
    ---@diagnostic disable-next-line: await-in-sync
    return coroutine.yield()
end

if table.unpack == nil then
    ---@diagnostic disable-next-line: deprecated, access-invisible
    table.unpack = unpack
end

_G.encodeURIComponent = function(s)
    if s == nil then return "" end
    s = tostring(s)
    return string.gsub(s, "([^%w%-_%.%!%~%*%'%(%)])", function(c)
        return string.format("%%%02X", string.byte(c))
    end)
end

return function(inputData)
    -- print('mod-inputData', inputData)
    if App:getInstance() == nil then
        App:setInstance(Runtime)
        local co = coroutine.create(require("src.main").default)
        local success, error = coroutine.resume(co, App:getInstance())
        if not success then
            print("coroutine.resume error", error)
        end
    end
    if inputData.type == "return" then
        for _, item in pairs(inputData.items) do
            local eventId = item[1]
            local fn = Runtime.waitSet[eventId]
            -- print('mod-inputData return item', eventId, type(fn))
            if fn ~= nil then
                Runtime.waitSet[eventId] = nil
                local err = item[3]
                local co = coroutine.create(fn)
                if err then
                    local success, error = coroutine.resume(co, nil, err)
                    if not success then
                        print("coroutine.resume error", error, inputData)
                    end
                else
                    local success, error = coroutine.resume(co, item[2])
                    if not success then
                        print("coroutine.resume error", error, inputData)
                    end
                end
            end
        end
    elseif inputData.type == "event" then
        local app = App:getInstance()
        if inputData.eventName and app ~= nil then
            local co =
                coroutine.create(
                    function(eventName, eventArgs)
                        app:emit(eventName, table.unpack(eventArgs))
                    end
                )
            local success, error = coroutine.resume(co, inputData.eventName, inputData.eventArgs)
            if not success then
                print("coroutine.resume error", error, inputData)
            end
        end
    elseif inputData.type == "exit" then
        local app = App:getInstance()
        local co =
            coroutine.create(
                function()
                    app:emit("exit")
                    App:emit("exit")
                end
            )
        local success, error = coroutine.resume(co)
        if not success then
            print("coroutine.resume error", error)
        end
    end

    local co =
        coroutine.create(
            function()
                App:emit("done")
            end
        )

    local success, error = coroutine.resume(co)
    if not success then
        print("coroutine.resume error", error)
    end

    local items = Runtime.items
    Runtime.items = {}
    -- print('mod-return', items)
    return items
end
