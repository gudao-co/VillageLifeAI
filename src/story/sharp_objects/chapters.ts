import { Chapter } from '../../def/story';

export const chapters: Chapter[] = [
  { id: 'chapter_ep1', title: '归乡疑云', description: '卡米尔回到星露谷，儿童失踪案初现', tags: ['开端', '人物介绍'], speakerIds: ['speaker_camille', 'speaker_jodi', 'speaker_lewis'], sceneIds: ['scene_jodi_house_intro', 'scene_lewis_interrogation'] },
  { id: 'chapter_ep2', title: '森林线索', description: '煤矿森林发现羽毛，触发调查', tags: ['调查', '悬疑'], speakerIds: ['speaker_camille', 'speaker_lewis'], sceneIds: ['scene_forest_feather'] },
  { id: 'chapter_ep3', title: '诊所秘语', description: '哈维揭示卡米尔的自残倾向', tags: ['心理', '个人线索'], speakerIds: ['speaker_camille', 'speaker_harvey'], sceneIds: ['scene_harvey_clinic'] },
  { id: 'chapter_ep4', title: '旧事阴影', description: '墓地对话揭露旧案', tags: ['伏笔', '历史'], speakerIds: ['speaker_camille', 'speaker_caroline'], sceneIds: ['scene_cemetery_memory'] },
  { id: 'chapter_ep5', title: '钥匙之谜', description: '从玛妮处获取关键道具', tags: ['道具', '信任'], speakerIds: ['speaker_camille', 'speaker_marnie'], sceneIds: ['scene_marnie_key'] },
  { id: 'chapter_ep6', title: '抽屉秘密', description: '打开乔迪家抽屉发现日记', tags: ['核心线索', '童年创伤'], speakerIds: ['speaker_camille'], sceneIds: ['scene_drawer_secret'] },
  { id: 'chapter_ep7', title: '真相逼近', description: '集齐羽毛触发最终阻拦', tags: ['高潮', '冲突'], speakerIds: ['speaker_camille', 'speaker_lewis'], sceneIds: ['scene_feather_collection'] },
  { id: 'chapter_ep8', title: '沉默或揭露', description: '结局选择影响小镇命运', tags: ['结局', '道德抉择'], speakerIds: ['speaker_camille', 'speaker_jodi'], sceneIds: ['scene_ending_choice'] }
];
