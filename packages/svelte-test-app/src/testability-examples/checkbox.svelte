<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  Exposes `bind:checked` on `ix-checkbox`, which rides on the `checkedChange`
  event and the `checked` property (the `componentModels` entry in
  `packages/core/stencil.config.ts`).

  The read-out covers element -> component; the button covers component ->
  element.
-->
<script lang="ts">
  import { IxButton, IxCheckbox, IxTypography } from '@siemens/ix-svelte';

  let checked = $state(false);
</script>

<IxCheckbox bind:checked label="Simple checkbox"></IxCheckbox>
<IxCheckbox disabled label="Disabled checkbox"></IxCheckbox>

<IxTypography data-testid="checkbox-value">
  Checked: {checked}
</IxTypography>

<IxButton onclick={() => (checked = !checked)}>Toggle from outside</IxButton>
