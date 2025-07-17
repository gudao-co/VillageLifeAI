
export type EventHandler = (this: void, ...args: any[]) => void
export type EventInterceptor = (this: void) => void

export interface IEventEmiter {
    emit(name: string, ...args: any[]): void
    on(name: string, fn: EventHandler): void
    off(name?: string, fn?: EventHandler): void
    beginInterceptor(): EventInterceptor
    endInterceptor(): void
}

export class EventEmiter implements IEventEmiter {
    private itemSet: { [key: string]: EventHandler[] } = {};
    private readonly emitItems: EventInterceptor[][] = []

    beginInterceptor(): EventInterceptor {
        let vs: EventInterceptor[] = []
        this.emitItems.push(vs)
        return () => {
            for (let v of vs) {
                v()
            }
        }
    }

    endInterceptor(): void {
        this.emitItems.pop()
    }

    emit(name: string, ...args: any[]): void {
        if (this.emitItems.length > 0) {
            let vs = this.emitItems[this.emitItems.length - 1]
            vs.push(() => {
                this._emit(name, ...args)
            })
            return
        }
        this._emit(name, ...args)
    }

    private _emit(name: string, ...args: any[]): void {

        if (this.itemSet === null || this.itemSet === undefined) {
            return;
        }

        const handlers: EventHandler[] = [];

        // Add handlers for the specific event
        const eventHandlers = this.itemSet[name];
        if (eventHandlers !== undefined) {
            handlers.push(...eventHandlers);
        }

        // If not a wildcard event, also add wildcard handlers
        if (name !== "*") {
            const wildcardHandlers = this.itemSet["*"];
            if (wildcardHandlers !== undefined) {
                handlers.push(...wildcardHandlers);
            }
        }

        // Execute all collected handlers
        for (const handler of handlers) {
            handler(...args);
        }
    }

    on(name: string, fn: EventHandler): void {
        if (!this.itemSet[name]) {
            this.itemSet[name] = [];
        }
        this.itemSet[name].push(fn);
    }

    off(name?: string, fn?: EventHandler): void {
        if (!name) {
            this.itemSet = {};
            return;
        }

        if (!fn) {
            delete this.itemSet[name];
            return;
        }

        const handlers = this.itemSet[name];
        if (handlers !== undefined) {
            const index = handlers.indexOf(fn);
            if (index !== -1) {
                handlers.splice(index, 1);
            }
            if (handlers.length === 0) {
                delete this.itemSet[name];
            }
        }
    }
}