import { Village } from "../def";
import { saySystem } from "../system/saySystem";

export default {
    description: '春季对话',
    features: ['季节', '通用', '春季'],
    run(a: Village.NPC) {
        saySystem.say({ name: a.name }, '春天来了，万物复苏。')
    }
} as Village.Say