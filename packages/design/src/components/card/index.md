---
title: Kort
layout: component
status: Draft
---

Används för att gruppera innehåll.

## Anvädning

```html raw
<div class="card card--default">
    <div class="card__header">
        <!--- Optional header content -->
    </div>
    <div class="card__content">
        <!--- Card content -->
    </div>
    <div class="card__footer">
        <!--- Optional footer content -->
    </div>
</div>
```

## Exempel

### Kort innehållandes två inmatningsfält

```html
<div class="card card--default">
    <div class="card__header"></div>
    <div class="card__content">
        <div class="text-field">
            <label for="fornamn" class="label"> Förnamn </label>
            <div class="text-field__icon-wrapper">
                <input
                    id="fornamn"
                    type="text"
                    class="text-field__input"
                    maxlength="50"
                />
            </div>
        </div>

        <div class="text-field">
            <label for="email" class="label"> Mejl </label>
            <div class="text-field__icon-wrapper">
                <input
                    id="email"
                    type="email"
                    class="text-field__input"
                    maxlength="150"
                />
            </div>
        </div>
    </div>
    <div class="card__footer">
        <div class="button-group">
            <button
                class="button button-group__item button--discrete"
                type="button"
            >
                <svg
                    aria-hidden="true"
                    class="icon button__icon"
                    focusable="false"
                >
                    <use xlink:href="#f-icon-trashcan" /></svg
                ><span>Ta bort</span>
            </button>

            <button
                class="button button-group__item button--discrete"
                type="button"
            >
                <svg
                    aria-hidden="true"
                    class="icon button__icon"
                    focusable="false"
                >
                    <use xlink:href="#f-icon-pen" /></svg
                ><span>Ändra</span>
            </button>
        </div>
    </div>
</div>
```
