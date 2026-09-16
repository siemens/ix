<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxPagination } from '@siemens/ix/components/ix-pagination.js';

  defineIxPagination();

  const PROPS = [
  'advanced',
  'itemCount',
  'hideItemCount',
  'itemCountOptions',
  'count',
  'selectedPage',
  'i18nPage',
  'i18nOf',
  'i18nItems',
  'ariaLabelChevronLeftIconButton',
  'ariaLabelChevronRightIconButton',
  'ariaLabelPageSelection',
] as const;

  const EVENTS = [
  'pageSelected',
  'itemCountChanged',
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
  }: StencilSvelteProps<JSX.IxPagination, HTMLIxPaginationElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-pagination bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-pagination>
