import { Location } from '../../def/story';

export const locations: Record<string, Location> = {
  location_farm_hut: {
    id: 'location_farm_hut',
    title: '农场废弃小屋',
    description: '主角发现魔法棋盘的地方，对应原剧孤儿院地下室',
    tags: ['觉醒之地', '废弃建筑', '教程关']
  },
  location_saloon: {
    id: 'location_saloon',
    title: '星露谷酒馆',
    description: '格斯经营的酒馆，夜间吧台为棋艺指导场所，日间餐桌为谢恩训练场地',
    tags: ['训练场景', '社交场所', '关键互动']
  },
  location_wizard_tower: {
    id: 'location_wizard_tower',
    title: '巫师塔',
    description: '法师居住场所，决赛前揭示古代棋局秘密的地点',
    tags: ['对手场地', '魔法场景', '剧情关键']
  },
  location_leah_cabin: {
    id: 'location_leah_cabin',
    title: '莉亚的小屋',
    description: '森林中的艺术家小屋，莉亚为主角绘制棋局灵感',
    tags: ['支持者场景', '艺术元素', '情感互动']
  },
  location_town_hall: {
    id: 'location_town_hall',
    title: '市政厅',
    description: '刘易斯镇长办公室，锦标赛组织地，隐藏棋盘历史',
    tags: ['剧情推进', '秘密场所', '官方场景']
  },
  location_library: {
    id: 'location_library',
    title: '图书馆',
    description: '潘妮教书时，用书架排列模拟棋局的训练场景',
    tags: ['训练场景', '知识元素', '安静环境']
  },
  location_mine_30: {
    id: 'location_mine_30',
    title: '矿洞30层',
    description: '发光矿石组成临时棋盘，怪物移动轨迹对应棋路',
    tags: ['训练场景', '危险环境', '魔法元素']
  },
  location_beach: {
    id: 'location_beach',
    title: '沙滩',
    description: '雨天用贝壳和漂流木在沙上摆盘的训练场景',
    tags: ['训练场景', '自然元素', '放松环境']
  },
  location_community_center: {
    id: 'location_community_center',
    title: '社区中心大礼堂',
    description: '修复后的锦标赛场地，悬挂莉亚绘制的棋主题画作',
    tags: ['决赛场地', '公共空间', '高潮场景']
  }
};
