import { Dialogue } from '../../def/story';

export const dialogues: Record<string, Dialogue> = {
  dialogue_argue_start: {
    id: 'dialogue_argue_start',
    speakerId: 'speaker_pierre',
    text: '(指着柜台上的神秘学书籍)这些鬼画符能当饭吃吗？杂货店才是你的未来！',
    next: 'dialogue_abigail_reply'
  },
  dialogue_abigail_reply: {
    id: 'dialogue_abigail_reply',
    speakerId: 'speaker_abigail',
    text: '(眼眶泛红)你从来没问过我想要什么！就像这河豚——你只看到它有毒，却不知道它有多美！',
    next: 'dialogue_pierre_shout'
  },
  dialogue_pierre_shout: {
    id: 'dialogue_pierre_shout',
    speakerId: 'speaker_pierre',
    text: '我这是为你好！等我老了谁来照顾这家店？',
    next: 'dialogue_abigail_leave'
  },
  dialogue_abigail_leave: {
    id: 'dialogue_abigail_leave',
    speakerId: 'speaker_abigail',
    text: '(摔门而去)我受够了你的控制！',
    next: null
  },
  dialogue_community_talk: {
    id: 'dialogue_community_talk',
    speakerId: 'speaker_emily',
    text: '(担忧地)镇长，皮埃尔和阿比盖尔又吵架了...阿比盖尔跑到森林里哭了一下午',
    next: 'dialogue_lewis_response'
  },
  dialogue_lewis_response: {
    id: 'dialogue_lewis_response',
    speakerId: 'speaker_lewis',
    text: '(沉思)这孩子...跟她父亲年轻时一模一样。格斯，你还记得皮埃尔当年放弃画画的事吗？',
    next: 'dialogue_gus_reveal'
  },
  dialogue_gus_reveal: {
    id: 'dialogue_gus_reveal',
    speakerId: 'speaker_gus',
    text: '(压低声音)老皮埃尔当年想考美术学院，被他母亲骂了三个月'不务正业'...现在倒把这枷锁扣女儿身上了',
    next: null
  },
  dialogue_tea_party_mediation: {
    id: 'dialogue_tea_party_mediation',
    speakerId: 'speaker_lewis',
    text: '(举杯)每个“刺头”心里都藏着没说出口的期待…皮埃尔，你年轻时不是想当画家吗？',
    next: 'dialogue_pierre_regret'
  },
  dialogue_pierre_regret: {
    id: 'dialogue_pierre_regret',
    speakerId: 'speaker_pierre',
    text: '(愣住)…那时候你奶奶也说“不务正业”…(转向阿比盖尔)对不起，我把自己的遗憾，变成了你的枷锁。',
    next: 'dialogue_abigail_soften'
  },
  dialogue_abigail_soften: {
    id: 'dialogue_abigail_soften',
    speakerId: 'speaker_abigail',
    text: '(低头)其实…你的素描本我偷偷看过，画得真好。',
    next: null
  },
  dialogue_beach_reconciliation: {
    id: 'dialogue_beach_reconciliation',
    speakerId: 'speaker_pierre',
    text: '(递出旧素描本)这个…或许你比我更需要它。',
    next: 'dialogue_abigail_gift'
  },
  dialogue_abigail_gift: {
    id: 'dialogue_abigail_gift',
    speakerId: 'speaker_abigail',
    text: '(拿出河豚标本)那这个给杂货店当装饰吧…它其实没那么可怕。',
    next: null
  }
};
