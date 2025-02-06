---
title: Sidhuvud
status: Produktionsklar
layout: component
component: FPageHeader
---

Sidhuvud ska visas längst upp på applikationer som öppnas i ett eget webbläsarfönster.
Den kan innehålla en logotyp, applikationsnamn samt användarinformation.

```import
FPageHeaderDefault.vue
```

## Logotyp

För att lägga till en logotyp använd slot `logo`.
Du kan med fördel använda {@link FLogo `FLogo`} för att ange logotyp.

```diff
 <f-page-header>
+    <template #logo>
+        <f-logo aria-label="awesome logo"></f-logo>
+    </template>
 </f-page-header>
```

Se även nedan exempel för hur du kan göra en egen logotyp med brytpunkt utan att använda `FLogo`.

```import
FPageHeaderCustomLogo.vue
```

## Skiplink

Skiplink är en särskild länk som fungerar som det första tabbningsbara elementet och visas endast när det fokuserats.
Syftet är att snabbt låta en tangenbordsnavigerande användare hoppa till det primära innehållet utan att navigera genom navigeringsmenyer osv.

Skiplink aktiveras genom att sätta `skipLink` till det id som innehåller det primära innehållet:

```diff
 <header>
     <f-page-header
+        skip-link="awesome-id"
     </f-page-header>
 </header>
+<main>
+    <h1 id="awesome-id" tabindex="-1">
+</main>
```

Notera att elementet måste vara fokuserbart.

## API

:::api
vue:FPageHeader
:::
