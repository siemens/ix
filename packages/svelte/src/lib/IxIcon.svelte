<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<script module lang="ts">
  import { defineCustomElement as defineIxIcon } from '@siemens/ix-icons/components/ix-icon.js';

  defineIxIcon();

  const PROPS = ['size', 'color', 'name'] as const;

  const EVENTS = [] as const;
</script>

<script lang="ts">
  import type { JSX as IxIconsJSX } from '@siemens/ix-icons';
  import {
    useStencilElement,
    type StencilSvelteProps,
  } from './runtime/index.svelte.js';

  let {
    children,
    element = $bindable(),
    ...rest
  }: StencilSvelteProps<IxIconsJSX.IxIcon, HTMLIxIconElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-icon bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-icon>
