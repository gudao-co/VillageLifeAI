import { Village } from "../def";
import { saySystem } from "../system/saySystem";

export default {
    description: '第二集：秘密与裂缝',
    features: ['剧情', '秘密', '情感'],
    run() {
        // 煤矿森林（巫师塔附近）
        saySystem.say({ name: '阿比盖尔' }, '哇哦，被你发现了！这是……时间胶囊。里面是我画的森林怪兽草图。');
        saySystem.say({ name: '玩家' }, '为什么要埋起来？');
        saySystem.say({ name: '阿比盖尔' }, '我妈说这些是‘浪费时间’……但我想证明森林里有别人没见过的东西。');

        // 塞巴斯蒂安地下室
        saySystem.say({ name: '塞巴斯蒂安' }, '德米特里厄斯今天又问我‘什么时候找个正经工作’……好像我写代码就是在玩。');
        saySystem.say({ name: '玩家' }, '你的代码很酷');
        saySystem.say({ name: '塞巴斯蒂安' }, '酷？第一次有人这么说。');

        // 图书馆闭馆后
        saySystem.say({ name: '潘妮' }, '没什么……只是随便写的。');
        saySystem.say({ name: '玩家' }, '是小说吗？可以看看吗？');
        saySystem.say({ name: '潘妮' }, '……别笑我。');

        // 海滩
        saySystem.say({ name: '亚历克斯' }, '医生说不能再剧烈运动了……爷爷总说‘你是我们家的希望’，可我连球都投不稳了。');
    }
} as Village.Say;