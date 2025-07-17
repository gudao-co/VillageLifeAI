import { Village } from "../def";

export default {
    name: 'Dwarf',
    description: '矮人',
    gender: Village.Gender.Unknown,
    features: [],
    birthday: {
        season: Village.GDateSeason.Spring,
        day: 1,
        year: 0,
        weekday: Village.GDateWeekday.Monday
    },
    like: ['宝石(除五彩碎片)', '金锭', '铱锭'],
    dislike: ['黏土', '石头', '杂草', '木材', '硬木'],
    address: {
        name: '矿井(120层)',
        x: 0,
        y: 0
    }
} as Village.NPC