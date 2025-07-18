import { Speaker } from '../../def/story';

export const speakers: Record<string, Speaker> = {
  speaker_pierre: {
    id: 'speaker_pierre',
    name: '皮埃尔',
    description: '杂货店老板，固执传统，希望女儿继承家业',
    tags: ['固执', '传统', '商人思维', '父亲']
  },
  speaker_abigail: {
    id: 'speaker_abigail',
    name: '阿比盖尔',
    description: '19岁叛逆少女，热爱冒险与神秘学，外号河豚小姐',
    tags: ['叛逆', '神秘学爱好者', '直率', '女儿']
  },
  speaker_lewis: {
    id: 'speaker_lewis',
    name: '刘易斯',
    description: '星露谷镇长，擅长调解社区矛盾',
    tags: ['调解者', '社区领袖', '睿智']
  },
  speaker_emily: {
    id: 'speaker_emily',
    name: '艾米丽',
    description: '裁缝店店员，阿比盖尔好友，性格包容',
    tags: ['包容', '友善', '创意']
  },
  speaker_gus: {
    id: 'speaker_gus',
    name: '格斯',
    description: '酒馆老板，社区信息枢纽',
    tags: ['消息灵通', '热心', '中立']
  }
};
