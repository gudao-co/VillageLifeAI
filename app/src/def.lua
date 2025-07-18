--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.Village = {}
local Village = ____exports.Village
do
    --- 星露谷世界的季节
    Village.GDateSeason = GDateSeason or ({})
    Village.GDateSeason.Spring = 0
    Village.GDateSeason[Village.GDateSeason.Spring] = "Spring"
    Village.GDateSeason.Summer = 1
    Village.GDateSeason[Village.GDateSeason.Summer] = "Summer"
    Village.GDateSeason.Autumn = 2
    Village.GDateSeason[Village.GDateSeason.Autumn] = "Autumn"
    Village.GDateSeason.Winter = 3
    Village.GDateSeason[Village.GDateSeason.Winter] = "Winter"
    --- 星露谷世界的星期
    Village.GDateWeekday = GDateWeekday or ({})
    Village.GDateWeekday.Monday = 0
    Village.GDateWeekday[Village.GDateWeekday.Monday] = "Monday"
    Village.GDateWeekday.Tuesday = 1
    Village.GDateWeekday[Village.GDateWeekday.Tuesday] = "Tuesday"
    Village.GDateWeekday.Wednesday = 2
    Village.GDateWeekday[Village.GDateWeekday.Wednesday] = "Wednesday"
    Village.GDateWeekday.Thursday = 3
    Village.GDateWeekday[Village.GDateWeekday.Thursday] = "Thursday"
    Village.GDateWeekday.Friday = 4
    Village.GDateWeekday[Village.GDateWeekday.Friday] = "Friday"
    Village.GDateWeekday.Saturday = 5
    Village.GDateWeekday[Village.GDateWeekday.Saturday] = "Saturday"
    Village.GDateWeekday.Sunday = 6
    Village.GDateWeekday[Village.GDateWeekday.Sunday] = "Sunday"
    --- 星露谷世界的性别
    Village.Gender = Gender or ({})
    Village.Gender.Unknown = 0
    Village.Gender[Village.Gender.Unknown] = "Unknown"
    Village.Gender.Male = 1
    Village.Gender[Village.Gender.Male] = "Male"
    Village.Gender.Female = 2
    Village.Gender[Village.Gender.Female] = "Female"
    --- 星露谷世界的地址名称(内置)
    Village.GLocationName = GLocationName or ({})
    Village.GLocationName.Town = "Town"
    Village.GLocationName.Farm = "Farm"
    Village.GLocationName.Mine = "Mine"
    Village.GLocationName.Beach = "Beach"
    Village.GLocationName.Desert = "Desert"
    Village.GLocationName.Saloon = "Saloon"
    Village.GLocationName.Hospital = "Hospital"
    Village.GLocationName.LeahHouse = "LeahHouse"
end
return ____exports
