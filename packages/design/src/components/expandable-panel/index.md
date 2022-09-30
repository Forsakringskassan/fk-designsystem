---
title: Expanderbar panel
layout: component
status: Preliminär
---

## Exempel

### Standard

```html
<div class="expandable-panel expandable-panel--collapsed">
    <h2 class="expandable-panel__heading">
        <button
            type="button"
            aria-expanded="false"
            aria-controls="example-expandable-panel"
        >
            <span class="expandable-panel__icon">
                <span class="icon-stack">
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                </span>
            </span>

            Klicka för att expandera
        </button>
    </h2>
    <div class="expandable-panel__content" id="example-expandable-panel">
        <div class="expandable-panel__body">Lorem ipsum dolor sit amet.</div>
    </div>
</div>
```

### Med notifiering

Med `expandable-panel__notification` kan man lägga till en notifieringsikon:

```html raw
<span class="expandable-panel__notification" title="Du har 12 notifieringar">
    <svg focusable="false" class="icon">
        <use xlink:href="#f-icon-bell"></use>
    </svg>
</span>
```

```html
<div class="expandable-panel expandable-panel--collapsed">
    <h2 class="expandable-panel__heading">
        <button
            type="button"
            aria-expanded="false"
            aria-controls="example-expandable-panel-notifications"
        >
            <span class="expandable-panel__icon">
                <span class="icon-stack">
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                </span>
            </span>

            Klicka för att expandera

            <span
                class="expandable-panel__notification"
                title="Du har 12 notifieringar"
            >
                <svg focusable="false" class="icon">
                    <use xlink:href="#f-icon-bell"></use>
                </svg>
            </span>
        </button>
    </h2>
    <div
        class="expandable-panel__content"
        id="example-expandable-panel-notifications"
    >
        <div class="expandable-panel__body">Lorem ipsum dolor sit amet.</div>
    </div>
</div>
```

### Relaterat innehåll

Panelen kan innehålla relaterat innehåll som presenteras under det vanliga innehållet när panelen är expanderad:

```html raw
<div class="expandable-panel__content">
    <div class="expandable-panel__body">...</div>
    <div class="expandable-panel__outside">...</div>
</div>
```

```html
<div class="expandable-panel expandable-panel--collapsed">
    <h2 class="expandable-panel__heading">
        <button
            type="button"
            aria-expanded="false"
            aria-controls="example-expandable-panel-related"
        >
            <span class="expandable-panel__icon">
                <span class="icon-stack">
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                </span>
            </span>

            Klicka för att expandera
        </button>
    </h2>
    <div
        class="expandable-panel__content"
        id="example-expandable-panel-related"
    >
        <div class="expandable-panel__body">Lorem ipsum dolor sit amet.</div>
        <div class="expandable-panel__outside">Relaterat innehåll</div>
    </div>
</div>
```

## Användning

```html raw
<div class="expandable-panel expandable-panel--expanded">
    <!-- Texten som visas i den klickbara ytan för att expandera/kollapsa expandable-panelen -->
    <h2 class="expandable-panel__heading">
        <button
            type="button"
            aria-expanded="true"
            aria-controls="example-expandable-panel-usage"
        >
            ...
        </button>
    </h2>

    <div class="expandable-panel__content" id="example-expandable-panel-usage">
        <!-- Innehållet som visas när expandable-panelen är expanderad -->
        <div class="expandable-panel__body">...</div>

        <!-- Ev. relaterat innehåll som visas under expandable-panelen när den är expanderad -->
        <div class="expandable-panel__outside">...</div>
    </div>
</div>
```

Panel använder klasserna `expandable-panel--expanded` och `expandable-panel--collapsed` för att styra om innehållet visas eller ej.

### Tillgänglighet

Använd `aria-expanded` och `aria-controls` på `<button>` elementet.

### Animation (valfritt)

För att använda animerad expandering/kollapsning beräknar man innehållets höjd.
När panelen expanderas sätter man CSS `height` på `expandable-panel__content` till höjden samt nollställer vid kollapsning.
Man kan med fördel återställa höjden mellan animationer för att enklare hantera storleksförändring av innehåll.

### CSS klasser

-   `expandable-panel` - Komponentens primära klass.
-   `expandable-panel--collapsed` - Används i kombination med `expandable-panel` och kommer att dölja innehållet.
-   `expandable-panel--expanded` - Används i kombination med `expandable-panel` och kommer att visa innehållet.
-   `expandable-panel__heading` - Markerar panelens rubrik.
-   `expandable-panel__icon` - Markerar panelens ikon.
-   `expandable-panel__notification` - Markerar panelens notifikationer.
-   `expandable-panel__content` - Wrapper runt `expandable-panel__body` och `expandable-panel_outside` för att stödja animation.
-   `expandable-panel__body` - Används för att visa panelens primära innehåll (visning styrs av `expandable-panel--collapsed` och `expandable-panel--expanded`)
-   `expandable-panel__outside` - Används för att visa relaterat innehåll.

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
