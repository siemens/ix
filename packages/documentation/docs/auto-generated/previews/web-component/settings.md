<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
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
