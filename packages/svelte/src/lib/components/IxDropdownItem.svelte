<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxDropdownItem } from '@siemens/ix/components/ix-dropdown-item.js';

  defineIxDropdownItem();

  const PROPS = [
  'ixFocusVisible',
  'disableAriaSelectHandling',
  'label',
  'icon',
  'ariaLabelIcon',
  'ariaLabelButton',
  'hover',
  'disabled',
  'checked',
  'itemRole',
  'isSubMenu',
  'suppressChecked',
  'hasVisualFocus',
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
  }: StencilSvelteProps<JSX.IxDropdownItem, HTMLIxDropdownItemElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-dropdown-item bind:this={element}>{@render children?.()}</ix-dropdown-item>
