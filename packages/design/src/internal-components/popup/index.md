---
title: IPopup
layout: component
status: Preliminär
---

## Användning

Popup-komponenten visas som overlay på desktop och som inline i mobil.
Popup har bara skuggning som layout. Konsumenten ansvarar för layout av innehållet och
för att hantera bredden i desktop och mobil, t. ex. 100% i mobilläge.
Konsumenten ansvarar även för funktioner för att öppna och stänga popupen.

```html raw
<div class="popup">
    <div class="popup__wrapper">
        <!-- Lägg innehåll här -->
    </div>
</div>
```

## Exempel

```html
<script>
    function togglePopup() {
        const elStyle = document.getElementById("example1").style;
        elStyle.display === "none"
            ? (elStyle.display = "block")
            : (elStyle.display = "none");
    }
</script>

<button type="button" onclick="togglePopup()">Öppna/stäng popup</button>
<div id="example1" class="popup" style="display: none;">
    <div class="popup__wrapper" style="left: 0px;">
        <div
            style="width: 304px; background: white; border: 1px dashed gray; padding: 20px"
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                scelerisque lacus sed mi mollis pulvinar. Donec volutpat neque
                et iaculis pharetra.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                scelerisque lacus sed mi mollis pulvinar. Donec volutpat neque
                et iaculis pharetra.
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
