<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxCheckboxGroup } from '@siemens/ix/components/ix-checkbox-group.js';

  defineIxCheckboxGroup();

  const PROPS = [
  'helperText',
  'label',
  'direction',
  'invalidText',
  'infoText',
  'validText',
  'warningText',
  'showTextAsTooltip',
  'required',
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
  }: StencilSvelteProps<JSX.IxCheckboxGroup, HTMLIxCheckboxGroupElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-checkbox-group bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-checkbox-group>
