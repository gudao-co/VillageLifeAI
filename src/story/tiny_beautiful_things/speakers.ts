import { Speaker } from '../../def/story';

export const speakers: Record<string, Speaker> = {
  speaker_emily: {
    id: 'speaker_emily',
    name: 'Emily',
    description: '星露谷裁缝店店主，兼职经营「亲爱的糖糖」匿名专栏，性格温柔但背负对母亲的愧疚。',
    tags: ['主角', '裁缝', '专栏作者', '愧疚']
  },
  speaker_caroline: {
    id: 'speaker_caroline',
    name: 'Caroline',
    description: 'Emily的已故母亲，曾是鹈鹕镇园艺师，教会Emily「耐心与生长」的人生哲学。',
    tags: ['已故', '园艺师', '母亲']
  },
  speaker_jas: {
    id: 'speaker_jas',
    name: 'Jas',
    description: '12岁，由Emily监护的远房侄女，因Emily过度投入专栏而感到被忽视。',
    tags: ['女儿', '侄女', '被忽视']
  },
  speaker_alex: {
    id: 'speaker_alex',
    name: 'Alex',
    description: '前职业运动员，现经营海滩小吃摊，与Emily因「无法沟通的悲伤」分居。',
    tags: ['前夫', '运动员', '小吃摊店主']
  },
  speaker_player: {
    id: 'speaker_player',
    name: '[玩家名]',
    description: '星露谷的新居民，协助Emily处理匿名求助信。',
    tags: ['玩家', '协助者']
  }
};