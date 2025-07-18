import { GDateSeason, GDateWeekday, Gender, GLocationName, NPC } from "../def/village";

export default {
    name: 'Leo',
    description: '雷欧',
    gender: Gender.Male,
    features: [],
    birthday: {
        season: GDateSeason.Summer,
        day: 26,
        year: 0,
        weekday: GDateWeekday.Monday
    },
    like: ['芒果', '椰子', '鹦鹉螺', '热带咖喱'],
    dislike: ['蔬菜', '黏土', '石头', '杂草'],
    address: {
        name: '姜岛树屋',
        x: 0,
        y: 0
    }
} as NPC