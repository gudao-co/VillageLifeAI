import { GDateSeason, GDateWeekday, Gender, GLocationName, NPC } from "../def/village";

export default {
    name: 'Sandy',
    description: '桑迪',
    gender: Gender.Female,
    features: [],
    birthday: {
        season: GDateSeason.Summer,
        day: 4,
        year: 0,
        weekday: GDateWeekday.Monday
    },
    like: ['椰子', '星露炸弹', '凤凰坚果', '五彩碎片'],
    dislike: ['黏土', '石头', '杂草', '木材', '硬木'],
    address: {
        name: '沙漠商店',
        x: 0,
        y: 0
    }
} as NPC