import { type Ref, getCurrentInstance, onMounted, ref } from "vue";
import { LayoutAreaAttachPanel, LayoutAreaDirection } from "./define-layout";
import { VAR_NAME_AREA, VAR_NAME_DIRECTION } from "./constants";

export interface UseAreaData {
    readonly area: Readonly<Ref<string | null>>;
    readonly attach: Readonly<Ref<LayoutAreaAttachPanel | null>>;
    readonly direction: Readonly<Ref<LayoutAreaDirection | null>>;
}

function getProperty<T>(style: CSSStyleDeclaration, key: string): T | null {
    const value = style.getPropertyValue(key);
    if (value === "") {
        return null;
    } else {
        return JSON.parse(value);
    }
}

export function useAreaData(): UseAreaData {
    const area = ref<string | null>(null);
    const attach = ref<LayoutAreaAttachPanel | null>(null);
    const direction = ref<LayoutAreaDirection | null>(null);

    onMounted(() => {
        const vm = getCurrentInstance();
        const parentElement = vm?.proxy?.$el.parentElement;
        if (!parentElement) {
            return;
        }
        setTimeout(() => {
            const style = getComputedStyle(parentElement);
            area.value = getProperty(style, VAR_NAME_AREA);
            attach.value = getProperty(style, VAR_NAME_AREA);
            direction.value = getProperty(style, VAR_NAME_DIRECTION);
        });
    });

    return {
        area,
        attach,
        direction,
    };
}
