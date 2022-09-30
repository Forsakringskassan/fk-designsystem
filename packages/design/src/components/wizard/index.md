---
title: Guide/guidesteg
layout: component
status: Produktionsklar
---

## Exempel

### Initialläge

Första steget öppet, klassen `.wizard-step--open`. De andra stegen är ej påbörjade, klassen `.wizard-step--pending`

```html
<div class="wizard">
    <!-- STEP1 -->
    <div class="wizard-step wizard-step--open">
        <div tabindex="-1" role="group" class="wizard-step__header">
            <div class="iflex">
                <div class="iflex__item iflex--align-bottom iflex--shrink">
                    <div class="wizard-step__header__line-up"></div>
                    <div class="icon-stack">
                        <svg focusable="false" class="icon f-icon-circle">
                            <use xlink:href="#f-icon-circle"></use></svg
                        ><svg focusable="false" class="icon f-icon-success">
                            <use xlink:href="#f-icon-success"></use>
                        </svg>
                        <div>1</div>
                    </div>
                    <div class="wizard-step__header__line-down"></div>
                </div>
                <div class="iflex__item iflex--align-bottom iflex--grow">
                    <span class="wizard-step__header__step-of"
                        >Steg 1 av 3</span
                    >
                    <div class="iflex wizard-step__header__title-container">
                        <div class="iflex__item iflex--align-center">
                            <h2 class="wizard-step__header__title">
                                Fidos största bedrifter
                            </h2>
                        </div>
                    </div>
                    <div class="wizard-step__header__line-adjustment"></div>
                </div>
            </div>
        </div>

        <div class="wizard-step__connector animate-expand">
            <p style="border: 1px dotted gray; height: 100px;">
                Yta för steg 1 innehåll
            </p>
            <div class="button-group">
                <button
                    type="submit"
                    class="button button--primary button-group__item"
                >
                    Nästa</button
                ><button
                    type="submit"
                    class="button button--secondary button-group__item"
                >
                    Avbryt
                </button>
            </div>
        </div>
    </div>

    <!-- STEP2 -->
    <div class="wizard-step wizard-step--pending">
        <div tabindex="-1" role="group" class="wizard-step__header">
            <div class="iflex">
                <div class="iflex__item iflex--align-bottom iflex--shrink">
                    <div class="wizard-step__header__line-up"></div>
                    <div class="icon-stack">
                        <svg focusable="false" class="icon f-icon-circle">
                            <use xlink:href="#f-icon-circle"></use></svg
                        ><svg focusable="false" class="icon f-icon-success">
                            <use xlink:href="#f-icon-success"></use>
                        </svg>
                        <div>2</div>
                    </div>
                    <div class="wizard-step__header__line-down"></div>
                </div>
                <div class="iflex__item iflex--align-bottom iflex--grow">
                    <div class="iflex wizard-step__header__title-container">
                        <div class="iflex__item iflex--align-center">
                            <h2 class="wizard-step__header__title">
                                ID-märkning
                            </h2>
                        </div>
                    </div>
                    <div class="wizard-step__header__line-adjustment"></div>
                </div>
            </div>
        </div>

        <!-- steginnehåll som inte visas / stängd animate expand -->
    </div>

    <!-- STEP3 -->
    <div class="wizard-step wizard-step--pending">
        <div tabindex="-1" role="group" class="wizard-step__header">
            <div class="iflex">
                <div class="iflex__item iflex--align-bottom iflex--shrink">
                    <div class="wizard-step__header__line-up"></div>
                    <div class="icon-stack">
                        <svg focusable="false" class="icon f-icon-circle">
                            <use xlink:href="#f-icon-circle"></use></svg
                        ><svg focusable="false" class="icon f-icon-success">
                            <use xlink:href="#f-icon-success"></use>
                        </svg>
                        <div>3</div>
                    </div>
                    <div class="wizard-step__header__line-down"></div>
                </div>
                <div class="iflex__item iflex--align-bottom iflex--grow">
                    <div class="iflex wizard-step__header__title-container">
                        <div class="iflex__item iflex--align-center">
                            <h2 class="wizard-step__header__title">
                                Fidos hälsa
                            </h2>
                        </div>
                    </div>
                    <div class="wizard-step__header__line-adjustment"></div>
                </div>
            </div>
        </div>
        <!-- steginnehåll som inte visas / stängd animate expand -->
    </div>
</div>
```

