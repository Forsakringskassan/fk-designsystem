---
title: Laddningsindikator
layout: component
status: Produktionsklar
---

**Komponent motsvarar följande HTML element:** [loader](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)

## Exempel

```html
<div class="loader" id="overlay" aria-live="assertive" tabindex="-1">
    <div>&nbsp;</div>
    <div class="loader__backdrop">
        <div id="delay" class="loader__wrapper">
            <div class="loader__spinner-1 loader__spinner">
                <div
                    class="loader__spinner-1-circle1 loader__circle loader__circle--1"
                ></div>
                <div
                    class="loader__spinner-1-circle2 loader__circle loader__circle--2"
                ></div>
                <div
                    class="loader__spinner-1-circle3 loader__circle loader__circle--3"
                ></div>
                <div
                    class="loader__spinner-1-circle4 loader__circle loader__circle--4"
                ></div>
            </div>
            <div class="loader__spinner-2 loader__spinner">
                <div
                    class="loader__spinner-2-circle1 loader__circle loader__circle--1"
                ></div>
                <div
                    class="loader__spinner-2-circle2 loader__circle loader__circle--2"
                ></div>
                <div
                    class="loader__spinner-2-circle3 loader__circle loader__circle--3"
                ></div>
                <div
                    class="loader__spinner-2-circle4 loader__circle loader__circle--4"
                ></div>
            </div>
            <div class="loader__spinner-3 loader__spinner">
                <div
                    class="loader__spinner-3-circle1 loader__circle loader__circle--1"
                ></div>
                <div
                    class="loader__spinner-3-circle2 loader__circle loader__circle--2"
                ></div>
                <div
                    class="loader__spinner-3-circle3 loader__circle loader__circle--3"
                ></div>
                <div
                    class="loader__spinner-3-circle4 loader__circle loader__circle--4"
                ></div>
            </div>
        </div>
        <div id="text" class="loader__wait-text">
            <span>Vänligen vänta</span>
        </div>
    </div>

    <button class="button" id="show__overlay" type="button">
        <span>Toggla overlay</span>
    </button>
    <button class="button" id="show__delay" type="button">
        <span id="knapptext">Toggla på delay</span>
    </button>
</div>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
