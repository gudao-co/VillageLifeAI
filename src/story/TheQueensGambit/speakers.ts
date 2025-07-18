import { Speaker } from '../../def/story';

export const speakers: Record<string, Speaker> = {
  speaker_player: {
    id: 'speaker_player',
    name: '贝丝·哈蒙',
    description: '新来的农场主，自带神秘木箱，每晚梦见棋盘布局',
    tags: ['主角', '棋手', '农场主']
  },
  speaker_gus: {
    id: 'speaker_gus',
    name: '格斯',
    description: '星露谷酒馆老板，前锦标赛冠军，兼职棋艺导师',
    tags: ['导师', '酒馆老板', '前冠军']
  },
  speaker_wizard: {
    id: 'speaker_wizard',
    name: '法师',
    description: '巫师塔居住的卫冕冠军，掌握古代棋盘咒语',
    tags: ['对手', '巫师', '卫冕冠军']
  },
  speaker_leah: {
    id: 'speaker_leah',
    name: '莉亚',
    description: '森林画家，用画笔记录主角棋局灵感',
    tags: ['闺蜜', '艺术家', '支持者']
  },
  speaker_lewis: {
    id: 'speaker_lewis',
    name: '刘易斯',
    description: '鹈鹕镇镇长，锦标赛组织者，隐藏棋盘历史秘密',
    tags: ['组织者', '镇长', '秘密持有者']
  },
  speaker_shane: {
    id: 'speaker_shane',
    name: '谢恩',
    description: '酒馆助手，暴躁棋手，后成为主角训练搭档',
    tags: ['对手', '训练搭档', '酒保助手']
  }
};
