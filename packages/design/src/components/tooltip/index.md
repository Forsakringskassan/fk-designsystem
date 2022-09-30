---
title: Tooltip
layout: component
status: Produktionsklar
---

## Exempel

### Tooltip standardutförande

```html
<div>
    <div class="tooltip-before">
        <label class="label tooltip-before__label">Broschyrer</label>
    </div>
    <div class="tooltip">
        <div class="tooltip__container">
            <button type="button" aria-expanded="true" class="tooltip__button">
                <span class="icon-stack icon-stack--tooltip">
                    <svg focusable="false" class="icon f-icon-circle">
                        <use xlink:href="#f-icon-circle"></use>
                    </svg>
                    <svg focusable="false" class="icon f-icon-i">
                        <use xlink:href="#f-icon-i"></use>
                    </svg>
                </span>
                <span class="sr-only">
                    Denna text syns bara för skärmläsare
                </span>
            </button>
            <div style="height: auto;">
                <div tabindex="-1" class="tooltip__content-wrapper">
                    <span
                        class="tooltip__arrow tooltip__arrow--animation"
                        style="left: 100.398px;"
                    ></span>
                    <div class="tooltip__content">
                        <div class="tooltip__body">
                            <div class="tooltip__header">Broschyrer</div>
                            Här väljer du om du vill ha broschyrer eller
                            faktablad och vilka områden du är intresserad av.
                            Broschyrer innehåller övergripande information och
                            faktablad innehåller mer detaljerad information.
                        </div>
                        <div class="iflex iflex--float-right">
                            <div
                                class="iflex__item iflex--align-top iflex--shrink"
                            >
                                <button
                                    type="button"
                                    class="button button--discrete-inverted"
                                >
                                    <span>Stäng</span>
                                    <svg
                                        focusable="false"
                                        class="icon button__icon f-icon-close"
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
</div>
```

### Tooltip med h-tagg utanför tooltip

```html
<div>
    <div class="tooltip-before">
        <h4 class="label tooltip-before__label">
            Bor det barn som har fyllt 18 år i bostaden?
        </h4>
    </div>
    <div class="tooltip">
        <div class="tooltip__container">
            <button type="button" aria-expanded="true" class="tooltip__button">
                <span class="icon-stack icon-stack--tooltip">
                    <svg focusable="false" class="icon f-icon-circle">
                        <use xlink:href="#f-icon-circle"></use>
                    </svg>
                    <svg focusable="false" class="icon f-icon-i">
                        <use xlink:href="#f-icon-i"></use>
                    </svg>
                    <span class="sr-only"
                        >Denna text syns bara för skärmläsare</span
                    >
                </span>
            </button>
            <div style="height: auto;">
                <div tabindex="-1" class="tooltip__content-wrapper">
                    <span
                        class="tooltip__arrow tooltip__arrow--animation"
                        style="left: 341.398px;"
                    ></span>
                    <div class="tooltip__content">
                        <div class="tooltip__body">
                            <div class="tooltip__header">
                                Bor det barn som har fyllt 18 år i bostaden?
                            </div>
                            Här svarar du på om du har ett eller flera barn som
                            fyllt 18 i din bostad. Alla personer som fyllt 18
                            idag (2020-05-20) eller tidigare på året beräknas
                            med i denna grupp.
                        </div>
                        <div class="iflex iflex--float-right">
                            <div
                                class="iflex__item iflex--align-top iflex--shrink"
                            >
                                <button
                                    type="button"
                                    class="button button--discrete-inverted"
                                >
                                    <span>Stäng</span>
                                    <svg
                                        focusable="false"
                                        class="icon button__icon f-icon-close"
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
</div>
```

### Tooltip med h-tagg utanför och inuti tooltip

```html
<div>
    <div class="tooltip-before">
        <h4 class="label tooltip-before__label">Ditt val av karensdagar</h4>
    </div>
    <div class="tooltip">
        <div class="tooltip__container">
            <button type="button" aria-expanded="true" class="tooltip__button">
                <span class="icon-stack icon-stack--tooltip">
                    <svg focusable="false" class="icon f-icon-circle">
                        <use xlink:href="#f-icon-circle"></use>
                    </svg>
                    <svg focusable="false" class="icon f-icon-i">
                        <use xlink:href="#f-icon-i"></use>
                    </svg>
                    <span class="sr-only"
                        >Denna text syns bara för skärmläsare</span
                    >
                </span>
            </button>
            <div style="height: auto;">
                <div tabindex="-1" class="tooltip__content-wrapper">
                    <span
                        class="tooltip__arrow tooltip__arrow--animation"
                        style="left: 189.398px;"
                    ></span>
                    <div class="tooltip__content">
                        <div class="tooltip__body">
                            <h5 class="tooltip__header">
                                Ditt val av karensdagar
                            </h5>
                            Karensdagar är dagar i början av en sjukskrivning
                            utan ersättning. Du som har inkomst av
                            näringsverksamhet kan välja att ha 1, 7, 14, 30, 60
                            eller 90 karensdagar. Om du inte gör något val har
                            du 7 karensdagar. Ju fler karensdagar du har, desto
                            lägre blir din sjukförsäkringsavgift. När du fyllt
                            55 år kan du inte ändra till en kortare karenstid än
                            7 dagar.
                        </div>
                        <div class="iflex iflex--float-right">
                            <div
                                class="iflex__item iflex--align-top iflex--shrink"
                            >
                                <button
                                    type="button"
                                    class="button button--discrete-inverted"
                                >
                                    <span>Stäng</span>
                                    <svg
                                        focusable="false"
                                        class="icon button__icon f-icon-close"
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
</div>
```

