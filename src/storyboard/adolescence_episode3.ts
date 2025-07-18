import { Storyboard } from '../def';

export const AdolescenceEpisode3: Storyboard = {
  id: 'adolescence_ep3',
  title: '危机与碰撞',
  scenes: [
    {
      location: 'CommunityCenterHall',
      characters: ['Player', 'Haley', 'Abigail', 'Sam', 'Sebastian', 'Penny', 'Alex'],
      dialogues: [
        { speaker: 'Haley', text: '青少年之夜当然要有时尚走秀！展示我们的风格！', emotion: 'excited' },
        { speaker: 'Abigail', text: '无聊！应该搞森林寻宝，那才刺激！', emotion: 'aggressive' },
        { speaker: 'Sam', text: '（打圆场）大家冷静点... 我们是一个团队啊', emotion: 'anxious' }
      ],
      shots: [
        { description: "海莉展示服装设计草图，阿比盖尔一把夺过揉成纸团", cameraAngle: "medium", focus: "Haley, Abigail" },
        { description: "众人分成两派争吵，玩家站在中间不知所措", cameraAngle: "wide", focus: "Group" }
      ]
    },
    {
      location: 'BusStop',
      characters: ['Player', 'Sebastian'],
      dialogues: [
        { speaker: 'Sebastian', text: '（踢摩托车轮胎）该死！偏偏这时候抛锚...', emotion: 'angry' },
        { speaker: 'Player', text: '你要去哪里？', emotion: 'worried' },
        { speaker: 'Sebastian', text: '离开这里... 去城市找个没人管我的地方', emotion: 'desperate' }
      ],
      shots: [
        { description: "塞巴斯蒂安的摩托车停在巴士站，引擎冒烟，他猛踢轮胎", cameraAngle: "low-angle", focus: "Sebastian, Motorcycle" },
        { description: "远处众人跑来的身影，山姆举着工具箱", cameraAngle: "long-shot", focus: "Group, Sebastian" }
      ]
    },
    {
      location: 'BusStop',
      characters: ['Player', 'Sam', 'Abigail', 'Haley', 'Alex', 'Penny', 'Sebastian'],
      dialogues: [
        { speaker: 'Sam', text: '（递扳手）我们像零件，拼在一起才不会散。', emotion: 'determined' },
        { speaker: 'Sebastian', text: '（愣住）...不如搞个“自由舞台”吧？想做什么都可以', emotion: 'hopeful' },
        { speaker: 'Haley', text: '（微笑）走秀和寻宝可以同时存在啊！', emotion: 'realizing' }
      ],
      shots: [
        { description: "众人围在摩托车旁分工合作，亚历克斯用肌肉顶起车身，潘妮递工具", cameraAngle: "wide", focus: "Group" },
        { description: "特写：塞巴斯蒂安的手和山姆的手一起拧紧螺丝", cameraAngle: "close-up", focus: "Hands" }
      ]
    }
  ]
};
