---
title: Förloppsindikator
layout: component
status: Preliminär
---

Förloppsindikatorn finns i olika tillstånd som visualiserar och kommunicerar status. Den visar status för hur mycket av en process som är genomförd.

## Exempel

### Tom

```html
<div class="progress">
    <span
        class="progress__meter"
        style="width: 0%;"
        role="progressbar"
        aria-valuemax="100"
        aria-valuemin="0"
        aria-valuenow="0"
        aria-valuetext="Du har slutfört 0%"
    >
        <span class="sr-only">Du har slutfört 0%</span>
    </span>
</div>
```

### Pågående

Om förloppsindikatorn har en parameter som är mer än 0 men mindre än 100, visar förloppsindikatorn gult och en uppskattad procentsats.

```html
<div class="progress">
    <span
        class="progress__meter progress__meter--inprogress"
        style="width: 70%;"
        role="progressbar"
        aria-valuemax="100"
        aria-valuemin="0"
        aria-valuenow="70"
        aria-valuetext="Du har slutfört 70%"
    >
        <span class="sr-only">Du har slutfört 70%</span>
    </span>
</div>
```

### Färdig

Om förloppsindikatorn har en parameter som är 100% så visar förloppsindikatorn grönt.

```html
<div class="progress">
    <span
        class="progress__meter progress__meter--finished"
        role="progressbar"
        aria-valuemax="100"
        aria-valuemin="0"
        aria-valuenow="100"
        aria-valuetext="Du har slutfört 100%"
    >
        <span class="sr-only">Du har slutfört 100%</span>
    </span>
</div>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
