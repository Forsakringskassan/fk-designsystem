---
title: Chip
layout: component
status: Preliminär
---

**Komponent motsvarar följande HTML element:** [fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset), [radio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)

## Exempel

### Chip utan ikon

```html
<fieldset class="radio-button-group--chip radio-button-group">
    <legend class="label radio-button-group__label">
        Bor det barn som har fyllt 18 år i bostaden?
    </legend>

    <div class="radio-button-group__content">
        <div class="radio-button radio-button--chip">
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
        <div class="radio-button radio-button--chip">
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

### Chip med ikon

```html
<fieldset class="radio-button-group--chip radio-button-group">
    <legend class="label radio-button-group__label">
        Filtrera ditt sökresultat
    </legend>

    <div class="radio-button-group__content">
        <div class="radio-button radio-button--chip">
            <input
                type="radio"
                id="filtrering-allt"
                name="huvudfacett"
                class="radio-button__input"
                value="Allt"
                checked
            />
            <label for="filtrering-allt" class="radio-button__label">
                Allt
            </label>
        </div>
        <div class="radio-button radio-button--chip">
            <input
                type="radio"
                id="filtrering-fia"
                name="huvudfacett"
                class="radio-button__input"
                value="Fia"
            />
            <label for="filtrering-fia" class="radio-button__label">
                Fia
            </label>
        </div>
        <div class="radio-button radio-button--chip">
            <input
                type="radio"
                id="filtrering-grupprum"
                name="huvudfacett"
                class="radio-button__input"
                value="Grupprum"
            />
            <label for="filtrering-grupprum" class="radio-button__label">
                Grupprum
            </label>
        </div>
        <div class="radio-button radio-button--chip">
            <input
                type="radio"
                id="filtrering-medarbetare"
                name="huvudfacett"
                class="radio-button__input"
                value="Medarbetare"
            />
            <label for="filtrering-medarbetare" class="radio-button__label">
                <svg focusable="false" class="icon f-social-icon-group">
                    <use xlink:href="#f-social-icon-group" />
                </svg>
                Medarbetare
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
