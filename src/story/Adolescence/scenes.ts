import { Scene } from '../../def/story';

export const scenes: Record<string, Scene> = {
  scene_ep1_festival_backstage: {
    id: 'scene_ep1_festival_backstage',
    title: '音乐节后台初遇',
    description: '夏季音乐节后台，山姆正在紧急寻找帮手',
    tags: ['introduction', 'music', 'conflict'],
    speakers: ['Sam', 'Abigail', 'Sebastian', 'Haley', 'Alex', 'Player'],
    dialogueId: 'dialogue_festival_meet_sam',
    dependentSceneIds: [],
    locationId: 'location_festival_backstage'
  },
  scene_ep1_stardrop_saloon: {
    id: 'scene_ep1_stardrop_saloon',
    title: '星之果实餐吧小聚',
    description: '音乐节结束后众人转移到餐吧休息',
    tags: ['social', 'relaxation'],
    speakers: ['Sam', 'Abigail', 'Penny', 'Player'],
    dialogueId: 'dialogue_festival_sam_mediate',
    dependentSceneIds: ['scene_ep1_festival_backstage'],
    locationId: 'location_stardrop_saloon'
  },
  scene_ep1_beach_bonfire: {
    id: 'scene_ep1_beach_bonfire',
    title: '海滩篝火晚会',
    description: '突如其来的大雨让众人转移到山姆家',
    tags: ['weather_event', 'group_bonding'],
    speakers: ['Sam', 'Penny', 'Abigail', 'Sebastian', 'Haley', 'Alex', 'Player'],
    dialogueId: 'dialogue_bonfire_rain',
    dependentSceneIds: ['scene_ep1_stardrop_saloon'],
    locationId: 'location_beach_bonfire'
  }
};