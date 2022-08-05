<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/settings.html -->
```html
<cw-basic-navigation>
  <cw-menu>
    <cw-menu-settings>
      <cw-menu-settings-item
        label="Example Setting 1"
      ></cw-menu-settings-item>
      <cw-menu-settings-item
        label="Example Setting 2"
      ></cw-menu-settings-item>
    </cw-menu-settings>
  </cw-menu>
</cw-basic-navigation>
<script>
  (async function () {
    await window.customElements.whenDefined('cw-menu');
    const menu = document.querySelector('cw-menu');
    await menu.toggleSettings(true);
  })();
</script>
```
