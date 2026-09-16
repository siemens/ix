<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  Exposes how a modal ended.

  This is the end-to-end check on the Svelte framework delegate: a component --
  not an element -- is mounted into the portal `IxApplicationContext` provides,
  its `closeModal` / `dismissModal` snippet arguments are called from inside it,
  and the reason has to travel back out to the host's state.
-->
<script lang="ts">
  import { IxButton, IxTypography, showModal } from '@siemens/ix-svelte';
  import ModalContent from '../preview-examples/modal-content.svelte';

  let result = $state('');

  async function show() {
    const instance = await showModal({
      content: {
        component: ModalContent,
        props: { title: 'Message headline' },
      },
    });

    instance.onClose.once((reason) => (result = `closed: ${reason}`));
    instance.onDismiss.once((reason) => (result = `dismissed: ${reason}`));
  }
</script>

<IxButton onclick={show}>Show modal</IxButton>

<IxTypography data-testid="modal-result">{result}</IxTypography>
