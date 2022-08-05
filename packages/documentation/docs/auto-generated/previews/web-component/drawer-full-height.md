<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/drawer-full-height.html -->
```html

<cw-drawer>
  <span>Some content of drawer</span>
</cw-drawer>

<cw-button>Toggle drawer</cw-button>

<script>
  (async function () {
    await window.customElements.whenDefined('cw-drawer');
    const drawer = document.querySelector('cw-drawer');
    drawer.fullHeight = true;
    drawer.closeOnClickOutside = true;

    const button = document.querySelector('cw-button');
    button.addEventListener('click', () => {
      drawer.show = !drawer.show;
    });
  })();
</script>
```
