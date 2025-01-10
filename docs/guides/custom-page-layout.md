---
title: Egen layout till applicationsmall
layout: article
visible: false
---

Registrera en ny layout med `registerLayout`.
Namnet som anges är vad som senare används i `layout`-propen till `FPageLayout`.

```ts
registerLayout({
    name: "my-custom",
    areas: {
        header: {
            attach: "none",
            direction: "column",
        },
        toolbar: {
            attach: "none",
            direction: "row",
        },
        sidebar: {
            attach: "left",
            direction: "row",
        },
        content: {
            attach: "none",
            direction: "column",
        },
        footer: {
            attach: "none",
            direction: "column",
        },
    },
});
```

där:

- `attach` talar om hur en panel ska fästas. Om ytan inte kan ta paneler sätter man `"none"`.
- `direction` talar om ifall ytan flödar horisontellt eller vertikalt.

Styling använder [CSS grid](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids) på `::part(grid name)` och kan se ut så här:

```css
.page-layout::part(grid my-custom) {
    grid-template:
        "sidebar header" min-content
        "sidebar toolbar" min-content
        "sidebar content" 1fr
        "footer footer" min-content
        / min-content 1fr;
}
```

Slutligen används layouten genom att sätta det nya registrerade namnet som `layout` attributet samt implementera de ytor som definierats med hjälp av Vue slots.

```html static
<f-page-layout layout="my-custom">
    <template #header> [header] </template>
    <template #sidebar> [sidebar] </template>
    <template #toolbar> [toolbar] </template>
    <template #content> [content] </template>
    <template #footer> [footer] </template>
</f-page-layout>
```
