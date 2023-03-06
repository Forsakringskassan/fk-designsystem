---
title: Datamängdsorterare
layout: component
status: Produktionsklar
---

## Exempel

### Datamängdsorterare med rekommenderade attribut satta

```html
<div class="sort-filter-dataset">
    <div class="iflex iflex--collapse iflex--gap-2x iflex--wrap">
        <div class="iflex__item iflex--align-center iflex--shrink">
            <h3 class="sort-filter-dataset__toolbar__header">Rättigheter</h3>
        </div>
        <div class="iflex__item iflex--align-top iflex--grow">
            <div class="iflex iflex--collapse iflex--wrap iflex--float-right">
                <div class="iflex__item iflex--align-center iflex--shrink">
                    <div class="sort-filter-dataset__search">
                        <svg
                            focusable="false"
                            class="icon sort-filter-dataset__search__magnify-icon f-social-icon-search"
                        >
                            <use xlink:href="#f-social-icon-search"></use>
                        </svg>
                        <div class="text-field text-field--inline">
                            <label for="search-field" class="label">
                                <span class="sr-only">Sök</span>
                            </label>
                            <div class="text-field__icon-wrapper">
                                <input
                                    type="text"
                                    placeholder="Sök"
                                    maxlength="32"
                                    id="search-field"
                                    class="text-field__input"
                                />
                            </div>
                        </div>
                        <button
                            type="button"
                            tabindex="0"
                            class="button button--discrete sort-filter-dataset__search__close-icon"
                        >
                            <svg focusable="false" class="icon f-icon-close">
                                <use xlink:href="#f-icon-close"></use>
                            </svg>
                            <span class="sr-only">Rensa sökfält</span>
                        </button>
                    </div>
                </div>
                <div class="iflex__item iflex--align-center iflex--shrink">
                    <div
                        class="select-field select-field--inline sort-filterdataset__sort"
                    >
                        <label for="sort-field" class="label"
                            >Sortera&nbsp;på</label
                        >
                        <div class="select-field__icon-wrapper">
                            <select
                                id="sort-field"
                                class="select-field__select"
                            >
                                <option>Välj</option>
                                <option>Namn (Stigande)</option>
                                <option>Namn (Fallande)</option>
                                <option>Rättighet (Stigande)</option>
                                <option>Rättighet (Fallande)</option>
                                <option>Ålder (Stigande)</option>
                                <option>Ålder (Fallande)</option>
                            </select>
                            <svg
                                focusable="false"
                                class="icon select-field__icon f-icon-arrow-down"
                            >
                                <use xlink:href="#f-icon-arrow-down"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="example-placeholder">
        Platshållare för lista/tabell eller egen utvecklad presentation av data
    </div>
</div>
```

## Övrigt

### Länkar

~~Användargränssnitt - Designguide 2.0, Förvaltningsdokumentation och Figma komponent~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
