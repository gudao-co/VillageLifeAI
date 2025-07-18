import { Story } from "../def/story"

export default {
    title: '镇中心的日常对话',
    description: '演示Haley和Emily在镇中心的日常互动场景',
    features: ['日常', '对话', '姐妹互动'],
    speakers: ['Haley', 'Emily'],
    chapters: [{
        title: '早晨的问候',
        description: 'Haley和Emily在镇中心相遇并开始聊天',
        features: ['早晨', '问候'],
        speakers: ['Haley', 'Emily'],
        scenes: [{
            id: 'event_01',
            title: '姐妹相遇',
            description: 'Haley和Emily在镇中心广场相遇',
            features: ['相遇', '日常对话'],
            speakers: ['Haley', 'Emily'],
            dialogue: {
                speaker: 'Emily',
                text: '早上好，Haley！今天天气真不错，不是吗？',
                id: 'say_01',
                next: {
                    speaker: 'Haley',
                    text: '是啊，阳光明媚的。你要去哪里？',
                    id: 'say_02',
                    next: {
                        speaker: 'Emily',
                        text: '我要去皮埃尔的杂货店买点东西，你呢？',
                        id: 'say_03',
                        next: {
                            speaker: 'Haley',
                            text: '我打算去沙龙喝杯咖啡，然后去河边散步。',
                            id: 'say_04'
                        }
                    }
                }
            },
            dependentEvents: [],
            conditions: [],
            location: {
                id: 'loc_01',
                title: '镇中心广场',
                description: '镇中心的主要广场，有长椅和喷泉',
                features: ['广场', '公共区域']
            }
        }]
    }]
} as Story
