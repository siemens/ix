<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxToggleButton } from '@siemens/ix/components/ix-toggle-button.js';

  defineIxToggleButton();

  const PROPS = [
  'variant',
  'disabled',
  'loading',
  'icon',
  'iconRight',
  'pressed',
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
  }: StencilSvelteProps<JSX.IxToggleButton, HTMLIxToggleButtonElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-toggle-button bind:this={element}>{@render children?.()}</ix-toggle-button>
