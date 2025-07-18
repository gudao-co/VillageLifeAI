import { Dialogue } from '../../../def/story';

export const dialogues: Dialogue[] = [
  { id: 'dialogue_jodi_first_meeting', speakerId: 'speaker_jodi', text: '卡米尔？你瘦了…镇上最近不太平，那些孩子总往森林跑。对了，你父亲的遗物我放在阁楼上了——别碰那个木箱。', next: null },
  { id: 'dialogue_harvey_clinic', speakerId: 'speaker_harvey', text: '这不是农具伤的。卡米尔，星露谷的空气本该治愈人…', next: 'dialogue_harvey_tea' },
  { id: 'dialogue_harvey_tea', speakerId: 'speaker_harvey', text: '（递出安神茶）喝了这个，体力恢复50点。', next: null },
  { id: 'dialogue_lewis_warning', speakerId: 'speaker_lewis', text: '记者就喜欢添乱！文森特和贾斯只是贪玩迷路了！', next: null },
  { id: 'dialogue_caroline_cemetery', speakerId: 'speaker_caroline', text: '几年前也有孩子走丢…他们说森林里有会吃人的影子。', next: null },
  { id: 'dialogue_marnie_key', speakerId: 'speaker_marnie', text: '乔迪让我保密，但你需要这个钥匙打开抽屉。', next: null },
  { id: 'dialogue_feather_discovery', speakerId: 'speaker_camille', text: '（特写：颤抖的手握住彩色羽毛）这是…贾斯的发饰？', next: null },
  { id: 'dialogue_diary_entry', speakerId: 'speaker_camille', text: '（阅读日记）"妈妈说我的字太丑了…疼痛能让人清醒。"', next: null },
  { id: 'dialogue_lewis_final_warning', speakerId: 'speaker_lewis', text: '（挡住森林入口）再往前一步，你会毁了所有人！', next: null },
  { id: 'dialogue_ending_choice', speakerId: 'speaker_jodi', text: '你打算怎么做？那些秘密…就让它们埋了吧。', choices: [
    { id: 'dialogue_choice_reveal', speakerId: 'speaker_camille', text: '公开真相', next: 'dialogue_outcome_reveal' },
    { id: 'dialogue_choice_silence', speakerId: 'speaker_camille', text: '保持沉默', next: 'dialogue_outcome_silence' }
  ], next: null },
  { id: 'dialogue_outcome_reveal', speakerId: 'speaker_lewis', text: '（全镇广播）星露谷的声誉…完了！', next: null },
  { id: 'dialogue_outcome_silence', speakerId: 'speaker_jodi', text: '（递出项链）这是祖传的…防御+5。', next: null }
];
