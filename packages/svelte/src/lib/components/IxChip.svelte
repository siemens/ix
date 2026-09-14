<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxChip } from '@siemens/ix/components/ix-chip.js';

  defineIxChip();

  const PROPS = [
  'variant',
  'inactive',
  'closable',
  'icon',
  'ariaLabelIcon',
  'background',
  'chipColor',
  'outline',
  'tooltipText',
  'centerContent',
  'ariaLabelCloseButton',
] as const;

  const EVENTS = [
  'closeChip',
] as const;
</script>

<script lang="ts">
  import type { JSX } from '@siemens/ix';
  import {
    useStencilElement,
    type StencilSvelteProps,
  } from '../runtime/index.svelte.js';

  let {
    children,
    element = $bindable(),
    ...rest
  }: StencilSvelteProps<JSX.IxChip, HTMLIxChipElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-chip bind:this={element}>{@render children?.()}</ix-chip>
