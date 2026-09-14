<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxMessageBar } from '@siemens/ix/components/ix-message-bar.js';

  defineIxMessageBar();

  const PROPS = [
  'type',
  'persistent',
] as const;

  const EVENTS = [
  'closedChange',
  'closeAnimationCompleted',
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
  }: StencilSvelteProps<JSX.IxMessageBar, HTMLIxMessageBarElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-message-bar bind:this={element}>{@render children?.()}</ix-message-bar>
