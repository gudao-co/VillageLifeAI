import { Scene } from '../../def/story';

export const scenes: Record<string, Scene> = {
  // 第一集场景
  scene_spring_arrival: {
    id: 'scene_spring_arrival',
    title: '初来乍到',
    description: '第1年春5日广场搬家具场景，家庭首次亮相',
    tags: ['春季', '搬家', '初次见面'],
    speakerIds: ['speaker_tom', 'speaker_claire', 'speaker_lila'],
    dialogueId: 'dialogue_spring_arrival_tom_1',
    dependentSceneIds: [],
    locationId: 'location_town_square'
  },

  // 第二集场景
  scene_spring_crisis: {
    id: 'scene_spring_crisis',
    title: '农场危机',
    description: '春20日雨天蜂箱损坏事件，父女关系破冰',
    tags: ['春季', '危机', '家庭互动'],
    speakerIds: ['speaker_tom', 'speaker_claire', 'speaker_lila'],
    dialogueId: 'dialogue_spring_crisis_tom_1',
    dependentSceneIds: ['scene_spring_arrival'],
    locationId: 'location_honey_farm'
  },

  // 第三集场景
  scene_summer_flower_dance: {
    id: 'scene_summer_flower_dance',
    title: '花舞节融冰',
    description: '夏季花舞节广场场景，Lila社交突破',
    tags: ['夏季', '节日', '社交'],
    speakerIds: ['speaker_lila', 'speaker_claire'],
    dialogueId: 'dialogue_summer_flower_dance_lila_1',
    dependentSceneIds: ['scene_spring_arrival'],
    locationId: 'location_town_square'
  },

  // 第四集场景
  scene_summer_secret: {
    id: 'scene_summer_secret',
    title: '家庭秘密',
    description: '雨天酒吧Tom独自喝酒吐露真相',
    tags: ['夏季', '秘密', '酒吧'],
    speakerIds: ['speaker_tom', 'speaker_claire'],
    dialogueId: 'dialogue_summer_secret_tom_1',
    dependentSceneIds: ['scene_summer_flower_dance'],
    locationId: 'location_saloon'
  },

  // 第五集场景
  scene_fall_exhibition: {
    id: 'scene_fall_exhibition',
    title: '展览会合作',
    description: '展览会前3天社区中心准备展品',
    tags: ['秋季', '合作', '社区'],
    speakerIds: ['speaker_tom', 'speaker_claire', 'speaker_lila'],
    dialogueId: 'dialogue_fall_exhibition_claire_1',
    dependentSceneIds: ['scene_summer_secret'],
    locationId: 'location_community_center'
  },

  // 第六集场景
  scene_fall_storm: {
    id: 'scene_fall_storm',
    title: '社区互助',
    description: '暴风雨夜邻居作物受灾抢救',
    tags: ['秋季', '危机', '互助'],
    speakerIds: ['speaker_tom', 'speaker_claire'],
    dialogueId: 'dialogue_fall_storm_tom_1',
    dependentSceneIds: ['scene_fall_exhibition'],
    locationId: 'location_town_square'
  },

  // 第七集场景
  scene_winter_choice: {
    id: 'scene_winter_choice',
    title: '冰雪节抉择',
    description: '冰雪节前海滩家庭对话',
    tags: ['冬季', '抉择', '成长'],
    speakerIds: ['speaker_tom', 'speaker_lila'],
    dialogueId: 'dialogue_winter_choice_tom_1',
    dependentSceneIds: ['scene_fall_storm'],
    locationId: 'location_beach'
  },

  // 第八集场景
  scene_winter_final: {
    id: 'scene_winter_final',
    title: '星露谷日',
    description: '第1年冬26日绿篱小屋派对，温馨结局',
    tags: ['冬季', '结局', '庆祝'],
    speakerIds: ['speaker_tom', 'speaker_claire', 'speaker_lila'],
    dialogueId: 'dialogue_winter_final_tom_1',
    dependentSceneIds: ['scene_summer_flower_dance', 'scene_fall_exhibition', 'scene_winter_choice'],
    locationId: 'location_green_house'
  }
};