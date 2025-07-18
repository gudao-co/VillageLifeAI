--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
--- 《Adolescence》星露谷MOD四集故事剧本
-- 主题：青少年成长、自我探索与人际关系
____exports.AdolescenceStory = {title = "Adolescence", description = "聚焦19-22岁NPC的青春期矛盾，讲述成长路上的试探、秘密、碰撞与和解", chapters = {{
    description = "夏夜星空下的成长感悟",
    features = {"希望", "未来"},
    speakers = {
        "Abigail",
        "Sebastian",
        "Alex",
        "Haley",
        "Penny",
        "Sam",
        "Player"
    },
    description = "青少年之夜的成功举办与成长和解",
    features = {"和解", "成长"},
    speakers = {
        "Penny",
        "Haley",
        "Abigail",
        "Sam",
        "Sebastian",
        "Alex",
        "Player"
    },
    title = "第一集《初识与棱角》",
    scenes = {{
        id = "scene_9",
        title = "摩托车修理",
        description = "众人协作修理摩托车",
        features = {"团结", "默契"},
        speakers = {
            "Sebastian",
            "Sam",
            "Alex",
            "Abigail",
            "Player"
        },
        dialogue = {speaker = "Sebastian", text = "……我的摩托车抛锚了。想逃离这个 town，可连车都坏了。", id = "d9"},
        id = "scene_8",
        title = "活动策划",
        description = "青少年之夜的创意碰撞",
        features = {"冲突", "合作"},
        speakers = {"Sam", "Haley", "Abigail", "Penny"},
        dialogue = {speaker = "Sam", text = "我们要举办“青少年之夜”！大家想做什么活动？", id = "d8"},
        id = "scene_7",
        title = "沙滩挫折",
        description = "Alex的运动伤痛",
        features = {"失落", "支持"},
        speakers = {"Alex", "Player"},
        dialogue = {speaker = "Alex", text = "（咬着牙爬起来）该死……旧伤又犯了。", id = "d7"},
        id = "scene_6",
        title = "图书馆创作",
        description = "Penny的写作梦想",
        features = {"安静", "鼓励"},
        speakers = {"Penny", "Player"},
        dialogue = {speaker = "Penny", text = "（慌忙合上笔记本）啊！你、你看到了？", id = "d6"},
        id = "scene_5",
        title = "地下室对话",
        description = "Sebastian的地下室空间",
        features = {"压抑", "理解"},
        speakers = {"Sebastian", "Player"},
        dialogue = {speaker = "Sebastian", text = "……你帮我找一下桌上的电路板？我要修摩托车。", id = "d5"},
        id = "scene_4",
        title = "森林秘密",
        description = "Abigail埋藏时间胶囊",
        features = {"神秘", "梦想"},
        speakers = {"Abigail", "Player"},
        dialogue = {speaker = "Abigail", text = "（吓得跳起来）啊！你、你怎么在这里？", id = "d4"},
        id = "scene_3",
        title = "海滩篝火",
        description = "海滩篝火晚会遇雨",
        features = {"意外", "温馨"},
        speakers = {
            "Penny",
            "Abigail",
            "Sam",
            "Sebastian",
            "Player"
        },
        dialogue = {speaker = "Penny", text = "（擦着湿头发走到窗边）你们看……这里的星星很亮。", id = "d3"},
        id = "scene_2",
        title = "餐吧闲聊",
        description = "星露谷餐吧的轻松对话",
        features = {"轻松", "幽默"},
        speakers = {
            "Sam",
            "Penny",
            "Abigail",
            "Haley",
            "Alex"
        },
        dialogue = {speaker = "Penny", text = "（擦着桌子笑）Sam又拉新人进乐队啦？上次是Sebastian，这次是玩家～", id = "d2"},
        id = "scene_1",
        title = "后台准备",
        description = "音乐节后台的准备场景",
        features = {"紧张", "期待"},
        speakers = {
            "Sam",
            "Abigail",
            "Haley",
            "Alex",
            "Player"
        },
        dialogue = {speaker = "Sam", text = "嘿！你盯着舞台看了十分钟——迷路了？我们乐队缺个帮忙递设备的，来呗！", id = "d1"},
        location = {id = "Fairgrounds/Backstage", title = "Backstage at the Fairgrounds", description = "The backstage area where performers prepare for events.", features = {"stage", "dressing area", "equipment"}},
        events = {{type = "Dialogue", dialogues = {{speaker = "Sam", text = "嘿！你盯着舞台看了十分钟——迷路了？我们乐队缺个帮忙递设备的，来呗！"}, {speaker = "Player", text = "我、我对音乐节不太熟……"}, {speaker = "Sam", text = "怕什么～跟着我就好！（一把拽过玩家的手腕）"}}}, {type = "Action", description = "Sam带着玩家穿过帐篷，迎面撞上举着手机的Haley"}, {type = "Dialogue", dialogues = {
            {speaker = "Abigail", text = "喂！Haley你拍什么呢？拍我吗？我可没同意！"},
            {speaker = "Haley", text = "谁要拍你啊烦死了！我在拍舞台灯的反光好不好？"},
            {speaker = "Sam", text = "好啦好啦！都是误会～Abby别炸毛，Haley也别生气～"},
            {speaker = "Alex", text = "（抱着橄榄球靠在柱子上）啧，小孩就是爱闹事。"},
            {speaker = "Player", text = "……我是不是闯祸了？"},
            {speaker = "Sam", text = "才没有！走，我们去餐吧喝杯冰沙压压惊～"}
        }}}
    }, {location = {id = "StardropSaloon", title = "Stardrop Saloon", description = "A cozy village saloon serving drinks and food.", features = {"bar", "tables", "jukebox"}}, events = {{type = "Dialogue", dialogues = {
        {speaker = "Penny", text = "（擦着桌子笑）Sam又拉新人进乐队啦？上次是Sebastian，这次是玩家～"},
        {speaker = "Sam", text = "Penny你别笑！我们乐队可是要上音乐节主舞台的！"},
        {speaker = "Abigail", text = "哇哦～主舞台？那我要弹电吉他！"},
        {speaker = "Haley", text = "（翻手机）主舞台的灯光效果要提前看吗？我有去年的照片～"},
        {speaker = "Alex", text = "（灌了口汽水）切，你们这些小孩的游戏。"}
    }}}}, {location = {id = "Beach", title = "The Beach", description = "A sandy beach along the coast of the village.", features = {"sand", "ocean", "pier"}}, events = {{type = "Action", description = "原本热闹的篝火晚会突然下起暴雨，众人尖叫着跑向最近的Sam家"}, {location = "SamHouse/SecondFloor", props = {"Guitar", "Posters", "BeanBagChair"}, events = {{type = "Dialogue", dialogues = {
        {speaker = "Penny", text = "（擦着湿头发走到窗边）你们看……这里的星星很亮。"},
        {speaker = "Abigail", text = "（趴在窗沿）哇哦……雨里的星星像被洗过一样。"},
        {speaker = "Sam", text = "（拨了下吉他弦）其实……我爸爸出海后，我经常在这看星星。"},
        {speaker = "Player", text = "（轻声）原来大家都有秘密啊……"},
        {speaker = "Sebastian", text = "……（坐在角落点头）"}
    }}}}}}}
}, {title = "第二集《秘密与裂缝》", scenes = {{location = {id = "Miner'sWoods/Clearing", title = "Clearing in the Miner's Woods", description = "A small clearing in the woods near the mines.", features = {"trees", "stump", "wildflowers"}}, events = {{type = "Action", description = "玩家路过时，撞见Abigail正用泥土掩埋一个木箱"}, {type = "Dialogue", dialogues = {
    {speaker = "Abigail", text = "（吓得跳起来）啊！你、你怎么在这里？"},
    {speaker = "Player", text = "我只是来找黑莓……那是你的时间胶囊？"},
    {speaker = "Abigail", text = "（低头踢着泥土）嗯……里面是我画的森林怪兽草图。妈妈说我该考大学，可我只想留在森林里……"},
    {speaker = "Player", text = "（蹲下来）其实……梦想和现实不一定冲突呀？"},
    {speaker = "Abigail", text = "（眼睛亮起来）哇哦……你是说，我可以两者都选？"}
}}}}, {location = {id = "Sebastian'sBasement", title = "Sebastian's Basement", description = "Sebastian's personal space in the basement of his home.", features = {"computer", "bed", "bookshelf"}}, events = {{type = "Dialogue", dialogues = {
    {speaker = "Sebastian", text = "……你帮我找一下桌上的电路板？我要修摩托车。"},
    {speaker = "Player", text = "（递过电路板）你经常修摩托车吗？"},
    {speaker = "Sebastian", text = "……嗯。骑摩托车的时候，我觉得自己能逃离一切——比如继父的唠叨，比如“稳定工作”的压力。"},
    {speaker = "Player", text = "（轻声）那你喜欢编程吗？"},
    {speaker = "Sebastian", text = "……喜欢。那是我能掌控的东西。"}
}}}}, {location = {id = "Library", title = "Village Library", description = "A quiet library filled with books and study spaces.", features = {"bookshelves", "reading tables", "quiet corners"}}, events = {{type = "Action", description = "玩家发现Penny正趴在桌子上写东西，笔记本上满是潦草的小说段落"}, {type = "Dialogue", dialogues = {{speaker = "Penny", text = "（慌忙合上笔记本）啊！你、你看到了？"}, {speaker = "Player", text = "（摇头）我没看内容……但你写得很认真。"}, {speaker = "Penny", text = "（低头搓着衣角）妈妈说我该好好当教师助理，可我……想写故事。"}, {speaker = "Player", text = "（微笑）你的故事一定会有人喜欢的。"}}}}}, {location = {id = "Beach", title = "The Beach", description = "A sandy beach along the coast of the village.", features = {"sand", "ocean", "pier"}}, props = {"Football", "Towel", "Cooler"}, events = {{type = "Action", description = "玩家看到Alex在沙滩上练抛球，突然膝盖一软摔倒在地"}, {type = "Dialogue", dialogues = {{speaker = "Alex", text = "（咬着牙爬起来）该死……旧伤又犯了。"}, {speaker = "Player", text = "（递过毛巾）要不要去医院？"}, {speaker = "Alex", text = "（摆手）不用。爷爷说我是“运动员的料”，可现在……我连球都抛不好。"}, {speaker = "Player", text = "（轻声）爷爷会理解你的。"}}}}}}}, {title = "第三集《危机与碰撞》", scenes = {{location = {id = "CommunityCenter", title = "Community Center", description = "A gathering place for village events and activities.", features = {"large hall", "kitchen", "meeting rooms"}}, events = {{type = "Dialogue", dialogues = {
    {speaker = "Sam", text = "我们要举办“青少年之夜”！大家想做什么活动？"},
    {speaker = "Haley", text = "（举手）时尚走秀！我可以带我的衣服来！"},
    {speaker = "Abigail", text = "（皱眉头）走秀多无聊！不如森林寻宝！"},
    {speaker = "Haley", text = "你懂什么时尚？大家肯定想看好看的衣服！"},
    {speaker = "Abigail", text = "你才不懂！森林里有好多秘密等着发现！"},
    {speaker = "Sam", text = "（大声）别吵了！"},
    {speaker = "Penny", text = "（小声）其实……可以结合吗？比如“自由舞台”，想展示什么都行。"}
}}}}, {location = {id = "Blacksmith", title = "Clint's Blacksmith Shop", description = "A workshop where Clint forges tools and metal items.", features = {"anvil", "furnace", "tools"}}, events = {{type = "Dialogue", dialogues = {{speaker = "Sebastian", text = "……我的摩托车抛锚了。想逃离这个 town，可连车都坏了。"}, {speaker = "Sam", text = "（拍肩膀）我们帮你修！我懂点机械，Alex有力气，Player可以递工具！"}, {speaker = "Alex", text = "（卷起袖子）哼，看在你是Sam朋友的份上。"}, {speaker = "Abigail", text = "（举着扳手）哇哦！我也来帮忙！"}}}, {type = "Action", description = "众人分工协作，终于把摩托车修好"}}}, {location = {id = "Mine/20", title = "Mine Level 20", description = "The 20th level of the village mine, filled with ores and monsters.", features = {"rocks", "ores", "ladders"}}}}}}}
do
    local ____ = "矿山发现"
    local ____ = description
