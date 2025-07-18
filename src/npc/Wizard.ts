import { Village } from '../def';

export default {
  name: 'Wizard',
  description: '居住在巫师塔的神秘法师，掌握着古老的魔法知识',
  gender: Village.Gender.Male,
  features: ['神秘的巫师', '居住在巫师塔', '研究魔法'],
  birthday: {
    season: Village.GDateSeason.Winter,
    day: 17,
    year: 0,
    weekday: Village.GDateWeekday.Saturday
  },
  like: ['虚空蛋', '五彩碎片', '太阳精华', '虚空精华', '所有宝石', '魔法物品', '蜂蜜'],
  dislike: ['黏土', '石头', '杂草', '木头', '硬木', '垃圾', '海藻', '绿藻', '浮木', '蜗牛'],
  address: {
    name: Village.GLocationName.Town,
    x: 120,
    y: 45
  }
} as Village.NPC