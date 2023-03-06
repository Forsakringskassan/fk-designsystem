---
title: Datumväljare
layout: component
status: Produktionsklar
---

## Exempel

### Övergripande struktur

1. Lägg in ett textfält med en knapp
2. Wrappa kalender i en popup.

Läs mer om knapp med ikon på [textfält komponenten](../text-field/)

```
<div class="text-field">
    <!-- textfield -->
</div>

<div class="popup__wrapper">
    <div class="datepicker-field__popup">
        <!-- calendar navbar -->
        <!-- calendar table -->
        <!-- calendar close button -->
    </div>
</div>
```

### Navbar

```html
<div class="calendar-navbar">
    <div tabindex="-1" class="calendar-navbar__month">november 2022</div>
    <button
        type="button"
        aria-live="off"
        class="calendar-navbar__arrow calendar-navbar__arrow--previous"
    >
        <span class="sr-only"> Förra månaden oktober 2022 </span>
        <svg
            focusable="false"
            class="icon f-icon-arrow-right calendar-navbar__icon"
        >
            <use xlink:href="#f-icon-arrow-right"></use>
        </svg>
    </button>
    <button
        type="button"
        aria-live="off"
        class="calendar-navbar__arrow calendar-navbar__arrow--next"
    >
        <span class="sr-only">Nästa månad december 2022</span>
        <svg
            focusable="false"
            class="icon f-icon-arrow-right calendar-navbar__icon"
        >
            <use xlink:href="#f-icon-arrow-right"></use>
        </svg>
    </button>
</div>
```

### Tabell

```html
<table role="application" class="calendar-month__table">
    <colgroup>
        <col class="calendar-month__col--week" />
        <col class="calendar-month__col--day" />
        <col class="calendar-month__col--day" />
        <col class="calendar-month__col--day" />
        <col class="calendar-month__col--day" />
        <col class="calendar-month__col--day" />
        <col class="calendar-month__col--day" />
        <col class="calendar-month__col--day" />
    </colgroup>
    <thead role="presentation">
        <tr role="presentation">
            <th
                scope="col"
                aria-hidden="true"
                class="calendar-month__header-cell"
            ></th>
            <th
                scope="col"
                role="presentation"
                class="calendar-month__header-cell"
            >
                <abbr aria-hidden="true" title="måndag">måndag</abbr>
            </th>
            <th
                scope="col"
                role="presentation"
                class="calendar-month__header-cell"
            >
                <abbr aria-hidden="true" title="tisdag">tisdag</abbr>
            </th>
            <th
                scope="col"
                role="presentation"
                class="calendar-month__header-cell"
            >
                <abbr aria-hidden="true" title="onsdag">onsdag</abbr>
            </th>
            <th
                scope="col"
                role="presentation"
                class="calendar-month__header-cell"
            >
                <abbr aria-hidden="true" title="torsdag">torsdag</abbr>
            </th>
            <th
                scope="col"
                role="presentation"
                class="calendar-month__header-cell"
            >
                <abbr aria-hidden="true" title="fredag">fredag</abbr>
            </th>
            <th
                scope="col"
                role="presentation"
                class="calendar-month__header-cell"
            >
                <abbr aria-hidden="true" title="lördag">lördag</abbr>
            </th>
            <th
                scope="col"
                role="presentation"
                class="calendar-month__header-cell"
            >
                <abbr aria-hidden="true" title="söndag">söndag</abbr>
            </th>
        </tr>
    </thead>
    <tbody role="presentation">
        <tr role="presentation">
            <td
                aria-hidden="true"
                class="calendar-month__cell calendar-month__cell--week-number"
            >
                0
            </td>
        </tr>
        <tr role="presentation">
            <td
                aria-hidden="true"
                class="calendar-month__cell calendar-month__cell--week-number"
            >
                0
            </td>
        </tr>
        <tr role="presentation">
            <td
                aria-hidden="true"
                class="calendar-month__cell calendar-month__cell--week-number"
            >
                0
            </td>
        </tr>
        <tr role="presentation">
            <td
                aria-hidden="true"
                class="calendar-month__cell calendar-month__cell--week-number"
            >
                0
            </td>
        </tr>
        <tr role="presentation">
            <td
                aria-hidden="true"
                class="calendar-month__cell calendar-month__cell--week-number"
            >
                0
            </td>
        </tr>
    </tbody>
</table>
```

