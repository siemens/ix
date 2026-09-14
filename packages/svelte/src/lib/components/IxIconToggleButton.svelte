<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxIconToggleButton } from '@siemens/ix/components/ix-icon-toggle-button.js';

  defineIxIconToggleButton();

  const PROPS = [
  'variant',
  'outline',
  'ghost',
  'icon',
  'oval',
  'pressed',
  'size',
  'disabled',
  'loading',
] as const;

  const EVENTS = [
  'pressedChange',
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
  }: StencilSvelteProps<JSX.IxIconToggleButton, HTMLIxIconToggleButtonElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-icon-toggle-button bind:this={element}>{@render children?.()}</ix-icon-toggle-button>
