---
title: Logotyp
status: Preliminär
layout: component
component: FLogo
---

Logotyp används för att visa en responsiv logo.

```import live-example
FLogoLiveExample.vue
```

## Ange logotyp

För att bestämma vilken logo som ska visas används CSS variabler för respektive storlek.
För att kunna använda `FLogo` med `responsive` krävs det att båda variabler är satta.

```css
--f-logo-image-small: url("path/to/image-small.svg");
--f-logo-image-large: url("path/to/image-large.svg");
```

För att ändra logotypens storlek använd följande CSS variabler:

```css
--f-logo-size-small: 0.6rem;
--f-logo-size-large: 0.6rem 4rem;
```

## API

:::api
vue:FLogo
:::
