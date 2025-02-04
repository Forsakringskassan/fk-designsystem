---
title: På gång
name: release-plan
layout: pattern
---

## Nyligen släppt

I den senaste releasen, [6.0.0](https://github.com/Forsakringskassan/designsystem/releases/tag/v6.0.0), infördes följande uppdateringar:

- Vi har tagit bort stöd för containermanéret då det inte uppfyller krav på tillgänglighet. De relaterade komponenterna formulär (FForm), formulärsteg (FFormStep) och formulärstegsknapp (FFormStepButton) har tagits bort. Vi rekommenderar att du istället använder en {@link FWizard steg för steg-guide} (FWizard) eller {@link FValidationForm valideringsformulär} (FValidationForm).

I den föregående releasen [5.46.0](https://github.com/Forsakringskassan/designsystem/releases/tag/v5.46.0) infördes följande uppdateringar:

- Vi har lagt till stöd för validering av {@link FCard kort} (FCard).
- För {@link FWizard guidesteg} (FWizardStep) har vi lagt till stöd för att exponera stegnummer i slottar och att kunna köra åtgärder innan navigering till nästa steg.
- I {@link FCalendar kalender} (FCalendar) har vi ändrat från role:applikation till role:grid för att förbättra tillgängligheten (buggfix).

Vi har också nyligen släppt följande:

- Uppdatering av semantiska tokens för färger är påbörjad och komponenter uppdateras kontinuerligt över kommande releaser.
- Inmatningsfält har fått ett tillägg så att den kan användas som en {@link news#kombobox kombobox}.

## Pågående arbete

- Fortsatt uppdatering av semantiska tokens för färger.
  Det är en förutsättning för att kunna ha dark mode, men underlättar framför allt för dig som vill sätta eget tema eller ändra på specifika variabler.
- Uppdatering av komponenter för applikationslayout.
  På sikt kommer dagens komponenter för applikationslayout ({@link application-layout applikationsmall}, {@link application-layout högeryta} och {@link application-layout vänsteryta}) ersättas med nya.
  De nya komponenterna kommer vara mer flexibla, till exempel kan du fylla en yta med valfritt innehåll oberoende var den ligger.
  Till att börja med kommer ett antal olika varianter av layouter släppas.

## Planerat arbete

Kommande arbete som vi planerar:

- omskrivning av valideringsservice
- uppdatera och förbättra prioriterade komponenter.

## Framtid

Framtidssäkra designsystemet, till exempel genom att göra webbkomponenter.

## Sammanställning releaser

<div class="">
    <table class="table">
        <table aria-labelledby="sammanstallning_releaser">
        <colgroup>
            <col class="table__column--expand" />
            <col class="table__column--expand" />
            <col class="table__column--expand" />
            <col class="table__column--expand" />
            <col class="table__column--expand" />
        </colgroup>
        <thead>
            <tr class="table__row">
                <th
                    scope="col"
                    class="table__column table__column--text table__column--expand"
                >
                    Version
                </th>
                <th
                    scope="col"
                    class="table__column table__column--text table__column--expand"
                >
                    Status
                </th>
                <th
                    scope="col"
                    class="table__column table__column--text table__column--expand"
                >
                    Releasedatum
                </th>
                <th
                    scope="col"
                    class="table__column table__column--text table__column--expand"
                >
                    Slutdatum för support
                </th>
                <th
                    scope="col"
                    class="table__column table__column--text table__column--expand"
                >
                    Innehåll
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="table__row__active table__row">
                <td class="table__column table__column--text">
                    v6
                </td>
                <td class="table__column table__column--text">
                    aktiv 
                </td>
                <td class="table__column table__column--text">
                    2025-02 
                </td>
                <td class="table__column table__column--text"> 
                </td>
                <td class="table__column table__column--text">
                    Formulär (FForm) och formulärsteg (FFormStep) borttagna. 
                </td>
            </tr>
            <tr class="table__row__support table__row">
                <td class="table__column table__column--text ">
                    v5 
                </td>
                <td class="table__column table__column--text">
                    underhåll 
                </td>
                <td class="table__column table__column--text">
                    2023-09 
                </td>
                <td class="table__column table__column--text">
                    2026-02 
                </td>
                <td class="table__column table__column--text">
                    Uppgradering till Vue 3, datumväljare (FDatepicker) borttagen. 
                </td>
            </tr>
            <tr class="table__row__removed table__row">
                <td class="table__column table__column--text">
                    v4 
                </td>
                <td class="table__column table__column--text">
                    utgått 
                </td>
                <td class="table__column table__column--text">
                    2022-09 
                </td>
                <td class="table__column table__column--text">
                    2024-09 
                </td>
                 <td class="table__column table__column--text">
                    Internet Explorer 11 stöds inte längre. 
                </td>
            </tr>
            <tr class="table__row__r_emoved table__row">
                <td class="table__column table__column--text">
                    v3 
                </td>
                <td class="table__column table__column--text">
                    utgått 
                </td>
                <td class="table__column table__column--text">
                    2021-10 
                </td>
                <td class="table__column table__column--text">
                    2023-09 
                </td>
                 <td class="table__column table__column--text">
                </td>
            </tr>
        </tbody>
    </table>
</div>

Status
: Aktiv: Vi släpper ny funktionalitet och fixar buggar i releasen.
: Underhåll: Vi fixar endast kritiska buggar.
Vanligtvis fixar vi kritiska buggar upp till ett år efter att ny release är släppt.
: Utgått: Vi stödjer inte releasen längre och inga uppdateringar sker.

Deprekering
: Förvarning om att komponent eller funktion kommer tas bort. Det sker cirka ett år efter att en komponent eller funktion blivit deprekerad.

Borttagna komponenter
: När komponent tas bort kommer det finnas en rekommenderad ersättningskomponent tillsammans med en migreringsguide.

## Relaterat

{@link news Nyheter}

{@link migrating-to-fieldset Fieldset migreringsguide}

{@link migrating-to-v5 Version 5 migreringsguide}
