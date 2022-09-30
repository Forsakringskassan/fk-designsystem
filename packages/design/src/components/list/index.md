---
title: Lista
layout: component
status: Produktionsklar
---

**Komponent motsvarar följande HTML element:** [ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

## Exempel

### Lista som visar entiteter - ej valbara

Används som alternativ till tabell.

```html
<ul class="list">
    <li class="list__item">
        <div class="list__item__itempane">Banan</div>
    </li>
    <li class="list__item">
        <div class="list__item__itempane ">Apelsin</div>
    </li>
    <li class="list__item">
        <div class="list__item__itempane">Äpple</div>
    </li>
</ul>
```

### Tillstånd

Visar tillstånd; normal, hover, aktiv och vald.

```html
<ul class="list">
    <li class="list__item">
        <div class="list__item__itempane">
            <b>Tillstånd: </b> Normal <b> CSS: </b>
            <code>Default, list__item--normal</code>
            <b> Beskrivning: </b> Normalt utseende <b> Prio: </b> 4
        </div>
    </li>
    <li class="list__item list__item--hover">
        <div class="list__item__itempane ">
            <b>Tillstånd: </b> Hover <b> CSS: </b>
            <code>:hover, list__item--hover</code>
            <b> Beskrivning: </b> Utseende vid hover över rad <b> Prio: </b> 3
        </div>
    </li>
    <li
        class="list__item list__item--hover list__item--selected"
        aria-selected="true"
    >
        <div class="list__item__itempane">
            <b>Tillstånd: </b> Markerad <b> CSS: </b>
            <code>list__item--selected</code> <b> Beskrivning: </b> Rad som är
            markerad (ej vald) <b> Prio: </b> 2
        </div>
    </li>
    <li
        class="list__item list__item--hover list__item--selected list__item--active"
    >
        <div class="list__item__itempane">
            <b>Tillstånd: </b> Aktiv <b> CSS: </b>
            <code>list__item--active</code> <b> Beskrivning: </b> Rad som är
            aktiv (vald) <b> Prio: </b> 1
        </div>
    </li>
</ul>
```

### Lista som visar entiteter som är valbara

Använd `aria`, `role` och `tabindex` attribut så att listan fungerar som en `listbox`.

```html
<!-- [html-validate-disable-next prefer-native-element] -->
<ul
    class="list list--hover"
    role="listbox"
    tabindex="0"
    aria-activedescendant="item3"
    title="Valbar lista"
>
    <li
        id="item1"
        class="list__item"
        aria-selected="false"
        aria-labelledby="banan-id"
        role="option"
        tabindex="0"
    >
        <div class="list__item__selectpane">
            <div class="checkbox list__item__selectpane__input">
                <input
                    type="checkbox"
                    id="checkbox_1"
                    name="checkbox_1"
                    class="checkbox__input"
                    value="true"
                />
                <label for="checkbox_1" class="checkbox__label">
                    <span id="banan-id" class="sr-only">Banan</span>
                </label>
            </div>
        </div>
        <div class="list__item__itempane">Banan</div>
    </li>

    <li
        id="item2"
        class="list__item list__item--selected"
        aria-selected="false"
        aria-labelledby="apelsin-id"
        role="option"
        tabindex="0"
    >
        <div class="list__item__selectpane">
            <div class="checkbox list__item__selectpane__input">
                <input
                    type="checkbox"
                    id="checkbox_2"
                    name="checkbox_2"
                    class="checkbox__input"
                    value="true"
                    checked
                />
                <label for="checkbox_2" class="checkbox__label">
                    <span id="apelsin-id" class="sr-only">Apelsin</span>
                </label>
            </div>
        </div>
        <div class="list__item__itempane">Apelsin</div>
    </li>

    <li
        class="list__item list__item--selected list__item--active"
        id="item3"
        aria-selected="true"
        aria-labelledby="apple-id"
        role="option"
        tabindex="0"
    >
        <div class="list__item__selectpane">
            <div class="checkbox list__item__selectpane__input">
                <input
                    type="checkbox"
                    id="checkbox_3"
                    name="checkbox_3"
                    class="checkbox__input"
                    value="true"
                    checked
                />
                <label for="checkbox_3" class="checkbox__label">
                    <span id="apple-id" class="sr-only">Äpple</span>
                </label>
            </div>
        </div>
        <div class="list__item__itempane">Äpple</div>
    </li>
</ul>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
