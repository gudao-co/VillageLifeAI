import { App } from "./core/App";
import { assetsSystem } from "./system/assetsSystem";
import { characterSystem } from "./system/characterSystem";
import { saySystem } from "./system/saySystem";

export default function (this: void, app: App): void {
    console.info("App initialized", env);

    app.on("day_start", () => {
        saySystem.say({ name: "main", title: "", res: "npc/yubo.png", style: "left" }, "Day Hello, World!")
        console.info("saySystem.say OK");
        let items = characterSystem.all();
        console.info("characterSystem.all OK");
        for (let item of items) {
            console.info(item);
        }
    })

    app.on("debug", () => {

        let items = characterSystem.all();
        console.info("characterSystem.all OK");
        for (let item of items) {
            console.info(item);
        }

        let v = saySystem.say({ name: items[Math.floor(Math.random() * items.length)].name, title: "", res: "npc/yubo.png", style: "left" }, "Hello, World!", [{ name: 'A', title: 'A' }, { name: 'B', title: 'B' }])
        console.info("saySystem.say OK", v);
    })

    app.on("npc_facing", (name) => {


        saySystem.say({ name: name, title: "", res: "npc/yubo.png", style: "left" }, "123123. Hello, World!")
        console.info("saySystem.say OK");
    })

    saySystem.init(app)
    console.info("saySystem.init OK");
    assetsSystem.init(app)
    console.info("assetsSystem.init OK");
    characterSystem.init(app)
    console.info("characterSystem.init OK");
    assetsSystem.preload(['npc/yubo.png'])
    console.info("assetsSystem.preload OK");

}