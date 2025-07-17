import { EventEmiter, IEventEmiter } from "./EventEmiter";


// 全局事件发射器实例
const globalEvent = new EventEmiter();

// 应用程序主类
export class App extends EventEmiter {
    private static instance: App | null = null    // 单例实例

    public readonly runtime: Runtime              // 运行时环境

    // 私有构造函数，确保单例模式
    private constructor(runtime: Runtime) {
        super();
        this.runtime = runtime;
    }

    exec(cb: (this: void, result: any, error?: string) => void, serviceName: string, methodName: string, ...args: any[]): void {
        this.runtime.exec(cb, serviceName, methodName, ...args)
    }

    call(serviceName: string, methodName: string, ...args: any[]): [any | false, string | undefined] {
        return this.runtime.call(serviceName, methodName, ...args)
    }

    // 获取应用程序实例
    public static getInstance(): App {
        return this.instance!
    }

    // 设置应用程序实例
    public static setInstance(runtime: Runtime): void {
        this.instance?.emit("exit")  // 发送退出事件
        this.instance = new App(runtime);
    }

    // 全局事件发射
    public static emit(name: string, ...args: any[]): void {
        globalEvent.emit(name, ...args)
    }

    // 注册全局事件监听器
    public static on(name: string, fn: (...args: any[]) => void): void {
        globalEvent.on(name, fn)
    }

    // 移除全局事件监听器
    public static off(name?: string, fn?: (...args: any[]) => void): void {
        globalEvent.off(name, fn)
    }
}
