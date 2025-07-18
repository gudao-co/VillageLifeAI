import { GDateSeason, GDateWeekday, Gender, GLocationName, NPC } from "../def/village";

export default {
    name: 'Leah',
    description: '莉亚',
    gender: Gender.Female,
    features: [],
    birthday: {
        season: GDateSeason.Spring,
        day: 23,
        year: 0,
        weekday: GDateWeekday.Wednesday
    },
    like: ['沙拉', '山羊奶酪', '葡萄酒', '枫糖浆', '所有蔬菜(除大蒜)', '所有水果', '所有宝石', '蘑菇', '坚果'],
    dislike: ['黏土', '石头', '杂草', '木材', '硬木', '垃圾', '海草', '绿藻', '浮木', '蜗牛', '竹节'],
    address: {
        name: GLocationName.LeahHouse,
        x: 0,
        y: 0
    }
} as NPC