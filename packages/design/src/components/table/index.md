---
title: Tabell
layout: component
status: Produktionsklar
---

**Formulär motsvarar följande HTML element:** [table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

## Användning

Sätt `table` klassen på ett `<table>` element.
Använd också `table--striped` om bakgrundsfärgen på rader ska alternera.

```html raw
<table class="table">
    ...
</table>
```

Lägg kolumnrubriker i `<thead>` och datarader i `<tbody>`.
`<caption>` elementet kan användas för att beskriva tabellens innehåll.

```html raw
<table class="table">
    <caption>
        My table
    </caption>
    <thead>
        ...
    </thead>
    <tbody>
        ...
    </tbody>
</table>
```

Använd `<tr class="table__row">` för att skapa rader.

Använd `<th class="table__column">` för rubriker och `<td class="table__column">` för data.
Glöm inte att märka upp `<th>` element med [`scope`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope) attributet.

Tumregel:

-   Kolumnrubrik (`<th>` i `<thead>`) använder `scope="col"`.
-   Radrubriker (`<th>` i `<tbody>`) använder `scope="row"`.

### Kolumnbredd

Tabeller är alltid minst 100% breda.
Kolumners bredd styrs genom att på `<col>` elementen bestämma vilka kolumner som ska expandera och krympa.
En kolumn som expanderar tar upp så mycket yta den kan och en som krymper tar upp så lite yta den kan.
Fördelningen sinsemellan är webläsardefinierad.
Rubriken på en expanderbar kolumn kan brytas i flera rader om den inte får plats, medan en som krymper alltid behåller sin rubrik intakt.

```html raw
<colgroup>
    <col class="table__column--expand" />
    <col class="table__column--shrink" />
</colgroup>
```

## Exempel

### Tabell som presenterar

```html
<table class="table">
    <colgroup>
        <col class="table__column--expand" />
        <col class="table__column--expand" />
        <col class="table__column--shrink" />
        <col class="table__column--shrink" />
    </colgroup>
    <thead>
        <tr class="table__row">
            <th scope="col" class="table__column table__column--date">From</th>
            <th scope="col" class="table__column table__column--date">Tom</th>
            <th scope="col" class="table__column table__column--numeric">
                Brutto
            </th>
            <th scope="col" class="table__column table__column--numeric">
                Skatt
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="table__row">
            <td class="table__column table__column--date">2019-01-01</td>
            <td class="table__column table__column--date">2020-05-02</td>
            <td class="table__column table__column--numeric">10 000</td>
            <td class="table__column table__column--numeric">2 000</td>
        </tr>
        <tr class="table__row">
            <td class="table__column table__column--date">2019-01-01</td>
            <td class="table__column table__column--date">2020-05-02</td>
            <td class="table__column table__column--numeric">10 000</td>
            <td class="table__column table__column--numeric">2 000</td>
        </tr>
        <tr class="table__row">
            <td class="table__column table__column--date">2019-01-01</td>
            <td class="table__column table__column--date">2020-05-02</td>
            <td class="table__column table__column--numeric">10 000</td>
            <td class="table__column table__column--numeric">2 000</td>
        </tr>
    </tbody>
</table>
```

### Tabell med ränder och hover

Använd CSS-klassen `table--striped` och/eller `table--hover` för att variera radens bakgrundsfärg samt byta bakgrundsfärg vid hover.

```html
<table class="table table--striped table--hover">
    <colgroup>
        <col class="table__column--expand" />
        <col class="table__column--expand" />
        <col class="table__column--shrink" />
        <col class="table__column--shrink" />
    </colgroup>
    <thead>
        <tr class="table__row">
            <th scope="col" class="table__column table__column--date">From</th>
            <th scope="col" class="table__column table__column--date">Tom</th>
            <th scope="col" class="table__column table__column--numeric">
                Brutto
            </th>
            <th scope="col" class="table__column table__column--numeric">
                Skatt
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="table__row">
            <td class="table__column table__column--date">2019-01-01</td>
            <td class="table__column table__column--date">2020-05-02</td>
            <td class="table__column table__column--numeric">10 000</td>
            <td class="table__column table__column--numeric">2 000</td>
        </tr>
        <tr class="table__row">
            <td class="table__column table__column--date">2019-01-01</td>
            <td class="table__column table__column--date">2020-05-02</td>
            <td class="table__column table__column--numeric">10 000</td>
            <td class="table__column table__column--numeric">2 000</td>
        </tr>
        <tr class="table__row">
            <td class="table__column table__column--date">2019-01-01</td>
            <td class="table__column table__column--date">2020-05-02</td>
            <td class="table__column table__column--numeric">10 000</td>
            <td class="table__column table__column--numeric">2 000</td>
        </tr>
        <tr class="table__row">
            <td class="table__column table__column--date">2019-01-01</td>
            <td class="table__column table__column--date">2020-05-02</td>
            <td class="table__column table__column--numeric">10 000</td>
            <td class="table__column table__column--numeric">2 000</td>
        </tr>
    </tbody>
</table>
```

### Tillstånd

```html
<table class="table">
    <colgroup>
        <col class="table__column--shrink" />
        <col class="table__column--shrink" />
        <col class="table__column--expand" />
        <col class="table__column--shrink" />
    </colgroup>
    <thead>
        <tr class="table__row">
            <th scope="col" class="table__column table__column--text">
                Tillstånd
            </th>
            <th scope="col" class="table__column table__column--text">CSS</th>
            <th scope="col" class="table__column table__column--text">
                Beskrivning
            </th>
            <th scope="col" class="table__column table__column--numeric">
                Prioritering
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="table__row">
            <th scope="row" class="table__column table__column--text">
                Normal
            </th>
            <td class="table__column table__column--text">
                Default, <code>table__row--normal</code>
            </td>
            <td class="table__column table__column--text">Normalt utseende</td>
            <td class="table__column table__column--numeric">7</td>
        </tr>
        <tr class="table__row--striped">
            <th scope="row" class="table__column table__column--text">
                Randig
            </th>
            <td class="table__column table__column--text">
                <code>:nth-child(even)</code>, <code>table__row--striped</code>
            </td>
            <td class="table__column table__column--text">
                Normalt utseende, jämna rader
            </td>
            <td class="table__column table__column--numeric">6</td>
        </tr>
        <tr class="table__row--hover">
            <th scope="row" class="table__column table__column--text">Hover</th>
            <td class="table__column table__column--text">
                <code>:hover</code>, <code>table__row--hover</code>
            </td>
            <td class="table__column table__column--text">
                Utseende vid hover över rad
            </td>
            <td class="table__column table__column--numeric">5</td>
        </tr>
        <tr class="table__row--focus">
            <th scope="row" class="table__column table__column--text">Fokus</th>
            <td class="table__column table__column--text">
                <code>:focus</code>, <code>table__row--focus</code>
            </td>
            <td class="table__column table__column--text">
                Utseende vid focus på hel rad
            </td>
            <td class="table__column table__column--numeric">4</td>
        </tr>
        <tr class="table__row--focus-within">
            <th scope="row" class="table__column table__column--text">
                Fokus (within)
            </th>
            <td class="table__column table__column--text">
                <code>:focus</code>, <code>table__row--focus-within</code>
            </td>
            <td class="table__column table__column--text">
                Utseende vid focus på innehåll i rad
            </td>
            <td class="table__column table__column--numeric">3</td>
        </tr>
        <tr class="table__row--selected">
            <th scope="row" class="table__column table__column--text">Vald</th>
            <td class="table__column table__column--text">
                <code>table__row--selected</code>
            </td>
            <td class="table__column table__column--text">
                Rad vars kryssruta är markerad
            </td>
            <td class="table__column table__column--numeric">2</td>
        </tr>
        <tr class="table__row--active">
            <th scope="row" class="table__column table__column--text">Aktiv</th>
            <td class="table__column table__column--text">
                <code>table__row--active</code>
            </td>
            <td class="table__column table__column--text">
                Rad som användare klickat på för att aktivera
            </td>
            <td class="table__column table__column--numeric">1</td>
        </tr>
    </tbody>
</table>
```

### Tabell med inbygd scroll

Wrappa `<table>` elementet i en `<div class="table__scroll">`.
Använd CSS-klasserna `table_scroll--horizontal` respektive `table_scroll--vertical`.

```html
<div class="table__scroll table__scroll--horizontal">
    <table class="table">
        <colgroup>
            <col class="table__column--shrink" />
            <col class="table__column--shrink" />
            <col class="table__column--expand" />
            <col class="table__column--shrink" />
        </colgroup>
        <thead>
            <tr class="table__row">
                <th scope="col" class="table__column table__column--text">
                    Namn
                </th>
                <th scope="col" class="table__column table__column--numeric">
                    Telefon
                </th>
                <th scope="col" class="table__column table__column--text">
                    Beskrivning
                </th>
                <th scope="col" class="table__column table__column--text">
                    Rättigheter
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="table__row">
                <th scope="row" class="table__column table__column--text">
                    Fred Flintstone
                </th>
                <td class="table__column table__column--numeric">
                    070-1740605
                </td>
                <td class="table__column table__column--text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </td>
                <td class="table__column table__column--text">Skriv</td>
            </tr>
            <tr class="table__row">
                <th scope="row" class="table__column table__column--text">
                    Wilma Flintstone
                </th>
                <td class="table__column table__column--numeric">
                    070-1740612
                </td>
                <td class="table__column table__column--text">
                    Ut vel consectetur libero, quis placerat neque.
                </td>
                <td class="table__column table__column--text">Skriv</td>
            </tr>
            <tr class="table__row">
                <th scope="row" class="table__column table__column--text">
                    Barney Rubble
                </th>
                <td class="table__column table__column--numeric">
                    070-1740637
                </td>
                <td class="table__column table__column--text">
                    Nulla nec ipsum vel augue ultricies accumsan non sed lacus.
                </td>
                <td class="table__column table__column--text">Skriv</td>
            </tr>
            <tr class="table__row">
                <th scope="row" class="table__column table__column--text">
                    Betty Rubble
                </th>
                <td class="table__column table__column--numeric">
                    070-1740663
                </td>
                <td class="table__column table__column--text">
                    Fusce a pretium ipsum, at commodo tortor.
                </td>
                <td class="table__column table__column--text">Skriv</td>
            </tr>
        </tbody>
    </table>
</div>
```

### Tabell som kolumnbeskrivning

Använd CSS-klassen `table__column__description` på element i `<th>` för att beskriva kolumnen.

```html
<table class="table">
    <colgroup>
        <col class="table__column--expand" />
        <col class="table__column--shrink" />
        <col class="table__column--shrink" />
    </colgroup>
    <thead>
        <tr class="table__row">
            <th scope="col" class="table__column table__column--text">
                Förmån
            </th>
            <th scope="col" class="table__column table__column--numeric">
                Belopp
                <span class="table__column__description">(i kr)</span>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="table__row">
            <td class="table__column table__column--text">BOB</td>
            <td class="table__column table__column--numeric">1 928</td>
        </tr>
        <tr class="table__row">
            <td class="table__column table__column--text">SJP</td>
            <td class="table__column table__column--numeric">51 928</td>
        </tr>
        <tr class="table__row">
            <td class="table__column table__column--text">TFP</td>
            <td class="table__column table__column--numeric">1 928</td>
        </tr>
    </tbody>
</table>
```

### Tabell med caption

För tillgänglighet bör alla tabeller använda `<caption>` med en beskivande rubrik för tabellen.
Använd CSS-klassen `sr-only` för att dölja rubriken visuellt.

```html
<table class="table">
    <caption>
        Tabell över kända uppfinnare
    </caption>
    <colgroup>
        <col class="table__column--shrink" />
        <col class="table__column--expand" />
        <col class="table__column--shrink" />
    </colgroup>
    <thead>
        <tr class="table__row">
            <th scope="col" class="table__column table__column--text">Namn</th>
            <th scope="col" class="table__column table__column--text">
                Universum
            </th>
            <th scope="col" class="table__column table__column--numeric">
                Uppfinningar
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="table__row">
            <td class="table__column table__column--text">Oppfinnar-Jocke</td>
            <td class="table__column table__column--text">Kalle Anka</td>
            <td class="table__column table__column--numeric">1 928</td>
        </tr>
        <tr class="table__row">
            <td class="table__column table__column--text">Dr Snuggles</td>
            <td class="table__column table__column--text">Dr Snuggles</td>
            <td class="table__column table__column--numeric">1 928</td>
        </tr>
        <tr class="table__row">
            <td class="table__column table__column--text">
                Professor Farnsworth
            </td>
            <td class="table__column table__column--text">Futurama</td>
            <td class="table__column table__column--numeric">1 928</td>
        </tr>
        <tr class="table__row">
            <td class="table__column table__column--text">Lucius Fox</td>
            <td class="table__column table__column--text">DC</td>
            <td class="table__column table__column--numeric">1 928</td>
        </tr>
        <tr class="table__row">
            <td class="table__column table__column--text">MacGyver</td>
            <td class="table__column table__column--text">MacGyver</td>
            <td class="table__column table__column--numeric">1 928</td>
        </tr>
        <tr class="table__row">
            <td class="table__column table__column--text">Q</td>
            <td class="table__column table__column--text">James Bond</td>
            <td class="table__column table__column--numeric">1 928</td>
        </tr>
    </tbody>
</table>
```

### Kolumntyper

Följande kolumntyper kan användas för att beskriva cellens innehåll:

-   `text` - Ordinare text (default)
-   `date` - Datum
-   `numeric` - Numeriska värden.
-   `action` - Handlingar som kan utföras på raden (i.e. knappar)

```html
<table class="table">
    <colgroup>
        <col class="table__column--expand" />
        <col class="table__column--shrink" />
        <col class="table__column--shrink" />
        <col class="table__column--shrink" />
    </colgroup>
    <thead>
        <tr class="table__row">
            <th scope="col" class="table__column table__column--text">Text</th>
            <th scope="col" class="table__column table__column--date">Datum</th>
            <th scope="col" class="table__column table__column--numeric">
                Numeriskt
            </th>
            <th scope="col" class="table__column table__column--action">
                Handlingar
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="table__row">
            <td class="table__column table__column--text">Maya</td>
            <td class="table__column table__column--date">2012-12-23</td>
            <td class="table__column table__column--numeric">1 234 567</td>
            <td class="table__column table__column--action">
                <button type="button" class="button button--discrete">
                    ...
                </button>
            </td>
        </tr>
        <tr class="table__row">
            <td class="table__column table__column--text">Y2k36</td>
            <td class="table__column table__column--date">2036-02-07</td>
            <td class="table__column table__column--numeric">111 222 333</td>
            <td class="table__column table__column--action">
                <button type="button" class="button button--discrete">
                    ...
                </button>
            </td>
        </tr>
        <tr class="table__row">
            <td class="table__column table__column--text">Y2k38</td>
            <td class="table__column table__column--date">2038-01-19</td>
            <td class="table__column table__column--numeric">1 337</td>
            <td class="table__column table__column--action">
                <button type="button" class="button button--discrete">
                    ...
                </button>
            </td>
        </tr>
    </tbody>
</table>
```

### Valbara rader

Första kolumnen kan innehålla en kryssruta.
Applicera `table__input` klassen för styling.

```html
<div class="table__scroll table__scroll--horizontal">
    <table class="table table--striped table--hover">
        <colgroup>
            <col class="table__column--shrink" />
            <col class="table__column--expand" />
        </colgroup>
        <thead>
            <tr class="table__row">
                <th scope="col" class="table__column table__column--text">
                    Välj
                </th>
                <th scope="col" class="table__column table__column--text">
                    Aktivitet
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="table__row">
                <td class="table__column table__column--text">
                    <div class="checkbox table__input">
                        <input
                            type="checkbox"
                            class="checkbox__input"
                            id="checkbox-1-0"
                            name="checkbox-1-0"
                        />
                        <label for="checkbox-1-0" class="checkbox__label">
                            <span class="sr-only">Handla</span>
                        </label>
                    </div>
                </td>
                <td class="table__column table__column--text">Handla</td>
            </tr>
            <tr class="table__row">
                <td class="table__column table__column--text">
                    <div class="checkbox table__input">
                        <input
                            type="checkbox"
                            class="checkbox__input"
                            id="checkbox-1-1"
                            name="checkbox-1-1"
                        />
                        <label for="checkbox-1-1" class="checkbox__label">
                            <span class="sr-only">Handla</span>
                        </label>
                    </div>
                </td>
                <td class="table__column table__column--text">Städa</td>
            </tr>
            <tr class="table__row">
                <td class="table__column table__column--text">
                    <div class="checkbox table__input">
                        <input
                            type="checkbox"
                            class="checkbox__input"
                            id="checkbox-1-2"
                            name="checkbox-1-2"
                        />
                        <label for="checkbox-1-2" class="checkbox__label">
                            <span class="sr-only">Handla</span>
                        </label>
                    </div>
                </td>
                <td class="table__column table__column--text">Laga mat</td>
            </tr>
            <tr class="table__row">
                <td class="table__column table__column--text">
                    <div class="checkbox table__input">
                        <input
                            type="checkbox"
                            class="checkbox__input"
                            id="checkbox-1-3"
                            name="checkbox-1-3"
                        />
                        <label for="checkbox-1-3" class="checkbox__label">
                            <span class="sr-only">Handla</span>
                        </label>
                    </div>
                </td>
                <td class="table__column table__column--text">Göra läxor</td>
            </tr>
        </tbody>
    </table>
</div>
```

Kryssrutan kan också användas framför radrubrik:

```html
<div class="table__scroll table__scroll--horizontal">
    <table class="table table--striped table--hover">
        <colgroup>
            <col class="table__column--shrink" />
            <col class="table__column--shrink" />
            <col class="table__column--shrink" />
            <col class="table__column--expand" />
        </colgroup>
        <thead>
            <tr class="table__row">
                <th scope="col" class="table__column table__column--text">
                    Välj
                </th>
                <th scope="col" class="table__column table__column--text">
                    Aktivitet
                </th>
                <th scope="col" class="table__column table__column--numeric">
                    Internetpoäng
                </th>
                <th scope="col" class="table__column table__column--text">
                    Beskrivning
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="table__row">
                <td class="table__column table__column--text">
                    <div class="checkbox table__input">
                        <input
                            type="checkbox"
                            class="checkbox__input"
                            id="checkbox-2-0"
                            name="checkbox-2-0"
                        />
                        <label for="checkbox-2-0" class="checkbox__label">
                            <span class="sr-only">Handla</span>
                        </label>
                    </div>
                </td>
                <th scope="row" class="table__column table__column--text">
                    Handla
                </th>
                <td class="table__column table__column--numeric">9000</td>
                <td class="table__column table__column--text">
                    1kg mjöl, karamell, kålhuvud, makrill. Gaffeltruck.
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

Datatabell: ~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~

Interaktiv tabell: ~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~

Tabellkolumn: ~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
