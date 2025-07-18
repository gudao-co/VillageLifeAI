import { Village } from "../def";
import { saySystem } from "../system/saySystem";

export default {
    description: '第三集：危机与碰撞',
    features: ['剧情', '冲突', '合作'],
    run() {
        // 社区中心策划会
        saySystem.say({ name: '海莉' }, '我们办时尚走秀吧！展示星露谷的美！');
        saySystem.say({ name: '阿比盖尔' }, '无聊！不如搞森林寻宝，比傻站着走有意思！');
        saySystem.say({ name: '山姆' }, '我们乐队表演才是重头戏！');
        saySystem.say({ name: '潘妮' }, '我……我想加个讲故事环节。');
        saySystem.say({ name: '亚历克斯' }, '反正最后肯定一团糟。');

        // 巴士站（塞巴斯蒂安摩托车抛锚）
        saySystem.say({ name: '塞巴斯蒂安' }, '该死，本想溜去祖安待几天……');
        saySystem.say({ name: '阿比盖尔' }, '用这个！我爸说苔藓能润滑零件！');
        saySystem.say({ name: '亚历克斯' }, '让开，这点力气活我来。');
        saySystem.say({ name: '海莉' }, '天啊，这才是真实的星露谷！');
        saySystem.say({ name: '山姆' }, '我们像零件，拼在一起才不会散~');

        // 和解时刻
        saySystem.say({ name: '塞巴斯蒂安' }, '青少年之夜……搞‘自由舞台’吧。想走秀、讲故事、表演，都可以上。');
        saySystem.say({ name: '潘妮' }, '我……我想读一段我的小说。');
    }
} as Village.Say;