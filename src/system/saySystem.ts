import { App } from "../core/App";
import { EventEmiter } from "../core/EventEmiter";

export type SayProfileStyle = "left" | "right"
export interface SayOption {
    title: string
    name: string
}

export interface ISayProfile {
    name: string
    title: string
    res: string
    style: SayProfileStyle
}


export class SaySystem extends EventEmiter {

    private _app?: App

    init(app: App): void {
        this._app = app
    }

    say(profile: ISayProfile, text: string, options?: SayOption[]): SayOption | undefined {
        if (!this._app) return undefined
        let [rs, err] = this._app.call("say", "say", profile, text, options)
        if (err) return undefined
        if (options === undefined) return undefined
        for (let opt of options) {
            if (opt.name == rs) return opt
        }
    }

}

export const saySystem = new SaySystem()