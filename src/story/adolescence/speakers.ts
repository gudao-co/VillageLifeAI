import { Speaker } from '../../def/story';

export const speakers: Record<string, Speaker> = {
  speaker_ella: {
    id: 'speaker_ella',
    name: '艾拉',
    description: '16岁，罗宾与德米特里厄斯次女，压抑绘画爱好。外观：阿比盖尔短发+潘妮眼镜+绿色连帽衫+牛仔裤',
    tags: ['青少年', '内向', '绘画爱好者', '罗宾家人']
  },
  speaker_jesse: {
    id: 'speaker_jesse',
    name: '杰西',
    description: '17岁，玛妮远房孙子，叛逆城市少年。外观：山姆发型+红色连帽卫衣+破洞牛仔裤+滑板（自行车动画改向）',
    tags: ['青少年', '叛逆', '城市背景', '玛妮家人']
  },
  speaker_robin: {
    id: 'speaker_robin',
    name: '罗宾',
    description: '艾拉母亲，木匠，性格强势',
    tags: ['成年人', '母亲', '工匠']
  },
  speaker_demetrius: {
    id: 'speaker_demetrius',
    name: '德米特里厄斯',
    description: '艾拉继父，科学家，理性至上',
    tags: ['成年人', '继父', '科学家']
  },
  speaker_marnie: {
    id: 'speaker_marnie',
    name: '玛妮',
    description: '杰西奶奶，牧场主，慈祥包容',
    tags: ['长辈', '牧场主', '慈祥']
  },
  speaker_leah: {
    id: 'speaker_leah',
    name: '莉亚',
    description: '艺术家，潜在艺术导师',
    tags: ['成年人', '艺术家', '导师']
  },
  speaker_sam: {
    id: 'speaker_sam',
    name: '山姆',
    description: '乐队成员，杰西的朋友',
    tags: ['青少年', '朋友', '音乐人']
  },
  speaker_penny: {
    id: 'speaker_penny',
    name: '潘妮',
    description: '教师，艾拉的辅导老师',
    tags: ['成年人', '教师', '温柔']
  }
};
