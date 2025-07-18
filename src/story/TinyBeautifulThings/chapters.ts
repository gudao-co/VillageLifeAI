import { Chapter } from '../../def/story';

export const chapters: Record<string, Chapter> = {
  chapter_spring: {
    id: 'chapter_spring',
    title: '春季：初识Clare',
    description: '与Clare的初次相遇，收集褪色布料解锁小屋互动',
    tags: ['spring', 'introduction'],
    speakers: ['Clare', 'Player'],
    sceneIds: ['scene_spring_meet_clare']
  },
  chapter_summer: {
    id: 'chapter_summer',
    title: '夏季：母女和解',
    description: '帮助Lila钓彩虹鳟鱼，触发情感爆发，修复母女关系',
    tags: ['summer', 'family', 'reconciliation'],
    speakers: ['Clare', 'Lila', 'Player'],
    sceneIds: ['scene_summer_lila_fishing']
  },
  chapter_fall: {
    id: 'chapter_fall',
    title: '秋季：母亲回忆',
    description: '秘密森林找食谱触发厨房闪回，Clare与过去和解',
    tags: ['fall', 'memory', 'healing'],
    speakers: ['Clare', 'Margaret', 'Player'],
    sceneIds: ['scene_fall_recipe_memory']
  },
  chapter_winter: {
    id: 'chapter_winter',
    title: '冬季：社区联结',
    description: '酒馆“星露故事会”结局，解锁永久好感buff',
    tags: ['winter', 'community', 'resolution'],
    speakers: ['Clare', 'Lila', 'Player', 'Villagers'],
    sceneIds: ['scene_winter_storytelling']
  }
};
