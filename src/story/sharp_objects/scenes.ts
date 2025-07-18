import { Scene } from '../../../def/story';

export const scenes: Scene[] = [
  { id: 'scene_jodi_house_intro', title: '归乡初见', description: '卡米尔与乔迪的首次对话', tags: ['开端', '家庭张力'], speakerIds: ['speaker_camille', 'speaker_jodi'], dialogueId: 'dialogue_jodi_first_meeting', dependentSceneIds: [], locationId: 'location_jodi_house' },
  { id: 'scene_forest_feather', title: '羽毛线索', description: '煤矿森林发现彩色羽毛', tags: ['调查', '随机事件'], speakerIds: ['speaker_camille'], dialogueId: 'dialogue_feather_discovery', dependentSceneIds: [], locationId: 'location_coal_forest' },
  { id: 'scene_harvey_clinic', title: '诊所关怀', description: '哈维检查卡米尔的绷带', tags: ['心理暗示', '医疗'], speakerIds: ['speaker_camille', 'speaker_harvey'], dialogueId: 'dialogue_harvey_clinic', dependentSceneIds: [], locationId: 'location_clinic' },
  { id: 'scene_lewis_interrogation', title: '市长阻拦', description: '刘易斯警告卡米尔停止调查', tags: ['冲突', '权力'], speakerIds: ['speaker_camille', 'speaker_lewis'], dialogueId: 'dialogue_lewis_warning', dependentSceneIds: ['scene_forest_feather'], locationId: 'location_lewis_office' },
  { id: 'scene_cemetery_memory', title: '旧事回忆', description: '卡洛琳提及旧案', tags: ['伏笔', '回忆'], speakerIds: ['speaker_camille', 'speaker_caroline'], dialogueId: 'dialogue_caroline_cemetery', dependentSceneIds: [], locationId: 'location_cemetery' },
  { id: 'scene_marnie_key', title: '获取钥匙', description: '玛妮给予抽屉钥匙', tags: ['关键道具', '信任'], speakerIds: ['speaker_camille', 'speaker_marnie'], dialogueId: 'dialogue_marnie_key', dependentSceneIds: [], locationId: 'location_jodi_house' },
  { id: 'scene_drawer_secret', title: '抽屉秘密', description: '发现卡米尔童年日记', tags: ['核心线索', '童年创伤'], speakerIds: ['speaker_camille'], dialogueId: 'dialogue_diary_entry', dependentSceneIds: ['scene_marnie_key'], locationId: 'location_jodi_house' },
  { id: 'scene_feather_collection', title: '羽毛集齐', description: '触发刘易斯最终阻拦', tags: ['高潮', '冲突'], speakerIds: ['speaker_camille', 'speaker_lewis'], dialogueId: 'dialogue_lewis_final_warning', dependentSceneIds: ['scene_forest_feather'], locationId: 'location_coal_forest' },
  { id: 'scene_ending_choice', title: '结局抉择', description: '选择公开真相或保持沉默', tags: ['结局', '道德抉择'], speakerIds: ['speaker_camille', 'speaker_jodi'], dialogueId: 'dialogue_ending_choice', dependentSceneIds: ['scene_drawer_secret', 'scene_feather_collection'], locationId: 'location_jodi_house' }
];
