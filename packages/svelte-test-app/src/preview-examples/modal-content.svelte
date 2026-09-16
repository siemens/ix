<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<script lang="ts">
  import {
    IxButton,
    IxModalContent,
    IxModalFooter,
    IxModalHeader,
    Modal,
  } from '@siemens/ix-svelte';

  let { title = 'Message headline' }: { title?: string } = $props();
</script>

<Modal>
  {#snippet children({ closeModal, dismissModal })}
    <IxModalHeader>{title}</IxModalHeader>
    <IxModalContent>Message text lorem ipsum</IxModalContent>
    <IxModalFooter>
      <IxButton variant="subtle-primary" onclick={() => dismissModal()}>
        Cancel
      </IxButton>
      <IxButton onclick={() => closeModal('done')}>OK</IxButton>
    </IxModalFooter>
  {/snippet}
</Modal>
