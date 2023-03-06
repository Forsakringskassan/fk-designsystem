---
title: Modal dialogruta
layout: component
status: Produktionsklar
---

## Usage

```html raw
<div class="modal">
    <div class="modal__inner-container">
        <div class="modal__dialog-container">
            <div class="modal__dialog">
                <div class="modal__dialog-inner">
                    <div class="modal__header">Header</div>
                    <div class="modal__content">Content</div>
                    <div class="modal__footer">Footer</div>
                </div>
                <div class="modal__shelf">Buttons</div>
            </div>
        </div>
    </div>
</div>
```

## Exempel

### Standard

Modal dialogruta i standardutförande. Inget färgschema och ingen rubrik-ikon.

```html
<div class="modal">
    <!-- Hide backdrop in demos. -->
    <!-- <div class="modal__backdrop"> -->
    <!-- <div class="modal__outer-container" tabindex="-1" role="dialog" aria-modal="true"> -->
    <div class="modal__inner-container">
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

                <div class="modal__shelf">
                    <button
                        type="button"
                        class="button button--discrete button--discrete--black modal__close-button"
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
</div>
```

### Information

Modal dialogruta i informationsutförande. Använder färgschema och ikon som motsvarande informationmeddelande-ruta.

```html
<div class="modal modal--information">
    <!-- Hide backdrop in demos. -->
    <!-- <div class="modal__backdrop"> -->
    <!-- <div class="modal__outer-container" tabindex="-1" role="dialog" aria-modal="true"> -->
    <div class="modal__inner-container">
        <div class="modal__dialog-container">
            <div class="modal__dialog">
                <div class="modal__dialog-inner">
                    <div class="modal__header">
                        <span
                            class="modal__title-icon icon-stack icon-stack--info"
                        >
                            <svg focusable="false" class="icon f-icon-circle">
                                <use xlink:href="#f-icon-circle"></use>
                            </svg>
                            <svg focusable="false" class="icon f-icon-i">
                                <use xlink:href="#f-icon-i"></use>
                            </svg>
                        </span>

                        <h1 class="modal__title">Viktigt</h1>
                    </div>

                    <div class="modal__content">
                        Träutensilierna i ett tryckeri äro ingalunda en oviktig
                        faktor, för trevnadens, ordningens och ekonomiens
                        upprätthållande, och dock är det icke sällan som
                        sorgliga erfarenheter göras på grund af det oförstånd
                        med hvilket kaster, formbräden och regaler tillverkas
                        och försäljas Kaster som äro dåligt hopkomna och af
                        otillräckligt.
                    </div>

                    <div class="modal__footer">
                        <div class="button-group">
                            <button
                                type="button"
                                class="button button--primary button-group__item"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>

                <div class="modal__shelf">
                    <button
                        type="button"
                        class="button button--discrete button--discrete--black modal__close-button"
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
</div>
```

### Varning

Modal dialogruta i varningsutförande. Använder färgschema och ikon som motsvarande varningsmeddelande-ruta.

```html
<div class="modal modal--warning">
    <!-- Hide backdrop in demos. -->
    <!-- <div class="modal__backdrop"> -->
    <!-- <div class="modal__outer-container" tabindex="-1" role="dialog" aria-modal="true"> -->
    <div class="modal__inner-container">
        <div class="modal__dialog-container">
            <div class="modal__dialog">
                <div class="modal__dialog-inner">
                    <div class="modal__header">
                        <span
                            class="modal__title-icon icon-stack icon-stack--warning"
                        >
                            <svg focusable="false" class="icon f-icon-circle">
                                <use xlink:href="#f-icon-circle"></use>
                            </svg>
                            <svg focusable="false" class="icon f-icon-alert">
                                <use xlink:href="#f-icon-alert"></use>
                            </svg>
                        </span>

                        <h1 class="modal__title">Varning!</h1>
                    </div>

                    <div class="modal__content">
                        Träutensilierna i ett tryckeri äro ingalunda en oviktig
                        faktor, för trevnadens, ordningens och ekonomiens
                        upprätthållande, och dock är det icke sällan som
                        sorgliga erfarenheter göras på grund af det oförstånd
                        med hvilket kaster, formbräden och regaler tillverkas
                        och försäljas Kaster som äro dåligt hopkomna och af
                        otillräckligt.
                    </div>

                    <div class="modal__footer">
                        <div class="button-group">
                            <button
                                type="button"
                                class="button button--primary button-group__item"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>

                <div class="modal__shelf">
                    <button
                        type="button"
                        class="button button--discrete button--discrete--black modal__close-button"
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
</div>
```

