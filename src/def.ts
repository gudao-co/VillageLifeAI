/**
 * 星露谷世界定义
 */
export namespace Village {

    /**
     * 星露谷世界的季节
     */
    export enum GDateSeason {
        Spring,
        Summer,
        Autumn,
        Winter,
    }

    /**
     * 星露谷世界的星期
     */
    export enum GDateWeekday {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }

    /**
     * 星露谷世界的日期
     */
    export interface GDate {
        /**
         * 季节
         */
        season: GDateSeason
        /**
         * 每季天数 28 天
         */
        day: number
        /**
         * 一年总天数 4 * 28 = 112 天
         */
        year: number
        /**
         * 星期
         */
        weekday: GDateWeekday
    }

    /**
     * 星露谷世界的时间
     */
    export interface GTime {
        /**
         * 小时24小时制
         */
        hour: number
        /**
         * 分钟
         */
        minute: number
    }

    /**
     * 星露谷世界的日期时间
     */
    export interface GDateTime {
        /**
         * 日期
         */
        date: GDate
        /**
         * 时间
         */
        time: GTime
    }

    /**
     * 星露谷世界的性别
     */
    export enum Gender {
        /**
         * 未知
         */
        Unknown,
        /**
         * 男性
         */
        Male,
        /**
         * 女性
         */
        Female,
    }

    /**
     * 星露谷世界的地址名称(内置)
     */
    export enum GLocationName {
        /**
         * 镇中心
         */
        Town = "Town",
        /**
         * 农场
         */
        Farm = "Farm",
        /**
         * 矿洞入口
         */
        Mine = "Mine",
        /**
         * 海滩
         */
        Beach = "Beach",
        /**
         * 沙漠
         */
        Desert = "Desert",
        /**
         * 沙龙
         */
        Saloon = "Saloon",
        /**
         * 医院
         */
        Hospital = "Hospital",
        /**
         * Leah 家
         */
        LeahHouse = "LeahHouse",

    }

    /**
     * 星露谷世界的地址
     */
    export interface GLocation {
        /**
         * 星露谷世界的地址名称, 或是英文名称
         */
        name: GLocationName | string
        /**
         * 星露谷世界的Tile坐标
         */
        x: number
        /**
         * 星露谷世界的Tile坐标
         */
        y: number
    }

    /**
     * 星露谷世界的 NPC
     */
    export interface NPC {
        /**
         * 名称, 唯一标识
         */
        name: string
        /**
         * 描述
         */
        description: string
        /**
         * 性别
         */
        gender: Gender
        /**
         * 角色特征
         */
        features: string[]
        /**
         * 角色生日
         */
        birthday: GDate
        /**
         * 角色喜欢的事情
         */
        like: string[]
        /**
         * 角色讨厌的事情
         */
        dislike: string[]
        /**
         * 角色住址
         */
        address: GLocation
    }
}
