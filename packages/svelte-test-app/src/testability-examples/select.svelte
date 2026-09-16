<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  Exposes `bind:value` on `ix-select` in `mode="multiple"`, where the bound
  value is a `string[]`.

  This is the case that proves declared props are assigned as *properties*: an
  array written as an attribute would arrive at the component stringified as
  `"1,2"` and be ignored.
-->
<script lang="ts">
  import { IxSelect, IxSelectItem, IxTypography } from '@siemens/ix-svelte';

  const items = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
  ];

  let value = $state<string[]>(['1']);
</script>

<IxSelect bind:value mode="multiple">
  {#each items as item (item.value)}
    <IxSelectItem label={item.label} value={item.value}></IxSelectItem>
  {/each}
</IxSelect>

<IxTypography data-testid="select-value">
  Selected: {JSON.stringify(value)}
</IxTypography>
