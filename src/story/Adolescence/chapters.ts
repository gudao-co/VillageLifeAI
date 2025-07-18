import { Chapter } from '../../def/story';

export const chapters: Record<string, Chapter> = {
  chapter_ep1_1: {
    id: 'chapter_ep1_1',
    title: '音乐节的意外帮手',
    description: '玩家在音乐节后台偶遇山姆并加入乐队帮忙',
    tags: ['introduction', 'music', 'first_meeting'],
    speakers: ['Sam', 'Abigail', 'Sebastian', 'Haley', 'Alex', 'Player'],
    sceneIds: ['scene_ep1_festival_backstage']
  },
  chapter_ep1_2: {
    id: 'chapter_ep1_2',
    title: '餐吧的微妙气氛',
    description: '众人在星之果实餐吧休息，初次交流显露性格棱角',
    tags: ['social', 'character_interaction'],
    speakers: ['Sam', 'Abigail', 'Penny', 'Player'],
    sceneIds: ['scene_ep1_stardrop_saloon']
  },
  chapter_ep1_3: {
    id: 'chapter_ep1_3',
    title: '雨夜的星空',
    description: '篝火晚会突遇大雨，众人在山姆家躲雨时关系缓和',
    tags: ['weather_event', 'emotional_bonding'],
    speakers: ['Sam', 'Penny', 'Abigail', 'Sebastian', 'Haley', 'Alex', 'Player'],
    sceneIds: ['scene_ep1_beach_bonfire']
  }
};