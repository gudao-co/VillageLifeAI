import { Scene } from '../../def/story';

export const scenes: Record<string, Scene> = {
  // 第1集场景
  scene_ep1_community_meet: {
    id: 'scene_ep1_community_meet',
    title: '社区中心的相遇',
    description: '春日出现在社区中心，撞见艾拉躲角落画画，杰西在抱怨',
    tags: ['第1集', '初次相遇', '春季'],
    speakerIds: ['speaker_ella', 'speaker_jesse', 'player'],
    dialogueId: 'dialogue_ep1_ella_wary',
    dependentSceneIds: [],
    locationId: 'location_community_center_second_floor_left'
  },
  scene_ep1_jesse_bus_stop: {
    id: 'scene_ep1_jesse_bus_stop',
    title: '不存在的巴士',
    description: '陪杰西等待回城巴士',
    tags: ['第1集', '杰西线', '春季'],
    speakerIds: ['speaker_jesse', 'player'],
    dialogueId: 'dialogue_ep1_jesse_laugh',
    dependentSceneIds: ['scene_ep1_community_meet'],
    locationId: 'location_farm'
  },

  // 第2集场景
  scene_ep2_robin_argue: {
    id: 'scene_ep2_robin_argue',
    title: '罗宾的斥责',
    description: '夏初罗宾怒斥艾拉画画浪费时间',
    tags: ['第2集', '家庭矛盾', '夏季'],
    speakerIds: ['speaker_robin', 'speaker_ella'],
    dialogueId: 'dialogue_ep2_ella_cry',
    dependentSceneIds: [],
    locationId: 'location_robin_house_second_floor_ella_room'
  },
  scene_ep2_treehouse_cry: {
    id: 'scene_ep2_treehouse_cry',
    title: '树屋的安慰',
    description: '艾拉在树屋哭泣，杰西递纸巾安慰',
    tags: ['第2集', '情感释放', '夏季'],
    speakerIds: ['speaker_ella', 'speaker_jesse'],
    dialogueId: 'dialogue_ep2_jesse_comfort',
    dependentSceneIds: ['scene_ep2_robin_argue'],
    locationId: 'location_mine_forest_big_tree'
  },

  // 第3集场景
  scene_ep3_art_rejection: {
    id: 'scene_ep3_art_rejection',
    title: '投稿被拒',
    description: '秋中艾拉投稿被拒，玩家给予鼓励',
    tags: ['第3集', '挫折', '秋季'],
    speakerIds: ['speaker_ella', 'player'],
    dialogueId: 'dialogue_ep3_player_choice',
    dependentSceneIds: [],
    locationId: 'location_library_second_floor'
  },
  scene_ep3_jesse_realize: {
    id: 'scene_ep3_jesse_realize',
    title: '城市与乡村',
    description: '杰西发现城市朋友已遗忘自己',
    tags: ['第3集', '自我认知', '秋季'],
    speakerIds: ['speaker_jesse', 'speaker_sam'],
    dialogueId: 'dialogue_ep3_jesse_realize',
    dependentSceneIds: [],
    locationId: 'location_saloon_outside'
  },

  // 第4集场景
  scene_ep4_talent_show: {
    id: 'scene_ep4_talent_show',
    title: '青少年才艺展',
    description: '冬末社区中心才艺展，艾拉与杰西的和解',
    tags: ['第4集', '高潮', '冬季'],
    speakerIds: ['speaker_ella', 'speaker_jesse', 'speaker_robin', 'speaker_marnie'],
    dialogueId: 'dialogue_ep4_robin_whisper',
    dependentSceneIds: ['scene_ep3_art_rejection', 'scene_ep3_jesse_realize'],
    locationId: 'location_community_center_second_floor_left'
  }
};
