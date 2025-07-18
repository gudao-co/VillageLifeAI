import { Script } from '../../def/story';

export const scripts: Record<string, Script> = {
  script_chess_story: {
    id: 'script_chess_story',
    title: '星露谷：后翼弃兵',
    description: '主角通过魔法棋盘克服依赖，揭开星露谷古代文明秘密的棋艺成长故事',
    tags: ['星露谷', '后翼弃兵', '棋艺', '成长', '魔法'],
    chapterIds: ['chapter_1', 'chapter_2', 'chapter_3', 'chapter_4', 'chapter_5'],
    speakerIds: ['speaker_player', 'speaker_gus', 'speaker_wizard', 'speaker_leah', 'speaker_lewis', 'speaker_shane']
  }
};
