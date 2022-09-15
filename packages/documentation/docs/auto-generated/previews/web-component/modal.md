<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/modal.html -->
```html
<div>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
  amet.
</div>
<ix-button>Show Modal</ix-button>

<template id="custom-modal">
  <div>
    <div class="modal-header">
      Message headline
      <ix-icon-button
        ghost
        icon="close"
        class="dismiss-modal"
      ></ix-icon-button>
    </div>
    <div class="modal-body">Message text lorem ipsum</div>
    <div class="modal-footer">
      <ix-button outline class="dismiss-modal"> Cancel </ix-button>
      <ix-button class="close-modal">OK</ix-button>
    </div>
  </div>
</template>

<script type="module">
  import { modal, closeModal, dismissModal } from './lib/ix/dist/index.js';

  (async function () {
    await window.customElements.whenDefined('ix-button');

    const customModal = document.createElement('div');
    const template = document.getElementById('custom-modal');
    const templateContent = template.content;
    customModal.appendChild(templateContent);

    customModal
      .querySelector('.close-modal')
      .addEventListener('click', () => {
        closeModal(customModal, 'Done!');
      });

    customModal.querySelectorAll('.dismiss-modal').forEach((item) =>
      item.addEventListener('click', () => {
        dismissModal(customModal, 'canceled!');
      })
    );

    const button = document.querySelector('ix-button');
    button.addEventListener('click', () => {
      modal({
        content: customModal,
      });
    });
  })();
</script>
```
