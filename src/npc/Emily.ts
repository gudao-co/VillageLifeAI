import { GDateSeason, GDateWeekday, Gender, GLocationName, NPC } from "../def/village";

export default {
    name: 'Emily',
    description: '充满艺术气息的裁缝，Haley的姐姐',
    gender: Gender.Female,
    features: ['紫发', '喜欢手工', '能与灵魂交流'],
    birthday: {
        season: GDateSeason.Spring,
        day: 27,
        year: 0,
        weekday: GDateWeekday.Thursday
    },
    like: ['布料', '羊毛', '翡翠'],
    dislike: ['矿石', '肉类', '垃圾'],
    address: {
        name: GLocationName.Town,
        x: 48,
        y: 53
    }
} as NPC