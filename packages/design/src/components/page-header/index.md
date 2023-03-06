---
title: Sidhuvud
layout: component
status: Preliminär
---

Notera vid responsivt sidhuvud att loggan presenteras i litet utförande när skärmbredd är mindre än brytpunkten `sm`, och i annat fall i stort utförande.

Standard skärmbredd för `sm` är 640px.

## Exempel

### Responsivt sidhuvud, växlar mellan stor och liten logotyp

```html
<div class="page-header__root">
    <div class="page-header">
        <div class="page-header__logo">
            <span
                aria-label="Försäkringskassan"
                role="img"
                class="page-header__logo--responsive"
            >
            </span>
        </div>
        <span class="page-header__app-name">Exempelapplikation</span>
        <div class="page-header__right">
            <div class="page-header__right-slot">Namn Namnsson</div>
        </div>
    </div>
</div>
```

### Fixerad stor logotyp

```html
<div class="page-header__root">
    <div class="page-header">
        <div class="page-header__logo">
            <span
                aria-label="Försäkringskassan"
                role="img"
                class="page-header__logo--large"
            >
            </span>
        </div>
        <span class="page-header__app-name">Exempelapplikation</span>
        <div class="page-header__right">
            <div class="page-header__right-slot">Namn Namnsson</div>
        </div>
    </div>
</div>
```

### Fixerad liten logotyp

```html
<div class="page-header__root">
    <div class="page-header">
        <div class="page-header__logo">
            <span
                aria-label="Försäkringskassan"
                role="img"
                class="page-header__logo--small"
            >
            </span>
        </div>
        <span class="page-header__app-name">Exempelapplikation</span>
        <div class="page-header__right">
            <div class="page-header__right-slot">Namn Namnsson</div>
        </div>
    </div>
</div>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
