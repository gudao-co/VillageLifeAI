import { Location } from '../../def/story';

export const locations: Record<string, Location> = {
  location_bus_stop: {
    id: 'location_bus_stop',
    title: '巴士站',
    description: '连接鹈鹕镇与外界的交通枢纽，有破旧的候车亭和长椅',
    tags: ['outdoor', 'transport', 'spring']
  },
  location_miller_farm: {
    id: 'location_miller_farm',
    title: '米勒家农场',
    description: '位于煤矿森林东侧的小型农场，有木屋、菜园和木工区域',
    tags: ['farm', 'residence', 'all_seasons']
  },
  location_community_center: {
    id: 'location_community_center',
    title: '社区中心',
    description: '星露谷居民活动的主要场所，有花卉展览区和多功能大厅',
    tags: ['community', 'indoor', 'event_space']
  },
  location_forest: {
    id: 'location_forest',
    title: '煤矿森林',
    description: '农场附近的森林区域，有小径、溪流和丰富的野生动物',
    tags: ['outdoor', 'nature', 'all_seasons']
  },
  location_beach: {
    id: 'location_beach',
    title: '星露谷海滩',
    description: '鹈鹕镇南部的海滩，夏季常有游客和市集活动',
    tags: ['outdoor', 'water', 'summer']
  },
  location_town_square: {
    id: 'location_town_square',
    title: '鹈鹕镇广场',
    description: '小镇中心区域，有皮埃尔的杂货店和社区公告板',
    tags: ['community', 'outdoor', 'all_seasons']
  }
};
