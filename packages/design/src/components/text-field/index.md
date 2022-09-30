---
title: Inmatningsfält
layout: component
status: Produktionsklar
---

**Komponent motsvarar följande HTML element:** [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

## Exempel

### Inmatningsfält med rekommenderade attribut satta

```html
<div class="text-field">
    <label for="fornamn" class="label"> Förnamn </label>
    <div class="text-field__icon-wrapper">
        <input
            name="fornamn"
            inputmode="text"
            id="fornamn"
            type="text"
            class="text-field__input"
            maxlength="50"
        />
    </div>
</div>

<div class="text-field">
    <label for="email" class="label"> Mejl </label>
    <div class="text-field__icon-wrapper">
        <input
            name="email"
            inputmode="email"
            id="email"
            type="email"
            class="text-field__input"
            maxlength="150"
        />
    </div>
</div>
```

### Inmatningsfält med giltigt värde

```html
<div class="text-field text-field--valid">
    <label for="giltigt-fornamn" class="label"> Förnamn </label>
    <div class="text-field__icon-wrapper">
        <input
            value="Anna"
            name="fornamn"
            inputmode="text"
            id="giltigt-fornamn"
            type="text"
            class="text-field__input"
            data-required=""
            required
            aria-invalid="false"
            maxlength="50"
        />
        <svg focusable="false" class="icon text-field__icon f-icon-success">
            <use xlink:href="#f-icon-success"></use>
        </svg>
    </div>
</div>
```

### Inmatningsfält med ogiltigt värde

```html
<div class="text-field text-field--error">
    <label for="ogiltig-alder" class="label">
        Ålder
        <span class="label__message label__message--error"
            ><svg focusable="false" class="icon label__icon--left f-icon-error">
                <use xlink:href="#f-icon-error"></use>
            </svg>
            Du har fyllt i ett ogiltigt tecken. Fyll i siffror.</span
        ></label
    >
    <div class="text-field__icon-wrapper">
        <input
            value="Två"
            name="alder"
            inputmode="numeric"
            id="ogiltig-alder"
            type="text"
            class="text-field__input"
            aria-invalid="true"
            maxlength="3"
        />
    </div>
</div>
```

### Inmatningsfält med tooltip, hjälptext och formatbeskrivning

```html
<div class="text-field">
    <div>
        <div class="tooltip-before">
            <label
                for="organisationsnummer"
                class="label tooltip-before__label"
            >
                Organisationsnummer
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
                        Läs mer om Organisationsnummer
                    </span>
                </button>
                <div style="height: auto;">
                    <div tabindex="-1" class="tooltip__content-wrapper">
                        <span
                            class="tooltip__arrow tooltip__arrow--animation"
                            style="left: 185.5px;"
                        ></span>
                        <div class="tooltip__content">
                            <div class="tooltip__body">
                                <div class="tooltip__header">
                                    Organisationsnummer
                                </div>
                                Alla företag har ett organisationsnummer. Du
                                hittar vanligtvis organisationsnumret på ditt
                                anställningsavtal, ditt löneavtal eller på
                                företagets hemsida.
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
        <label for="organisationsnummer" class="label sr-separator"
            ><span class="label__description"
                >Fyll i ett organisationsnummer</span
            >
            <span class="label__description label__description--discrete"
                >(999999-9999)</span
            >
        </label>
    </div>
    <input
        name="organisationsnummer"
        inputmode="numeric"
        id="organisationsnummer"
        type="text"
        class="text-field__input"
        maxlength="50"
    />
</div>
```

### Inmatningsfält med inaktivt tillstånd/läge

```html
<div class="text-field">
    <label for="fornamn-inaktivt" class="label"> Förnamn </label>
    <div class="text-field__icon-wrapper">
        <input
            name="fornamn"
            inputmode="text"
            id="fornamn-inaktivt"
            type="text"
            class="text-field__input"
            maxlength="50"
            disabled
        />
    </div>
</div>
```

### Inmatningsfält med innehåll i anslutning till `input`-element

```html
<div class="text-field">
    <label for="fornamn-hoger-vanster" class="label"> Förnamn </label>
    <div class="text-field__input-wrapper">
        <div>[Innehåll vänster]</div>
        <div class="text-field__icon-wrapper">
            <input
                id="fornamn-hoger-vanster"
                type="text"
                class="text-field__input"
                maxlength="50"
            />
        </div>
        <div>[Innehåll höger]</div>
    </div>
</div>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
