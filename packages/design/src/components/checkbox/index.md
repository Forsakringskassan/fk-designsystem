---
title: Kryssruta
layout: component
status: Produktionsklar
---

**Komponent motsvarar följande HTML element:** [fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset), [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)

## Exempel

### Kryssrutor med rekommenderade attribut satta

```html
<fieldset id="broschyrer" name="broschyrer" class="checkbox-group">
    <legend class="label checkbox-group__label">Broschyrer</legend>

    <div class="checkbox-group__content">
        <div class="checkbox">
            <input
                type="checkbox"
                name="broschyrer-arbetsgivare"
                id="broschyrer-arbetsgivare"
                class="checkbox__input"
                value="Till dig som är arbetsgivare"
            />
            <label for="broschyrer-arbetsgivare" class="checkbox__label">
                Till dig som är arbetsgivare
            </label>
        </div>
        <div class="checkbox">
            <input
                type="checkbox"
                name="broschyrer-offentlighet-och-sekretess"
                id="broschyrer-offentlighet-och-sekretess"
                class="checkbox__input"
                value="Offentlighet och sekretess"
            />
            <label
                for="broschyrer-offentlighet-och-sekretess"
                class="checkbox__label"
            >
                Offentlighet och sekretess
            </label>
        </div>
        <div class="checkbox disabled">
            <input
                type="checkbox"
                name="broschyrer-tandvard"
                id="broschyrer-tandvard"
                class="checkbox__input"
                disabled
                value="Om du behöver tandvård"
            />
            <label for="broschyrer-tandvard" class="checkbox__label">
                Om du behöver tandvård (restnoterad)
            </label>
        </div>
    </div>
</fieldset>
```

### Kryssrutor med hjälptext

```html
<fieldset
    id="broschyrer-hjalptext"
    name="broschyrer-hjalptext"
    class="checkbox-group"
    data-required=""
    data-test="brochures-checkbox-group"
>
    <legend class="label checkbox-group__label">
        Broschyrer
        <span class="label__description"
            >Här väljer du om du vill ha broschyrer eller faktablad</span
        >
    </legend>

    <div class="checkbox-group__content">
        <div
            class="checkbox"
            data-test="broschyrer-hjalptext-vantar-eller-fatt-barn-checkbox-group-field"
        >
            <input
                type="checkbox"
                name="broschyrer-hjalptext-vantar-eller-fatt-barn"
                id="broschyrer-hjalptext-vantar-eller-fatt-barn"
                class="checkbox__input"
                value="Till alla som väntar eller just fått barn"
                required
                aria-invalid="false"
            />
            <label
                for="broschyrer-hjalptext-vantar-eller-fatt-barn"
                class="checkbox__label"
            >
                Till alla som väntar eller just fått barn
            </label>
        </div>
        <div
            class="checkbox"
            data-test="broschyrer-hjalptext-barnfamiljer-checkbox-group-field"
        >
            <input
                type="checkbox"
                name="broschyrer-hjalptext-barnfamiljer"
                id="broschyrer-hjalptext-barnfamiljer"
                class="checkbox__input"
                value="Till alla barnfamiljer"
                required
                aria-invalid="false"
            />
            <label
                for="broschyrer-hjalptext-barnfamiljer"
                class="checkbox__label"
            >
                Till alla barnfamiljer
            </label>
        </div>
        <div
            class="checkbox"
            data-test="broschyrer-hjalptext-beslut-och-ersattning-checkbox-group-field"
        >
            <input
                type="checkbox"
                name="broschyrer-hjalptext-beslut-och-ersattning"
                id="broschyrer-hjalptext-beslut-och-ersattning"
                class="checkbox__input"
                value="Rätt beslut och rätt ersättning"
                required
                aria-invalid="false"
            />
            <label
                for="broschyrer-hjalptext-beslut-och-ersattning"
                class="checkbox__label"
            >
                Rätt beslut och rätt ersättning
            </label>
        </div>
    </div>
</fieldset>
```

### Kryssrutor med tooltip