end
do
    local ____ = "矿山20层的水晶发现"
    local ____ = features
end
do
    local ____ = {"惊喜", "和解"}
    local ____ = speakers
end
do
    local ____ = {"Abigail", "Haley"}
    local ____ = dialogue
end
do
    do
        local ____ = "（举着火把）看！这里有水晶！"
        local ____ = id
    end
    local ____ = "d10"
end
do
    local ____ = {{location = "CommunityCenter/Event", events = {
        {type = "Action", description = "“青少年之夜”正式开始，Penny站在舞台上读她的小说"},
        {type = "Dialogue", dialogues = {{speaker = "Penny", text = "（轻声朗读）“星星不会因为云而消失，就像梦想不会因为现实而熄灭……”"}, {speaker = "Jodi", text = "（台下鼓掌）Penny！你写得真好！"}, {speaker = "Penny", text = "（红着脸笑）谢谢妈妈……"}}},
        {type = "Action", description = "Haley穿着森林主题T恤走秀，Abigail在旁边弹电吉他"},
        {type = "Dialogue", dialogues = {{speaker = "Haley", text = "（转圈圈）怎么样？这是我用松针和水晶做的装饰！"}, {speaker = "Abigail", text = "（比耶）哇哦！超酷的！"}}},
        {type = "Action", description = "Sam乐队上台演唱《零件》，台下众人跟着合唱"}
    }}, {location = "MountainTop", events = {{type = "Dialogue", dialogues = {
        {speaker = "Abigail", text = "（咬着星露果）我决定报生物系了！这样既能研究森林，也能让妈妈放心。"},
        {speaker = "Sebastian", text = "……我昨天和德米特里厄斯聊了。他说尊重我的选择。"},
        {speaker = "Alex", text = "（挠头）爷爷说，不管我做什么，他都为我骄傲。"},
        {speaker = "Haley", text = "（摆弄头发）我打算开个博客，分享时尚和我真实的心情。"},
        {speaker = "Penny", text = "（微笑）我要继续写小说，妈妈说她会帮我投稿。"},
        {speaker = "Sam", text = "（举着吉他）我们乐队要去城里演出啦！"},
        {speaker = "Player", text = "（轻声）真好……大家都找到了方向。"},
        {speaker = "Sebastian", text = "……成长本来就是这样，不是吗？"}
    }}}}, {location = "Farmhouse", events = {{type = "Action", description = "玩家回到小屋，发现桌上有一封家人的来信"}, {type = "Dialogue", dialogues = {{speaker = "Player", text = "（读信）“孩子，你在星露谷的故事才刚刚开始……我们支持你。”"}, {speaker = "Sam", text = "（敲门）玩家！我们去看星星吧！"}, {speaker = "Player", text = "（笑着放下信）来了！"}}}}}}
end
return ____exports
