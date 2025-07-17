local discover_service = require('./discovery')
local json = require("./lib/json")
local meta = require("mod")
local socket = require("socket.core")

local _print = print

_G.print = function(...)
    local s = ''
    for _, v in pairs({ ... }) do
        if type(v) == 'table' then
            s = s .. '{ '
            for k, vv in pairs(v) do
                s = s .. k .. ' = ' .. tostring(vv) .. ' , '
            end
            s = s .. '} '
        else
            s = s .. v .. ' '
        end
    end
    _print(s)
end

_G.env = {
    TARGET = "SMAPI",
    MOD_ID = meta.id,
    MOD_VERSION = meta.version
}

_G.encodeURIComponent = function(s)
    if s == nil then return "" end
    s = tostring(s)
    return string.gsub(s, "([^%w%-_%.%!%~%*%'%(%)])", function(c)
        return string.format("%%%02X", string.byte(c))
    end)
end

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


local ss = discover_service()
print(json.encode(ss))
---@diagnostic disable-next-line: need-check-nil
local s = ss[1]
if s == nil then
    print("未找到模拟器")
    os.exit(0)
end

-- 创建TCP连接
local tcp = assert(socket.tcp())

---@diagnostic disable-next-line: undefined-field, need-check-nil
-- 连接到localhost:19880
print("Connecting to simulator at " .. s.host .. ":" .. s.port .. "...")

---@diagnostic disable-next-line: undefined-field, need-check-nil
local success, err = tcp:connect(s.host, s.port)

if success then
    local exec = function(data)
        local text = json.encode(data) .. "\n"
        -- print(text)
        tcp:send(
            text
        )
    end
    local onMessage = function(inputData)
        local rs = require("main")(inputData)
        exec({ type = 'invoke', id = meta.id, invokes = rs })
    end
    exec({
        type = "login",
        meta = meta
    })
    -- 读取数据
    while true do
        -- print("tcp:receive ...")

        local line, receive_err = tcp:receive("*l") -- 读取一行数据
        if receive_err then
            print("TCP receive error:", err)
            break
        end

        -- print("tcp:receive", line)
        -- 解析JSON数据
        success, decoded = pcall(json.decode, line)
        if success then
            onMessage(decoded)
        else
            print("Failed to decode JSON:", decoded)
        end
    end
else
    print("Failed to connect to simulator:", err)
end

-- 关闭连接
tcp:close()
