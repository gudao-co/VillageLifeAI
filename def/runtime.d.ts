declare type SayId = string
declare type GameName = "room" | "match3d"

declare interface Runtime {
    exec(cb: (this: void, result: any, error?: string) => void, serviceName: string, methodName: string, ...args: any[]): void
    call(serviceName: string, methodName: string, ...args: any[]): [any | false, string | undefined]
}
