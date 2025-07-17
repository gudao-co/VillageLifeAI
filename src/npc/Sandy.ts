import { Village } from "../def";

export default {
    name: 'Sandy',
    description: '桑迪',
    gender: Village.Gender.Female,
    features: [],
    birthday: {
        season: Village.GDateSeason.Summer,
        day: 4,
        year: 0,
        weekday: Village.GDateWeekday.Thursday
    },
    like: ['椰子', '星露炸弹', '凤凰坚果', '五彩碎片', '宝石', '水果', '花', '蜂蜜'],
    dislike: ['黏土', '石头', '杂草', '木材', '硬木', '垃圾', '海草', '绿藻', '浮木', '蜗牛'],
    address: {
        name: '沙漠商店',
        x: 0,
        y: 0
    }
} as Village.NPC