import { Storyboard } from '../def';

export const AdolescenceEpisode4: Storyboard = {
  id: 'adolescence_ep4',
  title: '夏夜与和解',
  scenes: [
    {
      location: 'CommunityCenterEvent',
      characters: ['Player', 'Penny', 'Haley', 'Sam', 'Band'],
      dialogues: [
        { speaker: 'Penny', text: '（读小说）“她终于明白，温柔不是软弱...”', emotion: 'confident' },
        { speaker: 'Haley', text: '（穿森林主题T恤走秀）喜欢我的人，会喜欢我本来的样子！', emotion: 'proud' },
        { speaker: 'Sam', text: '（唱新歌）“我们是星露谷的星光，微小却闪亮！”', emotion: 'energetic' }
      ],
      shots: [
        { description: "潘妮站在临时舞台中央读小说，台下村民含泪鼓掌", cameraAngle: "medium", focus: "Penny, Audience" },
        { description: "海莉穿着印有阿比盖尔怪兽涂鸦的T恤走秀，阿比盖尔惊讶捂嘴", cameraAngle: "tracking", focus: "Haley, Abigail" },
        { description: "山姆乐队表演，亚历克斯打鼓，塞巴斯蒂安弹贝斯，灯光闪烁", cameraAngle: "dynamic", focus: "Band" }
      ]
    },
    {
      location: 'StardewValleySummit',
      characters: ['Player', 'Abigail', 'Sam', 'Sebastian', 'Haley', 'Alex', 'Penny'],
      dialogues: [
        { speaker: 'Abigail', text: '或许我可以先考个生物系？边学边找森林怪兽？', emotion: 'hopeful' },
        { speaker: 'Alex', text: '乔治爷爷说... 他为我骄傲，无论我做什么', emotion: 'teary' },
        { speaker: 'Sebastian', text: '（看手机）德米特里厄斯... 发了条“为你骄傲”的短信', emotion: 'shocked' }
      ],
      shots: [
        { description: "山顶全景，众人围坐看星空，银河清晰可见", cameraAngle: "wide", focus: "Group, Stars" },
        { description: "每个人的面部特写，表情释然又坚定", cameraAngle: "sequence", focus: "All Characters" }
      ]
    },
    {
      location: 'PlayerCabin',
      characters: ['Player'],
      dialogues: [
        { speaker: 'Player', text: '（读信）“勇敢做自己，我们永远支持你”', emotion: 'warm' }
      ],
      shots: [
        { description: "玩家坐在床边读信，窗外萤火虫飞舞，信纸上有家人签名", cameraAngle: "over-shoulder", focus: "Player, Letter" },
        { description: "特写：信纸旁放着众人在青少年之夜的合影", cameraAngle: "close-up", focus: "Photo" }
      ]
    }
  ]
};
