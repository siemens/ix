<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxMenuAbout } from '@siemens/ix/components/ix-menu-about.js';

  defineIxMenuAbout();

  const PROPS = [
  'suppressLegacyTabs',
  'activeTabKey',
  'label',
  'ariaLabelCloseButton',
  'show',
] as const;

  const EVENTS = [
  'tabChange',
  'close',
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
  }: StencilSvelteProps<JSX.IxMenuAbout, HTMLIxMenuAboutElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-menu-about bind:this={element}>{@render children?.()}</ix-menu-about>
