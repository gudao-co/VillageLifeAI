local socket = require("socket")

local DISCOVERY_PORT = 39876

local function discover_service()
    local udp = assert(socket.udp())
    -- 绑定所有接口，监听广播包
    assert(udp:setsockname("0.0.0.0", DISCOVERY_PORT))
    assert(udp:settimeout(0.5))

    while true do
        local response, ip = udp:receivefrom()
        if response and #response > 0 then
            print(response)
            local result = {}
            for line in string.gmatch(response, "[^\n]+") do
                local ip_port, name = string.match(line, "([^,]+),(.+)")
                if ip_port and name then
                    local host, port = string.match(ip_port, "([^:]+):(%d+)")
                    if host and port then
                        if host == 'discovery' then
                            host = ip
                        end
                        table.insert(result, {
                            host = host,
                            port = tonumber(port),
                            name = name
                        })
                    end
                end
            end
            if #result > 0 then
                udp:close()
                return result
            end
        elseif ip == "interrupted!" then
            print("\nDiscovery interrupted by user.")
            udp:close()
            return {}
        end
        socket.sleep(0.1)
    end
end

return discover_service
