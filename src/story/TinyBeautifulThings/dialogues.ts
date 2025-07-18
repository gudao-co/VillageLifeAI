import { Dialogue } from '../../def/story';

export const dialogues: Record<string, Dialogue> = {
  dialogue_clare_initial: {
    id: 'dialogue_clare_initial',
    speaker: 'Clare',
    text: '别烦我，我在想事情',
    next: null
  },
  dialogue_clare_late: {
    id: 'dialogue_clare_late',
    speaker: 'Clare',
    text: '这个小镇的风比城市噪音更懂安慰',
    next: null
  },
  dialogue_lila_fear: {
    id: 'dialogue_lila_fear',
    speaker: 'Lila',
    text: '其实我怕她像爸爸一样离开……',
    next: null
  },
  dialogue_margaret_memory: {
    id: 'dialogue_margaret_memory',
    speaker: 'Margaret',
    text: '真实的东西，哪怕有褶皱，也比熨平的假花好看',
    next: null
  },
  dialogue_clare_letter: {
    id: 'dialogue_clare_letter',
    speaker: 'Clare',
    text: '（展开信纸）\"亲爱的星露：我丈夫走后，女儿再也不跟我说话了……\"',
    next: 'dialogue_clare_response'
  },
  dialogue_clare_response: {
    id: 'dialogue_clare_response',
    speaker: 'Clare',
    text: '（提笔写字）\"失去会让我们筑起高墙，但彩虹总在风雨后出现。试着带她去钓鱼吧，像你们以前那样。\"',
    next: null
  }
};
