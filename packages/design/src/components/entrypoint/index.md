---
title: Startpunkt
layout: component
status: Produktionsklar
---

## Exempel

### Standardbeteende

Startpunkten tar upp 2/3 av tillgänglig yta i desktopläge och 100% i mobilläge

```html
<a class="entrypoint" href="javascript:">
    Ansök om hundbidrag<span class="sr-only"> Till e-tjänsten</span>
    <svg focusable="false" class="icon entrypoint__icon">
        <use xlink:href="#f-icon-arrow-right" />
    </svg>
</a>
```

### Fullbredd

Vill man styra bredden med hjälp av gridsystemet så används klassen `entrypoint--full-width`.

```html
<div class="col col--md-6 example-dotted">
    <a class="entrypoint entrypoint--full-width" href="javascript:">
        Ansök om hundbidrag<span class="sr-only"> Till e-tjänsten</span>
        <svg focusable="false" class="icon entrypoint__icon">
            <use xlink:href="#f-icon-arrow-right" />
        </svg>
    </a>
</div>

<div class="col col--md-6 example-dotted">
    <a class="entrypoint entrypoint--full-width" href="javascript:">
        Exempel med väldigt lång text som troligen kommer wrappa<span
            class="sr-only"
        >
            Till e-tjänsten</span
        >
        <svg focusable="false" class="icon entrypoint__icon">
            <use xlink:href="#f-icon-arrow-right" />
        </svg>
    </a>
</div>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~
