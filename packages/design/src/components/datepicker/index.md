---
title: Datumväljare
layout: component
status: Preliminär
---

## Exempel

### Standard

```html
<div class="datepicker">
    <div class="datepicker__select">
        <div class="text-field">
            <label for="normal" class="label">Välj ett datum</label>
            <div class="text-field__icon-wrapper">
                <input
                    type="text"
                    name="datepicker-date"
                    id="normal"
                    class="text-field__input"
                    maxlength="10"
                />
            </div>
        </div>
        <button
            type="button"
            aria-label="Öppna datumväljare"
            class="datepicker__open"
        >
            <svg focusable="false" class="icon">
                <use xlink:href="#f-icon-calendar"></use>
            </svg>
        </button>
    </div>
    <div class="datepicker__calendar">
        <div tabindex="0" class="calendar calendar--hide-tabs">
            <div class="calendar__container">
                <span class="sr-only">Kalender välj dagar</span>
                <div class="calendar__navbar">
                    <button
                        type="button"
                        aria-label="Visa April månad"
                        class="calendar__navbar-arrow calendar__navbar-arrow--left"
                    >
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-arrow-in-circle"></use>
                        </svg>
                        <span aria-hidden="true">Apr</span>
                    </button>
                    <button type="button" class="calendar__navbar-middle">
                        <span class="calendar__navbar-middle-top">
                            <span>Maj 2019</span>
                        </span>
                        <span class="calendar__navbar-middle-bottom">
                            <span>Gå till årsvyn</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        aria-label="Visa Juni månad"
                        class="calendar__navbar-arrow calendar__navbar-arrow--right"
                    >
                        <span aria-hidden="true">Jun</span>
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-arrow-in-circle"></use>
                        </svg>
                    </button>
                </div>
                <div class="calendar__monthview">
                    <div class="calendar__row">
                        <div class="calendar__item calendar__item--week">
                            Mån
                        </div>
                        <div class="calendar__item calendar__item--week">
                            Tis
                        </div>
                        <div class="calendar__item calendar__item--week">
                            Ons
                        </div>
                        <div class="calendar__item calendar__item--week">
                            Tors
                        </div>
                        <div class="calendar__item calendar__item--week">
                            Fre
                        </div>
                        <div class="calendar__item calendar__item--week">
                            Lör
                        </div>
                        <div class="calendar__item calendar__item--week">
                            Sön
                        </div>
                    </div>
                    <div class="calendar__row">
                        <div type="button" class="calendar__item"></div>
                        <div type="button" class="calendar__item"></div>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">onsdag 1a maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-1"
                                >1</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">torsdag 2a maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-2"
                                >2</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">fredag 3e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-3"
                                >3</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">lördag 4e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-4"
                                >4</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">söndag 5e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-5"
                                >5</span
                            >
                        </button>
                    </div>
                    <div class="calendar__row">
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">måndag 6e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-6"
                                >6</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">tisdag 7e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-7"
                                >7</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">onsdag 8e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-8"
                                >8</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">torsdag 9e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-9"
                                >9</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">fredag 10e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-10"
                                >10</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">lördag 11e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-11"
                                >11</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">söndag 12e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-12"
                                >12</span
                            >
                        </button>
                    </div>
                    <div class="calendar__row">
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">måndag 13e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-13"
                                >13</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">tisdag 14e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-14"
                                >14</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">onsdag 15e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-15"
                                >15</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">torsdag 16e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-16"
                                >16</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">fredag 17e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-17"
                                >17</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">lördag 18e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-18"
                                >18</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">söndag 19e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-19"
                                >19</span
                            >
                        </button>
                    </div>
                    <div class="calendar__row">
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">måndag 20e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-20"
                                >20</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">tisdag 21a maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-21"
                                >21</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">onsdag 22a maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-22"
                                >22</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">torsdag 23e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-23"
                                >23</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">fredag 24e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-24"
                                >24</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">lördag 25e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-25"
                                >25</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">söndag 26e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-26"
                                >26</span
                            >
                        </button>
                    </div>
                    <div class="calendar__row">
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">måndag 27e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-27"
                                >27</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">tisdag 28e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-28"
                                >28</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">onsdag 29e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-29"
                                >29</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">torsdag 30e maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-30"
                                >30</span
                            >
                        </button>
                        <button
                            type="button"
                            class="calendar__item calendar__item--date"
                        >
                            <span class="sr-only">fredag 31a maj 2019</span>
                            <span
                                aria-hidden="true"
                                class="calendar__item__number calendar__item__number-31"
                                >31</span
                            >
                        </button>
                        <div type="button" class="calendar__item"></div>
                        <div type="button" class="calendar__item"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

## Exempel

### Inaktiv

```html
<div>
    <div>
        <div>
            <div class="datepicker">
                <div class="datepicker__select">
                    <div class="text-field">
                        <label class="label"> Välj ett datum </label>
                        <div class="text-field__icon-wrapper">
                            <input
                                type="text"
                                name="datepicker-date"
                                maxlength="20"
                                disabled
                                class="text-field__input"
                                data-validation=""
                                aria-invalid="false"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        aria-label="Öppna datumväljare"
                        aria-expanded="false"
                        disabled
                        class="datepicker__open"
                    >
                        <svg focusable="false" class="icon f-icon-calendar">
                            <use xlink:href="#f-icon-calendar"></use>
                        </svg>
                    </button>
                </div>
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
