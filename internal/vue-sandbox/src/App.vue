<script setup lang="ts">
import { onBeforeMount, ref, nextTick } from "vue";
import { compileScript, parse } from "vue/compiler-sfc";
import sourceCode from "./test.vue?raw";

const test = parse(sourceCode);
const compiledScript = compileScript(test.descriptor, { id: "a" });
const encoded = btoa(compiledScript.content);
const datauri = `data:text/javascript;base64,${encoded}`;
const AwesomeComponent = ref(undefined);
const ready = ref(false);

onBeforeMount(async () => {
    AwesomeComponent.value = await import(/* @vite-ignore */ datauri);
    await nextTick();
    await nextTick();
    await nextTick();
    ready.value = true;
});
</script>

<template>
    <div v-if="ready">
        <component :is="AwesomeComponent"></component>
    </div>
</template>
