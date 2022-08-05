<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/select-multiple.html -->
```html
<cw-select mode="multiple">
  <cw-select-item label="Item 1" value="1"></cw-select-item>
  <cw-select-item label="Item 2" value="2"></cw-select-item>
  <cw-select-item label="Item 3" value="3"></cw-select-item>
  <cw-select-item label="Item 4" value="4"></cw-select-item>
</cw-select>
<script>
  (async function () {
    await window.customElements.whenDefined('cw-select');
    const select = document.querySelector('cw-select');
    select.selectedIndices = ['1', '3'];
  })();
</script>
```
