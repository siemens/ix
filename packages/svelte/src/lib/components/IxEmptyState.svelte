<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxEmptyState } from '@siemens/ix/components/ix-empty-state.js';

  defineIxEmptyState();

  const PROPS = [
  'layout',
  'icon',
  'header',
  'subHeader',
  'action',
  'ariaLabelEmptyStateIcon',
] as const;

  const EVENTS = [
  'actionClick',
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
  }: StencilSvelteProps<JSX.IxEmptyState, HTMLIxEmptyStateElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-empty-state bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-empty-state>
