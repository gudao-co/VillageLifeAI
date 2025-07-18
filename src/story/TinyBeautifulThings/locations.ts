import { Location } from '../../def/story';

export const locations: Record<string, Location> = {
  location_abandoned_cabin: {
    id: 'location_abandoned_cabin',
    title: '废弃小屋',
    description: '矿洞旁的废弃小屋，Clare的居所，内有书桌和旧沙发，是回忆触发点',
    tags: ['cabin', 'home', 'clare', 'memory']
  },
  location_library_corner: {
    id: 'location_library_corner',
    title: '图书馆角落',
    description: '图书馆内的安静角落，Clare在14:00-17:00在此写作',
    tags: ['library', 'writing', 'clare', 'daytime']
  },
  location_community_board: {
    id: 'location_community_board',
    title: '社区公告板',
    description: '小镇中心的公告板，每周发布居民的求助信',
    tags: ['community', 'quests', '公告板']
  },
  location_evelyn_kitchen: {
    id: 'location_evelyn_kitchen',
    title: 'Evelyn的厨房',
    description: 'Margaret的厨房，出现在回忆闪回中，叠加模糊滤镜',
    tags: ['memory', 'kitchen', 'margaret', '闪回']
  },
  location_summer_beach: {
    id: 'location_summer_beach',
    title: '夏季海滩',
    description: '夏季的海滩场景，出现在回忆闪回中，叠加模糊滤镜',
    tags: ['memory', 'beach', 'summer', '闪回']
  },
  location_saloon: {
    id: 'location_saloon',
    title: '酒馆',
    description: '小镇的酒馆，冬季举办“星露故事会”的场所',
    tags: ['saloon', 'community', 'ending', 'winter']
  },
  location_river: {
    id: 'location_river',
    title: '河边',
    description: '小镇的河边，适合钓鱼的地点',
    tags: ['river', 'fishing', 'summer']
  },
  location_secret_forest: {
    id: 'location_secret_forest',
    title: '秘密森林',
    description: '隐藏的森林区域，有Margaret的食谱',
    tags: ['forest', 'secret', 'fall']
  }
};
