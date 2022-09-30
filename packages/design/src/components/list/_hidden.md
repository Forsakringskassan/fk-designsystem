---
title: Lista
layout: component
status: Produktionsklar
---

## Exempel

### Lista som visar entiteter - ej valbara

Används som alternativ till tabell. Test med nästlade listor (SFKUI-3949)

```html
<ul class="list">
    <li class="list__item">
        <div class="list__item__itempane">
            Eko-Banan
            <ul>
                <li>
                    Med mogen
                    <ul>
                        <li>Skal</li>
                    </ul>
                </li>
                <li>Gul</li>
                <li>Eko</li>
            </ul>
        </div>
    </li>
    <li class="list__item">
        <div class="list__item__itempane ">Apelsin</div>
    </li>
    <li class="list__item">
        <div class="list__item__itempane">Äpple</div>
    </li>
</ul>
```
