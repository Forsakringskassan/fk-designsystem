<script setup lang="ts">
const props = defineProps({
    /**
     * Size of the logo: `"small"`, `"large"`, or `"responsive"`.
     * Requires matching CSS variable to be set (`--f-logo-image-{small/large}`), or both if "responsive".
     */
    size: {
        type: String,
        default: "responsive",
        required: false,
        validator(value: string): boolean {
            return ["small", "large", "responsive"].includes(value);
        },
    },
    /**
     * Accessible name for the logo.
     */
    /* eslint-disable-next-line vue/prop-name-casing -- vue does not allow ariaLabel as a prop as it collides with internal types */
    "aria-label": {
        type: String,
        required: true,
    },
});

/* @ts-expect-error The prop name is actually normalized to ariaLabel but the type system does not realize */
const ariaLabel = props.ariaLabel;
</script>

<template>
    <span :class="`logo logo--${props.size}`" :aria-label="ariaLabel" role="img" />
</template>
