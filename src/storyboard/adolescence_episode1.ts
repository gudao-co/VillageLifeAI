import { Storyboard } from '../def';

export const AdolescenceEpisode1: Storyboard = {
  id: 'adolescence_ep1',
  title: '初识与棱角',
  scenes: [
    {
      location: 'SummerFestivalBackstage',
      characters: ['Player', 'Sam', 'Abigail', 'Haley', 'Alex', 'Penny', 'Sebastian'],
      dialogues: [
        { speaker: 'Sam', text: '嘿！你看起来迷路了，我们乐队正好缺个人手，来帮忙吗？', emotion: 'cheerful' },
        { speaker: 'Abigail', text: '哇哦，海莉你又在拍照了，能不能别拍了？', emotion: 'annoyed' },
        { speaker: 'Haley', text: '我只是记录一下嘛，烦死了！', emotion: 'defensive' },
        { speaker: 'Alex', text: '新人？呵，别拖后腿。', emotion: 'cold' },
        { speaker: 'Sam', text: '别这样 guys，大家都是朋友！', emotion: 'mediating' },
        { speaker: 'Penny', text: '（轻声）别担心，他们平时不这样的...', emotion: 'nervous' }
      ],
      shots: [
        { description: '玩家站在后台入口，周围是音乐节的装饰和人群，表情困惑', cameraAngle: 'medium', focus: 'Player' },
        { description: '山姆从舞台侧方跑过来，挥手招呼玩家，笑容灿烂', cameraAngle: 'medium-close', focus: 'Sam' },
        { description: '阿比盖尔皱眉看着海莉举着手机，海莉翻了个白眼', cameraAngle: 'over-shoulder', focus: 'Abigail, Haley' },
        { description: '亚历克斯靠在调音台边，双臂交叉，表情不屑', cameraAngle: 'low-angle', focus: 'Alex' }
      ]
    },
    {
      location: 'BeachBonfire',
      characters: ['Player', 'Sam', 'Abigail', 'Haley', 'Alex', 'Penny', 'Sebastian'],
      dialogues: [
        { speaker: 'Sam', text: '跑！去我家躲雨！', emotion: 'urgent' },
        { speaker: 'Penny', text: '（抬头看天）这里的星星很亮。', emotion: 'soft' },
        { speaker: 'Sebastian', text: '...至少没下雨前是这样。', emotion: 'dry' }
      ],
      shots: [
        { description: '篝火晚会下雨时山姆用吉他包护玩家头顶的仰拍镜头', cameraAngle: 'low-angle', focus: 'Sam, Player' },
        { description: '众人挤在山姆家客厅，头发湿漉漉，气氛尴尬又好笑', cameraAngle: 'wide', focus: 'Group' },
        { description: '潘妮坐在窗边，手指划过玻璃上的雨滴', cameraAngle: 'close-up', focus: 'Penny' }
      ]
    }
  ]
};
