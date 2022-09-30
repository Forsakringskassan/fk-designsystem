---
title: Länk
layout: component
status: Produktionsklar
---

**Länk motsvarar följande HTML element:** [a](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

Vissa egenskaper på strecket under länken appliceras inte i Internet Explorer 11, t ex tjocklek och avstånd.

## Exempel

### Länk (fristående)

Vid fokus hamnar ramen runt hela länken oavsett om den sträcker sig över flera rader.

```html
<a class="anchor anchor--block" href="javascript:">Fristående länk</a>
```

```html
<a class="anchor anchor--block" href="javascript:"
    >Fristående länk på flera rader. Fristående länk på flera rader. Fristående
    länk på flera rader. Fristående länk på flera rader.
</a>
```

### Extern länk (fristående)

```html
<a class="anchor anchor--block" href="javascript:">
    Extern länk
    <svg focusable="false" class="icon">
        <use xlink:href="#f-icon-new-window"></use>
    </svg>
</a>
```

### Länk med ikon (fristående)

I exemplet används en stackad ikon, men det går lika bra att använda en vanlig ikon.

```html
<a class="anchor anchor--block" href="javascript:">
    <div class="icon-stack icon-stack--new-window">
        <svg focusable="false" class="icon f-icon-new-window">
            <use xlink:href="#f-icon-new-window"></use>
        </svg>
        <svg focusable="false" class="icon f-icon-doc">
            <use xlink:href="#f-icon-doc"></use>
        </svg>
    </div>
    Fristående länk med ikon
</a>
```

```html
<a class="anchor anchor--block" href="javascript:">
    <div class="icon-stack icon-stack--new-window">
        <svg focusable="false" class="icon f-icon-new-window">
            <use xlink:href="#f-icon-new-window"></use>
        </svg>
        <svg focusable="false" class="icon f-icon-doc">
            <use xlink:href="#f-icon-doc"></use>
        </svg>
    </div>
    Fristående länk med ikon på flera rader. Fristående länk med ikon på flera
    rader. Fristående länk med ikon på flera rader.
</a>
```

### Diskret länk (fristående)

```html
<a class="anchor anchor--block anchor--discrete" href="javascript:"
    >Diskret länk</a
>
```

### Länk i löptext (ej fristående)

```html
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ligula felis,
facilisis at ante ac, semper porta ipsum. Nam quis condimentum nulla, vel
elementum purus. Sed tempor velit id posuere aliquet.<a
    class="anchor"
    href="javascript:"
    >Här är en länk på flera rader. Här är en länk på flera rader. Här är en
    länk på flera rader. Här är en länk på flera rader. Här är en länk på flera
    rader.
</a>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ligula felis,
facilisis at ante ac, semper porta ipsum. Nam quis condimentum nulla, vel
elementum purus. Sed tempor velit id posuere aliquet.
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~
