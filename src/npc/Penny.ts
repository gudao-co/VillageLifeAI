import { GDateSeason, GDateWeekday, Gender, GLocationName, NPC } from "../def/village";

export default {
    name: 'Penny',
    description: '潘妮',
    gender: Gender.Female,
    features: [],
    birthday: {
        season: GDateSeason.Autumn,
        day: 2,
        year: 0,
        weekday: GDateWeekday.Wednesday
    },
    like: ['钻石', '绿宝石', '罂粟', '沙鱼排', '所有水果', '所有宝石(除钻石/绿宝石)', '牛奶(所有品质)', '鸡蛋(所有品质)', '沙拉'],
    dislike: ['黏土', '石头', '杂草', '木材', '硬木', '垃圾', '海草', '绿藻', '浮木', '蜗牛'],
    address: {
        name: 'trailer(玛妮牧场旁)',
        x: 0,
        y: 0
    }
} as NPC