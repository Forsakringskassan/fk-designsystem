---
title: Etikett
layout: component
status: Produktionsklar
---

**Komponent motsvarar följande HTML element:** [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

## Exempel

### Etikett med rekommenderade attribut satta

```html
<label for="fornamn" class="label"> Förnamn </label>
<input
    type="text"
    id="fornamn"
    name="input"
    style="display: block;"
    maxlength="50"
/>
```

### Etikett med hjälptext och formatbeskrivning

```html
<label for="personnummer" class="label">
    Personnummer
    <span class="label__description">Fyll i ett personnummer</span>
    <span class="label__description label__description--discrete">
        (ååååmmdd-nnnn)
    </span>
</label>

<input type="text" id="personnummer" name="personnummer" maxlength="15" />
```

### Etikett med felmeddelande

```html
<label for="ogiltigt-fornamn" class="label">
    Förnamn
    <span class="label__message label__message--error">
        Namnet är för kort.
    </span>
</label>

<input
    type="text"
    id="ogiltigt-fornamn"
    name="ogiltigt-fornamn"
    maxlength="50"
/>
```

### Etikett med tooltip

```html
<div>
    <div class="tooltip-before">
        <label for="fornamn-tooltip" class="label tooltip-before__label">
            Förnamn
        </label>
    </div>
    <div class="tooltip">
        <div class="tooltip__container">
            <button type="button" aria-expanded="false" class="tooltip__button">
                <span class="icon-stack icon-stack--tooltip">
                    <svg focusable="false" class="icon f-icon-circle">
                        <use xlink:href="#f-icon-circle"></use>
                    </svg>
                    <svg focusable="false" class="icon f-icon-i">
                        <use xlink:href="#f-icon-i"></use>
                    </svg>
                </span>
                <span class="sr-only"> Läs mer om förnamn </span>
            </button>
        </div>
    </div>
</div>

<input type="text" id="fornamn-tooltip" name="fornamn-tooltip" maxlength="50" />
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
