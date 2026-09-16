<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxKeyValue } from '@siemens/ix/components/ix-key-value.js';

  defineIxKeyValue();

  const PROPS = [
  'icon',
  'ariaLabelIcon',
  'label',
  'labelPosition',
  'value',
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
  }: StencilSvelteProps<JSX.IxKeyValue, HTMLIxKeyValueElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-key-value bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-key-value>
