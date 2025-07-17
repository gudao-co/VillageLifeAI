import { App } from "../core/App";
import { EventEmiter } from "../core/EventEmiter";


export class AssetsSystem extends EventEmiter {

    private _app?: App

    init(app: App): void {
        this._app = app
    }

    preload(keys: string[]): [any | false, string | undefined] {
        if (!this._app) return [false, "assetsSystem not init"]
        return this._app.call("assets", "preload", keys)
    }

}

export const assetsSystem = new AssetsSystem()