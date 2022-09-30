---
title: Ikonbibliotek
layout: component
---

Ikoner i FKUI använder en (eller flera) SVG spitesheets och refererar till en specifik ikon med `<svg><use xlink:href=".."></svg>`.
En SVG spritesheet består av en osynlig svg inlined i dokumentet:

```html raw
<div style="display: none;">
    <svg></svg>
</div>
```

Den består i sin tur av flera inbäddade `<symbol>` där varje symbol är en enskild ikon.
Varje symbol har ett unikt id och `viewBox="0 0 512 512"`.

```html raw
<div style="display: none;">
    <svg>
        <symbol id="my-first-icon">
            <path ...></path>
        </symbol>
        <symbol id="my-other-icon">
            <path ...></path>
        </symbol>
    </svg>
</div>
```

I exemplet ovan skapas en spritesheet med två ikoner `my-first-icon` och `my-other-icon`.
För att använda dem använder du `<svg><use xlink:href="#my-first-icon"></svg>`.
Den omkringliggande containern `<div>` är dold för att inte själva spritesheeten ska synas.

Ikoner designas med en yta på 512x512 och ska i regel ta upp hela tillgängliga ytan.
Undantag kan göras av rent kosmetiska skäl men ska inte användas för att lägga till marginal eller padding runt ikonen.
Det styrs med CSS.
Den luft som ligger runtom räknas som en del av ikonen och kan inte justeras utifrån.
Det finns idag inte stöd för variabel bredd på ikoner.

För enfärgade ikoner ska du använda `fill="currentColor"`.
Du kan också märka upp elementen med CSS-klasser och därefter använda CSS för att sätta `fill`.

Använd gärna ett verktyg för att minifiera ikoner och städa bort duplicerade ID:n.
