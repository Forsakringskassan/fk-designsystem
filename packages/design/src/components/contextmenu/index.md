---
title: Kontextuell meny
layout: component
---

## Exempel med ikon

```html
<div class="contextmenu popup">
    <div
        role="presentation"
        class="popup__wrapper"
        style="left: 0px; top: -50px"
    >
        <nav class="contextmenu">
            <ul role="menu" tabindex="-1" class="contextmenu__list">
                <li role="presentation">
                    <div tabindex="-1" class="contextmenu__list__item">
                        <svg
                            focusable="false"
                            class="icon contextmenu__lefticon f-icon-print"
                        >
                            <use xlink:href="#f-icon-print"></use>
                        </svg>
                        <a role="menuitem">Skriv ut</a>
                    </div>
                </li>
                <li role="presentation">
                    <div tabindex="-1" class="contextmenu__list__item">
                        <svg
                            focusable="false"
                            class="icon contextmenu__lefticon f-icon-bell"
                        >
                            <use xlink:href="#f-icon-bell"></use>
                        </svg>
                        <a role="menuitem">Påminnelse</a>
                    </div>
                </li>
                <li role="presentation">
                    <div tabindex="-1" class="contextmenu__list__item">
                        <svg
                            focusable="false"
                            class="icon contextmenu__lefticon f-icon-pen"
                        >
                            <use xlink:href="#f-icon-pen"></use>
                        </svg>
                        <a role="menuitem">Ändra</a>
                    </div>
                    <hr class="contextmenu__separator" />
                </li>
                <li role="presentation">
                    <div tabindex="-1" class="contextmenu__list__item">
                        <svg
                            focusable="false"
                            class="icon contextmenu__lefticon f-icon-trashcan"
                        >
                            <use xlink:href="#f-icon-trashcan"></use>
                        </svg>
                        <a role="menuitem">Ta bort</a>
                    </div>
                </li>
                <li role="presentation">
                    <div tabindex="-1" class="contextmenu__list__item">
                        <svg
                            focusable="false"
                            class="icon contextmenu__lefticon f-icon-"
                        >
                            <use xlink:href="#f-icon-"></use>
                        </svg>
                        <a role="menuitem">Utan ikon</a>
                    </div>
                    <hr class="contextmenu__separator" />
                </li>
                <li role="presentation">
                    <div tabindex="-1" class="contextmenu__list__item">
                        <svg
                            focusable="false"
                            class="icon contextmenu__lefticon f-icon-calendar"
                        >
                            <use xlink:href="#f-icon-calendar"></use>
                        </svg>
                        <a role="menuitem">Sista</a>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</div>
<!-- Intentional blank lines to be able to open the menu popup under -->
<pre>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
</pre>
```

## Exempel med endast text

```html
<div class="contextmenu popup">
    <div
        role="presentation"
        class="popup__wrapper"
        style="left: 0px; top: -50px"
    >
        <nav class="contextmenu">
            <ul role="menu" tabindex="-1" class="contextmenu__list">
                <li role="presentation">
                    <div tabindex="-1" class="contextmenu__list__item">
                        <a role="menuitem">Skriv ut</a>
                    </div>
                </li>
                <li role="presentation">
                    <div tabindex="-1" class="contextmenu__list__item">
                        <a role="menuitem">Påminnelse</a>
                    </div>
                </li>
                <li role="presentation">
                    <div tabindex="-1" class="contextmenu__list__item">
                        <a role="menuitem">Ändra</a>
                    </div>
                    <hr class="contextmenu__separator" />
                </li>
                <li role="presentation">
                    <div tabindex="-1" class="contextmenu__list__item">
                        <a role="menuitem">Ta bort</a>
                    </div>
                </li>
                <li role="presentation">
                    <div tabindex="-1" class="contextmenu__list__item">
                        <a role="menuitem">Utan ikon</a>
                    </div>
                    <hr class="contextmenu__separator" />
                </li>
                <li role="presentation">
                    <div tabindex="-1" class="contextmenu__list__item">
                        <a role="menuitem"
                            >Sista menyval med längsta bredd som överstiger
                            260px</a
                        >
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</div>
<!-- Intentional blank lines to be able to open the menu popup under -->
<pre>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
</pre>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation -Startpunkt för komponent~~

~~Designriktlinjersjälvbetjäning~~

~~Designriktlinjer interna system~~

~~FKUI Vue - Vue komponent som innehåller logik och interaktion baserad på FKUI Design~~
