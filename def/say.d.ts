
declare type SayProfileStyle = "left" | "right"
declare interface SayOption {
    title: string
    name: string
}

declare interface ISayProfile {
    name: string
    title: string
    res: string
    style: SayProfileStyle
}
