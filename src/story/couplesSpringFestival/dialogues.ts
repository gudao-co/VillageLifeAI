import { Dialogue } from '../../def/story';

export const dialogues: Record<string, Dialogue> = {
  // 任务1：农舍大扫除
  dialogue_task1_start_1: {
    id: 'dialogue_task1_start_1',
    speakerId: 'speaker_player',
    text: '（叉腰环顾杂乱的农舍）腊月廿八了，艾利欧特！你看看这屋里乱的，春联还没贴，窗户上全是灰，今天必须大扫除！',
    next: 'dialogue_task1_start_2'
  },
  dialogue_task1_start_2: {
    id: 'dialogue_task1_start_2',
    speakerId: 'speaker_elliott',
    text: '（从稿纸上抬起头，推了推眼镜）亲爱的，我正在构思新小说的结尾...灵感正盛呢，能不能明天再打扫？',
    next: 'dialogue_task1_start_3'
  },
  dialogue_task1_start_3: {
    id: 'dialogue_task1_start_3',
    speakerId: 'speaker_player',
    text: '（挑眉）再不动，你那笔杆都要长霉了！去年春节你也是这么说，结果年三十还在收拾。赶紧起来！',
    next: 'dialogue_task1_start_4'
  },
  dialogue_task1_start_4: {
    id: 'dialogue_task1_start_4',
    speakerId: 'speaker_elliott',
    text: '（叹气合上书）好吧好吧，我的首席清洁官大人。不过得说好，擦窗户这种精细活还是你来，我负责整理书架？',
    next: 'dialogue_task1_start_5'
  },
  dialogue_task1_start_5: {
    id: 'dialogue_task1_start_5',
    speakerId: 'speaker_player',
    text: '（笑着递过抹布）这还差不多。动作快点，中午我去玛妮那儿买新鲜鸡蛋做蛋卷。',
    next: 'dialogue_task1_accident_1'
  },
  dialogue_task1_accident_1: {
    id: 'dialogue_task1_accident_1',
    speakerId: 'speaker_elliott',
    text: '（踮脚够书架顶层的书）哎呀...',
    next: 'dialogue_task1_accident_2'
  },
  dialogue_task1_accident_2: {
    id: 'dialogue_task1_accident_2',
    speakerId: 'speaker_player',
    text: '（听到碎裂声回头）怎么了？！我的天，那是我最喜欢的青瓷花瓶！',
    next: 'dialogue_task1_accident_3'
  },
  dialogue_task1_accident_3: {
    id: 'dialogue_task1_accident_3',
    speakerId: 'speaker_elliott',
    text: '（手忙脚乱擦稿纸上的水）对不起对不起！我不是故意的...这书太重了...',
    next: 'dialogue_task1_accident_4'
  },
  dialogue_task1_accident_4: {
    id: 'dialogue_task1_accident_4',
    speakerId: 'speaker_player',
    text: '（看着湿掉的稿纸，语气软化）算了算了，稿子没湿太多就好。你呀，总是这么冒失。',
    next: 'dialogue_task1_memory_1'
  },
  dialogue_task1_memory_1: {
    id: 'dialogue_task1_memory_1',
    speakerId: 'speaker_elliott',
    text: '（挠头笑）还记得去年春节吗？你非要自己炸丸子，结果把面粉撒得满地都是，我们俩踩着面粉跳华尔兹。',
    next: 'dialogue_task1_memory_2'
  },
  dialogue_task1_memory_2: {
    id: 'dialogue_task1_memory_2',
    speakerId: 'speaker_player',
    text: '（噗嗤笑出声）那还不是因为你在旁边讲冷笑话！好了，赶紧收拾干净，不然中午蛋卷没你的份。',
    next: null
  },

  // 任务2：年货采购风波 (部分示例对话)
  dialogue_task2_pierre_argue_1: {
    id: 'dialogue_task2_pierre_argue_1',
    speakerId: 'speaker_pierre',
    text: '水仙！必须是水仙！年宵花就得要这种亭亭玉立的！',
    next: 'dialogue_task2_pierre_argue_2'
  },
  dialogue_task2_pierre_argue_2: {
    id: 'dialogue_task2_pierre_argue_2',
    speakerId: 'speaker_claire', // 注：原需求未提及但根据星露谷设定补充皮埃尔妻子
    text: '腊梅才有年味！你懂什么审美！',
    next: 'dialogue_task2_player_mediate'
  },
  dialogue_task2_player_mediate: {
    id: 'dialogue_task2_player_mediate',
    speakerId: 'speaker_player',
    text: '皮埃尔大叔，克莱尔阿姨，不如各摆一排？左边水仙右边腊梅，又对称又热闹。',
    next: 'dialogue_task2_pierre_agree'
  },
  // 更多对话省略...
};
