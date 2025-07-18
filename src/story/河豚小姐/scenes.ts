import { Scene } from '../../def/story';

export const scenes: Record<string, Scene> = {
  scene_conflict: {
    id: 'scene_conflict',
    title: '矛盾爆发',
    description: '皮埃尔发现阿比盖尔用营业收入购买神秘学书籍，父女爆发激烈争吵',
    tags: ['冲突', '室内', '核心矛盾'],
    speakerIds: ['speaker_pierre', 'speaker_abigail'],
    dialogueId: 'dialogue_argue_start',
    dependentSceneIds: [],
    locationId: 'location_grocery'
  },
  scene_community_involve: {
    id: 'scene_community_involve',
    title: '社区介入',
    description: '艾米丽向刘易斯反映情况，格斯透露皮埃尔的往事',
    tags: ['社区', '铺垫', '信息传递'],
    speakerIds: ['speaker_emily', 'speaker_lewis', 'speaker_gus'],
    dialogueId: 'dialogue_community_talk',
    dependentSceneIds: ['scene_conflict'],
    locationId: 'location_forest'
  },
  scene_empathy: {
    id: 'scene_empathy',
    title: '共情时刻',
    description: '茶话会上父女通过刘易斯引导，首次坦诚内心',
    tags: ['和解', '情感爆发', '社区活动'],
    speakerIds: ['speaker_lewis', 'speaker_pierre', 'speaker_abigail'],
    dialogueId: 'dialogue_tea_party_mediation',
    dependentSceneIds: ['scene_community_involve'],
    locationId: 'location_square'
  },
  scene_reconciliation: {
    id: 'scene_reconciliation',
    title: '和解结局',
    description: '海滩边父女交换礼物，理解彼此的"刺"与"柔软"',
    tags: ['结局', '情感升华', '象征意义'],
    speakerIds: ['speaker_pierre', 'speaker_abigail'],
    dialogueId: 'dialogue_beach_reconciliation',
    dependentSceneIds: ['scene_empathy'],
    locationId: 'location_beach'
  }
};
