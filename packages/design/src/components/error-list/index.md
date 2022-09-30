---
title: Fellista
layout: component
status: Produktionsklar
---

## Exempel

### Fellista med punkter

```html
<nav>
    <div class="error-list">
        <ul
            class="error-list__list error-list--list-style-none error-list--padding-left "
        >
            <li>
                <a href="javascript:"
                    ><span class="error-list__bullet" aria-hidden="true"></span
                    ><span class="error-list__link">Förnamn</span></a
                >
            </li>
            <li>
                <a href="javascript:"
                    ><span class="error-list__bullet" aria-hidden="true"></span
                    ><span class="error-list__link">Personnummer</span></a
                >
            </li>
        </ul>
    </div>
</nav>
```

### Fellista utan punkter

```html
<nav>
    <div class="error-list">
        <ul class="error-list__list error-list--list-style-none">
            <li class="error-list__link">
                <a href="javascript:">Förnamn</a>
            </li>
            <li class="error-list__link">
                <a href="javascript:">Personnummer</a>
            </li>
        </ul>
    </div>
</nav>
```

### Fellista utan klickbara länkar

```html
<nav>
    <div class="error-list">
        <ul
            class="error-list__list error-list--list-style-none error-list--padding-left "
        >
            <li>
                <span class="error-list__bullet" aria-hidden="true"></span>
                <span>Förnamn</span>
            </li>
            <li>
                <span class="error-list__bullet" aria-hidden="true"></span>
                <span>Personnummer</span>
            </li>
        </ul>
    </div>
</nav>
```

## Övrigt

Fellista används aldrig självständigt utan används alltid tillsammans med en eller flera komponent. Fellista används i [Formulär/Formulärsteg](../form/) och [Guide/Guidesteg](../wizard/).

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
