import { Village } from "../def";

export default {
    name: 'Leo',
    description: '雷欧',
    gender: Village.Gender.Male,
    features: [],
    birthday: {
        season: Village.GDateSeason.Summer,
        day: 26,
        year: 0,
        weekday: Village.GDateWeekday.Friday
    },
    like: ['芒果', '椰子', '鹦鹉螺', '热带咖喱', '所有水果(热带优先)', '宝石', '贝壳', '蜂蜜'],
    dislike: ['蔬菜', '黏土', '石头', '杂草', '垃圾', '海草', '绿藻', '浮木', '蜗牛'],
    address: {
        name: '姜岛树屋',
        x: 0,
        y: 0
    }
} as Village.NPC