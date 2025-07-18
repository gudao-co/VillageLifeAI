import { Village } from '../def';

export const Linus: Village.NPC = {
  name: 'Linus',
  description: '住在煤矿森林帐篷里的流浪者，热爱自然和野生动物',
  gender: Village.Gender.Male,
  features: ['流浪者', '住在帐篷里', '喜欢自然'],
  birthday: {
    season: Village.GDateSeason.Winter,
    day: 3,
    year: 0,
    weekday: Village.GDateWeekday.Thursday
  },
  like: ['生鱼片', '椰子', '山药', '黑莓派', '所有采集的水果', '蘑菇', '鱼类', '坚果', '蜂蜜'],
  dislike: ['黏土', '石头', '杂草', '木头', '硬木', '垃圾', '海藻', '绿藻', '浮木', '蜗牛'],
  address: {
    name: Village.GLocationName.Town,
    x: 55,
    y: 48
  }
} as Village.NPC