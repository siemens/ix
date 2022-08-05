<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/about-and-legal.html -->
```html
<cw-basic-navigation>
  <cw-menu>
    <cw-menu-about>
      <cw-menu-about-item label="Tab 1">Content 1</cw-menu-about-item>
      <cw-menu-about-item label="Tab 2">Content 2</cw-menu-about-item>
    </cw-menu-about>
  </cw-menu>
</cw-basic-navigation>

<script>
  (async function () {
    await window.customElements.whenDefined('cw-menu');
    const instance = document.querySelector('cw-menu');
    await instance.toggleAbout(true);
  })();
</script>
```
