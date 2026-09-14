<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxMenuCategory } from '@siemens/ix/components/ix-menu-category.js';

  defineIxMenuCategory();

  const PROPS = [
  'label',
  'icon',
  'notifications',
  'tooltipText',
] as const;

  const EVENTS = [
  'closeOtherCategories',
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
  }: StencilSvelteProps<JSX.IxMenuCategory, HTMLIxMenuCategoryElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-menu-category bind:this={element}>{@render children?.()}</ix-menu-category>
