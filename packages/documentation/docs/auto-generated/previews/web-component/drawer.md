<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  
<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/drawer.html -->
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
