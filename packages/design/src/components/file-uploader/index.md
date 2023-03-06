---
title: Filuppladdare
layout: component
status: Preliminär
---

## Exempel

### Filuppladdare med knapp för att visa fil

```html
<div class="file-uploader">
    <ul class="file-item-list">
        <li>
            <div class="file-item">
                <div class="file-item__row">
                    <button class="button button--discrete" type="button">
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-pdf" />
                        </svg>
                        <span class="file-item__file-name">hyra.pdf</span>
                    </button>
                    <button
                        class="button button--discrete file-item__file-remove"
                        type="button"
                    >
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-trashcan" />
                        </svg>
                        Ta bort
                        <span class="sr-only">hyra.pdf</span>
                    </button>
                </div>
                <hr class="file-row-separator" />
            </div>
        </li>
        <li>
            <div class="file-item">
                <div class="file-item__row">
                    <button class="button button--discrete" type="button">
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-pdf" />
                        </svg>
                        <span class="file-item__file-name">lön.pdf</span>
                    </button>
                    <button
                        class="button button--discrete file-item__file-remove"
                        type="button"
                    >
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-trashcan" />
                        </svg>
                        Ta bort
                        <span class="sr-only">lön.pdf</span>
                    </button>
                </div>
                <hr class="file-row-separator" />
            </div>
        </li>
        <li>
            <div class="file-item">
                <div class="file-item__row">
                    <button class="button button--discrete" type="button">
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-pic" />
                        </svg>
                        <span class="file-item__file-name">kontrakt.jpeg</span>
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
                            <span class="sr-only">kontrakt.jpeg</span>
                        </button>
                    </div>
                </div>
                <div class="file-uploading progress file-item__file-uploading">
                    <span
                        class="progress__meter progress__meter--inprogress"
                        style="width: 40%;"
                        role="progressbar"
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="40"
                        aria-valuetext="Du har slutfört 40%"
                    >
                        <span class="sr-only">Du har slutfört 40%</span>
                    </span>
                </div>
                <hr />
            </div>
        </li>
    </ul>
    <div class="file-selector">
        <input type="file" id="file-selector-element-1" />
        <label
            for="file-selector-element-1"
            role="button"
            class="enabled button button--discrete"
        >
            <svg focusable="false" class="icon button__icon">
                <use xlink:href="#f-icon-paper-clip" />
            </svg>
            Ladda upp fil
        </label>
    </div>
</div>
```

### Filuppladdare med a-tag för att visa fil

```html
<div class="file-uploader">
    <ul class="file-item-list">
        <li>
            <div class="file-item">
                <div class="file-item__row">
                    <a class="button button--discrete" href="#">
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-pdf" />
                        </svg>
                        <span class="file-item__file-name">hyra.pdf</span>
                    </a>
                    <button
                        class="button button--discrete file-item__file-remove"
                        type="button"
                    >
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-trashcan" />
                        </svg>
                        Ta bort
                        <span class="sr-only">hyra.pdf</span>
                    </button>
                </div>
                <hr class="file-row-separator" />
            </div>
        </li>
        <li>
            <div class="file-item">
                <div class="file-item__row">
                    <a class="button button--discrete" href="#">
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-pdf" />
                        </svg>
                        <span class="file-item__file-name">lön.pdf</span>
                    </a>
                    <button
                        class="button button--discrete file-item__file-remove"
                        type="button"
                    >
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-trashcan" />
                        </svg>
                        Ta bort
                        <span class="sr-only">lön.pdf</span>
                    </button>
                </div>
                <hr class="file-row-separator" />
            </div>
        </li>
        <li>
            <div class="file-item">
                <div class="file-item__row">
                    <a class="button button--discrete" href="#">
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-pic" />
                        </svg>
                        <span class="file-item__file-name">kontrakt.jpeg</span>
                    </a>
                    <div class="file-item__file-remove">
                        <button
                            class="button button--discrete file-item__abort"
                            type="button"
                        >
                            <svg focusable="false" class="icon button__icon">
                                <use xlink:href="#f-icon-close" />
                            </svg>
                            Avbryt
                            <span class="sr-only">kontrakt.jpeg</span>
                        </button>
                    </div>
                </div>
                <div class="file-uploading progress file-item__file-uploading">
                    <span
                        class="progress__meter progress__meter--inprogress"
                        style="width: 40%;"
                        role="progressbar"
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="40"
                        aria-valuetext="Du har slutfört 40%"
                    >
                        <span class="sr-only">Du har slutfört 40%</span>
                    </span>
                </div>
                <hr />
            </div>
        </li>
    </ul>
    <div class="file-selector">
        <input type="file" id="file-selector-element-2" />
        <label
            for="file-selector-element-2"
            role="button"
            class="enabled button button--discrete"
        >
            <svg focusable="false" class="icon button__icon">
                <use xlink:href="#f-icon-paper-clip" />
            </svg>
            Ladda upp fil
        </label>
    </div>
</div>
```

### Filuppladdare med felmeddelande

