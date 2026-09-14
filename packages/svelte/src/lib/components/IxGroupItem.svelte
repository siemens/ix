<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxGroupItem } from '@siemens/ix/components/ix-group-item.js';

  defineIxGroupItem();

  const PROPS = [
  'icon',
  'ariaLabelIcon',
  'text',
  'secondaryText',
  'suppressSelection',
  'groupFooter',
  'selected',
  'disabled',
  'index',
] as const;

  const EVENTS = [
  'selectedChanged',
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
  }: StencilSvelteProps<JSX.IxGroupItem, HTMLIxGroupItemElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-group-item bind:this={element}>{@render children?.()}</ix-group-item>
