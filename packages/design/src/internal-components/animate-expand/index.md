---
title: IAnimateExpand
layout: component
status: Produktionsklar
---

## Exempel

```html
<script>
    function toggleAnimation() {
        const component = document.getElementById("example1");
        const contentElement = document.getElementById("example1_content");

        const isOpen = !component.classList.contains("animate-expand");

        if (isOpen) {
            component.style.height = `${
                contentElement.getBoundingClientRect().height
            }px`;
            component.classList.add("animate-expand");
            component.classList.add("animate-expand--expanded");

            setTimeout(() => {
                component.classList.remove("animate-expand--expanded");
                component.style.height = "0px";
            }, 0);
        } else {
            // Set maxHeight to same as content height
            component.style.height = `${
                contentElement.getBoundingClientRect().height
            }px`;
            component.classList.add("animate-expand");
            component.classList.add("animate-expand--expanded");
            setTimeout(() => {
                // Remove classes so the size can change
                // (e.g. containg other expandable components)
                component.classList.remove("animate-expand");
                component.classList.remove("animate-expand--expanded");
                component.style.height = "";
            }, 500);
        }
    }
</script>

<button type="button" onclick="toggleAnimation()">Animera öppna/stäng</button>
<div id="example1" class="animate-expand" style="height: 0px;">
    <div
        id="example1_content"
        style="height: 200px; background-color: hotpink; display: flex; justify-content: center; align-items: center;"
    >
        Ett expanderat innehåll
    </div>
</div>
```

## Användning

För att använda animerad expandering/kollapsning beräknar man innehållets höjd.
När panelen expanderas sätter man CSS `height` på `expandable-animate` till höjden samt nollställer vid kollapsning.
Man kan med fördel återställa höjden mellan animationer för att enklare hantera storleksförändring av innehåll.
I exemplet ovan finns det även stöd för att låta den öppnade panel växa ytterligare (t.ex. att det finns radioknappar som visar ytterligare fält), genom att klasserna `animate-expand`och `animate-expand--expanded` tas bort när öppningsanimationen är klar.

### Stängt läge

```html raw
<div class="animate-expand" style="height: 0px;">
    <div style="height: 200px; background-color: hotpink;">
        Ett expanderat innehåll som är stängt
    </div>
</div>
```

### Öppet läge

```html raw
<div class="animate-expand animate-expand--expanded" style="height: 200px;">
    <div style="height: 200px; background-color: hotpink;">
        Ett expanderat innehåll som är stängt
    </div>
</div>
```

### CSS klasser

-   `animate-expand` - Komponentens primära klass.
-   `animate-expand--expanded` - Används i kombination med `animate-expand` och kommer att visa innehållet via en animering .
-   `animate-expand--opacity` - Används i kombination med `animate-expand` och när man vill att animeringen tonar fram.

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
