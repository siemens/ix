<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxPopover } from '@siemens/ix/components/ix-popover.js';

  defineIxPopover();

  const PROPS = [
  'trigger',
  'show',
  'placement',
  'hasSpike',
  'triggerMode',
  'closeOnClickOutside',
] as const;

  const EVENTS = [
  'showChange',
  'showChanged',
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
  }: StencilSvelteProps<JSX.IxPopover, HTMLIxPopoverElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-popover bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-popover>
