<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxSelectItem } from '@siemens/ix/components/ix-select-item.js';

  defineIxSelectItem();

  const PROPS = [
  'ixFocusVisible',
  'disableAriaSelectHandling',
  'label',
  'value',
  'selected',
  'disabled',
  'hover',
] as const;

  const EVENTS = [
  'itemClick',
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
  }: StencilSvelteProps<JSX.IxSelectItem, HTMLIxSelectItemElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-select-item bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-select-item>
