---
title: Version 6 migreringsguide
name: migrating-to-v6
layout: article
---

## Summary

The following components have breaking changes:

- `FPageHeader` - the `skipLinkHref` prop has been removed.

## FFormModal slots

De deprekerade slottarna `submit-button-text` och `cancel-button-text` är borttagna och ersatta med `buttons` propen.

I din modalkomponent, om du använder någon av dessa slottar ersätt med propen:

```diff
+<script setup>
+const buttons = [
+    {
+        label: "Submit",
+        event: "confirm",
+        type: "primary",
+        submitButton: true,
+    },
+    {
+        label: "Cancel",
+        event: "dismiss",
+        type: "secondary",
+        submitButton: false,
+    },
+];
+</script>

 <template>
-    <f-form-modal>
+    <f-form-modal :buttons></f-form-modal>
-        <template #submit-button-text> Submit </template>
-        <template #cancel-button-text> Cancel </template>
    </f-form-modal>
</template>
```

Om du använder {@link form-modal `formModal(..)`} (rekommenderat) för att anropa modalen behövs inga ändringar.

Om du använder template-syntax för att anropa `FFormModal` direkt och använder någon av dessa slottar ersätt med propen likt en modalkomponent ovan.

## `getTextFromScopedSlot`

Den deprekerade funktionen `getTextFromScopedSlot(..)` har tagits bort och är ersatt med {@link renderSlotText `renderSlotText(..)`}.

```diff
-const textContent = getTextFromScopedSlot(slot);
+const textContent = renderSlotText(slot);
```

::: warning

Tänk på att `renderSlotText(..)` returnerar `null` om slotten inte finns eller är tom till skillnad från `getTextFromScopedSlot(..)` som returnerar en tom sträng `""` istället.

:::

## `FKUIConfig.modalTarget` och `FKUIConfig.popupTarget`

De deprekerade egenskaperna `FKUIConfig.modalTarget` och `FKUIConfig.popupTarget` är borttagna och ersatta med den kombinerade `FKUIConfig.teleportTarget`.

```diff
 import { config } from "@fkui/vue";

-config.modalTarget = "my > selector";
-config.popupTarget = "my > selector";
+config.teleportTarget = "my > selector";
```

## `FPageHeader` skiplink

The deprecated `skipLinkHref` prop has been removed and replaced by the `skipLink` prop.

```diff
-<f-page-header skip-link skip-link-href="awesome-id">
+<f-page-header skip-link="awesome-id">
```

The `skipLink` prop used to accept a `boolean` value to enable/disable the skiplink feature but now only accepts a `string` (the id of the element to skip to).
If you need to dynamically enable/disable skiplink set the value to the empty string `""` to disable.

## Pageobjects

### The `trimmedText()` method

The deprecated `trimmedText()` method has been removed from all pageobjects.

As replacement one of the following methods can be used:

- `cy.get(..).should("have.text", "...")` - assuming there is no leading or trailing whitespace the native `have.text` assertion can be used.
- `cy.get(..).should("contain.text", "...")` - assuming you are asserting the full text content the native `contain.text` assertion can be used.
- `cy.get(..).should("trimmedText", "...")` - third-party assertion providing the same functionallity.

Specifically, for each pageobject `.trimmedText().should(..)` should be replaced with:

- For `FCheckboxFieldPageObject` replace with `.label().should(..)`.
- For `FLabelPageObject` replace with `.el().should(..)`
- For `FRadioFieldPageObject` replace with `.label().should(..)`.

### `FTooltipPageObject.content()` method

The deprecated `FTooltipPageObject.content()` method has been removed and replaced with direct methods on `FTooltipPageObject`.

```diff
-tooltip.content().closeButtonTop().click();
+tooltip.closeButton().click();
```

```diff
-tooltip.content().closeButtonBottom().click();
+tooltip.closeButton().click();
```

```diff
-tooltip.content().heading().should("have.text", "Lorem ipsum");
+tooltip.heading().should("have.text", "Lorem ipsum");
```

```diff
-tooltip.content().brodtext().should("have.text", "Lorem ipsum");
+tooltip.body().should("have.text", "Lorem ipsum");
```

::: warning Notera

Både `closeButtonBottom()` och `closeButtonTop()` är ersatt med `closeButton()` då det inte längre finns två separata knappar.

:::
