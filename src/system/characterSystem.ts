import { App } from "../core/App";
import { EventEmiter } from "../core/EventEmiter";

export interface ICharacter {
    name: string
    manners: number
    age: number
    gender: number
    birthday: number
}

export class CharacterSystem extends EventEmiter {

    private _app?: App

    init(app: App): void {
        this._app = app
    }

    all(): ICharacter[] {
        if (!this._app) return []
        let [rs, err] = this._app.call("character", "all")
        if (err) return []
        return rs
    }

}

export const characterSystem = new CharacterSystem()