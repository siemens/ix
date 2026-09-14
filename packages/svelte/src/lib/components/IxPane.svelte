<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxPane } from '@siemens/ix/components/ix-pane.js';

  defineIxPane();

  const PROPS = [
  'heading',
  'variant',
  'hideOnCollapse',
  'size',
  'borderless',
  'noPadding',
  'expanded',
  'composition',
  'icon',
  'closeOnClickOutside',
  'ariaLabelIcon',
  'ariaLabelCollapseCloseButton',
  'ignoreLayoutSettings',
  'isMobile',
] as const;

  const EVENTS = [
  'expandedChanged',
  'variantChanged',
  'borderlessChanged',
  'hideOnCollapseChanged',
  'slotChanged',
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
  }: StencilSvelteProps<JSX.IxPane, HTMLIxPaneElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-pane bind:this={element}>{@render children?.()}</ix-pane>
