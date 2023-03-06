---
title: Grid
layout: default
status: Beta
---

Grid är byggt med hjälp av [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) och är inspirerad av ramverk som [Bootstrap](https://getbootstrap.com/docs/4.0/layout/grid/) och [Foundation](https://foundation.zurb.com/sites/docs/flex-grid.html).

Det finns fyra olika brytpunkter som kan konfigureras och styras. Varje brytpunkt har ett standardvärde för vilken skärmbredd den kommer att bryta på.

-   **sm**
    -   skärmbredd mellan 0 och 639 pixlar
-   **md**
    -   skärmbredd mellan 640 och 1023 pixlar
-   **lg**
    -   skärmbredd mellan 1024 och 1279 pixlar
-   **xl**
    -   skärmbredd från 1280 pixlar och uppåt

## Container

I många fall så är det rekommenderat att en container användas som rot element. Det finns två varianter av en container, `container` och `container-fluid`.

-   **container**
    -   denna styrs av en max bredd för respektive brytpunkt
-   **container-fluid**
    -   denna tar alltid upp hela skärmbredden

## Kolumn

### Storlek på kolumner i olika scenarion

Exempel på de olika brytpunkterna. För att aktivera de olika brytpunkterna så kan man minska bredden på webbläsarens fönster.

På varje rad (`row`) är det alltid möjligt att ha upp till 12 kolumner, däremot så baseras storleken på varje kolumn på dess förälders bredd.

I de angivna exempel nedan finns det två olika scenarion. Ett där föräldern tar upp hela bredden på 12 kolumner och ett exempel där föräldern tar 8 kolumner medan dess barn tar hela bredden på 12 kolumner inuti dess förälder.

#### Förälder med 12 kolumner

```html
<div class="container-fluid">
    <div class="row example-grid">
        <div class="col col--md-6">col--md-6</div>
        <div class="col col--md-6">col--md-6</div>
    </div>
    <div class="row example-grid">
        <div class="col col--md-3">col--md-3</div>
        <div class="col col--md-3">col--md-3</div>
        <div class="col col--md-3">col--md-3</div>
        <div class="col col--md-3">col--md-3</div>
    </div>
    <div class="row example-grid">
        <div class="col col--sm-4">col--sm-4</div>
        <div class="col col--sm-8">col--sm-8</div>
    </div>
    <div class="row example-grid">
        <div class="col col--lg-4">col--lg-4</div>
        <div class="col col--lg-8">col--lg-8</div>
    </div>
    <div class="row example-grid">
        <div class="col col--xl-4">col--xl-4</div>
        <div class="col col--xl-8">col--xl-8</div>
    </div>
</div>
```

#### Förälder med 8 kolumner

```html
<div class="container-fluid">
    <div class="row example-grid">
        <div class="col col--md-8">
            <div class="row">
                <div class="col col--md-6">col--md-6</div>
                <div class="col col--md-6">col--md-6</div>
            </div>
            <div class="row">
                <div class="col col--md-3">col--md-3</div>
                <div class="col col--md-3">col--md-3</div>
                <div class="col col--md-3">col--md-3</div>
                <div class="col col--md-3">col--md-3</div>
            </div>
        </div>
    </div>
</div>
```

## Placering

Grid stödjer dynamisk placering av kolumner både horisontellt och vertikalt.

### Horisontelt

```html
<div class="container-fluid">
    <div class="row example-grid">
        <div class="col col--sm-4">Till</div>
        <div class="col col--sm-4">Vänster</div>
    </div>
    <div class="row example-grid row--align-end">
        <div class="col col--sm-4">Till</div>
        <div class="col col--sm-4">Höger</div>
    </div>
    <div class="row example-grid row--align-center">
        <div class="col col--sm-4">I</div>
        <div class="col col--sm-4">Mitten</div>
    </div>
    <div class="row example-grid row--align-justify">
        <div class="col col--sm-4">I</div>
        <div class="col col--sm-4">Kanterna</div>
    </div>
    <div class="row example-grid row--align-spaced">
        <div class="col col--sm-4">Luft</div>
        <div class="col col--sm-4">Luft</div>
    </div>
</div>
```

### Vertikalt

```html
<div class="container-fluid">
    <div class="row example-grid row--align-top">
        <div class="col col--sm-4">Lite text.</div>
        <div class="col col--sm-4">
            Massa text. Massa text. Massa text. Massa text. Massa text. Massa
            text. Massa text. Massa text. Massa text. Massa text. Massa text.
            Massa text. Massa text. Massa text.
        </div>
    </div>
    <div class="row example-grid row--align-middle">
        <div class="col col--sm-4">Lite text.</div>
        <div class="col col--sm-4">
            Massa text. Massa text. Massa text. Massa text. Massa text. Massa
            text. Massa text. Massa text. Massa text. Massa text. Massa text.
            Massa text. Massa text. Massa text.
        </div>
    </div>
    <div class="row example-grid row--align-bottom">
        <div class="col col--sm-4">Lite text.</div>
        <div class="col col--sm-4">
            Massa text. Massa text. Massa text. Massa text. Massa text. Massa
            text. Massa text. Massa text. Massa text. Massa text. Massa text.
            Massa text. Massa text. Massa text.
        </div>
    </div>
</div>
```

#### Vertikal placering av kolumner

```html
<div class="container-fluid">
    <div class="row example-grid ">
        <div class="col col--md-3">
            Massa text. Massa text. Massa text. Massa text. Massa text. Massa
            text. Massa text. Massa text. Massa text. Massa text. Massa text.
            Massa text. Massa text. Massa text.
        </div>
        <div class="col col--md-3 col--align-top">Lite text.</div>
        <div class="col col--md-3 col--align-bottom">Lite text.</div>
        <div class="col col--md-3 col--align-middle">Lite text.</div>
    </div>
</div>
```

## Ordning av kolumner

<div class="message-box message-box--warning">
    <span class="message-box__icon">
        <svg focusable="false" class="icon">
            <use xlink:href="#f-icon-info"></use>
        </svg>
    </span>
    <h3 class="message-box__heading">Tänk på att...</h3>
    <p>om du via styling ändrar ordning på kolumner så kommer det inte påverka hur de läses upp av skärmläsare.</p>
</div>

#### Hjälpklasser för dynamisk ordning

Grid inkluderar flera hjälpklasser för dynamisk ordning, `col--order-$ORDNING` och `col--$BRYTPUNKT-order-$ORDNING` så att det är lättare att byta ordning på kolumner dynamiskt mellan olika brytpunkter.

```html
<div class="container-fluid">
    <div class="row example-grid">
        <div class="col col--md-6 col--order-2">1</div>
        <div class="col col--md-6 col--order-1">2</div>
    </div>
</div>
```

### Dynamisk ordning

Med hjälp av flexbox `order` så kan man skapa upp en helt dynamisk ordning på kolumnerna. Detta använder man i kombination
med media queries i SASS.

```
@include breakpoint-down(sm) {
    .example-col-1 {
        order: 2;
    }
}
```

```html
<div class="container-fluid">
    <div class="row example-grid">
        <div class="col col--md-4" style="order: 2;">1</div>
        <div class="col col--md-4" style="order: 3;">2</div>
        <div class="col col--md-4" style="order: 1;">3</div>
    </div>
</div>
```

```html
<div class="container-fluid">
    <div class="row example-grid">
        <div
            class="col col--md-3 col--md-order-1 col--sm-order-4 col--lg-order-1"
        >
            1
        </div>
        <div
            class="col col--md-3 col--md-order-2 col--sm-order-3 col--lg-order-3"
        >
            2
        </div>
        <div
            class="col col--md-3 col--md-order-3 col--sm-order-2 col--lg-order-2"
        >
            3
        </div>
        <div
            class="col col--md-3 col--md-order-4 col--sm-order-1 col--lg-order-4"
        >
            4
        </div>
    </div>
</div>
```
