<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxGroup } from '@siemens/ix/components/ix-group.js';

  defineIxGroup();

  const PROPS = [
  'suppressHeaderSelection',
  'header',
  'subHeader',
  'expanded',
  'selected',
  'index',
  'expandOnHeaderClick',
] as const;

  const EVENTS = [
  'selectGroup',
  'selectItem',
  'expandedChanged',
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
  }: StencilSvelteProps<JSX.IxGroup, HTMLIxGroupElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-group bind:this={element}>{@render children?.()}</ix-group>
