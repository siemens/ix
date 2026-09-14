<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxBlind } from '@siemens/ix/components/ix-blind.js';

  defineIxBlind();

  const PROPS = [
  'collapsed',
  'label',
  'sublabel',
  'icon',
  'variant',
] as const;

  const EVENTS = [
  'collapsedChange',
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
  }: StencilSvelteProps<JSX.IxBlind, HTMLIxBlindElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-blind bind:this={element}>{@render children?.()}</ix-blind>
