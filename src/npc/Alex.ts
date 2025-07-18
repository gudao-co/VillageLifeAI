import { GDateSeason, GDateWeekday, Gender, GLocationName, NPC } from "../def/village";

export default {
    name: 'Alex',
    description: '前高中橄榄球明星，现在帮助祖母经营农场',
    gender: Gender.Male,
    features: ['金发', '喜欢运动', '关心祖母'],
    birthday: {
        season: GDateSeason.Summer,
        day: 13,
        year: 0,
        weekday: GDateWeekday.Sunday
    },
    like: ['蛋白棒', '哑铃', '牛排'],
    dislike: ['鱼', '海藻', '蜗牛'],
    address: {
        name: GLocationName.Town,
        x: 35,
        y: 42
    }
} as NPC