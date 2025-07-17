import { Village } from "../def";

export default {
    name: 'Maru',
    description: '马鲁住在木匠的商店。',
    gender: Village.Gender.Female,
    features: ['可结婚'],
    birthday: {
        season: Village.GDateSeason.Summer,
        day: 10,
        year: 0,
        weekday: Village.GDateWeekday.Wednesday
    },
    like: ['铱锭', '钻石', '热可可', '机器人玩具', '所有矿石(除铜/铁/金锭)', '所有宝石', '牛奶(所有品质)', '电池组'],
    dislike: ['黏土', '石头', '杂草', '木材', '硬木', '垃圾', '海草', '绿藻', '浮木', '蜗牛'],
    address: {
        name: '木匠的商店',
        x: 0,
        y: 0
    }
} as Village.NPC