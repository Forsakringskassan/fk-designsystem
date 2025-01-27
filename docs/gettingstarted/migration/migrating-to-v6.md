---
title: Version 6 migreringsguide
name: migrating-to-v6
layout: article
---

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
+    },
+    {
+        label: "Cancel",
+        event: "dismiss",
+        type: "secondary",
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
