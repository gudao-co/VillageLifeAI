local ver = {
    appName = (_G.env and _G.env.SY_APP_NAME) or "app.main",
    appVersion = (_G.env and _G.env.SY_VERSION) or "1.1.0",
    luaVersion = (_G.env and _G.env.SY_APP_VERSION) or "1.1.0",
    platform = (_G.env and _G.env.platform) or "Android",
    packageType = (_G.env and _G.env.packageType) or "debug",
    deviceId = (_G.env and _G.env.deviceId) or "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    sessionId = (_G.env and _G.env.sessionId) or "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ---@diagnostic disable-next-line: need-check-nil
    installTime = (_G.env and math.floor(tonumber(_G.env.SY_INSTALL_TIME) / 1000)) or os.time(),
    language = (_G.env and _G.env.SY_LANGUAGE) or "zh-CN",
    region = (_G.env and _G.env.SY_REGION) or "CN"
}

local splitVersion = function(s)
    local parts = {}
    for part in string.gmatch(s, "([^%.%-]+)") do
        table.insert(parts, part)
    end
    return parts
end

ver.compare = function(a, b)
    local a1 = splitVersion(a)
    local b1 = splitVersion(b)
    local n = math.max(#a1, #b1)
    local v
    for i = 1, n do
        local v1 = a1[i]
        local v2 = b1[i]
        if v1 == nil then
            return -1
        end
        if v2 == nil then
            return 1
        end
        if string.match(v1, "^[0-9]+$") and string.match(v2, "^[0-9]+$") then
            ---@diagnostic disable-next-line: need-check-nil
            v = tonumber(v1) - tonumber(v2)
            if v ~= 0 then
                return v
            end
        else
            if v1 > v2 then
                return 1
            end
            if v1 < v2 then
                return -1
            end
        end
    end
    return 0
end

ver.isMinAppVersion = function(v)
    return ver.compare(ver.appVersion, v) >= 0
end

ver.isMaxAppVersion = function(v)
    return ver.compare(ver.appVersion, v) <= 0
end

ver.showVersion = function(...)
    local a = splitVersion(ver.appVersion)
    local r = ver.appVersion
    for _, v in ipairs({ ... }) do
        local u = splitVersion(v)
        if a[1] == u[1] and a[2] == u[2] then
            r = r .. "-" .. u[3]
        elseif a[1] == u[1] then
            r = r .. "-" .. u[2] .. "." .. u[3]
        else
            r = r .. "-" .. v
        end
    end
    return r .. "-" .. ver.lt()
end

ver.lt = function()
    local c = os.date("*t", ver.installTime)
    c.hour = 0
    c.min = 0
    c.sec = 0
    ---@diagnostic disable-next-line: param-type-not-match
    local install_date = os.time(c)
    local now = os.date("*t", os.time())
    c.hour = 0
    c.min = 0
    c.sec = 0
    ---@diagnostic disable-next-line: param-type-not-match
    return math.floor((os.time(now) - install_date) / (24 * 3600))
end

return ver
