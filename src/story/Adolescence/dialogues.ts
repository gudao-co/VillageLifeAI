import { Dialogue } from '../../def/story';

export const dialogues: Record<string, Dialogue> = {
  // 第1集：闯入的“陌生人”
  dialogue_ep1_ella_wary: {
    id: 'dialogue_ep1_ella_wary',
    speakerId: 'speaker_ella',
    text: '这里…大家都知道自己要做什么，只有我像个迷路的虫子。',
    next: 'dialogue_ep1_jesse_response'
  },
  dialogue_ep1_jesse_response: {
    id: 'dialogue_ep1_jesse_response',
    speakerId: 'speaker_jesse',
    text: '星露谷？除了干草和沉默，还有什么？我宁愿回城市挤地铁。',
    next: 'dialogue_ep1_player_choice'
  },
  dialogue_ep1_player_choice: {
    id: 'dialogue_ep1_player_choice',
    speakerId: 'player',
    text: '你想帮忙吗？',
    choices: [
      {
        id: 'dialogue_ep1_help_ella',
        speakerId: 'player',
        text: '帮艾拉捡速写本',
        next: 'dialogue_ep1_ella_thanks'
      },
      {
        id: 'dialogue_ep1_help_jesse',
        speakerId: 'player',
        text: '陪杰西等巴士',
        next: 'dialogue_ep1_jesse_laugh'
      }
    ]
  },
  dialogue_ep1_ella_thanks: {
    id: 'dialogue_ep1_ella_thanks',
    speakerId: 'speaker_ella',
    text: '谢谢你…我以为没人会注意到这本破本子。',
    next: null
  },
  dialogue_ep1_jesse_laugh: {
    id: 'dialogue_ep1_jesse_laugh',
    speakerId: 'speaker_jesse',
    text: '哈，你也觉得这巴士不存在吧？谢了，至少有人陪我发疯。',
    next: null
  },

  // 第2集：藏不住的矛盾
  dialogue_ep2_ella_cry: {
    id: 'dialogue_ep2_ella_cry',
    speakerId: 'speaker_ella',
    text: '为什么玛鲁搞科学就是“有出息”，我画画就是“浪费时间”？',
    next: 'dialogue_ep2_jesse_comfort'
  },
  dialogue_ep2_jesse_comfort: {
    id: 'dialogue_ep2_jesse_comfort',
    speakerId: 'speaker_jesse',
    text: '至少你妈还管你…我奶奶从不骂我，可我知道她在想“这孙子真没用”。',
    next: 'dialogue_ep2_leah_note'
  },
  dialogue_ep2_leah_note: {
    id: 'dialogue_ep2_leah_note',
    speakerId: 'speaker_leah',
    text: '颜色像雨后的星露谷，别藏起来，它会发光的。',
    next: null
  },

  // 第3集：裂痕与光
  dialogue_ep3_player_choice: {
    id: 'dialogue_ep3_player_choice',
    speakerId: 'player',
    text: '你想对艾拉说什么？',
    choices: [
      {
        id: 'dialogue_ep3_encourage_art',
        speakerId: 'player',
        text: '你的画让我看到了星露谷的另一种样子',
        next: 'dialogue_ep3_ella_smile'
      },
      {
        id: 'dialogue_ep3_share_failure',
        speakerId: 'player',
        text: '我第一次种地时，小麦全枯死了',
        next: 'dialogue_ep3_ella_laugh'
      }
    ]
  },
  dialogue_ep3_ella_smile: {
    id: 'dialogue_ep3_ella_smile',
    speakerId: 'speaker_ella',
    text: '真的吗？…也许我该再试一次。',
    next: null
  },
  dialogue_ep3_ella_laugh: {
    id: 'dialogue_ep3_ella_laugh',
    speakerId: 'speaker_ella',
    text: '哈哈，原来你也有搞砸的时候！谢谢你，我感觉好多了。',
    next: null
  },
  dialogue_ep3_jesse_realize: {
    id: 'dialogue_ep3_jesse_realize',
    speakerId: 'speaker_jesse',
    text: '以前觉得城市朋友超酷，现在发现…他们甚至不知道我奶奶养了只叫“雏菊”的山羊。',
    next: null
  },

  // 第4集：和自己和解
  dialogue_ep4_robin_whisper: {
    id: 'dialogue_ep4_robin_whisper',
    speakerId: 'speaker_robin',
    text: '她画的是我们家的屋顶…原来她都记得。',
    next: 'dialogue_ep4_marnie_encourage'
  },
  dialogue_ep4_marnie_encourage: {
    id: 'dialogue_ep4_marnie_encourage',
    speakerId: 'speaker_marnie',
    text: '别像我年轻时一样，藏起自己的声音。',
    next: null
  }
};
