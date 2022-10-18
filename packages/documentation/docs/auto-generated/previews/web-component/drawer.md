<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/html-test-app/src/preview-examples/drawer.html -->
```html

<ix-drawer>
  <span>Some content of drawer</span>
</ix-drawer>

<ix-button>Toggle drawer</ix-button>

<script>
  (async function () {
    await window.customElements.whenDefined('ix-drawer');

    const drawer = document.querySelector('ix-drawer');
    drawer.fullHeight = false;
    drawer.closeOnClickOutside = true;

    const button = document.querySelector('ix-button');
    button.addEventListener('click', () => {
      drawer.show = !drawer.show;
    });
  })();
</script>
```
