import { createApp } from "vue";
import { type SetupOptions } from "@forsakringskassan/vite-lib-config";

import "@fkui/icon-lib-default/dist/f";
import "@fkui/theme-default/dist/fkui-css-variables.css";
import "@fkui/design/lib/fkui.css";
import "@fkui/design/lib/fonts.css";

import {
    setRunningContext,
    TestPlugin,
    TranslationPlugin,
    ValidationPlugin,
} from "@fkui/vue";

export function setup(options: SetupOptions): void {
    const { rootComponent, selector } = options;
    const app = createApp(rootComponent);
    setRunningContext(app);
    app.use(TestPlugin);
    app.use(TranslationPlugin);
    app.use(ValidationPlugin);
    app.mount(selector);
}
