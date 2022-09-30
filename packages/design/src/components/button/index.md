---
title: Knappar
layout: component
status: Produktionsklar
---

**Formulär motsvarar följande HTML element:** [knapp](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)

## Exempel

### Primärknapp

```html
<button class="button button--primary" type="button">Primärknapp</button>
```

### Sekundärknapp

```html
<button class="button button--secondary" type="button">Sekundärknapp</button>
```

### Standardknapp

```html
<button class="button button--standard" type="button">Standardknapp</button>
```

### Primärknapp med ikon

```html
<button class="button button--primary" type="button">
    <svg aria-hidden="true" class="icon button__icon" focusable="false">
        <use xlink:href="#f-icon-success" />
    </svg>
    <span>Primärknapp</span>
</button>
```

### Knapp växer om lång text

```html
<button class="button button--primary" type="button">
    Primärknapp med extra lång text
</button>
```

### Inaktiv

```html
<div class="button-group">
    <button
        class="button button--standard button-group__item"
        type="button"
        disabled
    >
        Standardknapp
    </button>
    <button
        class="button button--primary button-group__item"
        type="button"
        disabled
    >
        Primärknapp
    </button>
    <button
        class="button button--secondary button-group__item"
        type="button"
        disabled
    >
        Sekundärknapp
    </button>
    <button
        class="button button--discrete button-group__item"
        type="button"
        disabled
    >
        <svg aria-hidden="true" class="icon button__icon" focusable="false">
            <use xlink:href="#f-icon-close" /></svg
        ><span>Diskret knapp</span>
    </button>
</div>
```

### Primärknapp Fullberedskap (endast mobil)

```html
<div class="col col--md-6 example-dotted">
    <button class="button button--primary button--full-width" type="button">
        Fullberedskap
    </button>
</div>
```

### Diskret knapp

#### Diskret standard knapp

```html
<button class="button button--discrete" type="button">
    <svg aria-hidden="true" class="icon button__icon" focusable="false">
        <use xlink:href="#f-icon-paper-clip" /></svg
    ><span>Diskret standard</span>
</button>
```

#### Diskret svart knapp

```html
<button class="button button--discrete button--discrete--black" type="button">
    <svg aria-hidden="true" class="icon button__icon" focusable="false">
        <use xlink:href="#f-icon-paper-clip" /></svg
    ><span>Diskret svart</span>
</button>
```

#### Diskret inverterad knapp

```html
<div style="background-color: gray; padding: 20px">
    <button class="button button--discrete-inverted" type="button">
        <svg aria-hidden="true" class="icon button__icon" focusable="false">
            <use xlink:href="#f-icon-paper-clip" /></svg
        ><span>Diskret inverterad</span>
    </button>
</div>
```

#### Diskret knapp i `button-list`

```html
<ul style="list-style-type:none" class="button-list">
    <li>
        <button class="button button--discrete" type="button">
            <svg aria-hidden="true" class="icon button__icon" focusable="false">
                <use xlink:href="#f-icon-arrow-down" />
            </svg>
            <span>Knapp 1 i lista</span>
        </button>
    </li>
    <li>
        <button class="button button--discrete" type="button">
            <svg aria-hidden="true" class="icon button__icon" focusable="false">
                <use xlink:href="#f-icon-close" />
            </svg>
            <span>Knapp 2 i lista</span>
        </button>
    </li>
</ul>
```

#### Knapp i `button-group`

```html
<div class="button-group">
    <button class="button button-group__item button--primary" type="button">
        <svg aria-hidden="true" class="icon button__icon" focusable="false">
            <use xlink:href="#f-icon-success" /></svg
        ><span>Knapp 1 i grupp</span>
    </button>

    <button class="button button-group__item button--secondary" type="button">
        <svg aria-hidden="true" class="icon button__icon" focusable="false">
            <use xlink:href="#f-icon-error" /></svg
        ><span>Knapp 2 i grupp</span>
    </button>
</div>
```

#### Diskret knapp i `button-group`

```html
<div class="button-group">
    <button class="button button-group__item button--discrete" type="button">
        <svg aria-hidden="true" class="icon button__icon" focusable="false">
            <use xlink:href="#f-icon-success" /></svg
        ><span>Knapp 1 i grupp</span>
    </button>

    <button class="button button-group__item button--discrete" type="button">
        <svg aria-hidden="true" class="icon button__icon" focusable="false">
            <use xlink:href="#f-icon-error" /></svg
        ><span>Knapp 2 i grupp</span>
    </button>
</div>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~
