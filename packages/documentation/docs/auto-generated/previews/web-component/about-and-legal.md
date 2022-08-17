<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/about-and-legal.html -->
```html
<ix-basic-navigation>
  <ix-menu>
    <ix-menu-about>
      <ix-menu-about-item label="Tab 1">Content 1</ix-menu-about-item>
      <ix-menu-about-item label="Tab 2">Content 2</ix-menu-about-item>
    </ix-menu-about>
  </ix-menu>
</ix-basic-navigation>

<script>
  (async function () {
    await window.customElements.whenDefined('ix-menu');
    const instance = document.querySelector('ix-menu');
    await instance.toggleAbout(true);
  })();
</script>
```
