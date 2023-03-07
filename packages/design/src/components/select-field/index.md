---
title: Dropplista
layout: component
status: Produktionsklar
---

**Komponent motsvarar följande HTML element:** [select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

## Exempel

### Dropplista med rekommenderade attribut satta

```html
<div class="select-field">
    <label for="franvaro-anledning" class="label">
        Varför var du frånvarande?
    </label>

    <div class="select-field__icon-wrapper">
        <select
            name="franvaro-anledning"
            id="franvaro-anledning"
            class="select-field__select"
        >
            <option value="">Välj…</option>
            <option value="SJUKDOM">Sjukdom</option>
            <option value="VAB">Tillfällig vård av barn</option>
            <option value="LEDIG">Enskild angelägenhet</option>
            <option value="TILLFALLIGT_UPPEHALL_UTBILDNING">
                Tillfälligt uppehåll i utbildning
            </option>
            <option value="TILLFALLIGT_UPPEHALL_PROGRAM">
                Tillfälligt uppehåll i jobb- och utvecklingsgarantin
            </option>
            <option value="VARD_NARSTAENDE">
                Vård av svårt sjuk närstående
            </option>
        </select>
        <svg
            focusable="false"
            class="icon select-field__icon f-icon-arrow-down"
        >
            <use xlink:href="#f-icon-arrow-down"></use>
        </svg>
    </div>
</div>
```

### Dropplista med tooltip

```html
<div class="select-field">
    <div>
        <div class="tooltip-before">
            <label for="karensdagar" class="label tooltip-before__label">
                Ditt val av karensdagar
            </label>
        </div>
        <div class="tooltip">
            <div class="tooltip__container">
                <button
                    type="button"
                    aria-expanded="true"
                    class="tooltip__button"
                >
                    <span class="icon-stack icon-stack--tooltip">
                        <svg focusable="false" class="icon f-icon-circle">
                            <use xlink:href="#f-icon-circle"></use>
                        </svg>
                        <svg focusable="false" class="icon f-icon-i">
                            <use xlink:href="#f-icon-i"></use>
                        </svg>
                    </span>
                    <span class="sr-only">
                        Läs mer om Ditt val av karensdagar
                    </span>
                </button>
                <div style="height: auto;">
                    <div tabindex="-1" class="tooltip__content-wrapper">
                        <span
                            class="tooltip__arrow tooltip__arrow--animation"
                            style="left: 189.398px;"
                        ></span>
                        <div class="tooltip__content">
                            <div class="tooltip__body">
                                <div class="tooltip__header">
                                    Ditt val av karensdagar
                                </div>
                                <p>
                                    Karensdagar är dagar i början av en
                                    sjukskrivning utan ersättning. Du som har
                                    inkomst av näringsverksamhet kan välja att
                                    ha 1, 7, 14, 30, 60 eller 90 karensdagar. Om
                                    du inte gör något val har du 7 karensdagar.
                                    Ju fler karensdagar du har, desto lägre blir
                                    din sjukförsäkringsavgift.
                                </p>
                                <p>
                                    När du fyllt 55 år kan du inte ändra till en
                                    kortare karenstid än 7 dagar.
                                </p>
                            </div>
                            <div class="iflex iflex--float-right">
                                <div
                                    class="iflex__item iflex--align-top iflex--shrink"
                                >
                                    <button
                                        type="button"
                                        class="button button--discrete-inverted"
                                    >
                                        <span>Stäng</span>
                                        <svg
                                            focusable="false"
                                            class="icon button__icon f-icon-close"
                                        >
                                            <use
                                                xlink:href="#f-icon-close"
                                            ></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <label for="karensdagar" class="label sr-separator"
            ><span class="label__description"
                >Karensdagar är dagar i början av en sjukskrivning utan
                ersättning.</span
            >
            <span class="label__description label__description--discrete"
                >(max ett val)</span
            >
        </label>
    </div>

    <div class="select-field__icon-wrapper">
        <select id="karensdagar" class="select-field__select">
            <option value="">Välj…</option>
            <option value="1">1</option>
            <option value="7">7</option>
            <option value="14">14</option>
            <option value="30">30</option>
            <option value="60">60</option>
            <option value="90">90</option>
        </select>
        <svg
            focusable="false"
            class="icon select-field__icon f-icon-arrow-down"
        >
            <use xlink:href="#f-icon-arrow-down"></use>
        </svg>
    </div>
</div>
```

### Dropplista med inaktivt tillstånd/läge

```html
<div class="select-field">
    <label for="franvaro-anledning-inaktivt" class="label"
        >Varför var du frånvarande?
    </label>

    <div class="select-field__icon-wrapper">
        <select
            name="franvaro-anledning-inaktivt"
            id="franvaro-anledning-inaktivt"
            class="select-field__select"
            disabled
        >
            <option value="">Välj…</option>
        </select>
        <svg
            focusable="false"
            class="icon select-field__icon f-icon-arrow-down"
        >
            <use xlink:href="#f-icon-arrow-down"></use>
        </svg>
    </div>
</div>
```

## Övrigt

### Länkar

~~Användargränssnitt - Designguide 2.0, Förvaltningsdokumentation och Figma komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
