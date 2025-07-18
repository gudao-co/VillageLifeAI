import { GDateSeason, GDateWeekday, Gender, GLocationName, NPC } from "../def/village";

export default {
    name: 'Abigail',
    description: '星露谷的女主人公，镇长Lewis的女儿，喜欢冒险和神秘事物',
    gender: Gender.Female,
    features: ['紫色头发', '喜欢探索矿洞', '热爱音乐'],
    birthday: {
        season: GDateSeason.Autumn,
        day: 13,
        year: 0,
        weekday: GDateWeekday.Friday
    },
    like: ['紫水晶', '巧克力蛋糕', '南瓜', '虚空蛋黄酱'],
    dislike: ['牛奶', '鸡蛋', '普通蘑菇'],
    address: {
        name: GLocationName.Town,
        x: 42,
        y: 54
    }
} as NPC
