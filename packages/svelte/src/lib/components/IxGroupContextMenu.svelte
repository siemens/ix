<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxGroupContextMenu } from '@siemens/ix/components/ix-group-context-menu.js';

  defineIxGroupContextMenu();

  const PROPS = [] as const;

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
  }: StencilSvelteProps<JSX.IxGroupContextMenu, HTMLIxGroupContextMenuElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-group-context-menu bind:this={element}>{@render children?.()}</ix-group-context-menu>