### Felmeddelande

Modal dialogruta i felmeddelandeutförande. Använder färgschema och ikon som motsvarande felmeddelande-ruta.

```html
<div class="modal modal--error">
    <!-- Hide backdrop in demos. -->
    <!-- <div class="modal__backdrop"> -->
    <!-- <div class="modal__outer-container" tabindex="-1" role="dialog" aria-modal="true"> -->
    <div class="modal__inner-container">
        <div class="modal__dialog-container">
            <div class="modal__dialog">
                <div class="modal__dialog-inner">
                    <div class="modal__header">
                        <span
                            class="modal__title-icon icon-stack icon-stack--error"
                        >
                            <svg focusable="false" class="icon f-icon-triangle">
                                <use xlink:href="#f-icon-triangle"></use>
                            </svg>
                            <svg focusable="false" class="icon f-icon-alert">
                                <use xlink:href="#f-icon-alert"></use>
                            </svg>
                        </span>

                        <h1 class="modal__title">Något gick fel!</h1>
                    </div>

                    <div class="modal__content">
                        Träutensilierna i ett tryckeri äro ingalunda en oviktig
                        faktor, för trevnadens, ordningens och ekonomiens
                        upprätthållande, och dock är det icke sällan som
                        sorgliga erfarenheter göras på grund af det oförstånd
                        med hvilket kaster, formbräden och regaler tillverkas
                        och försäljas Kaster som äro dåligt hopkomna och af
                        otillräckligt.
                    </div>

                    <div class="modal__footer">
                        <div class="button-group">
                            <button
                                type="button"
                                class="button button--primary button-group__item"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>

                <div class="modal__shelf">
                    <button
                        type="button"
                        class="button button--discrete button--discrete--black modal__close-button"
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
</div>
```

### Skrollning

Om innehållet i den modala dialogrutan inte får plats på skärmen så kommer webbläsarens rullningslist att visas.

```html
<p>Visa live exempel med dimmad bakgrund och modal dialogruta med skrollning</p>
<button
    type="button"
    class="button"
    onclick="ModalUtils.openModal('liveexample')"
>
    Öppna modal
</button>

<div id="liveexample" class="modal" style="display: none;">
    <div class="modal__backdrop">
        <div
            class="modal__outer-container"
            tabindex="-1"
            role="dialog"
            aria-modal="true"
        >
            <div class="modal__inner-container">
                <div class="modal__dialog-container">
                    <div class="modal__dialog">
                        <div class="modal__dialog-inner">
                            <div class="modal__header">
                                <h1 class="modal__title">Demo</h1>
                            </div>

                            <div class="modal__content">
                                <p>
                                    Detta är ett exempel på en modal dialogruta
                                    med lång text. Implementationer av modal
                                    dialogruta ska scrolla vid klick på knappen
                                    i botten av modala dialogrutan.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                                <p>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </p>
                            </div>

                            <div class="modal__footer">
                                <div class="button-group">
                                    <button
                                        type="button"
                                        class="button button--primary button-group__item"
                                        onclick="ModalUtils.closeModal('liveexample')"
                                    >
                                        OK
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="modal__shelf">
                            <button
                                type="button"
                                class="button button--discrete button--discrete--black modal__close-button"
                                onclick="ModalUtils.closeModal('liveexample')"
                            >
                                Stäng
                                <svg
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
        </div>
    </div>
</div>
```

