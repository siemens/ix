<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxPushCard } from '@siemens/ix/components/ix-push-card.js';

  defineIxPushCard();

  const PROPS = [
  'icon',
  'ariaLabelIcon',
  'notification',
  'heading',
  'subheading',
  'variant',
  'expanded',
  'passive',
] as const;

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
  }: StencilSvelteProps<JSX.IxPushCard, HTMLIxPushCardElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-push-card bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-push-card>
