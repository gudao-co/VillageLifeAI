import { GDateSeason, GDateWeekday, Gender, GLocationName, NPC } from "../def/village";

export default {
    name: 'Birdie',
    description: '伯尼',
    gender: Gender.Female,
    features: [],
    birthday: {
        season: GDateSeason.Spring,
        day: 4,
        year: 0,
        weekday: GDateWeekday.Monday
    },
    like: ['金核桃', '椰子', '菠萝', '热带鱼'],
    dislike: ['黏土', '石头', '杂草', '木材', '硬木'],
    address: {
        name: '姜岛东北部小屋',
        x: 0,
        y: 0
    }
} as NPC