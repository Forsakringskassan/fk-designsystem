<script setup lang="ts">
import { FProgressbar } from "@fkui/vue";
</script>

<!-- cut above -->
<template>
    <div>
        <span>Pending (0%)</span>
        <f-progressbar v-test="'progressbar-pending'" :value="0" aria-label="ProgressbarPending"> </f-progressbar>
    </div>

    <div>
        <span>Inprogress (1-99%)</span>
        <f-progressbar v-test="'progressbar-inprogress'" :value="40" aria-label="ProgressbarInprogress">
        </f-progressbar>
    </div>

    <div>
        <span>Finished (100%)</span>
        <f-progressbar v-test="'progressbar-finished'" :value="100" aria-label="ProgressbarFinished"> </f-progressbar>
    </div>
</template>
