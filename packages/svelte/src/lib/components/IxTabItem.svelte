<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxTabItem } from '@siemens/ix/components/ix-tab-item.js';

  defineIxTabItem();

  const PROPS = [
  'tabKey',
  'selected',
  'disabled',
  'icon',
  'counter',
  'closable',
  'label',
  'ariaLabelCloseButton',
  'placement',
  'rounded',
  'small',
  'layout',
  'iconOnly',
] as const;

  const EVENTS = [
  'tabClick',
  'tabClose',
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
  }: StencilSvelteProps<JSX.IxTabItem, HTMLIxTabItemElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-tab-item bind:this={element}>{@render children?.()}</ix-tab-item>
