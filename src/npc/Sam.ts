import { Village } from "../def";

export default {
    name: 'Sam',
    description: '山姆是住在鹈鹕镇西侧房子的居民，与文森特、乔迪同住。',
    gender: Village.Gender.Male,
    features: ['可结婚'],
    birthday: {
        season: Village.GDateSeason.Summer,
        day: 17,
        year: 0,
        weekday: Village.GDateWeekday.Wednesday
    },
    like: ['披萨', '仙人掌果', '老虎机', '曲棍球棒', '所有水果', '所有宝石(除五彩碎片)', '鸡蛋(所有品质)', '啤酒'],
    dislike: ['蔬菜', '黏土', '石头', '杂草', '垃圾', '海草', '绿藻', '浮木', '蜗牛'],
    address: {
        name: '鹈鹕镇西侧房子(与文森特、乔迪同住)',
        x: 0,
        y: 0
    }
} as Village.NPC