---
title: Radioknapp
layout: component
status: Produktionsklar
---

**Komponent motsvarar följande HTML element:** [fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset), [radio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)

## Exempel

### Radioknappar med rekommenderade attribut satta

```html
<fieldset id="barn-over-18" class="radio-button-group">
    <legend class="label radio-button-group__label">
        Bor det barn som har fyllt 18 år i bostaden?
    </legend>

    <div class="radio-button-group__content">
        <div class="radio-button">
            <input
                type="radio"
                id="barn-over-18-ja"
                name="barn-over-18"
                class="radio-button__input"
                value="true"
            />
            <label for="barn-over-18-ja" class="radio-button__label">
                Ja, det bor barn över 18 år där
            </label>
        </div>
        <div class="radio-button">
            <input
                type="radio"
                id="barn-over-18-nej"
                name="barn-over-18"
                class="radio-button__input"
                value="false"
            />
            <label for="barn-over-18-nej" class="radio-button__label">
                Nej, inga barn över 18 år bor där
            </label>
        </div>
    </div>
</fieldset>
```

### Inaktiverad radioknapp

```html
<fieldset id="barn-over-18-inaktiverat" class="radio-button-group">
    <legend class="label radio-button-group__label">
        Bor det barn som har fyllt 18 år i bostaden?
    </legend>

    <div class="radio-button-group__content">
        <div class="radio-button disabled">
            <input
                type="radio"
                id="barn-over-18-ja-inaktiverat"
                name="barn-over-18"
                class="radio-button__input disabled"
                value="true"
                disabled
            />
            <label
                for="barn-over-18-ja-inaktiverat"
                class="radio-button__label"
            >
                Ja, det bor barn över 18 år där
            </label>
        </div>
        <div class="radio-button disabled">
            <input
                type="radio"
                id="barn-over-18-nej-inaktiverat"
                name="barn-over-18"
                class="radio-button__input"
                disabled
                value="false"
                checked
            />
            <label
                for="barn-over-18-nej-inaktiverat"
                class="radio-button__label"
            >
                Nej, inga barn över 18 år bor där
            </label>
        </div>
    </div>
</fieldset>
```

### Radioknappar med horisontell layout

```html
<fieldset
    id="arbetat-senaste-7-dagar"
    class="radio-button-group radio-button-group--horizontal"
>
    <legend class="label radio-button-group__label">
        Har du arbetat de senaste 7 dagarna?
    </legend>

    <div class="radio-button-group__content">
        <div class="radio-button">
            <input
                type="radio"
                id="arbetat-senaste-7-dagar-ja"
                name="arbetat-senaste-7-dagar"
                class="radio-button__input"
                value="true"
            />
            <label for="arbetat-senaste-7-dagar-ja" class="radio-button__label">
                Ja
            </label>
        </div>
        <div class="radio-button">
            <input
                type="radio"
                id="arbetat-senaste-7-dagar-nej"
                name="arbetat-senaste-7-dagar"
                class="radio-button__input"
                value="false"
            />
            <label
                for="arbetat-senaste-7-dagar-nej"
                class="radio-button__label"
            >
                Nej
            </label>
        </div>
    </div>
</fieldset>
```

### Radioknappar med indentering

```html
<fieldset id="arbetat-senaste-7-dagar-indentering" class="radio-button-group">
    <legend class="label radio-button-group__label">
        Har du arbetat de senaste 7 dagarna?
    </legend>

    <div class="radio-button-group__content">
        <div class="radio-button">
            <input
                type="radio"
                id="indentering-arbetat-senaste-7-dagar-ja"
                name="arbetat-senaste-7-dagar-indentering"
                class="radio-button__input"
                value="true"
            />
            <label
                for="indentering-arbetat-senaste-7-dagar-ja"
                class="radio-button__label"
            >
                Ja
            </label>
        </div>
        <fieldset
            id="fkui-vue-element-0001"
            class="radio-button-group radio-button-group__indent"
        >
            <legend class="label radio-button-group__label">
                Var dagarna sammanhängande?
                <span class="label__description">
                    Sammanhängande dagar innebär att du har jobbat 7 vardagar
                    utan någon ledighet, sjukdom eller föräldraledighet.
                </span>
            </legend>

            <div class="radio-button-group__content">
                <div class="radio-button">
                    <input
                        type="radio"
                        id="indentering-arbetat-sammanhangande-ja"
                        name="arbetat-sammanhangande"
                        class="radio-button__input"
                        value="true"
                    />
                    <label
                        for="indentering-arbetat-sammanhangande-ja"
                        class="radio-button__label"
                    >
                        Ja
                    </label>
                </div>
                <div class="radio-button">
                    <input
                        type="radio"
                        id="indentering-arbetat-sammanhangande-nej"
                        name="arbetat-sammanhangande"
                        class="radio-button__input"
                        value="false"
                    />
                    <label
                        for="indentering-arbetat-sammanhangande-nej"
                        class="radio-button__label"
                    >
                        Nej
                    </label>
                </div>
            </div>
        </fieldset>
        <div class="radio-button">
            <input
                type="radio"
                id="indentering-arbetat-senaste-7-dagar-nej"
                name="arbetat-senaste-7-dagar-indentering"
                class="radio-button__input"
                value="false"
            />
            <label
                for="indentering-arbetat-senaste-7-dagar-nej"
                class="radio-button__label"
            >
                Nej
            </label>
        </div>
    </div>
</fieldset>
```

