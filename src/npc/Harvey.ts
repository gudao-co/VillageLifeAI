import { Village } from "../def";

export default {
    name: 'Harvey',
    description: '哈维',
    gender: Village.Gender.Male,
    features: [],
    birthday: {
        season: Village.GDateSeason.Winter,
        day: 14,
        year: 0,
        weekday: Village.GDateWeekday.Wednesday
    },
    like: ['咖啡', '能量滋补水', '松露油', '钻石', '所有宝石(除钻石)', '牛奶(所有品质)', '鸡蛋(所有品质)', '蜂蜜'],
    dislike: ['蔬菜', '黏土', '石头', '杂草', '垃圾', '海草', '绿藻', '浮木', '蜗牛'],
    address: {
        name: "鹈鹕镇诊所",
        x: 0,
        y: 0
    }
} as Village.NPC