```html
<div class="file-uploader">
    <ul class="file-item-list">
        <li>
            <div class="file-item">
                <div class="file-item__row">
                    <button class="button button--discrete" type="button">
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-pdf" />
                        </svg>
                        <span class="file-item__file-name">hyra.pdf</span>
                    </button>
                    <button
                        class="button button--discrete file-item__file-remove"
                        type="button"
                    >
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-trashcan" />
                        </svg>
                        Ta bort
                        <span class="sr-only">hyra.pdf</span>
                    </button>
                </div>
                <hr class="file-row-separator" />
            </div>
        </li>
        <li>
            <div class="file-item">
                <div class="file-item__row">
                    <button class="button button--discrete" type="button">
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-pdf" />
                        </svg>
                        <span class="file-item__file-name">lön.pdf</span>
                    </button>
                    <button
                        class="button button--discrete file-item__file-remove"
                        type="button"
                    >
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-trashcan" />
                        </svg>
                        Ta bort
                        <span class="sr-only">lön.pdf</span>
                    </button>
                </div>
                <hr class="file-row-separator" />
            </div>
        </li>
        <li>
            <div class="file-item">
                <div class="file-item__row">
                    <button class="button button--discrete" type="button">
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-pic" />
                        </svg>
                        <span class="file-item__file-name">kontrakt.jpeg</span>
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
                            <span class="sr-only">kontrakt.jpeg</span>
                        </button>
                    </div>
                </div>
                <div class="file-uploading progress file-item__file-uploading">
                    <span
                        class="progress__meter progress__meter--inprogress"
                        style="width: 40%;"
                        role="progressbar"
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="40"
                        aria-valuetext="Du har slutfört 40%"
                    >
                        <span class="sr-only">Du har slutfört 40%</span>
                    </span>
                </div>
                <hr class="file-row-separator" />
            </div>
        </li>
    </ul>

    <div class="message-box message-box--error file-uploader__message-box">
        <span class="message-box__icon">
            <span class="icon-stack icon-stack--error">
                <svg focusable="false" class="icon f-icon-triangle">
                    <use xlink:href="#f-icon-triangle"></use>
                </svg>
                <svg focusable="false" class="icon f-icon-alert">
                    <use xlink:href="#f-icon-alert"></use>
                </svg>
            </span>
        </span>
        <h3 class="message-box__heading">Filen är av fel format</h3>
        <p>
            Filer som du lägger till måste ha ett av följande filformat: pdf,
            jpeg, tiff eller png.
        </p>
    </div>
    <div class="file-selector">
        <input type="file" id="file-selector-element-5" />
        <label
            for="file-selector-element-5"
            role="button"
            class="enabled button button--discrete"
        >
            <svg focusable="false" class="icon button__icon">
                <use xlink:href="#f-icon-paper-clip" />
            </svg>
            Ladda upp fil
        </label>
    </div>
</div>
```

### Filuppladdare, max antal filer uppnått

```html
<div class="file-uploader">
    <ul class="file-item-list">
        <li>
            <div class="file-item">
                <div class="file-item__row">
                    <button class="button button--discrete" type="button">
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-pdf" />
                        </svg>
                        <span class="file-item__file-name">hyra.pdf</span>
                    </button>
                    <button
                        class="button button--discrete file-item__file-remove"
                        type="button"
                    >
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-trashcan" />
                        </svg>
                        Ta bort
                        <span class="sr-only">hyra.pdf</span>
                    </button>
                </div>
                <hr class="file-row-separator" />
            </div>
        </li>
        <li>
            <div class="file-item">
                <div class="file-item__row">
                    <button class="button button--discrete" type="button">
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-pdf" />
                        </svg>
                        <span class="file-item__file-name">lön.pdf</span>
                    </button>
                    <button
                        class="button button--discrete file-item__file-remove"
                        type="button"
                    >
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-trashcan" />
                        </svg>
                        Ta bort
                        <span class="sr-only">lön.pdf</span>
                    </button>
                </div>
                <hr class="file-row-separator" />
            </div>
        </li>
        <li>
            <div class="file-item">
                <div class="file-item__row">
                    <button class="button button--discrete" type="button">
                        <span class="file-item__file-name">kontrakt.jpeg</span>
                        <svg focusable="false" class="icon button__icon">
                            <use xlink:href="#f-icon-pic" />
                        </svg>
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
                            <span class="sr-only">kontrakt.jpeg</span>
                        </button>
                    </div>
                </div>
                <div class="file-uploading progress file-item__file-uploading">
                    <span
                        class="progress__meter progress__meter--inprogress"
                        style="width: 40%;"
                        role="progressbar"
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="40"
                        aria-valuetext="Du har slutfört 40%"
                    >
                        <span class="sr-only">Du har slutfört 40%</span>
                    </span>
                </div>
                <hr />
            </div>
        </li>
    </ul>

    <div class="message-box message-box--info file-uploader__message-box">
        <span class="message-box__icon">
            <span class="icon-stack icon-stack--info">
                <svg focusable="false" class="icon f-icon-circle">
                    <use xlink:href="#f-icon-circle"></use>
                </svg>
                <svg focusable="false" class="icon f-icon-i">
                    <use xlink:href="#f-icon-i"></use>
                </svg>
            </span>
        </span>
        <h3 class="message-box__heading">
            Du kan inte lägga till fler bilagor
        </h3>
    </div>
    <div class="file-selector">
        <input type="file" disabled id="file-selector-element-10" />
        <label
            for="file-selector-element-10"
            role="button"
            class="disabled button button--discrete"
        >
            <svg focusable="false" class="icon button__icon">
                <use xlink:href="#f-icon-paper-clip" />
            </svg>
            Ladda upp fil
        </label>
    </div>
</div>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~
