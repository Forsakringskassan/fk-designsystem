---
title: Datamängdredigerare
layout: component
status: Preliminär
---

Grafiska komponenter som används vid redigering av en datamängd.

## Exempel

### Lägg till-knappen placerad under presentationen av data

```html
<div class="crud-dataset">
    <div class="example-placeholder">
        Platshållare för lista/tabell eller egenutvecklad presentation av data
    </div>
    <div>
        <button
            type="button"
            class="button button--discrete crud-dataset__add-button"
            data-test="f-crud-dataset-add-button"
        >
            <svg focusable="false" class="icon button__icon f-icon-plus">
                <use xlink:href="#f-icon-plus"></use>
            </svg>
            Lägg till ny
        </button>
    </div>
</div>
```

### Ändra-knapp med både ikon och text

```html
<button type="button" class="button button--discrete">
    <svg focusable="false" class="icon button__icon f-icon-pen">
        <use xlink:href="#f-icon-pen"></use>
    </svg>
    Ändra
</button>
```

### Radera-knapp med både ikon och text

```html
<button type="button" class="button button--discrete">
    <svg focusable="false" class="icon button__icon f-icon-trashcan">
        <use xlink:href="#f-icon-trashcan"></use>
    </svg>
    Ta bort
</button>
```

### Modal för att lägga till en rad

```html
<div class="modal">
    <!-- Hide backdrop in demos. -->
    <!-- <div class="modal__backdrop"> -->
    <!-- <div tabindex="-1" class="modal__outer-container"> -->
    <div role="dialog" aria-modal="true" class="modal__inner-container">
        <div class="modal__dialog-container">
            <div class="modal__dialog">
                <div class="modal__dialog-inner">
                    <div class="modal__header">
                        <h1 tabindex="-1" class="modal__title">
                            Lägg till ny rad
                        </h1>
                    </div>
                    <div class="modal__content">
                        <div class="example-placeholder">
                            Platshållare för imatningsfält
                        </div>
                    </div>
                    <div class="modal__footer">
                        <div class="button-group">
                            <button
                                type="button"
                                class="button button--primary button-group__item"
                            >
                                Lägg till
                            </button>
                            <button
                                type="button"
                                class="button button--secondary button-group__item"
                            >
                                Avbryt
                            </button>
                        </div>
                    </div>
                </div>
                <div class="button-group button-group--end">
                    <button
                        type="button"
                        aria-label="Stäng"
                        class="button button--discrete button--discrete--black button-group__item"
                    >
                        <span>Stäng</span>
                        <svg
                            focusable="false"
                            class="icon button__icon f-icon-close"
                        >
                            <use xlink:href="#f-icon-close"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->
</div>
```

### Modal för att ändra en rad

```html
<div class="modal">
    <!-- Hide backdrop in demos. -->
    <!-- <div class="modal__backdrop"> -->
    <!-- <div tabindex="-1" class="modal__outer-container"> -->
    <div role="dialog" aria-modal="true" class="modal__inner-container">
        <div class="modal__dialog-container">
            <div class="modal__dialog">
                <div class="modal__dialog-inner">
                    <div class="modal__header">
                        <h1 tabindex="-1" class="modal__title">Ändra rad</h1>
                    </div>
                    <div class="modal__content">
                        <div class="example-placeholder">
                            Platshållare för imatningsfält
                        </div>
                    </div>
                    <div class="modal__footer">
                        <div class="button-group">
                            <button
                                type="button"
                                class="button button--primary button-group__item"
                            >
                                Spara
                            </button>
                            <button
                                type="button"
                                class="button button--secondary button-group__item"
                            >
                                Avbryt
                            </button>
                        </div>
                    </div>
                </div>
                <div class="button-group button-group--end">
                    <button
                        type="button"
                        aria-label="Stäng"
                        class="button button--discrete button--discrete--black button-group__item"
                    >
                        <span>Stäng</span>
                        <svg
                            focusable="false"
                            class="icon button__icon f-icon-close"
                        >
                            <use xlink:href="#f-icon-close"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->
</div>
```

### Modal för att radera en rad

```html
<div class="modal modal--warning">
    <!-- Hide backdrop in demos. -->
    <!-- <div class="modal__backdrop"> -->
    <!-- <div tabindex="-1" class="modal__outer-container"> -->
    <div role="dialog" aria-modal="true" class="modal__inner-container">
        <div class="modal__dialog-container">
            <div class="modal__dialog">
                <div class="modal__dialog-inner">
                    <div class="modal__header">
                        <span
                            class="modal__title-icon icon-stack icon-stack--warning"
                        >
                            <svg focusable="false" class="icon f-icon-circle">
                                <use xlink:href="#f-icon-circle"></use>
                            </svg>
                            <svg focusable="false" class="icon f-icon-alert">
                                <use xlink:href="#f-icon-alert"></use>
                            </svg>
                        </span>
                        <h1 tabindex="-1" class="modal__title">Ändra rad</h1>
                    </div>
                    <div class="modal__content">
                        <div class="example-placeholder">
                            Platshållare för varningsmeddelande innan borttag
                        </div>
                    </div>
                    <div class="modal__footer">
                        <div class="button-group">
                            <button
                                type="button"
                                class="button button--primary button-group__item"
                            >
                                Ja, ta bort
                            </button>
                            <button
                                type="button"
                                class="button button--secondary button-group__item"
                            >
                                Nej, avbryt
                            </button>
                        </div>
                    </div>
                </div>
                <div class="button-group button-group--end">
                    <button
                        type="button"
                        aria-label="Stäng"
                        class="button button--discrete button--discrete--black button-group__item"
                    >
                        <span>Stäng</span>
                        <svg
                            focusable="false"
                            class="icon button__icon f-icon-close"
                        >
                            <use xlink:href="#f-icon-close"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->
</div>
```

## Övrigt

### Länkar

~~Användargränssnitt - Designguide 2.0, Förvaltningsdokumentation och Figma komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
