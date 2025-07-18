import { Storyboard } from '../def';

export const AdolescenceEpisode2: Storyboard = {
  id: 'adolescence_ep2',
  title: '秘密与裂缝',
  scenes: [
    {
      location: 'CoalMineForestClearing',
      characters: ['Player', 'Abigail'],
      dialogues: [
        { speaker: 'Abigail', text: '（挖洞）这是我画的“森林怪兽”... 妈妈说这是“不务正业”', emotion: 'vulnerable' },
        { speaker: 'Player', text: '很酷啊，为什么要埋起来？', emotion: 'curious' },
        { speaker: 'Abigail', text: '...万一永远实现不了呢？有点尴尬。', emotion: 'embarrassed' }
      ],
      shots: [
        { description: "阿比盖尔在森林空地埋时间胶囊，胶囊上画着怪兽涂鸦", cameraAngle: "high-angle", focus: "Abigail, Capsule" },
        { description: "夕阳透过树叶照在阿比盖尔的侧脸，她快速擦了下眼睛", cameraAngle: "profile", focus: "Abigail" }
      ]
    },
    {
      location: 'SebastianBasement',
      characters: ['Player', 'Sebastian'],
      dialogues: [
        { speaker: 'Sebastian', text: '德米特里厄斯今天又问我“什么时候找个正经工作”', emotion: 'frustrated' },
        { speaker: 'Player', text: '编程不算正经工作吗？', emotion: 'confused' },
        { speaker: 'Sebastian', text: '对他来说，只有像玛鲁那样搞“科研”才算...', emotion: 'bitter' }
      ],
      shots: [
        { description: "塞巴斯蒂安背对玩家敲击键盘，显示器显示代码，桌上散落着摩托车零件", cameraAngle: "over-shoulder", focus: "Sebastian, Monitor" },
        { description: "特写：桌上的摩托车钥匙和编程书籍并排摆放", cameraAngle: "close-up", focus: "Keys, Books" }
      ]
    },
    {
      location: 'Beach',
      characters: ['Player', 'Alex'],
      dialogues: [
        { speaker: 'Alex', text: '（扶膝苦笑）我连球都投不稳了。', emotion: 'defeated' },
        { speaker: 'Player', text: '旧伤还没好吗？', emotion: 'concerned' },
        { speaker: 'Alex', text: '医生说永远不能剧烈运动了... 爷爷还在等我进大学球队', emotion: 'desperate' }
      ],
      shots: [
        { description: "亚历克斯尝试投篮失败，篮球滚入海中，他望着海面发呆", cameraAngle: "wide", focus: "Alex, Ocean" },
        { description: "慢镜头：亚历克斯扶膝时颤抖的手", cameraAngle: "extreme-close", focus: "Alex's Hand" }
      ]
    }
  ]
};