### Dag

Vanlig dag

```html
<div class="calendar-month__cell">
    <button tabindex="-1" type="button" class="calendar-month__button">
        <span class="calendar-day">
            <span>1</span>
        </span>
    </button>
</div>
```

Ickevalbar dag

```html
<div class="calendar-month__cell">
    <button tabindex="-1" type="button" class="calendar-month__button">
        <span class="calendar-day calendar-day--disabled">
            <span>2</span>
        </span>
    </button>
</div>
```

Dagens datum

```html
<div class="calendar-month__cell">
    <button tabindex="-1" type="button" class="calendar-month__button">
        <span class="calendar-day calendar-day--today">
            <span>3</span>
        </span>
    </button>
</div>
```

Vald dag

```html
<div class="calendar-month__cell">
    <button tabindex="-1" type="button" class="calendar-month__button">
        <span class="calendar-day calendar-day--selected">
            <span>4</span>
        </span>
    </button>
</div>
```

### Komplett

```html
<div>
    <div class="text-field">
        <label for="datepicker" class="label">Välj ett datum</label>
        <div class="text-field__input-wrapper">
            <div class="text-field__icon-wrapper">
                <input
                    type="text"
                    id="datepicker"
                    class="text-field__input"
                    aria-invalid="false"
                />
            </div>
            <button
                type="button"
                aria-expanded="false"
                data-test="calendar-button"
                class="datepicker-field__button"
            >
                <svg focusable="false" class="icon f-icon-calendar">
                    <use xlink:href="#f-icon-calendar"></use>
                </svg>
                <span class="sr-only">Välj datum</span>
            </button>
        </div>
    </div>
</div>

<div class="popup--force-inline">
    <div role="presentation" class="popup__wrapper">
        <div class="datepicker-field__popup datepicker-field__always-inline">
            <div class="calendar__wrapper">
                <div class="calendar-navbar">
                    <div tabindex="-1" class="calendar-navbar__month">
                        november 2022
                    </div>
                    <button
                        type="button"
                        aria-live="off"
                        class="calendar-navbar__arrow calendar-navbar__arrow--previous"
                    >
                        <span class="sr-only">
                            Förra månaden oktober 2022
                        </span>
                        <svg
                            focusable="false"
                            class="icon f-icon-arrow-right calendar-navbar__icon"
                        >
                            <use xlink:href="#f-icon-arrow-right"></use>
                        </svg>
                    </button>
                    <button
                        type="button"
                        aria-live="off"
                        class="calendar-navbar__arrow calendar-navbar__arrow--next"
                    >
                        <span class="sr-only">Nästa månad december 2022</span>
                        <svg
                            focusable="false"
                            class="icon f-icon-arrow-right calendar-navbar__icon"
                        >
                            <use xlink:href="#f-icon-arrow-right"></use>
                        </svg>
                    </button>
                </div>
                <table role="application" class="calendar-month__table">
                    <colgroup>
                        <col class="calendar-month__col--week" />
                        <col class="calendar-month__col--day" />
                        <col class="calendar-month__col--day" />
                        <col class="calendar-month__col--day" />
                        <col class="calendar-month__col--day" />
                        <col class="calendar-month__col--day" />
                        <col class="calendar-month__col--day" />
                        <col class="calendar-month__col--day" />
                    </colgroup>
                    <thead role="presentation">
                        <tr role="presentation">
                            <th
                                scope="col"
                                aria-hidden="true"
                                class="calendar-month__header-cell"
                            ></th>
                            <th
                                scope="col"
                                role="presentation"
                                class="calendar-month__header-cell"
                            >
                                <abbr aria-hidden="true" title="måndag"
                                    >måndag</abbr
                                >
                            </th>
                            <th
                                scope="col"
                                role="presentation"
                                class="calendar-month__header-cell"
                            >
                                <abbr aria-hidden="true" title="tisdag"
                                    >tisdag</abbr
                                >
                            </th>
                            <th
                                scope="col"
                                role="presentation"
                                class="calendar-month__header-cell"
                            >
                                <abbr aria-hidden="true" title="onsdag"
                                    >onsdag</abbr
                                >
                            </th>
                            <th
                                scope="col"
                                role="presentation"
                                class="calendar-month__header-cell"
                            >
                                <abbr aria-hidden="true" title="torsdag"
                                    >torsdag</abbr
                                >
                            </th>
                            <th
                                scope="col"
                                role="presentation"
                                class="calendar-month__header-cell"
                            >
                                <abbr aria-hidden="true" title="fredag"
                                    >fredag</abbr
                                >
                            </th>
                            <th
                                scope="col"
                                role="presentation"
                                class="calendar-month__header-cell"
                            >
                                <abbr aria-hidden="true" title="lördag"
                                    >lördag</abbr
                                >
                            </th>
                            <th
                                scope="col"
                                role="presentation"
                                class="calendar-month__header-cell"
                            >
                                <abbr aria-hidden="true" title="söndag"
                                    >söndag</abbr
                                >
                            </th>
                        </tr>
                    </thead>
                    <tbody role="presentation">
                        <tr role="presentation">
                            <td
                                aria-hidden="true"
                                class="calendar-month__cell calendar-month__cell--week-number"
                            >
                                44
                            </td>
                            <td
                                colspan="1"
                                aria-hidden="true"
                                class="calendar-month__cell"
                            ></td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">1</span>
                                        <span class="sr-only"
                                            >tisdag 1 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span
                                        class="calendar-day calendar-day--disabled"
                                    >
                                        <span aria-hidden="true">2</span>
                                        <span class="sr-only"
                                            >inte valbar onsdag 2 november
                                            2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">3</span>
                                        <span class="sr-only"
                                            >torsdag 3 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">4</span>
                                        <span class="sr-only"
                                            >fredag 4 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span
                                        class="calendar-day calendar-day--disabled"
                                    >
                                        <span aria-hidden="true">5</span>
                                        <span class="sr-only"
                                            >inte valbar lördag 5 november
                                            2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span
                                        class="calendar-day calendar-day--disabled"
                                    >
                                        <span aria-hidden="true">6</span>
                                        <span class="sr-only"
                                            >inte valbar söndag 6 november
                                            2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <!---->
                        </tr>
                        <tr role="presentation">
                            <td
                                aria-hidden="true"
                                class="calendar-month__cell calendar-month__cell--week-number"
                            >
                                45
                            </td>
                            <!---->
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">7</span>
                                        <span class="sr-only"
                                            >måndag 7 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span
                                        class="calendar-day calendar-day--disabled"
                                    >
                                        <span aria-hidden="true">8</span>
                                        <span class="sr-only"
                                            >inte valbar tisdag 8 november
                                            2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">9</span>
                                        <span class="sr-only"
                                            >onsdag 9 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">10</span>
                                        <span class="sr-only"
                                            >torsdag 10 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span
                                        class="calendar-day calendar-day--disabled"
                                    >
                                        <span aria-hidden="true">11</span>
                                        <span class="sr-only"
                                            >inte valbar fredag 11 november
                                            2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span
                                        class="calendar-day calendar-day--disabled"
                                    >
                                        <span aria-hidden="true">12</span>
                                        <span class="sr-only"
                                            >inte valbar lördag 12 november
                                            2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span
                                        class="calendar-day calendar-day--disabled"
                                    >
                                        <span aria-hidden="true">13</span>
                                        <span class="sr-only"
                                            >inte valbar söndag 13 november
                                            2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <!---->
                        </tr>
                        <tr role="presentation">
                            <td
                                aria-hidden="true"
                                class="calendar-month__cell calendar-month__cell--week-number"
                            >
                                46
                            </td>
                            <!---->
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">14</span>
                                        <span class="sr-only"
                                            >måndag 14 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">15</span>
                                        <span class="sr-only"
                                            >tisdag 15 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">16</span>
                                        <span class="sr-only"
                                            >onsdag 16 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="0"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span
                                        class="calendar-day calendar-day--selected"
                                    >
                                        <span aria-hidden="true">17</span>
                                        <span class="sr-only"
                                            >vald dag torsdag 17 november
                                            2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">18</span>
                                        <span class="sr-only"
                                            >fredag 18 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span
                                        class="calendar-day calendar-day--disabled"
                                    >
                                        <span aria-hidden="true">19</span>
                                        <span class="sr-only"
                                            >inte valbar lördag 19 november
                                            2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span
                                        class="calendar-day calendar-day--disabled"
                                    >
                                        <span aria-hidden="true">20</span>
                                        <span class="sr-only"
                                            >inte valbar söndag 20 november
                                            2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <!---->
                        </tr>
                        <tr role="presentation">
                            <td
                                aria-hidden="true"
                                class="calendar-month__cell calendar-month__cell--week-number"
                            >
                                47
                            </td>
                            <!---->
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">21</span>
                                        <span class="sr-only"
                                            >igår måndag 21 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span
                                        class="calendar-day calendar-day--today"
                                    >
                                        <span aria-hidden="true">22</span>
                                        <span class="sr-only"
                                            >idag tisdag 22 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span
                                        class="calendar-day calendar-day--disabled"
                                    >
                                        <span aria-hidden="true">23</span>
                                        <span class="sr-only"
                                            >inte valbar imorgon onsdag 23
                                            november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">24</span>
                                        <span class="sr-only"
                                            >torsdag 24 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">25</span>
                                        <span class="sr-only"
                                            >fredag 25 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span
                                        class="calendar-day calendar-day--disabled"
                                    >
                                        <span aria-hidden="true">26</span>
                                        <span class="sr-only"
                                            >inte valbar lördag 26 november
                                            2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span
                                        class="calendar-day calendar-day--disabled"
                                    >
                                        <span aria-hidden="true">27</span>
                                        <span class="sr-only"
                                            >inte valbar söndag 27 november
                                            2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <!---->
                        </tr>
                        <tr role="presentation">
                            <td
                                aria-hidden="true"
                                class="calendar-month__cell calendar-month__cell--week-number"
                            >
                                48
                            </td>
                            <!---->
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">28</span>
                                        <span class="sr-only"
                                            >måndag 28 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">29</span>
                                        <span class="sr-only"
                                            >tisdag 29 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                role="presentation"
                                class="calendar-month__cell"
                            >
                                <button
                                    tabindex="-1"
                                    type="button"
                                    class="calendar-month__button"
                                >
                                    <span class="calendar-day">
                                        <span aria-hidden="true">30</span>
                                        <span class="sr-only"
                                            >onsdag 30 november 2022</span
                                        >
                                    </span>
                                </button>
                            </td>
                            <td
                                colspan="4"
                                aria-hidden="true"
                                class="calendar-month__cell"
                            ></td>
                        </tr>
                        <!---->
                        <tr aria-hidden="true">
                            <td
                                colspan="8"
                                aria-hidden="true"
                                class="calendar-month__cell"
                            ></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="datepicker-field__close">
                <button
                    type="button"
                    class="button button--discrete button--discrete--black datepicker-field__close__button"
                >
                    <span>Stäng</span>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        class="icon button__icon"
                    >
                        <use xlink:href="#f-icon-close"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
