import { Scene } from '../../../def/story';

export const scenes: Record<string, Scene> = {
  scene_ch1_library: {
    id: 'scene_ch1_library',
    title: '图书馆初接信件',
    description: 'Emily在图书馆二楼角落发现匿名求助信，触发回忆闪回',
    tags: ['第一章', '回忆触发', '初始场景'],
    speakerIds: ['speaker_emily', 'speaker_player'],
    dialogueId: 'dialogue_ch1_lib_emily_intro',
    dependentSceneIds: [],
    locationId: 'location_library_second_floor'
  },
  scene_ch2_beach_conflict: {
    id: 'scene_ch2_beach_conflict',
    title: '海滩争吵',
    description: '日落时分Jas与Emily在潮汐池爆发争吵，Alex介入调解',
    tags: ['第二章', '冲突场景', '情感爆发'],
    speakerIds: ['speaker_jas', 'speaker_emily', 'speaker_alex'],
    dialogueId: 'dialogue_ch2_beach_jas_angry',
    dependentSceneIds: ['scene_ch1_library'],
    locationId: 'location_beach_tide_pool'
  },
  scene_ch3_greenhouse_memory: {
    id: 'scene_ch3_greenhouse_memory',
    title: '温室回忆杀',
    description: 'Emily在温室修复水管时触发Caroline的回忆片段',
    tags: ['第三章', '回忆场景', '关键转折'],
    speakerIds: ['speaker_caroline', 'speaker_emily'],
    dialogueId: 'dialogue_ch3_greenhouse_caroline_teach',
    dependentSceneIds: ['scene_ch2_beach_conflict'],
    locationId: 'location_greenhouse'
  }
};