<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/settings.html -->
```html
<ix-basic-navigation>
  <ix-menu>
    <ix-menu-settings>
      <ix-menu-settings-item
        label="Example Setting 1"
      ></ix-menu-settings-item>
      <ix-menu-settings-item
        label="Example Setting 2"
      ></ix-menu-settings-item>
    </ix-menu-settings>
  </ix-menu>
</ix-basic-navigation>
<script>
  (async function () {
    await window.customElements.whenDefined('ix-menu');
    const menu = document.querySelector('ix-menu');
    await menu.toggleSettings(true);
  })();
</script>
```
