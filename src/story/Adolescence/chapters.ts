import { Chapter } from '../../def/story';

export const chapters: Record<string, Chapter> = {
  chapter_ep1_stranger: {
    id: 'chapter_ep1_stranger',
    title: '第1集：闯入的“陌生人”',
    description: '春季，艾拉与杰西在社区中心相遇，玩家帮助两人解决初步矛盾',
    tags: ['主线', '春季', '相遇'],
    speakerIds: ['speaker_ella', 'speaker_jesse', 'player', 'speaker_marnie'],
    sceneIds: ['scene_ep1_community_meet', 'scene_ep1_jesse_bus_stop']
  },
  chapter_ep2_conflict: {
    id: 'chapter_ep2_conflict',
    title: '第2集：藏不住的矛盾',
    description: '夏季，家庭矛盾爆发，艾拉与杰西在树屋互相安慰，莉亚留下鼓励纸条',
    tags: ['主线', '夏季', '家庭'],
    speakerIds: ['speaker_ella', 'speaker_jesse', 'speaker_robin', 'speaker_leah'],
    sceneIds: ['scene_ep2_robin_argue', 'scene_ep2_treehouse_cry']
  },
  chapter_ep3_crack: {
    id: 'chapter_ep3_crack',
    title: '第3集：裂痕与光',
    description: '秋季，艾拉投稿被拒，杰西与城市朋友疏远，获得玩家与社区支持',
    tags: ['主线', '秋季', '成长'],
    speakerIds: ['speaker_ella', 'speaker_jesse', 'player', 'speaker_penny', 'speaker_sam'],
    sceneIds: ['scene_ep3_art_rejection', 'scene_ep3_jesse_realize']
  },
  chapter_ep4_reconciliation: {
    id: 'chapter_ep4_reconciliation',
    title: '第4集：和自己和解',
    description: '冬季，社区中心才艺展，艾拉与杰西正视内心，与家人达成和解',
    tags: ['主线', '冬季', '和解'],
    speakerIds: ['speaker_ella', 'speaker_jesse', 'speaker_robin', 'speaker_marnie', 'player'],
    sceneIds: ['scene_ep4_talent_show']
  }
};
