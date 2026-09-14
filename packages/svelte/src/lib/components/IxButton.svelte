<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxButton } from '@siemens/ix/components/ix-button.js';

  defineIxButton();

  const PROPS = [
  'variant',
  'disabled',
  'type',
  'loading',
  'form',
  'icon',
  'iconRight',
  'alignment',
  'iconSize',
  'href',
  'target',
  'rel',
] as const;

  const EVENTS = [] as const;
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
  }: StencilSvelteProps<JSX.IxButton, HTMLIxButtonElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-button bind:this={element}>{@render children?.()}</ix-button>
