import { Village } from '../def';

export const Krobus: Village.NPC = {
  name: 'Krobus',
  description: '居住在下水道的影子人，性格温和且神秘',
  gender: Village.Gender.Male,
  features: ['影子人', '居住在下水道', '喜欢宝石'],
  birthday: {
    season: Village.GDateSeason.Winter,
    day: 1,
    year: 0,
    weekday: Village.GDateWeekday.Wednesday
  },
  like: ['虚空蛋', '南瓜', '钻石', '铱锭', '除钻石外的宝石', '虚空精华', '太阳精华', '怪物战利品'],
  dislike: ['光精华', '蔬菜', '水果', '垃圾', '海藻', '绿藻', '浮木', '蜗牛'],
  address: {
    name: Village.GLocationName.Town,
    x: 85,
    y: 62
  }
} as Village.NPC