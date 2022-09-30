---
title: Offline
layout: component
status: Produktionsklar
---

Offline är en overlay som lägger sig högst upp över övrigt innehåll när internetanslutningen går ner. Den försvinner igen när anslutningen är tillbaka.

## Exempel

```html
<div class="offline__wrapper">
    <div class="offline">
        <span class="offline__icon">
            <span class="icon-stack icon-stack--error">
                <svg focusable="false" class="icon f-icon-triangle">
                    <use xlink:href="#f-icon-triangle"></use>
                </svg>
                <svg focusable="false" class="icon f-icon-alert">
                    <use xlink:href="#f-icon-alert"></use>
                </svg>
            </span>
        </span>
        <p class="offline__content">
            Du har förlorat din internetuppkoppling. Se till att du har
            uppkoppling och försök att signera igen.
        </p>
    </div>
</div>
```

<button type="button" id="toggle-overlay">Växla helskärm</button>

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
