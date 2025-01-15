import { type Ref, ref, type ShallowRef, watchEffect } from "vue";
import { LayoutAreaAttach, LayoutAreaDirection } from "./define-layout";
import { VAR_NAME_AREA, VAR_NAME_DIRECTION } from "./constants";

export interface UseAreaData {
    readonly area: Readonly<Ref<string | null>>;
    readonly attach: Readonly<Ref<LayoutAreaAttach | null>>;
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

export function useAreaData(
    element: Readonly<ShallowRef<HTMLElement | null>>,
): UseAreaData {
    const area = ref<string | null>(null);
    const attach = ref<LayoutAreaAttach | null>(null);
    const direction = ref<LayoutAreaDirection | null>(null);

    watchEffect(() => {
        if (element.value) {
            const style = getComputedStyle(element.value);
            area.value = getProperty(style, VAR_NAME_AREA);
            attach.value = getProperty(style, VAR_NAME_AREA);
            direction.value = getProperty(style, VAR_NAME_DIRECTION);
        }
    });

    return {
        area,
        attach,
        direction,
    };
}
