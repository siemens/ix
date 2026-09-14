<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxPopoverHeader } from '@siemens/ix/components/ix-popover-header.js';

  defineIxPopoverHeader();

  const PROPS = [
  'icon',
  'iconColor',
  'hideClose',
  'ariaLabelCloseIconButton',
] as const;

  const EVENTS = [
  'closeClick',
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
  }: StencilSvelteProps<JSX.IxPopoverHeader, HTMLIxPopoverHeaderElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-popover-header bind:this={element}>{@render children?.()}</ix-popover-header>
