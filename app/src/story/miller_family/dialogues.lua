--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.dialogues = {
    dialogue_tom_bus_stop_greeting = {id = "dialogue_tom_bus_stop_greeting", speaker = "汤姆", text = "嘿，你好！我是汤姆·米勒，我们刚搬到镇上。这些箱子比想象中重...你能帮我们搬到东边的农场吗？", next = "dialogue_player_offer_help"},
    dialogue_player_offer_help = {id = "dialogue_player_offer_help", speaker = "玩家", text = "当然可以，需要我搬哪个箱子？", next = "dialogue_tom_thanks"},
    dialogue_tom_thanks = {id = "dialogue_tom_thanks", speaker = "汤姆", text = "太感谢了！莉娜和艾米在农场那边等我们，我带你过去。", next = nil},
    dialogue_lena_farm_greeting = {id = "dialogue_lena_farm_greeting", speaker = "莉娜", text = "哦，你一定是帮汤姆搬东西的好心人！我是莉娜，这是我们的女儿艾米。", next = "dialogue_amy_complain"},
    dialogue_amy_complain = {id = "dialogue_amy_complain", speaker = "艾米", text = "（小声嘟囔）这里连Wi-Fi都没有...购物中心更是想都别想。", next = "dialogue_lena_apologize"},
    dialogue_lena_apologize = {id = "dialogue_lena_apologize", speaker = "莉娜", text = "艾米！别没礼貌。（转向玩家）抱歉，她还没适应这里的生活。晚饭后来做客吧，我烤了蔓越莓派。", next = nil},
    dialogue_tom_tractor_argue = {id = "dialogue_tom_tractor_argue", speaker = "汤姆", text = "这破拖拉机根本启动不了！你说这里的生活会很简单，但连个启动器都坏了！", next = "dialogue_lena_argue_reply"},
    dialogue_lena_argue_reply = {id = "dialogue_lena_argue_reply", speaker = "莉娜", text = "冷静点，汤姆。我们说好要一起面对困难的。明天去问问罗宾吧，她肯定知道怎么修。", next = nil},
    dialogue_amy_maru_meet = {id = "dialogue_amy_maru_meet", speaker = "艾米", text = "（淋雨发抖）我只是想找个地方画画...结果迷路了。", next = "dialogue_maru_offer_help"},
    dialogue_maru_offer_help = {id = "dialogue_maru_offer_help", speaker = "玛鲁", text = "我家就在前面，先去避雨吧。你拿着素描本？你喜欢画画吗？", next = "dialogue_amy_art_talk"},
    dialogue_amy_art_talk = {id = "dialogue_amy_art_talk", speaker = "艾米", text = "嗯...我喜欢画风景。你呢？你的工具箱看起来很酷。", next = nil},
    dialogue_tom_workbench_proud = {id = "dialogue_tom_workbench_proud", speaker = "汤姆", text = "（擦拭画架）虽然花了三个小时，但比城里的项目有成就感多了。艾米一定会喜欢的。", next = "dialogue_lena_sunflower_praise"},
    dialogue_lena_sunflower_praise = {id = "dialogue_lena_sunflower_praise", speaker = "莉娜", text = "刘易斯镇长说我的向日葵是花展最美的！对了，今晚做你最爱吃的炖菜庆祝一下。", next = nil},
    dialogue_blizzard_emergency = {id = "dialogue_blizzard_emergency", speaker = "汤姆", text = "屋顶漏雨了！我们需要木板和防水布，快！", next = "dialogue_lena_assign_tasks"},
    dialogue_lena_assign_tasks = {id = "dialogue_lena_assign_tasks", speaker = "莉娜", text = "我去煮热汤保持体力，艾米，用你的画板先挡住漏洞！玩家，能帮汤姆搬木板吗？", next = nil},
    dialogue_christmas_dinner = {id = "dialogue_christmas_dinner", speaker = "汤姆", text = "这是我人生中最踏实的一年...虽然没暖气，但有家的感觉。", next = "dialogue_amy_gift"},
    dialogue_amy_gift = {id = "dialogue_amy_gift", speaker = "艾米", text = "（递过画卷）这是给你的...画的是农场四季的样子。谢谢你们让我喜欢上这里。", next = nil}
}
return ____exports
