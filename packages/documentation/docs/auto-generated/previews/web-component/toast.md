<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/toast.html -->
```html
<cw-toast-container></cw-toast-container>

<cw-button id="toastButton">Trigger toast</cw-button>
<script type="module">
  import { toast } from './lib/ix/dist/index.js';

  (async function () {
    await window.customElements.whenDefined('cw-toast-container');
    document.getElementById('toastButton').addEventListener('click', () => {
      toast({
        message: 'My toast message!',
      });
    });
  })();
</script>
```
