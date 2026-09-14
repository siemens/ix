<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxBreadcrumb } from '@siemens/ix/components/ix-breadcrumb.js';

  defineIxBreadcrumb();

  const PROPS = [
  'visibleItemCount',
  'nextItems',
  'subtle',
  'ariaLabelPreviousButton',
  'enableTopLayer',
] as const;

  const EVENTS = [
  'itemClick',
  'nextClick',
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
  }: StencilSvelteProps<JSX.IxBreadcrumb, HTMLIxBreadcrumbElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-breadcrumb bind:this={element}>{@render children?.()}</ix-breadcrumb>
