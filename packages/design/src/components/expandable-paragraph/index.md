---
title: Expanderbart stycke
layout: component
status: Preliminär
---

## Exempel

### Med H2 rubrik

```html
<div class="expandable-paragraph expandable-paragraph--closed">
    <h2 class="expandable-paragraph__heading">
        <button
            type="button"
            class="expandable-paragraph__button"
            aria-expanded="false"
        >
            <span class="expandable-paragraph__icon">
                <span class="icon-stack">
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                </span>
            </span>
            Expanderbart stycke (H2)
        </button>
    </h2>
    <div class="expandable-paragraph__container" aria-hidden="true">
        <div class="expandable-paragraph__content">
            Denna text kommer att vara synlig vid expansion.
        </div>
        <div class="expandable-paragraph__separator"></div>
    </div>
</div>
```

### Flera expanderbara stycken i rad med olika rubrikstorlekar

```html
<div class="expandable-paragraph expandable-paragraph--closed">
    <h4 class="expandable-paragraph__heading">
        <button
            type="button"
            class="expandable-paragraph__button"
            aria-expanded="false"
        >
            <span class="expandable-paragraph__icon">
                <span class="icon-stack">
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                </span>
            </span>
            Expanderbart stycke (h4)
        </button>
    </h4>
    <div class="expandable-paragraph__container" aria-hidden="true">
        <div class="expandable-paragraph__content">
            Denna text kommer att vara synlig vid expansion.
        </div>
        <div class="expandable-paragraph__separator"></div>
    </div>
</div>

<div class="expandable-paragraph expandable-paragraph--closed">
    <h5 class="expandable-paragraph__heading">
        <button
            type="button"
            class="expandable-paragraph__button"
            aria-expanded="false"
        >
            <span class="expandable-paragraph__icon">
                <span class="icon-stack">
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                </span>
            </span>
            Expanderbart stycke (h5)
        </button>
    </h5>
    <div class="expandable-paragraph__container" aria-hidden="true">
        <div class="expandable-paragraph__content">
            Denna text kommer att vara synlig vid expansion.
        </div>
        <div class="expandable-paragraph__separator"></div>
    </div>
</div>

<div class="expandable-paragraph expandable-paragraph--closed">
    <h6 class="expandable-paragraph__heading">
        <button
            type="button"
            class="expandable-paragraph__button"
            aria-expanded="false"
        >
            <span class="expandable-paragraph__icon">
                <span class="icon-stack">
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                </span>
            </span>
            Expanderbart stycke (h6)
        </button>
    </h6>
    <div class="expandable-paragraph__container" aria-hidden="true">
        <div class="expandable-paragraph__content">
            Denna text kommer att vara synlig vid expansion.
        </div>
        <div class="expandable-paragraph__separator"></div>
    </div>
</div>

<div class="expandable-paragraph expandable-paragraph--closed">
    <span class="expandable-paragraph__heading heading--h4">
        <button
            type="button"
            class="expandable-paragraph__button"
            aria-expanded="false"
        >
            <span class="expandable-paragraph__icon">
                <span class="icon-stack">
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                </span>
            </span>
            En längre rubrikrad (visuell h4) för att visa hur Expanderbart
            stycke ser ut när rubriken spänner över flera rader för att visa hur
            ikonen placerar sig
        </button>
    </span>
    <div class="expandable-paragraph__container" aria-hidden="true">
        <div class="expandable-paragraph__content">
            Denna text kommer att vara synlig vid expansion.
        </div>
        <div class="expandable-paragraph__separator"></div>
    </div>
</div>
```

### Expanderbart stycke i lista med relaterad information

```html
<div
    class="expandable-paragraph expandable-paragraph--closed expandable-paragraph--list"
>
    <h4 class="expandable-paragraph__heading">
        <button
            type="button"
            class="expandable-paragraph__button"
            aria-expanded="false"
        >
            <span class="expandable-paragraph__icon">
                <span class="icon-stack">
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                </span>
            </span>
            Expanderbart stycke
        </button>
    </h4>
    <div class="expandable-paragraph__related-information">2020-06-25</div>

    <div class="expandable-paragraph__container" aria-hidden="true">
        <div class="expandable-paragraph__content">
            Denna text kommer att vara synlig vid expansion.
        </div>
    </div>
</div>

<div
    class="expandable-paragraph expandable-paragraph--closed expandable-paragraph--list"
>
    <h4 class="expandable-paragraph__heading">
        <button
            type="button"
            class="expandable-paragraph__button"
            aria-expanded="false"
        >
            <span class="expandable-paragraph__icon">
                <span class="icon-stack">
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                    <svg focusable="false" class="icon">
                        <use xlink:href="#f-icon-dash"></use>
                    </svg>
                </span>
            </span>
            Expanderbart stycke med en längre rubrikrad som minst tar upp en rad
            för att visa hur det ser ut om rubriken går ned på flera rader
        </button>
    </h4>
    <div class="expandable-paragraph__related-information">2020-06-25</div>

    <div class="expandable-paragraph__container" aria-hidden="true">
        <div class="expandable-paragraph__content">
            Denna text kommer att vara synlig vid expansion.
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
