<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/html-test-app/src/preview-examples/select-multiple.html -->
```html
<ix-select mode="multiple">
  <ix-select-item label="Item 1" value="1"></ix-select-item>
  <ix-select-item label="Item 2" value="2"></ix-select-item>
  <ix-select-item label="Item 3" value="3"></ix-select-item>
  <ix-select-item label="Item 4" value="4"></ix-select-item>
</ix-select>
<script>
  (async function () {
    await window.customElements.whenDefined('ix-select');
    const select = document.querySelector('ix-select');
    select.selectedIndices = ['1', '3'];
  })();
</script>
```