```html
<fieldset
    id="broschyrer-tooltip"
    name="broschyrer-tooltip"
    class="checkbox-group"
>
    <legend class="label sr-only">Broschyrer</legend>
    <div class="sr-separator">
        <div aria-hidden="true" class="tooltip-before">
            <div class="label tooltip-before__label checkbox-group__label">
                Broschyrer
            </div>
        </div>
        <div class="tooltip">
            <div class="tooltip__container">
                <button
                    type="button"
                    aria-expanded="true"
                    class="tooltip__button"
                >
                    <span class="icon-stack icon-stack--tooltip">
                        <svg focusable="false" class="icon f-icon-circle">
                            <use xlink:href="#f-icon-circle"></use>
                        </svg>
                        <svg focusable="false" class="icon f-icon-i">
                            <use xlink:href="#f-icon-i"></use>
                        </svg>
                    </span>
                    <span class="sr-only">Läs mer om Broschyrer</span>
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
                                faktablad och vilka områden du är intresserad
                                av. Broschyrer innehåller övergripande
                                information och faktablad innehåller mer
                                detaljerad information.
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
                                            <use
                                                xlink:href="#f-icon-close"
                                            ></use>
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

    <div class="checkbox-group__content">
        <div class="checkbox">
            <input
                type="checkbox"
                name="broschyrer-tooltip-vantar-eller-fatt-barn"
                id="broschyrer-tooltip-vantar-eller-fatt-barn"
                class="checkbox__input"
                value="Till alla som väntar eller just fått barn"
            />
            <label
                for="broschyrer-tooltip-vantar-eller-fatt-barn"
                class="checkbox__label"
            >
                Till alla som väntar eller just fått barn
            </label>
        </div>
        <div class="checkbox">
            <input
                type="checkbox"
                name="broschyrer-tooltip-barnfamiljer"
                id="broschyrer-tooltip-barnfamiljer"
                class="checkbox__input"
                value="Till alla barnfamiljer"
            />
            <label
                for="broschyrer-tooltip-barnfamiljer"
                class="checkbox__label"
            >
                Till alla barnfamiljer
            </label>
        </div>
        <div class="checkbox">
            <input
                type="checkbox"
                name="broschyrer-tooltip-beslut-och-ersattning"
                id="broschyrer-tooltip-beslut-och-ersattning"
                class="checkbox__input"
                value="Rätt beslut och rätt ersättning"
            />
            <label
                for="broschyrer-tooltip-beslut-och-ersattning"
                class="checkbox__label"
            >
                Rätt beslut och rätt ersättning
            </label>
        </div>
    </div>
</fieldset>
```

### Kryssrutor med tooltip och hjälptext

```html
<fieldset
    id="broschyrer-hjalptext-tooltip"
    name="broschyrer-hjalptext-tooltip"
    class="checkbox-group"
>
    <legend class="label sr-only">Broschyrer</legend>
    <div class="sr-separator">
        <div aria-hidden="true" class="tooltip-before">
            <div class="label tooltip-before__label">Broschyrer</div>
        </div>
        <div class="tooltip">
            <div class="tooltip__container">
                <button
                    type="button"
                    aria-expanded="true"
                    class="tooltip__button"
                >
                    <span class="icon-stack icon-stack--tooltip">
                        <svg focusable="false" class="icon f-icon-circle">
                            <use xlink:href="#f-icon-circle"></use>
                        </svg>
                        <svg focusable="false" class="icon f-icon-i">
                            <use xlink:href="#f-icon-i"></use>
                        </svg>
                    </span>

                    <span class="sr-only"> Läs mer om Broschyrer </span>
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
                                faktablad och vilka områden du är intresserad
                                av. Broschyrer innehåller övergripande
                                information och faktablad innehåller mer
                                detaljerad information.
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
                                            <use
                                                xlink:href="#f-icon-close"
                                            ></use>
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
    <div class="label checkbox-group__label">
        <span class="label__description"
            >Här väljer du om du vill ha broschyrer eller faktablad</span
        >
    </div>
    <div class="checkbox-group__content">
        <div class="checkbox">
            <input
                type="checkbox"
                name="broschyrer-hjalptext-tooltip-vantar-eller-fatt-barn"
                id="broschyrer-hjalptext-tooltip-vantar-eller-fatt-barn"
                class="checkbox__input"
                value="Till alla som väntar eller just fått barn"
            />
            <label
                for="broschyrer-hjalptext-tooltip-vantar-eller-fatt-barn"
                class="checkbox__label"
            >
                Till alla som väntar eller just fått barn
            </label>
        </div>
        <div class="checkbox">
            <input
                type="checkbox"
                name="broschyrer-hjalptext-tooltip-barnfamiljer"
                id="broschyrer-hjalptext-tooltip-barnfamiljer"
                class="checkbox__input"
                value="Till alla barnfamiljer"
            />
            <label
                for="broschyrer-hjalptext-tooltip-barnfamiljer"
                class="checkbox__label"
            >
                Till alla barnfamiljer
            </label>
        </div>
        <div class="checkbox">
            <input
                type="checkbox"
                name="broschyrer-hjalptext-tooltip-beslut-och-ersattning"
                id="broschyrer-hjalptext-tooltip-beslut-och-ersattning"
                class="checkbox__input"
                value="Rätt beslut och rätt ersättning"
            />
            <label
                for="broschyrer-hjalptext-tooltip-beslut-och-ersattning"
                class="checkbox__label"
            >
                Rätt beslut och rätt ersättning
            </label>
        </div>
    </div>
</fieldset>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~

Gruppering av kryssrutor: ~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~

Kryssruta: ~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
