<script setup lang="ts">
import { watchEffect, useTemplateRef, nextTick, computed, onUnmounted, watch } from "vue";
import { debounce } from "@fkui/logic";
import { useEventListener } from "../../composables";
import { config } from "../../config";
import { computeListboxRect } from "./compute-listbox-rect";

export interface IPopupListboxProps {
    isOpen: boolean;
    anchor: HTMLElement | null;
    numOfItems: number;
    itemHeight?: number;
    activeElement?: HTMLElement | undefined;
}

const { isOpen, anchor, numOfItems, itemHeight, activeElement } = defineProps<IPopupListboxProps>();
const emit = defineEmits<{ close: [] }>();
const wrapper = useTemplateRef("wrapper");
const content = useTemplateRef("content");

const teleportDisabled = false;
const popupClasses = ["popup", "popup--overlay"];
const teleportTarget = computed(() => config.popupTarget ?? config.teleportTarget);
let guessedItemHeight: number | undefined = undefined;

useEventListener(anchor, "keyup", onKeyEsc);

watchEffect(() => {
    if (wrapper.value && activeElement !== undefined) {
        const centerPosition =
            activeElement.offsetTop -
            (wrapper.value.getBoundingClientRect().height - activeElement.getBoundingClientRect().height) / 2;

        wrapper.value.scrollTo({ top: centerPosition, behavior: "instant" });
    }
});

function addListeners(): void {
    document.addEventListener("click", onDocumentClickHandler);
    window.addEventListener("resize", debounce(onResize, 100));
}

function removeListeners(): void {
    document.removeEventListener("click", onDocumentClickHandler);
    window.removeEventListener("resize", debounce(onResize, 100));
}

watchEffect(() => {
    if (isOpen) {
        calculatePosition();
        // wait one tick so we dont get the click
        // that launches the popup (await nextTick doesnt work here)
        setTimeout(() => {
            // verify that it's still open
            if (isOpen) {
                addListeners();
            }
        }, 0);
    } else {
        removeListeners();
    }
});

watch(
    () => numOfItems,
    (oldValue, newValue) => {
        if (oldValue !== newValue && isOpen) {
            calculatePosition();
        }
    },
);

onUnmounted(removeListeners);

function onDocumentClickHandler(): void {
    emit("close");
}

function onResize(): void {
    if (isOpen) {
        calculatePosition();
    }
}

function onKeyEsc(event: KeyboardEvent): void {
    if (event.key === "Escape") {
        emit("close");
    }
}

function guessItemHeight(numOfItems: number, contentWrapper: HTMLElement): number {
    return Math.ceil(contentWrapper.clientHeight / numOfItems);
}

async function calculatePosition(): Promise<void> {
    await nextTick();

    const wrapperElement = wrapper.value;
    const contentWrapper = content.value;

    if (!anchor || !wrapperElement || !contentWrapper) {
        return;
    }

    let contentItemHeigth = itemHeight;
    if (!contentItemHeigth) {
        if (!guessedItemHeight) {
            guessedItemHeight = guessItemHeight(numOfItems, contentWrapper);
        }
        contentItemHeigth = guessedItemHeight;
    }

    wrapperElement.style.overflowY = "auto";
    wrapperElement.style.left = `0px`;

    const rect = computeListboxRect(anchor, { itemHeight: contentItemHeigth, numOfItems });
    if (rect) {
        const { top, left, width, height } = rect;
        const offsetRect = wrapperElement?.offsetParent?.getBoundingClientRect();
        const offsetLeft = offsetRect?.x ?? 0;
        wrapperElement.style.top = `${top}px`;
        wrapperElement.style.left = `${left - offsetLeft}px`;
        wrapperElement.style.minWidth = `${width}px`;
        contentWrapper.style.maxHeight = `${height}px`;
    }
}
</script>

<template>
    <teleport v-if="isOpen" :to="teleportTarget" :disabled="teleportDisabled">
        <div ref="popup" :class="popupClasses">
            <div
                ref="wrapper"
                v-bind="$attrs"
                class="popup__wrapper"
                tabindex="0"
                @keyup.esc.stop="onKeyEsc"
                @click.stop
            >
                <div ref="content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </teleport>
</template>
