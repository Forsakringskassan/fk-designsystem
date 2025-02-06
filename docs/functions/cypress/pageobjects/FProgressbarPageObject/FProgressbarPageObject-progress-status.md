---
name: FProgressbarPageObject.progressStatus
title: "FProgressbarPageObject: progressStatus() method"
short-title: progressStatus()
layout: article
---

Används för att hämta del av klassnamn på förloppsindikatorns progress.

## Syntax

```ts
progressStatus();
```

### Returvärde

`String` som innehåller en del av klassnamnet på statusen på förloppsindikatorn.
Hela klassens namn är: progress\_\_meter--XXX, där XXX är en utav dessa klassnamnen:

- inprogress
  för värdena mellan 1-99%
- pending
  när ingen status finns ännu det vill säga 0%
- finished
  när värdet är 100%

## Exempel

```import static
FProgressbarPageObject-progress-status.vue
```

```import
FProgressbarPageObject-progress-status.cy.ts
```

## Relaterat

- {@link FProgressbar}
