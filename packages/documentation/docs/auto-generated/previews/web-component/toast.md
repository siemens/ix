<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/html-test-app/src/preview-examples/toast.html -->
```html
<ix-toast-container></ix-toast-container>

<ix-button id="toastButton">Trigger toast</ix-button>
<script type="module">
  import { toast } from '@siemens/ix';

  (async function () {
    await window.customElements.whenDefined('ix-toast-container');
    document.getElementById('toastButton').addEventListener('click', () => {
      toast({
        message: 'My toast message!',
      });
    });
  })();
</script>
```
