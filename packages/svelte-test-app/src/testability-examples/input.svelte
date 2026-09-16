<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  Exposes `bind:value` on `ix-input`, which rides on the camelCase
  `valueChange` event. This is the end-to-end check that the runtime does not
  lowercase Stencil event names: if it did, the listener would attach to
  `valuechange`, nothing would ever dispatch it, and the read-out below would
  stay empty.

  Driven by `src/tests/model-binding.spec.ts`.
-->
<script lang="ts">
  import { IxButton, IxInput, IxTypography } from '@siemens/ix-svelte';

  let value = $state('');
</script>

<IxInput bind:value placeholder="Enter your Username"></IxInput>

<IxTypography data-testid="input-value">Value: {value}</IxTypography>

<IxButton onclick={() => (value = 'set from outside')}>
  Set value from outside
</IxButton>
