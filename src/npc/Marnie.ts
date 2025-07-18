import { GDateSeason, GDateWeekday, Gender, GLocationName, NPC } from "../def/village";

export default {
    name: 'Marnie',
    description: '玛妮',
    gender: Gender.Female,
    features: [],
    birthday: {
        season: GDateSeason.Autumn,
        day: 18,
        year: 0,
        weekday: GDateWeekday.Friday
    },
    like: ['钻石', '粉红蛋糕', '南瓜派', '兔子的脚'],
    dislike: ['黏土', '石头', '杂草', '木材', '硬木', '垃圾', '海草', '绿藻', '浮木', '蜗牛'],
    address: {
        name: '玛妮牧场',
        x: 0,
        y: 0
    }
} as NPC