<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxExpandingSearch } from '@siemens/ix/components/ix-expanding-search.js';

  defineIxExpandingSearch();

  const PROPS = [
  'icon',
  'placeholder',
  'value',
  'fullWidth',
  'variant',
  'ariaLabelSearchIconButton',
  'ariaLabelClearIconButton',
  'ariaLabelSearchInput',
] as const;

  const EVENTS = [
  'valueChange',
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
  }: StencilSvelteProps<JSX.IxExpandingSearch, HTMLIxExpandingSearchElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-expanding-search bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-expanding-search>