### Tooltip med längre text

```html
<div>
    <div class="tooltip-before">
        <label class="label tooltip-before__label">Berätta om dig själv</label>
    </div>
    <div class="tooltip">
        <div class="tooltip__container">
            <button type="button" aria-expanded="true" class="tooltip__button">
                <span class="icon-stack icon-stack--tooltip">
                    <svg focusable="false" class="icon f-icon-circle">
                        <use xlink:href="#f-icon-circle"></use>
                    </svg>
                    <svg focusable="false" class="icon f-icon-i">
                        <use xlink:href="#f-icon-i"></use>
                    </svg>
                    <span class="sr-only"
                        >Denna text syns bara för skärmläsare</span
                    >
                </span>
            </button>
            <div style="height: auto;">
                <div tabindex="-1" class="tooltip__content-wrapper">
                    <span
                        class="tooltip__arrow tooltip__arrow--animation"
                        style="left: 165.398px;"
                    ></span>
                    <div class="tooltip__content">
                        <div class="tooltip__body">
                            <div class="tooltip__header">
                                Berätta om dig själv
                            </div>
                            <p>
                                Denna berättelsen kräver lite närmare
                                förklaring.
                            </p>
                            <p>
                                Berätta om dig själv, en väldigt vanlig fråga
                                som bör ställas under en intervju. I
                                intervjusammanhang kan detta vara en svår fråga
                                då man är en en fas av ständig rädsla. Detta kan
                                tyckas underligt då det är en till synes enkel
                                och harmlös fråga. Vi kommer i följande text gå
                                igenom hur detta kan presenteras.
                            </p>
                            <p>
                                Man ombeds ofta i tangens med ovanstående fråga
                                att berätta lite om sin karriär, fraser som
                                "berätta om dig själv" eller "sammanfatta din
                                karriär med ett ord". Detta kan uppfattas som
                                underligt då man precis lämnat över sin cv med
                                samtliga karriärsval prydligt uppradade.
                            </p>
                            <p>
                                Den som intervjuar dig vill dock inte ha dina
                                tidigare erfarenheter uppradade i kronologisk
                                ordning utan en personlig berättelse om hur
                                dessa upplevelser har format och påverkat ditt
                                liv.
                            </p>
                            <p>
                                Kanske inte ditt liv, men din karriär i alla
                                fall. Behöver inte bli för dramatiska här. Ett
                                bra tips är att fokusera på de arbetsrelaterade
                                krav som tidigare påpekats under intervjun eller
                                från ansökan.
                            </p>
                            <p>
                                Har lite svårt att ge en mer utförlig förklaring
                                till hur en arbetsintervju bör behandals utifrån
                                individen här, så får försöka skriva lite för
                                att fylla ut texten nu, men detta kanske räcker
                                så hoppas att det blev klart.
                            </p>
                            <p>
                                ...Det blev det visst inte på större skärmar så
                                nu blir det lite utfyllandstext bara...
                            </p>
                            <p>
                                ...Detta är en utfyllnadstext, du kan läsa om
                                ovanstående text om du vill...
                            </p>
                            <p>
                                ...Detta är en utfyllnadstext, du kan läsa om
                                ovanstående text om du vill...
                            </p>
                            <p>
                                ...Detta är en utfyllnadstext, du kan läsa om
                                ovanstående text om du vill...
                            </p>
                            <p>
                                ...Detta är en utfyllnadstext, du kan läsa om
                                ovanstående text om du vill...
                            </p>
                            <p>
                                ...Detta är en utfyllnadstext, du kan läsa om
                                ovanstående text om du vill...
                            </p>
                            <p>
                                ...Detta är en utfyllnadstext, du kan läsa om
                                ovanstående text om du vill...
                            </p>
                            <p>
                                ...Detta är en utfyllnadstext, du kan läsa om
                                ovanstående text om du vill...
                            </p>
                            <p>
                                ...Detta är en utfyllnadstext, du kan läsa om
                                ovanstående text om du vill...
                            </p>
                            <p>
                                ...Detta är en utfyllnadstext, du kan läsa om
                                ovanstående text om du vill...
                            </p>
                            <p>
                                ...Detta är en utfyllnadstext, du kan läsa om
                                ovanstående text om du vill...
                            </p>
                        </div>
                        <div class="iflex iflex--float-right">
                            <div
                                class="iflex__item iflex--align-top iflex--shrink"
                            >
                                <button
                                    type="button"
                                    class="button button--discrete-inverted"
                                    tabindex="-1"
                                    aria-hidden="true"
                                >
                                    <span>Stäng</span>
                                    <svg
                                        focusable="false"
                                        class="icon button__icon f-icon-close"
                                    >
                                        <use xlink:href="#f-icon-close"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="iflex iflex--float-right">
                        <div class="iflex__item iflex--align-top iflex--shrink">
                            <button
                                type="button"
                                class="button button--discrete button--discrete--black"
                            >
                                <span>Stäng</span>
                                <svg
                                    focusable="false"
                                    class="icon button__icon f-icon-close"
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

## Övrigt

### Länkar

~~Användargränssnitt - Designguide 2.0, Förvaltningsdokumentation och Figma komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
