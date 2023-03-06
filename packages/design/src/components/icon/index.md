---
title: Ikon
layout: component
status: Produktionsklar
---

Se [designelement](designtokens/icons) för lista över tillgängliga ikoner.

## Introduktion

```html raw
<svg focusable="false" class="icon">
    <use xlink:href="#f-icon-pen"></use>
</svg>
```

`#f-icon-pen` är ett ID från en ikon i spritesheet.

### Spritesheet

För att använda ikonbiblioteket måste dess spritesheet (svg-fil) inkluderas i applikationen.
Exakt tillvägagångsätt varierar mellan ramverk men det viktiga är att filen är inline och inte bara en `<img src="..">`.
Det går att infoga egna spritesheets och de kan finnas multipla så länge symbolernas ID är unika.

Med Webpack kan det se ut ungefär som följande:

```html raw
<div style="display: none;">
    ${require('path/to/fk-icons/dist/spritesheet.svg')}
</div>
```

En spritesheet är en vanlig SVG som använder `<symbol>` taggen för att definiera ikoner:

```html raw
<svg focusable="false">
    <symbol id="my-custom-icon">...</symbol>
</svg>
```

### Tillgänglighet

Använd attributet `focusable="false"` för att förhindra att IE11 sätter fokus på SVG:en.

### Hjälpklasser

| Klass                   | Beskrivning              | Exempel                                                                                                |
| ----------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------ |
| (ingen)                 | Original ikon            | <svg focusable="false" class="icon"><use xlink:href="#f-icon-reply"></use></svg>                       |
| `icon--flip-horizontal` | Spegelvänder horizontalt | <svg focusable="false" class="icon icon--flip-horizontal"><use xlink:href="#f-icon-reply"></use></svg> |
| `icon--flip-vertical`   | Spegelvänder vertikalt   | <svg focusable="false" class="icon icon--flip-vertical"><use xlink:href="#f-icon-reply"></use></svg>   |
| `icon--rotate-90`       | Roterar 90&deg;          | <svg focusable="false" class="icon icon--rotate-90"><use xlink:href="#f-icon-reply"></use></svg>       |
| `icon--rotate-180`      | Roterar 180&deg;         | <svg focusable="false" class="icon icon--rotate-180"><use xlink:href="#f-icon-reply"></use></svg>      |
| `icon--rotate-270`      | Roterar 270&deg;         | <svg focusable="false" class="icon icon--rotate-270"><use xlink:href="#f-icon-reply"></use></svg>      |

## Exempel

### Exempel med `focusable="false"`

```html
<svg focusable="false" class="icon">
    <use xlink:href="#f-icon-pen"></use>
</svg>
```

### Informationsbärande ikon

En ikon är vanligtvis **inte** informationsbärande men om de är så måste ett `title` element läggas till innanför `<svg>` taggen.

#### Exempel med `title` tagg

```html
<svg focusable="false" class="icon" tabindex="-1">
    <title>Redigera</title>
    <use xlink:href="#f-icon-pen"></use>
</svg>
```

## Stackbara ikoner

Ikoner kan positioneras över varandra i en stack (overlay) med klassen `icon-stack`. De ikoner som ska ingå i stacken placeras därefter som barn till elementet:

```html raw
<div class="icon-stack">
    <svg focusable="false" class="icon">...</svg>
    <svg focusable="false" class="icon">...</svg>
</div>
```

### Exempel

```html
<div class="icon-stack">
    <svg focusable="false" class="icon">
        <use xlink:href="#f-icon-pdf"></use>
    </svg>
    <svg focusable="false" class="icon">
        <use xlink:href="#f-icon-success"></use>
    </svg>
</div>
```

### Fördefinierade stackbara ikoner

Vanligt förekommande ihopsatta ikoner är `info`, `warning`, `error` och `tooltip`. För att få rätt färger etc finns det hjälpklasser för detta.

#### Exempel

```html
<div class="icon-stack icon-stack--info">
    <svg focusable="false" class="icon f-icon-circle">
        <use xlink:href="#f-icon-circle"></use>
    </svg>
    <svg focusable="false" class="icon f-icon-i">
        <use xlink:href="#f-icon-i"></use>
    </svg>
</div>
```

## Nytt fönster

Ikoner som används i samband med länkar som öppnas i ett nytt fönster används ikonen `f-icon-new-window`.
Ikonen kan stackas med `icon-stack` och med hjälp av hjälpklassen `icon-stack--new-window` positioneras ikonerna korrekt:

```html
<div class="icon-stack icon-stack--new-window">
    <svg focusable="false" class="icon f-icon-new-window">
        <use xlink:href="#f-icon-new-window"></use>
    </svg>
    <svg focusable="false" class="icon f-icon-doc">
        <use xlink:href="#f-icon-doc"></use>
    </svg>
</div>
```

## CSS

### Klasser

-   `.icon`: grundstyling för en ikon.
-   `.icon-stack`: wrapper runt en stack med ikoner.
-   `.icon-stack--info`: hjälpklass för att förse info-ikon med färger etc.
-   `.icon-stack--warning`: hjälpklass för att förse warning-ikon med färger etc.
-   `.icon-stack--error`: hjälpklass för att förse error-ikon med färger etc.
-   `.icon-stack--tooltip`: hjälpklass för att förse tooltip-ikon med färger etc.
-   `.icon-stack--new-window`: hjälpklass för att positionera ikon-stack i samband med nytt fönster.

## Sass

### Variabler

-   `icon-default-size`: default-storleken på ikoner (default: 1.2em)

### Placeholders

-   `%icon--base`: grundstyling för en ikon.

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
