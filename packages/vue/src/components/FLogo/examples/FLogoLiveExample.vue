<template>
    <live-example :components="components" :template="template">
        <f-select-field v-model="logoSize">
            <template #label> Storlek </template>
            <option value="responsive">Responsiv</option>
            <option value="small">Liten</option>
            <option value="large">Stor</option>
        </f-select-field>
    </live-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FLogo, FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FLogoLiveExample",
    components: { LiveExample, FSelectField },
    data() {
        return {
            logoSize: "responsive",
        };
    },
    computed: {
        components(): object {
            return { FLogo };
        },
        size(): string {
            const template = /* HTML */ `size="${this.logoSize}"`;
            return this.logoSize === "responsive" ? "" : template;
        },
        template(): string {
            return /* HTML */ ` <f-logo ${this.size} aria-label="awesome logo"></f-logo> `;
        },
    },
});
</script>
