/**
 * 发言人
 */
export interface Speaker {
    /**
     * 发言人ID (一个剧本内唯一标识)
     */
    id: string
    /**
     * 发言人名称
     */
    name: string
    /**
     * 发言人描述
     */
    description: string
    /**
     * 发言人特征
     */
    tags: string[]
}

/**
 * 对话内容
 */
export interface Dialogue {
    /**
     * 对话内容ID (一个对内唯一标识)
     */
    id: string
    /**
     * 对话发言人
     */
    speakerId: string
    /**
     * 对话内容
     */
    text: string
    /**
     * 对话选项, 至少需要两个选项
     */
    choices?: Dialogue[]
    /**
     * 下一个对话内容
     */
    next?: string | null
}

/**
 * 事件触发条件属性
 */
export enum ConditionAttribute {
    /**
     * 两个角色直接的好感度
     */
    Favorability = 'Favorability'
}

/**
 * 场景触发位置
 */
export interface Location {
    /**
     * 场景位置ID (一个剧本内唯一标识)
     */
    id: string
    /**
     * 场景位置标题
     */
    title: string
    /**
     * 场景位置描述
     */
    description: string
    /**
     * 场景位置特征
     */
    tags: string[]
}

/**
 * 剧本场景
 */
export interface Scene {
    /**
     * 场景ID (一个章节内唯一标识)
     */
    id: string
    /**
     * 场景标题
     */
    title: string
    /**
     * 场景描述
     */
    description: string
    /**
     * 场景特征
     */
    tags: string[]
    /**
     * 场景参与人,按角色重要程度排序, 重要的在前面
     */
    speakerIds: string[]
    /**
     * 场景内容 
     */
    dialogueId: string
    /**
     * 依赖的场景ID
     */
    dependentSceneIds: string[]
    /**
     * 场景触发位置
     */
    locationId: string
}

/**
 * 章节
 */
export interface Chapter {
    /**
     * 章节ID (剧本内唯一)
     */
    id: string
    /**
     * 章节标题
     */
    title: string
    /**
     * 章节描述
     */
    description: string
    /**
     * 章节标签
     */
    tags: string[]
    /**
     * 章节参与人, 按角色重要程度排序, 重要的在前面
     */
    speakerIds: string[]
    /**
     * 章节场景
     */
    sceneIds: string[]
}


/**
 * 剧本
 */
export interface Script {
    /**
     * 剧本ID
     */
    id: string
    /**
     * 剧本标题
     */
    title: string
    /**
     * 剧本描述
     */
    description: string
    /**
     * 剧本标签
     */
    tags: string[]
    /**
     * 章节
     */
    chapterIds: string[]
    /**
     * 参与人
     */
    speakerIds: string[]
}
