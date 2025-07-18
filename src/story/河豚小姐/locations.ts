import { Location } from '../../def/story';

export const locations: Record<string, Location> = {
  location_grocery: {
    id: 'location_grocery',
    title: '皮埃尔的杂货店',
    description: '星露谷的主要杂货店，货架上摆满农产品与日用品，柜台后挂着营业许可证',
    tags: ['室内', '商业', '矛盾爆发地']
  },
  location_forest: {
    id: 'location_forest',
    title: '煤矿森林',
    description: '位于小镇北部的森林，有废弃矿井入口，树木茂密适合独处',
    tags: ['户外', '自然', '散心处']
  },
  location_square: {
    id: 'location_square',
    title: '星露谷广场',
    description: '社区活动中心，有木质舞台和长椅，中央矗立着镇长雕像',
    tags: ['户外', '社区', '活动场地']
  },
  location_beach: {
    id: 'location_beach',
    title: '星露谷海滩',
    description: '小镇东部的海岸线，可钓鱼，有搁浅的木船和贝壳滩',
    tags: ['户外', '自然', '和解场景']
  }
};
