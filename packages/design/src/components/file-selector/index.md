---
title: Filväljare
layout: component
status: Preliminär
---

## Exempel

### Aktiv

```html
<div class="file-selector">
    <input type="file" id="file-selector-element-active" />
    <label
        for="file-selector-element-active"
        role="button"
        class="button button--discrete"
    >
        <svg focusable="false" class="icon button__icon">
            <use xlink:href="#f-icon-paper-clip" />
        </svg>
        <span>Ladda upp fil</span>
    </label>
</div>
```

### Inaktiv

```html
<div class="file-selector">
    <input type="file" id="file-selector-element-disabled" disabled />
    <label
        for="file-selector-element-disabled"
        role="button"
        class="button button--discrete disabled"
    >
        <svg focusable="false" class="icon button__icon">
            <use xlink:href="#f-icon-paper-clip" />
        </svg>
        <span>Ladda upp fil</span>
    </label>
</div>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
