import { Scene } from '../../def/story';

export const scenes: Record<string, Scene> = {
  // 任务1：农舍大扫除
  scene_task1_cleaning: {
    id: 'scene_task1_cleaning',
    title: '农舍大扫除',
    description: '腊月廿八，夫妻二人进行春节前的大扫除，期间艾利欧特碰倒花瓶引发小插曲',
    tags: ['任务1', '农舍', '夫妻互动', '春节准备'],
    speakerIds: ['speaker_player', 'speaker_elliott'],
    dialogueId: 'dialogue_task1_start_1',
    dependentSceneIds: [],
    locationId: 'location_farmhouse'
  },

  // 任务2：年货采购风波
  scene_task2_shopping: {
    id: 'scene_task2_shopping',
    title: '年货采购风波',
    description: '夫妻二人在皮埃尔杂货店采购年货，调解皮埃尔夫妇的争执并发生买酒小拌嘴',
    tags: ['任务2', '杂货店', 'NPC互动', '购物'],
    speakerIds: ['speaker_player', 'speaker_elliott', 'speaker_pierre'],
    dialogueId: 'dialogue_task2_pierre_argue_1',
    dependentSceneIds: [],
    locationId: 'location_pierres'
  },

  // 任务3~6场景定义省略...
};