### Färdigt steg

Ett färdigt steg visas med grön ikon samt länk för att kunna hoppa tillbaka till steget, klassen `.wizard-step--done`

```html
<div autocomplete="off" class="wizard-div">
    <!-- STEP1 -->
    <div class="wizard-step wizard-step--done">
        <div tabindex="-1" role="group" class="wizard-step__header">
            <div class="iflex">
                <div class="iflex__item iflex--align-bottom iflex--shrink">
                    <div class="wizard-step__header__line-up"></div>
                    <div class="icon-stack">
                        <svg focusable="false" class="icon f-icon-circle">
                            <use xlink:href="#f-icon-circle"></use></svg
                        ><svg focusable="false" class="icon f-icon-success">
                            <use xlink:href="#f-icon-success"></use>
                        </svg>
                        <div>1</div>
                    </div>
                    <div class="wizard-step__header__line-down"></div>
                </div>
                <div class="iflex__item iflex--align-bottom iflex--grow">
                    <div class="iflex wizard-step__header__title-container">
                        <div class="iflex__item iflex--align-center">
                            <h2 class="wizard-step__header__title">
                                Fidos största bedrifter
                            </h2>
                        </div>
                    </div>
                    <div class="wizard-step__header__line-adjustment"></div>
                </div>
            </div>
        </div>
        <!-- steginnehåll som inte visas / stängd animate expand -->
    </div>

    <!-- STEP2 -->
    <div class="wizard-step wizard-step--open">
        <div tabindex="-1" role="group" class="wizard-step__header">
            <div class="iflex">
                <div class="iflex__item iflex--align-bottom iflex--shrink">
                    <div class="wizard-step__header__line-up"></div>
                    <div class="icon-stack">
                        <svg focusable="false" class="icon f-icon-circle">
                            <use xlink:href="#f-icon-circle"></use></svg
                        ><svg focusable="false" class="icon f-icon-success">
                            <use xlink:href="#f-icon-success"></use>
                        </svg>
                        <div>2</div>
                    </div>
                    <div class="wizard-step__header__line-down"></div>
                </div>
                <div class="iflex__item iflex--align-bottom iflex--grow">
                    <span class="wizard-step__header__step-of"
                        >Steg 2 av 3</span
                    >
                    <div class="iflex wizard-step__header__title-container">
                        <div class="iflex__item iflex--align-center">
                            <h2 class="wizard-step__header__title">
                                ID-märkning
                            </h2>
                        </div>
                    </div>
                    <div class="wizard-step__header__line-adjustment"></div>
                </div>
            </div>
        </div>

        <div class="animate-expand wizard-step__connector">
            <div>
                <p style="border: 1px dotted gray; height: 100px;">
                    Yta för steg 2 innehåll
                </p>

                <div class="button-group">
                    <button
                        type="submit"
                        class="button button--primary button-group__item"
                    >
                        Nästa</button
                    ><button
                        type="button"
                        class="button button--secondary button-group__item"
                    >
                        Avbryt
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- STEP3 -->
    <div class="wizard-step wizard-step--pending">
        <div tabindex="-1" role="group" class="wizard-step__header">
            <div class="iflex">
                <div class="iflex__item iflex--align-bottom iflex--shrink">
                    <div class="wizard-step__header__line-up"></div>
                    <div class="icon-stack">
                        <svg focusable="false" class="icon f-icon-circle">
                            <use xlink:href="#f-icon-circle"></use></svg
                        ><svg focusable="false" class="icon f-icon-success">
                            <use xlink:href="#f-icon-success"></use>
                        </svg>
                        <div>3</div>
                    </div>
                    <div class="wizard-step__header__line-down"></div>
                </div>
                <div class="iflex__item iflex--align-bottom iflex--grow">
                    <div class="iflex wizard-step__header__title-container">
                        <div class="iflex__item iflex--align-center">
                            <h2 class="wizard-step__header__title">
                                Fidos hälsa
                            </h2>
                        </div>
                    </div>
                    <div class="wizard-step__header__line-adjustment"></div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Sista steget

```html
<div autocomplete="off" id="hundbidraget-div" class="wizard-div">
    <!-- STEP1 -->
    <div class="wizard-step wizard-step--done">
        <div tabindex="-1" role="group" class="wizard-step__header">
            <div class="iflex">
                <div class="iflex__item iflex--align-bottom iflex--shrink">
                    <div class="wizard-step__header__line-up"></div>
                    <div class="icon-stack">
                        <svg focusable="false" class="icon f-icon-circle">
                            <use xlink:href="#f-icon-circle"></use></svg
                        ><svg focusable="false" class="icon f-icon-success">
                            <use xlink:href="#f-icon-success"></use>
                        </svg>
                        <div>1</div>
                    </div>
                    <div class="wizard-step__header__line-down"></div>
                </div>
                <div class="iflex__item iflex--align-bottom iflex--grow">
                    <div class="iflex wizard-step__header__title-container">
                        <div class="iflex__item iflex--align-center">
                            <h2 class="wizard-step__header__title">
                                Fidos största bedrifter
                            </h2>
                        </div>
                    </div>
                    <div class="wizard-step__header__line-adjustment"></div>
                </div>
            </div>
        </div>
        <!-- steginnehåll som inte visas / stängd animate expand -->
    </div>

    <!-- STEP2 -->
    <div class="wizard-step wizard-step--done">
        <div tabindex="-1" role="group" class="wizard-step__header">
            <div class="iflex">
                <div class="iflex__item iflex--align-bottom iflex--shrink">
                    <div class="wizard-step__header__line-up"></div>
                    <div class="icon-stack">
                        <svg focusable="false" class="icon f-icon-circle">
                            <use xlink:href="#f-icon-circle"></use></svg
                        ><svg focusable="false" class="icon f-icon-success">
                            <use xlink:href="#f-icon-success"></use>
                        </svg>
                        <div>2</div>
                    </div>
                    <div class="wizard-step__header__line-down"></div>
                </div>
                <div class="iflex__item iflex--align-bottom iflex--grow">
                    <div class="iflex wizard-step__header__title-container">
                        <div class="iflex__item iflex--align-center">
                            <h2 class="wizard-step__header__title">
                                ID-märkning
                            </h2>
                        </div>
                    </div>
                    <div class="wizard-step__header__line-adjustment"></div>
                </div>
            </div>
        </div>
        <!-- steginnehåll som inte visas / stängd animate expand -->
    </div>

    <!-- STEP3 -->
    <div class="wizard-step wizard-step--open">
        <div tabindex="-1" role="group" class="wizard-step__header">
            <div class="iflex">
                <div class="iflex__item iflex--align-bottom iflex--shrink">
                    <div class="wizard-step__header__line-up"></div>
                    <div class="icon-stack">
                        <svg focusable="false" class="icon f-icon-circle">
                            <use xlink:href="#f-icon-circle"></use></svg
                        ><svg focusable="false" class="icon f-icon-success">
                            <use xlink:href="#f-icon-success"></use>
                        </svg>
                        <div>3</div>
                    </div>
                    <div class="wizard-step__header__line-down"></div>
                </div>
                <div class="iflex__item iflex--align-bottom iflex--grow">
                    <span class="wizard-step__header__step-of"
                        >Steg 3 av 3</span
                    >
                    <div class="iflex wizard-step__header__title-container">
                        <div class="iflex__item iflex--align-center">
                            <h2 class="wizard-step__header__title">
                                Fidos hälsa
                            </h2>
                        </div>
                    </div>
                    <div class="wizard-step__header__line-adjustment"></div>
                </div>
            </div>
        </div>
        <div class="animate-expand wizard-step__connector">
            <p style="border: 1px dotted gray; height: 100px;">
                Yta för steg 3 innehåll
            </p>
            <div class="button-group">
                <button
                    type="submit"
                    class="button button--primary button-group__item"
                >
                    Gå vidare och granska</button
                ><button
                    type="button"
                    class="button button--secondary button-group__item"
                >
                    Avbryt
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

Guide: ~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~

Guidesteg: ~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
