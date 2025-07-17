import { Village } from "../def";

export default {
    name: 'Lewis',
    description: '刘易斯',
    gender: Village.Gender.Male,
    features: [],
    birthday: {
        season: Village.GDateSeason.Spring,
        day: 7,
        year: 0,
        weekday: Village.GDateWeekday.Friday
    },
    like: ['金锭', '铱锭', '葡萄酒', '幸运兔脚'],
    dislike: ['黏土', '石头', '杂草', '木材', '硬木', '垃圾', '海草', '绿藻', '浮木', '蜗牛', '潘妮的短裤'],
    address: {
        name: '鹈鹕镇市政厅',
        x: 0,
        y: 0
    }
} as Village.NPC