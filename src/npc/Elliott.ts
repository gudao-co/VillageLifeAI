import { Village } from "../def";

export default {
    name: 'Elliott',
    description: '艾利欧特住在海滩小屋。',
    gender: Village.Gender.Male,
    features: ['可结婚'],
    birthday: {
        season: Village.GDateSeason.Autumn,
        day: 5,
        year: 0,
        weekday: Village.GDateWeekday.Wednesday
    },
    like: ['龙虾浓汤', '鸭毛', '石榴', '五彩碎片', '所有宝石(除五彩碎片)', '所有花', '水果(除椰子)', '葡萄酒', '咖啡'],
    dislike: ['蔬菜', '黏土', '石头', '杂草', '垃圾', '海草', '绿藻', '浮木', '蜗牛'],
    address: {
        name: '海滩小屋',
        x: 0,
        y: 0
    }
} as Village.NPC