import { Chapter } from '../../def/story';

export const chapters: Record<string, Chapter> = {
  chapter_task1: {
    id: 'chapter_task1',
    title: '农舍大扫除',
    description: '腊月廿八，夫妻二人打扫农舍时发生小意外，通过回忆往事化解矛盾',
    tags: ['主线任务', '夫妻日常', '春节准备'],
    speakerIds: ['speaker_player', 'speaker_elliott'],
    sceneIds: ['scene_task1_cleaning']
  },
  chapter_task2: {
    id: 'chapter_task2',
    title: '年货采购风波',
    description: '在杂货店调解皮埃尔夫妇争执，并因买酒问题与艾利欧特达成妥协',
    tags: ['主线任务', 'NPC互动', '购物'],
    speakerIds: ['speaker_player', 'speaker_elliott', 'speaker_pierre'],
    sceneIds: ['scene_task2_shopping']
  },
  // 任务3~6章节定义省略...
};
