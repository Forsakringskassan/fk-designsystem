---
title: Doldsida för särskillda knappexempel
---

**[Till vanliga knappexempel](../button)**

## Exempel

### Knapp i knappgrupp (vänster) mot fristående knapp (höger)

```html
<div class="row">
    <div class="col col--md-6" style="margin-right: -2rem">
        <hr style="text-align:right" />
        <div class="button-group" style="background-color: lightgreen">
            <button
                class="button button-group__item button--primary"
                type="button"
            >
                knapp i grupp
            </button>
        </div>
        <hr style="text-align:right" />
    </div>
    <div class="col col--md-6">
        <hr />
        <button
            class="button button--secondary"
            type="button"
            style="display:block"
        >
            fristående knapp
        </button>
        <hr />
    </div>
</div>
```

### Diskretknapp i knappgrupp (vänster) mot fristående diskretknapp (höger)

```html
<div class="row">
    <div class="col col--md-6" style="margin-right: -2rem">
        <hr style="text-align:right" />
        <div class="button-group" style="background-color: lightgreen">
            <button
                class="button button-group__item button--discrete"
                type="button"
            >
                knapp i grupp
            </button>
        </div>
        <hr style="text-align:right" />
    </div>
    <div class="col col--md-6">
        <hr />
        <button
            class="button button--discrete"
            type="button"
            style="display:block"
        >
            fristående knapp
        </button>
        <hr />
    </div>
</div>
```

### Knappgrupp i modal

```html
<div class="modal">
    <!-- Hide backdrop in demos. -->
    <!-- <div class="modal__backdrop" aria-hidden="false"> -->
    <!-- <div role="document" class="modal__outer-container" tabindex="-1"> -->
    <div class="modal__inner-container" role="dialog" aria-modal="true">
        <div class="modal__dialog-container">
            <div class="modal__dialog">
                <div class="modal__dialog-inner">
                    <div class="modal__header">
                        <h1 class="modal__title">Avsluta ansökan?</h1>
                    </div>

                    <div class="modal__content">
                        <p>
                            Träutensilierna i ett tryckeri äro ingalunda en
                            oviktig faktor, för trevnadens, ordningens och
                            ekonomiens upprätthållande, och dock är det icke
                            sällan som sorgliga erfarenheter göras på grund af
                            det oförstånd med hvilket kaster, formbräden och
                            regaler tillverkas och försäljas Kaster som äro
                            dåligt hopkomna och af otillräckligt.
                        </p>
                    </div>

                    <div class="modal__footer">
                        <div class="button-group">
                            <button
                                type="button"
                                class="button button-group__item"
                            >
                                Nej, gå tillbaka
                            </button>
                            <button
                                type="button"
                                class="button button--primary button-group__item"
                            >
                                Ja, avsluta ansökan
                            </button>
                        </div>
                    </div>
                </div>

                <div class="button-group button-group--end">
                    <button
                        type="button"
                        class="button button--discrete button--discrete--black button-group__item"
                    >
                        Stäng
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-close"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->
</div>
```

### Knapp i knappgrupp (vänster) mot lista av knappar (höger)

```html
<div class="row">
    <div
        class="col col--md-6"
        style="margin-right: -2rem; background-color: lightpink"
    >
        <hr style="text-align:right" />
        <div class="button-group">
            <button
                class="button button-group__item button--primary"
                type="button"
            >
                knapp i grupp
            </button>
            <button
                class="button button-group__item button--primary"
                type="button"
            >
                knapp i grupp
            </button>
        </div>
        <hr style="text-align:right" />
    </div>
    <div class="col col--md-6">
        <hr />
        <ul style="list-style-type:none" class="button-list">
            <li>
                <button class="button button--primary" type="button">
                    <svg
                        aria-hidden="true"
                        class="icon button__icon"
                        focusable="false"
                    >
                        <use xlink:href="#f-icon-arrow-down" />
                    </svg>
                    <span>Knapp 1 i lista</span>
                </button>
            </li>
            <li>
                <button class="button button--primary" type="button">
                    <svg
                        aria-hidden="true"
                        class="icon button__icon"
                        focusable="false"
                    >
                        <use xlink:href="#f-icon-close" />
                    </svg>
                    <span>Knapp 2 i lista</span>
                </button>
            </li>
        </ul>
        <hr />
    </div>
</div>
```
