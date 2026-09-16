<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxRadio } from '@siemens/ix/components/ix-radio.js';

  defineIxRadio();

  const PROPS = [
  'name',
  'value',
  'label',
  'disabled',
  'checked',
  'required',
] as const;

  const EVENTS = [
  'checkedChange',
  'valueChange',
  'ixBlur',
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
  }: StencilSvelteProps<JSX.IxRadio, HTMLIxRadioElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-radio bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-radio>
