import { Location } from '../../../def/story';

export const locations: Record<string, Location> = {
  location_library_second_floor: {
    id: 'location_library_second_floor',
    title: '图书馆二楼角落',
    description: '专栏写作室，新增书桌资产，Emily撰写回信并触发回忆闪回的场所。',
    tags: ['室内', '写作', '回忆触发点']
  },
  location_beach_tide_pool: {
    id: 'location_beach_tide_pool',
    title: '海滩潮汐池',
    description: '日落时段的母女冲突点，Jas与Emily爆发争吵，Alex介入调解。',
    tags: ['室外', '冲突场景', '日落']
  },
  location_greenhouse: {
    id: 'location_greenhouse',
    title: '温室',
    description: 'Caroline生前打理的温室，闪现其教Emily种植郁金香的回忆场景。',
    tags: ['室内', '回忆场景', '园艺']
  },
  location_mountain_top: {
    id: 'location_mountain_top',
    title: '山顶',
    description: '星露谷最高处，母女在暴雨中坦诚心结的和解高潮地。',
    tags: ['室外', '高潮场景', '暴雨']
  },
  location_town_square: {
    id: 'location_town_square',
    title: '鹈鹕镇广场',
    description: '丰收节期间的结局公开场景，Emily公开专栏作者身份。',
    tags: ['室外', '结局场景', '节日']
  }
};