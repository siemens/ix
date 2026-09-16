<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxContentHeader } from '@siemens/ix/components/ix-content-header.js';

  defineIxContentHeader();

  const PROPS = [
  'variant',
  'headerTitle',
  'headerSubtitle',
  'textOverflow',
  'hasBackButton',
] as const;

  const EVENTS = [
  'backButtonClick',
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
  }: StencilSvelteProps<JSX.IxContentHeader, HTMLIxContentHeaderElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-content-header bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-content-header>
