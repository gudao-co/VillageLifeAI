import { Script } from '../../def/story';

export const scripts: Record<string, Script> = {
  script_good_american_family: {
    id: 'script_good_american_family',
    title: 'Good American Family',
    description: '城市家庭搬至星露谷后的家庭关系修复与小镇融入故事，全程复用现有资产',
    tags: ['主线剧情', '家庭', '治愈', '四季'],
    chapterIds: [
      'chapter_1', 'chapter_2', 'chapter_3', 'chapter_4',
      'chapter_5', 'chapter_6', 'chapter_7', 'chapter_8'
    ],
    speakerIds: ['speaker_tom', 'speaker_claire', 'speaker_lila']
  }
};