<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxDropdownButton } from '@siemens/ix/components/ix-dropdown-button.js';

  defineIxDropdownButton();

  const PROPS = [
  'variant',
  'disabled',
  'label',
  'icon',
  'closeBehavior',
  'placement',
  'ariaLabelDropdownButton',
  'focusCheckedItem',
  'enableTopLayer',
  'suppressAriaActiveDescendant',
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
  }: StencilSvelteProps<JSX.IxDropdownButton, HTMLIxDropdownButtonElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-dropdown-button bind:this={element}>{@render children?.()}</ix-dropdown-button>
