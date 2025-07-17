import { Village } from "../def";

export default {
    name: 'Jas',
    description: 'Jas',
    gender: Village.Gender.Female,
    features: [],
    birthday: {
        season: Village.GDateSeason.Summer,
        day: 4,
        year: 0,
        weekday: Village.GDateWeekday.Wednesday
    },
    like: ['粉色蛋糕', '草莓', '钻石', '曲奇', '所有水果', '糖果', '花', '玩具'],
    dislike: ['蔬菜', '黏土', '石头', '杂草', '垃圾', '海草', '绿藻', '浮木', '蜗牛'],
    address: {
        name: '玛妮牧场',
        x: 0,
        y: 0
    }
} as Village.NPC;