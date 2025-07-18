import { Dialogue } from '../../../def/story';

export const dialogues: Record<string, Dialogue> = {
  dialogue_ch1_lib_emily_intro: {
    id: 'dialogue_ch1_lib_emily_intro',
    speakerId: 'speaker_emily',
    text: '[玩家名]，这封信……说有个孩子害怕妈妈永远离开他。像极了当年妈妈化疗时的我……',
    tags: ['第一章', '回忆触发'],
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
    tags: ['第二章', '冲突'],
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
    tags: ['第三章', '回忆'],
    next: 'dialogue_ch3_greenhouse_emily_present'
  },
  dialogue_ch3_greenhouse_emily_present: {
    id: 'dialogue_ch3_greenhouse_emily_present',
    speakerId: 'speaker_emily',
    text: '（指尖抚过郁金香花瓣）妈妈，我好像终于懂了……',
    next: null
  }
};