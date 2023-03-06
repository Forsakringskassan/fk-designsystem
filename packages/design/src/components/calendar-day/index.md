---
title: FCalendarDay
layout: component
status: Produktionsklar
---

<!-- styling for documentation examples -->
<style>
    .example-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        border-bottom: 1px solid #ccc;
        padding: 0.5rem;
    }
	.example-wrapper:last-child {
		border-bottom: none;
	}
    .example-day {
        width: 3rem;
    }
</style>

CSS-classes for a simple calendar day.

```html raw
<div class="calendar-day">
    <!-- innehåll -->
</div>
```

```html
<div class="example-wrapper" data-test="default">
    <div class="example-day">
        <div class="calendar-day">10</div>
    </div>
    <div class="example-day">
        <div class="calendar-day">11</div>
    </div>
    <div class="example-day">
        <div class="calendar-day">12</div>
    </div>
</div>
```

## Modifiers

### `calendar-day--highlight`

Highlights the day, e.g. for use when highlighting today's day.

```html
<div data-test="highlight">
    <div class="example-wrapper">
        <div class="example-day">
            <div class="calendar-day calendar-day--highlight">10</div>
        </div>
        <div><code>--highlight</code></div>
    </div>
    <div class="example-wrapper">
        <div class="example-day">
            <div
                class="calendar-day calendar-day--highlight calendar-day--selected"
            >
                11
            </div>
        </div>
        <div><code>--highlight</code>, <code>--selected</code></div>
    </div>
    <div class="example-wrapper">
        <div class="example-day">
            <div
                class="calendar-day calendar-day--highlight calendar-day--disabled"
            >
                12
            </div>
        </div>
        <div><code>--highlight</code>, <code>--disabled</code></div>
    </div>
</div>
```

### `calendar-day--selected`

Marks the day as selected.

```html
<div data-test="selected">
    <div class="example-wrapper">
        <div class="example-day">
            <div class="calendar-day calendar-day--selected">10</div>
        </div>
        <div><code>--selected</code></div>
    </div>
    <div class="example-wrapper">
        <div class="example-day">
            <div
                class="calendar-day calendar-day--selected calendar-day--highlight"
            >
                11
            </div>
        </div>
        <div><code>--selected</code>, <code>--highlight</code></div>
    </div>
    <div class="example-wrapper">
        <div class="example-day">
            <div
                class="calendar-day calendar-day--selected calendar-day--disabled"
            >
                12
            </div>
        </div>
        <div><code>--selected</code>, <code>--disabled</code></div>
    </div>
</div>
```

### `calendar-day--disabled`

Marks the day as disabled.

```html
<div data-test="disabled">
    <div class="example-wrapper">
        <div class="example-day">
            <div class="calendar-day calendar-day--disabled">10</div>
        </div>
        <div><code>--disabled</code></div>
    </div>
    <div class="example-wrapper">
        <div class="example-day">
            <div
                class="calendar-day calendar-day--disabled calendar-day--highlight"
            >
                11
            </div>
        </div>
        <div><code>--disabled</code>, <code>--highlight</code></div>
    </div>
    <div class="example-wrapper">
        <div class="example-day">
            <div
                class="calendar-day calendar-day--disabled calendar-day--selected"
            >
                12
            </div>
        </div>
        <div><code>--disabled</code>, <code>--selected</code></div>
    </div>
</div>
```

## Pseudoklasser

### `:hover` (`calendar-day--hover`)

```html
<div class="example-wrapper" data-test="hover">
    <div class="example-day">
        <div class="calendar-day calendar-day--hover">10</div>
    </div>
</div>
```

### `:active` (`calendar-day--active`)

```html
<div class="example-wrapper" data-test="active">
    <div class="example-day">
        <div class="calendar-day calendar-day--active">10</div>
    </div>
</div>
```

## Övrigt

### Länkar

~~Användargränsnitt, Förvaltningsdokumentation - Startpunkt för komponent~~

~~Designriktlinjer självbetjäning~~

~~Designriktlinjer interna system~~
