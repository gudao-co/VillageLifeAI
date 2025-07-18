
/**
 * 对话内容
 */
export interface StoryDialogue {
    /**
     * 对话发言人
     */
    speaker: string
    /**
     * 对话内容
     */
    text: string
    /**
     * 对话内容ID (一个对内唯一标识)
     */
    id: string
    /**
     * 对话选项, 至少需要两个选项
     */
    choices?: StoryDialogue[]
    /**
     * 下一个对话内容
     */
    next?: StoryDialogue
}

/**
 * 事件触发条件属性
 */
export enum StorySceneConditionAttribute {
    /**
     * 两个角色直接的好感度
     */
    Favorability = 'Favorability'
}

/**
 * 事件触发条件比较
 */
export enum StorySceneConditionCompare {
    /**
     * 等于
     */
    Eq = 'Eq',
    /**
     * 大于
     */
    Gt = 'Gt',
    /**
     * 小于
     */
    Lt = 'Lt',
    /**
     * 不等于
     */
    Neq = 'Neq',
    /**
     * 大于等于
     */
    Gte = 'Gte',
    /**
     * 小于等于
     */
    Lte = 'Lte',
}

/**
 * 事件触发条件
 */
export interface StorySceneCondition {
    /**
     * 参与人 01
     */
    speaker_01: string
    /**
     * 参与人 02, speaker_01 与 speaker_02 同时存在时, 表示关系属性, speaker_01 对 speaker_02 的好感度 Favorability
     */
    speaker_02?: string
    /**
     * 触发条件属性
     */
    attr: StorySceneConditionAttribute
    /**
     * 触发条件比较
     */
    compare: StorySceneConditionCompare
    /**
     * 触发条件值
     */
    value: number
}

/**
 * 事件触发位置
 */
export interface StorySceneLocation {
    /**
     * 触发位置ID (一个剧本内唯一标识)
     */
    id: string
    /**
     * 触发位置标题
     */
    title: string
    /**
     * 触发位置描述
     */
    description: string
    /**
     * 触发位置特征
     */
    features: string[]
}

/**
 * 故事剧本事件
 */
export interface StoryScene {
    /**
     * 事件ID (一个剧本内唯一标识)
     */
    id: string
    /**
     * 事件标题
     */
    title: string
    /**
     * 事件描述
     */
    description: string
    /**
     * 事件特征
     */
    features: string[]
    /**
     * 事件参与人,按角色重要程度排序, 重要的在前面
     */
    speakers: string[]
    /**
     * 事件内容
     */
    dialogue: StoryDialogue
    /**
     * 依赖的事件ID
     */
    dependentEvents: string[]
    /**
     * 触发条件,多个同时满足条件
     */
    conditions: StorySceneCondition[]
    /**
     * 事件触发位置
     */
    location: StorySceneLocation
}

/**
 * 故事剧本章节
 */
export interface StoryChapter {
    /**
     * 章节标题
     */
    title: string
    /**
     * 章节描述
     */
    description: string
    /**
     * 章节特征
     */
    features: string[]
    /**
     * 章节参与人, 按角色重要程度排序, 重要的在前面
     */
    speakers: string[]
    /**
     * 章节场景
     */
    scenes: StoryScene[]
}

/**
 * 故事剧本
 */
export interface Story {
    /**
     * 剧本标题
     */
    title: string
    /**
     * 剧本描述
     */
    description: string
    /**
     * 剧本特征
     */
    features: string[]
    /**
     * 剧本参与人,按角色重要程度排序, 重要的在前面
     */
    speakers: string[]
    /**
     * 章节
     */
    chapters: StoryChapter[]
}