### Radioknappar med hjälptext

```html
<fieldset id="barn-over-18-hjalptext" class="radio-button-group">
    <legend class="label radio-button-group__label">
        Bor det barn som har fyllt 18 år i bostaden?
        <span class="label__description"
            >Här svarar du på om du har ett eller flera barn som fyllt 18 i din
            bostad.</span
        >
    </legend>

    <div class="radio-button-group__content">
        <div class="radio-button">
            <input
                type="radio"
                id="barn-over-18-hjalptext-ja"
                name="barn-over-18-hjalptext"
                class="radio-button__input"
                value="true"
            />
            <label for="barn-over-18-hjalptext-ja" class="radio-button__label">
                Ja, det bor barn över 18 år där
            </label>
        </div>
        <div class="radio-button">
            <input
                type="radio"
                id="barn-over-18-hjalptext-nej"
                name="barn-over-18-hjalptext"
                class="radio-button__input"
                value="false"
            />
            <label for="barn-over-18-hjalptext-nej" class="radio-button__label">
                Nej, inga barn över 18 år bor där
            </label>
        </div>
    </div>
</fieldset>
```

### Radioknappar med tooltip

```html
<fieldset id="barn-over-18-tooltip" class="radio-button-group">
    <legend class="label sr-only">
        Bor det barn som har fyllt 18 år i bostaden?
    </legend>
    <div class="sr-separator">
        <div aria-hidden="true" class="tooltip-before">
            <div class="label tooltip-before__label radio-button-group__label">
                Bor det barn som har fyllt 18 år i bostaden?
            </div>
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
                        Läs mer om Bor det barn som har fyllt 18 år i bostaden?
                    </span>
                </button>
                <div style="height: auto;">
                    <div tabindex="-1" class="tooltip__content-wrapper">
                        <span
                            class="tooltip__arrow tooltip__arrow--animation"
                            style="left: 341.398px;"
                        ></span>
                        <div class="tooltip__content">
                            <div class="tooltip__body">
                                <div class="tooltip__header">
                                    Bor det barn som har fyllt 18 år i bostaden?
                                </div>
                                Här svarar du på om du har ett eller flera barn
                                som fyllt 18 i din bostad. Alla personer som
                                fyllt 18 idag (2020-05-20) eller tidigare på
                                året beräknas med i denna grupp.
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
    </div>

    <div class="radio-button-group__content">
        <div class="radio-button">
            <input
                type="radio"
                id="barn-over-18-tooltip-ja"
                name="barn-over-18-tooltip"
                class="radio-button__input"
                value="true"
            />
            <label for="barn-over-18-tooltip-ja" class="radio-button__label">
                Ja, det bor barn över 18 år där
            </label>
        </div>
        <div class="radio-button">
            <input
                type="radio"
                id="barn-over-18-tooltip-nej"
                name="barn-over-18-tooltip"
                class="radio-button__input"
                value="false"
            />
            <label for="barn-over-18-tooltip-nej" class="radio-button__label">
                Nej, inga barn över 18 år bor där
            </label>
        </div>
    </div>
</fieldset>
```

### Radioknappar med tooltip och hjälptext

```html
<fieldset id="barn-over-18-tooltip-hjalptext" class="radio-button-group">
    <legend class="label sr-only">
        Bor det barn som har fyllt 18 år i bostaden?
    </legend>
    <div class="sr-separator">
        <div aria-hidden="true" class="tooltip-before">
            <div class="label tooltip-before__label">
                Bor det barn som har fyllt 18 år i bostaden?
            </div>
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
                    <span class="sr-only"
                        >Läs mer om Bor det barn som har fyllt 18 år i
                        bostaden?</span
                    >
                </button>
                <div style="height: auto;">
                    <div tabindex="-1" class="tooltip__content-wrapper">
                        <span
                            class="tooltip__arrow tooltip__arrow--animation"
                            style="left: 341.398px;"
                        ></span>
                        <div class="tooltip__content">
                            <div class="tooltip__body">
                                <div class="tooltip__header">
                                    Bor det barn som har fyllt 18 år i bostaden?
                                </div>
                                Här svarar du på om du har ett eller flera barn
                                som fyllt 18 i din bostad. Alla personer som
                                fyllt 18 idag (2020-05-20) eller tidigare på
                                året beräknas med i denna grupp.
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
    </div>
    <div class="label radio-button-group__label">
        <span class="label__description"
            >Här svarar du på om du har ett eller flera barn som fyllt 18 i din
            bostad.</span
        >
    </div>
    <div class="radio-button-group__content">
        <div class="radio-button">
            <input
                type="radio"
                id="barn-over-18-tooltip-hjalptext-ja"
                name="barn-over-18-tooltip-hjalptext"
                class="radio-button__input"
                value="true"
            />
            <label
                for="barn-over-18-tooltip-hjalptext-ja"
                class="radio-button__label"
            >
                Ja, det bor barn över 18 år där
            </label>
        </div>
        <div class="radio-button">
            <input
                type="radio"
                id="barn-over-18-tooltip-hjalptext-nej"
                name="barn-over-18-tooltip-hjalptext"
                class="radio-button__input"
                value="false"
            />
            <label
                for="barn-over-18-tooltip-hjalptext-nej"
                class="radio-button__label"
            >
                Nej, inga barn över 18 år bor där
            </label>
        </div>
    </div>
</fieldset>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

Gruppering av radioknappar: ~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~

Radioknapp: ~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
