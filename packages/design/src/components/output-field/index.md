---
title: Presentationsfält - dynamiskt/statiskt
layout: component
status: Preliminär
---

Texten kan antingen vara dynamisk eller statisk. Dynamisk innebär att innehållet som visas är resultatet av en beräkning eller användarens inmatning. Statisk innebär att innehållet är oberoende av användarens inmatning.

## Exempel

### Statisk text

För att presentera statisk text/innehåll som är oberoende av användarens inmatning kan man använda span och p wrappat i output-field.

```html
<div class="output-field">
    <span class="label">Fast text</span>
    <p class="output-field__output">
        En statisk text som inte beror på användarens inmatning.
    </p>
</div>
```

### Dynamisk text

För att presentera dynamiskt resultat som beror på användarens inmatning rekommenderas det att använda label och output wrappat i output-field.

```html
<div class="text-field">
    <label class="label" for="outputfieldinputvalue">
        Numeriskt värde + 10
    </label>
    <div class="text-field__icon-wrapper">
        <input
            class="text-field__input"
            id="outputfieldinputvalue"
            name="outputfieldinputvalue"
            type="text"
            oninput="outputfieldcalculatedvalue.value = parseInt(outputfieldinputvalue.value, 10) + 10"
            maxlength="20"
        />
    </div>
</div>

<div class="output-field">
    <label class="label" for="outputfieldcalculatedvalue"> Summa </label>
    <output
        class="output-field__output"
        id="outputfieldcalculatedvalue"
        name="outputfieldcalculatedvalue"
        for="outputfieldinputvalue"
    ></output>
</div>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

Dynamiskt: ~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~

Statiskt: ~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
