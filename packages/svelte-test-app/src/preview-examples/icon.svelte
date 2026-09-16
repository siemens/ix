<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<script lang="ts">
  import {
    iconCapacity,
    iconError,
    iconSuccess,
    iconWarning,
  } from '@siemens/ix-icons/icons';
  import { IxIcon } from '@siemens/ix-svelte';

  const icons = [
    { name: iconCapacity, color: undefined },
    { name: iconSuccess, color: 'color-success' },
    { name: iconWarning, color: 'color-warning' },
    { name: iconError, color: 'color-alarm' },
  ];
</script>

{#each icons as icon (icon.name)}
  <IxIcon name={icon.name} color={icon.color} size="24"></IxIcon>
{/each}
