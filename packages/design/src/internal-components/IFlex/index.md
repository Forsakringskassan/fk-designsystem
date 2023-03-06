---
title: IFlex
layout: component
status: Produktionsklar
---

CSS-klasser för enkel hantering av en horizontal flexbox.

## Exempel

### Text med ikon

```html
<div class="iflex iflex--gap-1x">
    <div class="iflex__item iflex--shrink">
        <svg focusable="false" class="icon">
            <use xlink:href="#f-icon-pen"></use>
        </svg>
    </div>
    <div class="iflex__item iflex--grow">lorem ipsum dolor sit amet</div>
</div>
```

## Användning

```html raw
<div class="iflex">
    <div class="iflex__item">..</div>
    <div class="iflex__item">..</div>
</div>
```

Klassen `iflex` läggs på en föräldern och `iflex__item` på barn.
`IFlex` tar upp 100% av förälderns bredd, använd grid eller css för att begränsa.

### Storlek

Standard är att celler tar upp lika stor yta var.

```html
<div class="iflex">
    <div class="iflex__item" style="background: #fef;">Kort innehåll (50%)</div>
    <div class="iflex__item" style="background: #ffe;">
        Långt innehåll (50%)<br />Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Duis scelerisque lacus sed mi mollis pulvinar. Donec
        volutpat neque et iaculis pharetra. Integer placerat massa non libero
        fermentum ornare.
    </div>
</div>
```

```html
<div class="iflex">
    <div class="iflex__item" style="background: #fef;">Kort innehåll (33%)</div>
    <div class="iflex__item" style="background: #ffe;">
        Långt innehåll (33%)<br />Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Duis scelerisque lacus sed mi mollis pulvinar. Donec
        volutpat neque et iaculis pharetra. Integer placerat massa non libero
        fermentum ornare.
    </div>
    <div class="iflex__item" style="background: #eff;">Kort innehåll (33%)</div>
</div>
```

Med klasserna `iflex--grow` och `iflex--shrink` kommer cellerna växa och krympa respektive.

```diff raw
 <div class="iflex">
-    <div class="iflex__item">Kort innehåll (50%)</div>
+    <div class="iflex__item iflex--shrink">Kort innehåll (shrink)</div>
 </div>
```

```html
<div class="iflex iflex--gap-1x">
    <div class="iflex__item iflex--shrink" style="background: #fef;">
        Kort innehåll (shrink)
    </div>
    <div class="iflex__item iflex--grow" style="background: #ffe;">
        Långt innehåll (grow)<br />Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Duis scelerisque lacus sed mi mollis pulvinar. Donec
        volutpat neque et iaculis pharetra. Integer placerat massa non libero
        fermentum ornare.
    </div>
</div>
```

| Klass           | Beskrivning                       |
| --------------- | --------------------------------- |
| `iflex--shrink` | Tar upp så lite yta som möjligt   |
| `iflex--grow`   | Tar upp så mycket yta som möjligt |

Används flera shrink eller grow fördelas storleken jämnt mellan dem.

### Gap (gutter)

Som standard placeras celler direkt bredvid varandra.
Vill man ha mellanrum kan man använda `iflex--gap-*` på container elementet:

```diff raw
-<div class="iflex">
+<div class="iflex iflex--gap-3x">
     <div class="iflex__item>..</div>
     <div class="iflex__item>..</div>
 </div>
```

```html
<div class="iflex iflex--gap-3x">
    <div class="iflex__item iflex--shrink" style="background: #fef;">
        <svg focusable="false" class="icon">
            <use xlink:href="#f-icon-pen"></use>
        </svg>
    </div>
    <div class="iflex__item iflex--grow" style="background: #ffe;">
        lorem ipsum dolor sit amet
    </div>
</div>
```

Storlekarna som finns tillgängliga är:

| Klass           | Värde (rem) |
| --------------- | ----------- |
| `iflex--gap-1x` | 0.25        |
| `iflex--gap-2x` | 0.50        |
| `iflex--gap-3x` | 0.75        |
| `iflex--gap-4x` | 1.00        |
| `iflex--gap-5x` | 1.25        |
| `iflex--gap-6x` | 1.50        |
| `iflex--gap-7x` | 1.75        |
| `iflex--gap-8x` | 2.00        |

### Vertikal positionering

Som standard positioneras innehållet vertikalt i toppen.
Varje element kan individuellt positioneras i toppen, mitten eller botten med `iflex--align-*`.

```diff raw
<div class="iflex">
-    <div class="iflex__item"></div>
+    <div class="iflex__item iflex--align-center"></div>
</div>
```

```html
<div class="iflex" style="height: 5em">
    <div class="iflex__item iflex--align-top" style="background: #fef;">
        <div>Top</div>
    </div>
    <div class="iflex__item iflex--align-center" style="background: #ffe;">
        <div>Center</div>
    </div>
    <div class="iflex__item iflex--align-bottom" style="background: #eff;">
        <div>Bottom</div>
    </div>
</div>
```

| Klass                 | Beskrivning                                     |
| --------------------- | ----------------------------------------------- |
| `iflex--align-top`    | Innehållet i cellen lägger sig toppen (default) |
| `iflex--align-center` | Innehållet i cellen lägger centrerat vertikalt  |
| `iflex--align-bottom` | Innehållet i cellen lägger sig botten           |

### Kollapsa i mobilläge

Genom att lägga till klassen `iflex--collapse` så kommer element ta upp full skärmbredd och läggas under varandra vid brytpunkten `small` (Brytpunkt small motsvarar mobilt läge).

```html
<div class="iflex iflex--collapse">
    <div class="iflex__item" style="background: #fef;">Kort innehåll (50%)</div>
    <div class="iflex__item" style="background: #ffe;">
        Långt innehåll (50%)<br />Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Duis scelerisque lacus sed mi mollis pulvinar. Donec
        volutpat neque et iaculis pharetra. Integer placerat massa non libero
        fermentum ornare.
    </div>
</div>
```

### Do's and don'ts

::: Do's

```html raw
<div class="iflex">
    <div class="iflex__item">
        <h2>Lorem ipsum</h2>
    </div>
</div>
```

```html raw
<div class="iflex">
    <div class="iflex__item">
        <div class="row">...</div>
    </div>
</div>
```

:::

::: Don'ts

Använd inte klasserna direkt på andra element:

```html raw
<div class="iflex">
    <h2 class="iflex__item">Lorem ipsum</h2>
</div>
```

Kombinera inte med andra klasser (som kan störa ut css):

```html raw
<div class="iflex">
    <div class="iflex__item row">...</div>
</div>
```

:::

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
