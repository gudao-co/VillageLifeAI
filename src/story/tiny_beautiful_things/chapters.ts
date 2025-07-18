import { Chapter } from '../../../def/story';

export const chapters: Record<string, Chapter> = {
  chapter_ch1_first_seed: {
    id: 'chapter_ch1_first_seed',
    title: '第一颗种子',
    description: 'Emily在邮箱发现求助信，图书馆书桌出现「糖糖专栏」笔记本',
    tags: ['初始章节', '引入主题'],
    speakerIds: ['speaker_emily', 'speaker_player'],
    sceneIds: ['scene_ch1_library']
  },
  chapter_ch2_weeds_and_flowers: {
    id: 'chapter_ch2_weeds_and_flowers',
    title: '杂草与花',
    description: 'Jas弄坏Emily的回信草稿，触发「被忽视的童年」回忆',
    tags: ['冲突', '家庭关系'],
    speakerIds: ['speaker_jas', 'speaker_emily', 'speaker_alex'],
    sceneIds: ['scene_ch2_beach_conflict']
  },
  chapter_ch3_stones_after_tide: {
    id: 'chapter_ch3_stones_after_tide',
    title: '退潮后的石头',
    description: 'Alex送Jas回家时，与Emily谈及Caroline去世当天的争吵',
    tags: ['回忆', '和解铺垫'],
    speakerIds: ['speaker_emily', 'speaker_alex', 'speaker_caroline'],
    sceneIds: ['scene_ch3_greenhouse_memory']
  },
  chapter_ch4_greenhouse_whisper: {
    id: 'chapter_ch4_greenhouse_whisper',
    title: '温室秘语',
    description: '玩家协助Emily修复温室水管，解锁Caroline的园艺日记',
    tags: ['园艺', '日记', '线索'],
    speakerIds: ['speaker_emily', 'speaker_player', 'speaker_caroline'],
    sceneIds: ['scene_ch4_greenhouse_repair']
  },
  chapter_ch5_rainy_letter: {
    id: 'chapter_ch5_rainy_letter',
    title: '雨夜信件',
    description: '森林树桩发现小女孩求助信（寻找走失的猫），对应原剧「失去宠物」章节',
    tags: ['森林', '求助信', '宠物'],
    speakerIds: ['speaker_emily', 'speaker_player'],
    sceneIds: ['scene_ch5_forest_letter']
  },
  chapter_ch6_mountain_storm: {
    id: 'chapter_ch6_mountain_storm',
    title: '山顶暴雨',
    description: 'Jas离家出走，Emily在山顶找到她，坦白「害怕变成妈妈那样的工作狂」',
    tags: ['高潮', '暴雨', '坦白'],
    speakerIds: ['speaker_jas', 'speaker_emily'],
    sceneIds: ['scene_ch6_mountain_top']
  },
  chapter_ch7_sugar_truth: {
    id: 'chapter_ch7_sugar_truth',
    title: '糖糖的真相',
    description: 'Emily向Jas展示专栏读者的感谢信：「我们都在借别人的故事，疗自己的伤」',
    tags: ['真相', '疗愈', '理解'],
    speakerIds: ['speaker_emily', 'speaker_jas'],
    sceneIds: ['scene_ch7_house_reveal']
  },
  chapter_ch8_festival_confession: {
    id: 'chapter_ch8_festival_confession',
    title: '丰收节告白',
    description: 'Emily在广场宣布「糖糖就是我」，Alex递上郁金香：「该给自己种一朵了」',
    tags: ['结局', '公开', '和解'],
    speakerIds: ['speaker_emily', 'speaker_alex', 'speaker_jas', 'speaker_player'],
    sceneIds: ['scene_ch8_square_confession']
  }
};