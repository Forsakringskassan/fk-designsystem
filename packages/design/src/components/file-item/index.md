---
title: Filpresentatör
layout: component
status: Preliminär
---

## Exempel

### Fil normal

```html
<ul class="file-item-list">
    <li>
        <div class="file-item">
            <div class="file-item__row">
                <button
                    class="button button--discrete file-item__file-open"
                    type="button"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-pdf" />
                    </svg>
                    <span class="file-item__file-name"
                        >hyreskontrakt-1992.pdf</span
                    >
                </button>
                <button
                    class="button button--discrete file-item__file-remove"
                    type="button"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-trashcan" />
                    </svg>
                    <span class="file-item__file-name">Ta bort</span>
                    <span class="sr-only">hyreskontrakt-1992.pdf</span>
                </button>
            </div>
            <hr class="file-item__separator" />
        </div>
    </li>
</ul>
```

### Fil under uppladdning

```html
<ul class="file-item-list">
    <li>
        <div class="file-item">
            <div class="file-item__row">
                <button
                    class="button button--discrete file-item__file-open"
                    type="button"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-pdf" />
                    </svg>
                    <span class="file-item__file-name">hyra.pdf</span>
                </button>
                <div class="file-item__file-remove">
                    <button
                        class="button button--discrete file-item__abort"
                        type="button"
                    >
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-close" />
                        </svg>
                        Avbryt
                        <span class="sr-only">hyra.pdf</span>
                    </button>
                </div>
            </div>
            <div class="file-uploading progress file-item__file-uploading">
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
            <hr class="file-item__row-separator" />
        </div>
    </li>
</ul>
```

### Flera filer normal

```html
<ul class="file-item-list">
    <li>
        <div class="file-item">
            <div class="file-item__row">
                <button
                    class="button button--discrete file-item__file-open"
                    type="button"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-pdf" />
                    </svg>
                    <span class="file-item__file-name">foo.pdf</span>
                </button>
                <button
                    class="button button--discrete file-item__file-remove"
                    type="button"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-trashcan" />
                    </svg>
                    Ta bort
                    <span class="sr-only">foo.pdf</span>
                </button>
            </div>
            <div class="file-item__change-info">(png ändrad till pdf)</div>
            <hr class="file-item__separator" />
        </div>
    </li>
    <li>
        <div class="file-item">
            <div class="file-item__row">
                <button
                    class="button button--discrete file-item__file-open"
                    type="button"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-doc" />
                    </svg>
                    <span class="file-item__file-name">bar.doc</span>
                </button>
                <button
                    class="button button--discrete file-item__file-remove"
                    type="button"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-trashcan" />
                    </svg>
                    Ta bort
                    <span class="sr-only">bar.doc</span>
                </button>
            </div>
            <hr class="file-item__separator" />
        </div>
    </li>
    <li>
        <div class="file-item">
            <div class="file-item__row">
                <button
                    class="button button--discrete file-item__file-open"
                    type="button"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-pic" />
                    </svg>
                    <span class="file-item__file-name">foobar.jpeg</span>
                </button>
                <button
                    class="button button--discrete file-item__file-remove"
                    type="button"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-trashcan" />
                    </svg>
                    Ta bort
                    <span class="sr-only">foobar.jpeg</span>
                </button>
            </div>
            <hr class="file-item__separator" />
        </div>
    </li>
    <li>
        <div class="file-item">
            <div class="file-item__row">
                <button
                    class="button button--discrete file-item__file-open"
                    type="button"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-pdf" />
                    </svg>
                    <span class="file-item__file-name">uppladdas.pdf</span>
                </button>
                <button
                    class="button button--discrete file-item__file-abort"
                    type="button"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-close" />
                    </svg>
                    Avbryt
                    <span class="sr-only">uppladdas.pdf</span>
                </button>
            </div>
            <div class="file-uploading progress file-item__file-uploading">
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
            <hr class="file-item__separator" />
        </div>
    </li>
</ul>
```

### Flera filer a-tag istället för button för att visa filen

```html
<ul class="file-item-list">
    <li>
        <div class="file-item">
            <div class="file-item__row">
                <a
                    class="button button--discrete file-item__file-open"
                    href="javascript:void(0);"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-doc" />
                    </svg>
                    <span class="file-item__file-name">foo.doc</span>
                </a>
                <button
                    class="button button--discrete file-item__file-remove"
                    type="button"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-trashcan" />
                    </svg>
                    Ta bort
                    <span class="sr-only">foo.doc</span>
                </button>
            </div>
            <hr class="file-item__separator" />
        </div>
    </li>
    <li>
        <div class="file-item">
            <div class="file-item__row">
                <a
                    class="button button--discrete file-item__file-open"
                    href="javascript:void(0);"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-pdf" />
                    </svg>
                    <span class="file-item__file-name">uppladdas.pdf</span>
                </a>
                <button
                    class="button button--discrete file-item__file-abort"
                    type="button"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-close" />
                    </svg>
                    Avbryt
                    <span class="sr-only">uppladdas.pdf</span>
                </button>
            </div>
            <div class="file-uploading progress file-item__file-uploading">
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
            <hr class="file-item__separator" />
        </div>
    </li>
</ul>
```

### Länk som öppnas i nytt fönster

```html
<ul class="file-item-list">
    <li>
        <div class="file-item">
            <div class="file-item__row">
                <a
                    class="button button--discrete file-item__file-open"
                    href="#"
                    target="_blank"
                >
                    <div class="button__icon icon-stack icon-stack--new-window">
                        <svg focusable="false" class="icon f-icon-new-window">
                            <use xlink:href="#f-icon-new-window"></use>
                        </svg>
                        <svg focusable="false" class="icon f-icon-doc">
                            <use xlink:href="#f-icon-doc"></use>
                        </svg>
                    </div>
                    <span class="file-item__file-name">my-document.doc</span>
                </a>
                <button
                    class="button button--discrete file-item__file-remove"
                    type="button"
                >
                    <svg focusable="false" class="icon button__icon">
                        <use xlink:href="#f-icon-trashcan" />
                    </svg>
                    Ta bort
                    <span class="sr-only">foo.pdf</span>
                </button>
            </div>
            <hr class="file-item__separator" />
        </div>
    </li>
</ul>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
