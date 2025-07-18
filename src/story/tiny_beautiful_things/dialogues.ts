import { Dialogue } from '../../../def/story';

export const dialogues: Record<string, Dialogue> = {
  dialogue_ch1_lib_emily_intro: {
    id: 'dialogue_ch1_lib_emily_intro',
    speakerId: 'speaker_emily',
    text: '[玩家名]，这封信……说有个孩子害怕妈妈永远离开他。像极了当年妈妈化疗时的我……',
    choices: [
      {
        id: 'dialogue_ch1_lib_choice_seed',
        speakerId: 'speaker_player',
        text: '也许该告诉他，爱会变成种子',
        next: 'dialogue_ch1_lib_emily_response_seed'
      },
      {
        id: 'dialogue_ch1_lib_choice_worry',
        speakerId: 'speaker_player',
        text: '直接说‘别担心’会不会太敷衍？',
        next: 'dialogue_ch1_lib_emily_response_worry'
      }
    ]
  },
  dialogue_ch1_lib_emily_response_seed: {
    id: 'dialogue_ch1_lib_emily_response_seed',
    speakerId: 'speaker_emily',
    text: '（低头微笑）妈妈以前总说，郁金香球根埋在土里时最像墓碑……但春天会还给我们惊喜。',
    next: null
  },
  dialogue_ch1_lib_emily_response_worry: {
    id: 'dialogue_ch1_lib_emily_response_worry',
    speakerId: 'speaker_emily',
    text: '（苦笑）我当年也是这么想的。直到妈妈把化疗药比作‘太阳雨’——疼，但必要。',
    next: null
  },
  dialogue_ch2_beach_jas_angry: {
    id: 'dialogue_ch2_beach_jas_angry',
    speakerId: 'speaker_jas',
    text: '奶奶以前从不把我丢给Shane！你只关心那些陌生人的信！',
    next: 'dialogue_ch2_beach_emily_tremble'
  },
  dialogue_ch2_beach_emily_tremble: {
    id: 'dialogue_ch2_beach_emily_tremble',
    speakerId: 'speaker_emily',
    text: '我在学怎么……像她那样强大啊……',
    next: 'dialogue_ch2_beach_alex_intervene'
  },
  dialogue_ch2_beach_alex_intervene: {
    id: 'dialogue_ch2_beach_alex_intervene',
    speakerId: 'speaker_alex',
    text: '小豌豆（对Jas），你妈妈只是把‘糖’分给了太多人，忘了留一颗给自己。',
    next: null
  },
  dialogue_ch3_greenhouse_caroline_teach: {
    id: 'dialogue_ch3_greenhouse_caroline_teach',
    speakerId: 'speaker_caroline',
    text: '记住，即使埋在土里，只要心还在跳，就不算真正死去。',
    next: 'dialogue_ch3_greenhouse_emily_present'
  },
  dialogue_ch3_greenhouse_emily_present: {
    id: 'dialogue_ch3_greenhouse_emily_present',
    speakerId: 'speaker_emily',
    text: '（指尖抚过郁金香花瓣）妈妈，我好像终于懂了……',
    next: null
  },
  dialogue_ch4_greenhouse_repair: {
    id: 'dialogue_ch4_greenhouse_repair',
    speakerId: 'speaker_emily',
    text: '水管又冻裂了……妈妈以前总说温室是她的「情绪调节器」。（叹气）',
    choices: [
      {
        id: 'dialogue_ch4_choice_help',
        speakerId: 'speaker_player',
        text: '我来帮你修吧',
        next: 'dialogue_ch4_emily_grateful'
      },
      {
        id: 'dialogue_ch4_choice_journal',
        speakerId: 'speaker_player',
        text: '那本园艺日记还在吗？',
        next: 'dialogue_ch4_emily_journal'
      }
    ]
  },
  dialogue_ch4_emily_grateful: {
    id: 'dialogue_ch4_emily_grateful',
    speakerId: 'speaker_emily',
    text: '谢谢你，[玩家名]。（递出生锈的扳手）小心别碰坏妈妈留下的喷壶。',
    next: null
  },
  dialogue_ch4_emily_journal: {
    id: 'dialogue_ch4_emily_journal',
    speakerId: 'speaker_emily',
    text: '（从工具箱底层抽出泛黄笔记本）在这里……最后一页夹着她的郁金香图谱。',
    next: null
  },
  dialogue_ch5_forest_letter: {
    id: 'dialogue_ch5_forest_letter',
    speakerId: 'speaker_emily',
    text: '（举着信封）「我的猫咪Mittens三天没回家了，妈妈说它去追蝴蝶了……但我知道它是不要我了。」',
    choices: [
      {
        id: 'dialogue_ch5_choice_sympathize',
        speakerId: 'speaker_player',
        text: '失去宠物的痛会变成星星',
        next: 'dialogue_ch5_emily_remember'
      },
      {
        id: 'dialogue_ch5_choice_practical',
        speakerId: 'speaker_player',
        text: '或许该建议贴寻猫启事？',
        next: 'dialogue_ch5_emily_practical'
      }
    ]
  },
  dialogue_ch5_emily_remember: {
    id: 'dialogue_ch5_emily_remember',
    speakerId: 'speaker_emily',
    text: '（眼眶湿润）妈妈化疗时，我也曾对着星星给她写信……',
    next: null
  },
  dialogue_ch5_emily_practical: {
    id: 'dialogue_ch5_emily_practical',
    speakerId: 'speaker_emily',
    text: '（苦笑）实用主义者Alex会喜欢你的建议。但有时候，人们需要的不是解决方案。',
    next: null
  },
  dialogue_ch6_mountain_confession: {
    id: 'dialogue_ch6_mountain_confession',
    speakerId: 'speaker_emily',
    text: '（抓住Jas的肩膀）对不起……我怕变成妈妈那样的工作狂，结果却变成了缺席的妈妈。',
    next: 'dialogue_ch6_jas_response'
  },
  dialogue_ch6_jas_response: {
    id: 'dialogue_ch6_jas_response',
    speakerId: 'speaker_jas',
    text: '（哭腔）奶奶说你专栏里的人都比我重要！',
    next: 'dialogue_ch6_emily_hug'
  },
  dialogue_ch6_emily_hug: {
    id: 'dialogue_ch6_emily_hug',
    speakerId: 'speaker_emily',
    text: '（抱紧Jas）你是我的第一颗种子啊……对不起我把你种在了阴影里。',
    next: null
  },
  dialogue_ch7_house_reveal: {
    id: 'dialogue_ch7_house_reveal',
    speakerId: 'speaker_emily',
    text: '（摊开读者感谢信）这个说专栏让她有勇气离婚，那个说……（指向Jas）像你一样的小女孩现在会给流浪猫写信了。',
    next: 'dialogue_ch7_jas_understand'
  },
  dialogue_ch7_jas_understand: {
    id: 'dialogue_ch7_jas_understand',
    speakerId: 'speaker_jas',
    text: '（小声）那我能帮你回信吗？给那个丢了猫咪的女孩。',
    next: 'dialogue_ch7_emily_smile'
  },
  dialogue_ch7_emily_smile: {
    id: 'dialogue_ch7_emily_smile',
    speakerId: 'speaker_emily',
    text: '（揉Jas头发）我们一起。',
    next: null
  },
  dialogue_ch8_square_confession: {
    id: 'dialogue_ch8_square_confession',
    speakerId: 'speaker_emily',
    text: '（站在丰收节舞台）我是「亲爱的糖糖」。这些信……是我们互相治愈的证明。',
    next: 'dialogue_ch8_alex_tulip'
  },
  dialogue_ch8_alex_tulip: {
    id: 'dialogue_ch8_alex_tulip',
    speakerId: 'speaker_alex',
    text: '（递上郁金香）该给自己种一朵了，Emily。',
    next: 'dialogue_ch8_jas_cheer'
  },
  dialogue_ch8_jas_cheer: {
    id: 'dialogue_ch8_jas_cheer',
    speakerId: 'speaker_jas',
    text: '妈妈是超级英雄！',
    next: null
  }
};