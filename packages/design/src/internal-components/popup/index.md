---
title: IPopup
layout: component
status: Preliminär
---

En popup kommer visas overlay på desktop medans den kommer visas inline i mobil.

## Exempel

```html
<div class="popup">
    <div class="popup__wrapper" style="left: 0px;">
        <div
            style="margin: 0px; width: 304px; height: 272px; background: white; border: 1px dashed gray; padding: 20px"
        >
            <p>
                Popup-komponenten har bara skuggning som layout, konsumenten
                ansvara för layout av innnehållet.
            </p>
            <p>
                Konusumenten ansvara även för funktioner för att öppna och
                stänga popupen.
            </p>
            <p>
                Konusumenten ansvara även för att hantera bredden i desktop och
                mobil, t.ex. 100% in mobilläge.
            </p>
        </div>
    </div>
</div>
```

## Övrigt

### Länkar

~~Användargränssnitt - Designguide 2.0, Förvaltningsdokumentation och Figma komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