### Alternativa storlekar

I desktop kan storleken ändras till någon av:

-   `small` (default)
-   `medium`
-   `large`
-   `fullscreen`

I mobil är storleken alltid fullskärm.

Du ändrar storleken genom att lägga till motsvarande CSS-klass `modal__dialog-container--$size`.
För att till exempel använda `large` lägger du till `modal__dialog_content--large`:

```diff raw
 <div class="modal">
     <div class="modal__inner-container">
-        <div class="modal__dialog-container">
+        <div class="modal__dialog-container modal__dialog-container--large">
             <div class="modal__dialog">
```

```html
<div class="text-field">
    <label for="modal-size-selector" class="label">Storlek</label>
    <div class="select-field__icon-wrapper">
        <select
            name="modal-size-selector"
            id="modal-size-selector"
            class="select-field__select"
            onchange="ModalUtils.setModalSize('size-live-example', this.value)"
        >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large" selected>Large</option>
            <option value="fullwidth">Fullwidth</option>
        </select>
        <svg
            focusable="false"
            class="icon select-field__icon f-icon-arrow-down"
        >
            <use xlink:href="#f-icon-arrow-down"></use>
        </svg>
    </div>
</div>
<div class="text-field">
    <label for="modal-fullscreen-selector" class="label">
        Fullskärm (mobil)
    </label>
    <div class="select-field__icon-wrapper">
        <select
            name="modal-fullscreen-selector"
            id="modal-fullscreen-selector"
            class="select-field__select"
            onchange="ModalUtils.setModalFullscreen('size-live-example', Boolean(this.value))"
        >
            <option value="true">Ja, fullskärm</option>
            <option value="">Nej, visa marginal</option>
        </select>
        <svg
            focusable="false"
            class="icon select-field__icon f-icon-arrow-down"
        >
            <use xlink:href="#f-icon-arrow-down"></use>
        </svg>
    </div>
</div>
<button
    type="button"
    class="button"
    onclick="ModalUtils.openModal('size-live-example')"
>
    Öppna modal
</button>

<div id="size-live-example" class="modal" style="display: none;">
    <div class="modal__backdrop">
        <div
            class="modal__outer-container"
            tabindex="-1"
            role="dialog"
            aria-modal="true"
        >
            <div class="modal__inner-container">
                <div
                    class="modal__dialog-container modal__dialog-container--fullscreen modal__dialog-container--large"
                >
                    <div class="modal__dialog">
                        <div class="modal__dialog-inner">
                            <div class="modal__header">
                                <h1 class="modal__title">Demo</h1>
                            </div>

                            <div class="modal__content">
                                <span>
                                    Detta är ett exempel på en modal dialogruta
                                    med lång text. Implementationer av modal
                                    dialogruta ska scrolla vid klick på knappen
                                    i botten av modala dialogrutan.
                                </span>
                                <span>
                                    Träutensilierna i ett tryckeri äro ingalunda
                                    en oviktig faktor, för trevnadens,
                                    ordningens och ekonomiens upprätthållande,
                                    och dock är det icke sällan som sorgliga
                                    erfarenheter göras på grund af det oförstånd
                                    med hvilket kaster, formbräden och regaler
                                    tillverkas och försäljas Kaster som äro
                                    dåligt hopkomna och af otillräckligt.
                                </span>
                            </div>

                            <div class="modal__footer">
                                <div class="button-group">
                                    <button
                                        type="button"
                                        class="button button--primary button-group__item"
                                        onclick="ModalUtils.closeModal('size-live-example')"
                                    >
                                        OK
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="modal__shelf">
                            <button
                                type="button"
                                class="button button--discrete button--discrete--black modal__close-button"
                                onclick="ModalUtils.closeModal('size-live-example')"
                            >
                                Stäng
                                <svg
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
        </div>
    </div>
</div>
```

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
