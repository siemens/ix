<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  A 1:1 port of html-test-app/src/preview-examples/message.html.

  The action payload read-out lives in
  `src/testability-examples/message.svelte` instead.
-->
<script lang="ts">
  import { IxButton, showMessage } from '@siemens/ix-svelte';

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
    ).once(console.log);
  };
</script>

<IxButton onclick={triggerMessage}>Show 'success' message</IxButton>
