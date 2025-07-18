import { GDateSeason, GDateWeekday, Gender, GLocationName, NPC } from "../def/village";

export default {
    name: 'Sebastian',
    description: '塞巴斯蒂安住在木匠的商店地下室。',
    gender: Gender.Male,
    features: ['可结婚'],
    birthday: {
        season: GDateSeason.Winter,
        day: 10,
        year: 0,
        weekday: GDateWeekday.Wednesday
    },
    like: ['生鱼片', '虚空蛋', '冰封晶球', '南瓜汤', '所有宝石(除冰封晶球)', '咖啡', '啤酒', '披萨'],
    dislike: ['鸡蛋(普通)', '牛奶(普通)', '黏土', '石头', '杂草', '垃圾', '海草', '绿藻', '浮木', '蜗牛', '竹节'],
    address: {
        name: '木匠的商店地下室',
        x: 0,
        y: 0
    }
} as NPC