<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxSlider } from '@siemens/ix/components/ix-slider.js';

  defineIxSlider();

  const PROPS = [
  'helperText',
  'label',
  'invalidText',
  'infoText',
  'warningText',
  'validText',
  'showTextAsTooltip',
  'step',
  'min',
  'max',
  'value',
  'marker',
  'trace',
  'traceReference',
  'disabled',
] as const;

  const EVENTS = [
  'valueChange',
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
  }: StencilSvelteProps<JSX.IxSlider, HTMLIxSliderElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-slider bind:this={element}>{@render children?.()}</ix-slider>
