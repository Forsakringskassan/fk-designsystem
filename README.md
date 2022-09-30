# Försäkringskassans designsystem

[In English](#forsakringskassan-designsystem)

Försäkringskassan designsystem har utvecklats av Försäkringskassan. Det består av komponentramverket FKUI och tillhörande designdokumentation. Syftet med designsystemet är att skapa tillgängliga och återanvändbara komponenter. Vi strävar efter att alla komponenter ska uppfylla WCAG 2.1 AA (eller högre) och EU:s tillgänglighetsdirektiv (EN301549). Komponenterna är testade både manuellt och med hjälp av automatiserade verktyg på ett brett urval av enheter.

Än så länge finns enbart ett designpaket bestående av CSS som öppen källkod, men målet är att öppna upp även övriga delar av designsystemet.

Komponentramverket publicerades för första gången i oktober 2019. Det har sedan dess kontinuerligt förbättrats och fler komponenter har lagts till.

## Status

De här paketen finns:

-   `@fkui/design` - CSS (och Sass-källkod) med relaterade HTML-exempel

De här paketen är endast tillgängliga som förkompilerade NPM-paket:

-   `@fkui/css-variables` - Variabler för fördefinierat tema
-   `@fkui/icons` - Exempelbibliotek, främst baserat på Font Awesome

Ingen byggkedja levereras med designsystemet på grund av interna beroenden och användning av intern CI/CD pipeline.

## Roadmap

Kommande funktioner:

-   Designmönster och riktlinjer
-   Komponentbibliotek i Figma
-   `@fkui/css-variables` - Stöd för tema (färger etc) med dokumentation om hur man kan anpassa eller bygga eget tema
-   `@fkui/logic` - Logikfunktioner som rör validering och formatering
-   `@fkui/date` - Datumbibliotek
-   `@fkui/vue` - Vue.js-komponenter baserade på `@fkui/design`
-   `@fkui/vue-runtime` - Meta-paket som kombinerar alla paket som krävs för att skapa en Vue.js applikation
-   `@fkui/test-utils` - Jest-verktyg för att skapa komponenttester
-   `@fkui/icons`: Exempelbibliotek och dokumentation för hur man bygger upp sitt egna ikonbibliotek
-   Byggkejda
-   GitHub Actions

## Så här använder du FKUI Design

1. `npm install @fkui/design`
2. Importera CSS-filen i din applikation
3. Läs dokumentation för mer information om användning för respektive komponent.

## Så här kan du bidra

Oavsett om du har hittat en brist i en komponent eller på webbplatsen, ett stavfel eller har förbättringsförslag så uppskattar vi ditt bidrag. Läs [CONTRIBUTING.md](CONTRIBUTING.md) för instruktioner om hur du går tillväga.

## Tillgänglighet för webbplatsen

Läs mer under [Tillgänglighetsredogörelse](TILLGANGLIGHET.md).

## Kontakta oss

För brister eller förbättringsförslag, se avsnittet [Så här kan du bidra](#sa-har-kan-du-bidra).

För övriga frågor maila oss på designsystem@forsakringskassan.se.

## Historik

-   2022-09-29: Första version av `@fkui/design`.

Se [CHANGELOG.md](CHANGELOG.md) för detaljerad information om varje release.

# Försäkringskassan Designsystem

Försäkringskassan Designsystem (FKDS) is a design system developed by the Swedish Social Insurance Agency (Försäkringskassan).

It is composed of the component framework (FKUI) along with related design documentation.
The main objective of FKDS is to create accessible reusable components.
We aim for all components to fulfill WCAG 2.1 AA (or higher) and the EU accessibility directive (EN301549). All components are tested both manually and with automated tools on a large range of devices.

Currently the open-sourced parts are limited to CSS but the intent is to open up the rest of FKDS.

The component framework was initially released internally in October 2019. It has been continuously evolved since then with more components added.

## Status

Currently released packages:

-   `@fkui/design` - CSS (and the Sass source code) along with related HTML usage examples.

Packages released only on NPM:

-   `@fkui/css-variables` - Variables for enabling component theming
-   `@fkui/icons` - Example library mostly based on Font Awesome

Currently no toolchain is included.
This is due to a lot of internal dependencies and usage of internal CI/CD pipeline.

## Roadmap

Below is an unordered list of upcoming features.

-   Design patterns and guidelines
-   Figma - component library corresponding to FKUI components
-   `@fkui/css-variables` - Theming support
-   `@fkui/logic` - Reusable logic functions and utilities, mostly related to parsing, validating and formatting
-   `@fkui/date` - Date library
-   `@fkui/vue` - Vue.js components based on `@fkui/design` adding logic and interaction
-   `@fkui/vue-runtime` - Meta package combining all packages required to create a Vue.js application
-   `@fkui/test-utils` - Jest utilities for writing component tests
-   `@fkui/icons` - Example library along with customization guide
-   Build toolchain
-   GitHub Actions

## Usage

1. `npm install @fkui/design`
2. Import the CSS file into your application
3. Refer to the documentation for a list of available components.

## Contributing

No matter if you find a defect in a component or on the webpage, a typo or have a improvent suggestion, we appreciate your contribution. Refer to [CONTRIBUTING.md](CONTRIBUTING.md) for instructions on how to proceeed.

## Accessibility

See [TILLGANGLIGHET.md](TILLGANGLIGHET.md).

## Contact us

For bugs and improvement suggestions, see the [Contributing](#contributing) section.

For other questions, send an email to designsystem@forsakringskassan.se.

## History

-   2022-09-29: First public release of `@fkui/design`.

See [CHANGELOG.md](CHANGELOG.md) for details.
