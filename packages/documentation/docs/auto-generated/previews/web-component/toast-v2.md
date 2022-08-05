<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/toast-v2.html -->
```html
<cw-toast-container></cw-toast-container>

<cw-button id="toastButton">Trigger toast</cw-button>
<script type="module">
  import { toast } from './lib/core-ui-core/dist/index.js';

  document.getElementById('toastButton').addEventListener('click', () => {
    toast({
      message: 'My toast message!',
    });
  });
</script>
```
