import { Village } from "../def";

export default {
    name: 'Robin',
    description: '罗宾',
    gender: Village.Gender.Female,
    features: [],
    birthday: {
        season: Village.GDateSeason.Winter,
        day: 21,
        year: 0,
        weekday: Village.GDateWeekday.Wednesday
    },
    like: ['山羊奶酪', '钻石', '铱锭', '枫糖浆', '所有矿石', '宝石(除钻石)', '木材', '硬木', '蜂蜜'],
    dislike: ['黏土', '石头', '杂草', '垃圾', '海草', '绿藻', '浮木', '蜗牛'],
    address: {
        name: '木匠的商店',
        x: 0,
        y: 0
    }
} as Village.NPC;