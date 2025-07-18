import { Chapter } from '../../def/story';

export const chapters: Record<string, Chapter> = {
  chapter_spring_arrival: {
    id: 'chapter_spring_arrival',
    title: '初来乍到',
    description: '米勒一家搬到星露谷的初期适应过程，包含搬家、家庭矛盾与社区初接触',
    tags: ['spring', 'introduction', 'family'],
    speakers: ['汤姆', '莉娜', '艾米', '玩家', '格斯', '卡洛琳'],
    sceneIds: ['scene_spring_bus_stop_meet', 'scene_spring_farm_movein', 'scene_spring_tractor_argue']
  },
  chapter_summer_fall_growth: {
    id: 'chapter_summer_fall_growth',
    title: '融入与成长',
    description: '家庭成员在夏秋季逐渐适应乡村生活，发展个人兴趣并建立社区关系',
    tags: ['summer', 'fall', 'character_development'],
    speakers: ['艾米', '玛鲁', '汤姆', '罗宾', '莉娜', '刘易斯'],
    sceneIds: ['scene_summer_forest_amy_lost', 'scene_fall_workbench_proud']
  },
  chapter_winter_rooted: {
    id: 'chapter_winter_rooted',
    title: '扎根星露谷',
    description: '冬季危机后的家庭凝聚力提升，标志着米勒一家正式融入星露谷社区',
    tags: ['winter', 'holiday', 'community_integration'],
    speakers: ['汤姆', '莉娜', '艾米', '玩家', '文森特', '贾斯'],
    sceneIds: ['scene_winter_blizzard_emergency', 'scene_winter_christmas_dinner']
  }
};
