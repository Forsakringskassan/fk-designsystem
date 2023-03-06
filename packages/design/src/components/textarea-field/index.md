---
title: Flerradigt inmatningsfält
layout: component
status: Produktionsklar
---

**Komponent motsvarar följande HTML element:** [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

## Exempel

### Flerradigt inmatningsfält med rekommenderade attribut

```html
<div class="textarea-field">
    <label for="berattelse" class="label"> Berätta om dig själv </label>
    <div class="textarea-field__icon-wrapper">
        <textarea
            rows="4"
            id="berattelse"
            class="textarea-field__textarea"
        ></textarea>
    </div>
</div>
```

### Flerradigt inmatningsfält med giltigt värde

```html
<div
    class="textarea-field textarea-field--valid"
    data-test="valid-berattelse-text-field"
>
    <label for="giltig-berattelse" class="label"> Berätta om dig själv </label>
    <div class="textarea-field__icon-wrapper">
        <textarea
            rows="4"
            id="giltig-berattelse"
            class="textarea-field__textarea"
            data-required=""
            required
            aria-invalid="false"
        >
En inte allt för utförlig berättelse
        </textarea>
        <svg focusable="false" class="icon textarea-field__icon f-icon-success">
            <use xlink:href="#f-icon-success"></use>
        </svg>
    </div>
</div>
```

### Flerradigt inmatningsfält med ogiltigt värde

```html
<div
    class="textarea-field textarea-field--error"
    data-test="invalid-berattelse-text-field"
>
    <label for="ogiltig-berattelse" class="label">
        Maskinell beskrivning om dig själv
        <span class="label__message label__message--error"
            ><svg focusable="false" class="icon label__icon--left f-icon-error">
                <use xlink:href="#f-icon-error"></use>
            </svg>
            Du har fyllt i ett ogiltigt tecken. Fyll i siffror.</span
        ></label
    >
    <div class="textarea-field__icon-wrapper">
        <textarea
            rows="4"
            id="ogiltig-berattelse"
            class="textarea-field__textarea"
            aria-invalid="true"
        >
En inte allt för utförlig berättelse
        </textarea>
    </div>
</div>
```

### Flerradigt inmatningsfält med tooltip och begränsad längd

```html
<div class="textarea-field" data-test="berattelse-text-field">
    <div>
        <div class="tooltip-before">
            <label for="berattelse-tooltip" class="label tooltip-before__label">
                Berätta om dig själv
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
                        Läs mer om berätta om dig själv
                    </span>
                </button>
                <div style="height: auto;">
                    <div tabindex="-1" class="tooltip__content-wrapper">
                        <span
                            class="tooltip__arrow tooltip__arrow--animation"
                            style="left: 166.398px;"
                        ></span>
                        <div class="tooltip__content">
                            <div class="tooltip__body">
                                <div class="tooltip__header">
                                    Mer om berätta om dig själv
                                </div>
                                Denna berättelsen kräver lite närmare
                                förklaring.
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
        <label for="berattelse-tooltip" class="label sr-separator"
            ><span class="label__description"
                >En inte allt för utförlig berättelse</span
            >
            <span class="label__description label__description--discrete"
                >(max 100 tecken)</span
            >
        </label>
    </div>
    <div class="textarea-field__icon-wrapper">
        <textarea
            rows="4"
            id="berattelse-tooltip"
            maxlength="100"
            class="textarea-field__textarea"
        ></textarea>
    </div>
</div>
```

### Flerradigt inmatningsfält med inaktivt tillstånd/läge

```html
<div class="textarea-field">
    <label for="berattelse-inaktivt" class="label">
        Berätta om dig själv
    </label>
    <div class="textarea-field__icon-wrapper">
        <textarea
            rows="4"
            id="berattelse-inaktivt"
            class="textarea-field__textarea"
            disabled
        ></textarea>
    </div>
</div>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
