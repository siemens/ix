<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  Exposes the result payload of `showMessage`, which is how the Svelte
  framework delegate is checked end to end: the message modal is mounted
  through it, torn down again, and the action payload has to make it back into
  component state.

  Driven by `src/tests/message.spec.ts`.
-->
<script lang="ts">
  import { IxButton, IxTypography, showMessage } from '@siemens/ix-svelte';

  let payload = $state('');

  const triggerMessage = async () => {
    (
      await showMessage.success(
        'Example title',
        'message',
        'Save',
        'Cancel',
        'payload:save',
        'payload:cancel'
      )
    ).once((result) => (payload = String(result.payload)));
  };
</script>

<IxButton onclick={triggerMessage}>Show 'success' message</IxButton>

<IxTypography data-testid="message-payload">{payload}</IxTypography>
