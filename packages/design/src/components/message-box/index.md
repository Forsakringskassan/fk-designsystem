---
title: Meddelanderuta
layout: component
status: Produktionsklar
---

## Exempel

### Infomeddelande

```html
<div class="message-box message-box--info">
    <span class="message-box__icon">
        <span class="icon-stack icon-stack--info">
            <svg focusable="false" class="icon f-icon-circle">
                <use xlink:href="#f-icon-circle"></use>
            </svg>
            <svg focusable="false" class="icon f-icon-i">
                <use xlink:href="#f-icon-i"></use>
            </svg>
        </span>
    </span>
    <h3 class="message-box__heading">Innan du sätter igång</h3>
    <p>Brödtext</p>
    <p class="h-no-margin">För att fylla i ansökan behöver du ha...</p>
</div>
```

### Felmeddelande

```html
<div class="message-box message-box--error">
    <span class="message-box__icon">
        <span class="icon-stack icon-stack--error">
            <svg focusable="false" class="icon f-icon-triangle">
                <use xlink:href="#f-icon-triangle"></use>
            </svg>
            <svg focusable="false" class="icon f-icon-alert">
                <use xlink:href="#f-icon-alert"></use>
            </svg>
        </span>
    </span>
    <h3 class="message-box__heading">Det gick inte att signera</h3>
    <p>
        Detta beror på att du har förlorat din internetuppkoppling. Se till att
        du har uppkoppling och försök att signera igen.
    </p>
</div>
```

### Varningsmeddelande

```html
<div class="message-box message-box--warning">
    <span class="message-box__icon">
        <span class="icon-stack icon-stack--warning">
            <svg focusable="false" class="icon f-icon-circle">
                <use xlink:href="#f-icon-circle"></use>
            </svg>
            <svg focusable="false" class="icon icon__exclamation f-icon-alert">
                <use xlink:href="#f-icon-alert"></use>
            </svg>
        </span>
    </span>
    <h3 class="message-box__heading">Tänk på att...</h3>
    <p>Den andra föräldern behöver avstå dagar för att...</p>
</div>
```

### Bekräftelse

```html
<div class="message-box message-box--success">
    <span class="message-box__icon">
        <svg focusable="false" class="icon icon__success">
            <use xlink:href="#f-icon-success"></use>
        </svg>
    </span>
    <h3 class="message-box__heading">Ansökan mottagen</h3>
    <p>
        Din ansökan är nu mottagen av Försäkringskassan. Ansökan kommer att...
    </p>
</div>
```

### Banner

```html
<div class="sticky sticky--top">
    <div class="message-box message-box--error message-box--banner">
        <span class="message-box__icon message-box__icon__banner">
            <span class="icon-stack">
                <svg focusable="false" class="icon icon__banner">
                    <use xlink:href="#f-icon-triangle"></use>
                </svg>
                <svg focusable="false" class="icon">
                    <use xlink:href="#f-icon-alert"></use>
                </svg>
            </span>
        </span>
        <p>
            Du har förlorat din internetuppkoppling. Se till att du har
            uppkoppling och försök att signera igen.
        </p>
    </div>
</div>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
