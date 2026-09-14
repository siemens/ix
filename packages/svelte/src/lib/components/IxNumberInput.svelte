<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxNumberInput } from '@siemens/ix/components/ix-number-input.js';

  defineIxNumberInput();

  const PROPS = [
  'name',
  'placeholder',
  'value',
  'required',
  'disabled',
  'readonly',
  'helperText',
  'infoText',
  'showTextAsTooltip',
  'validText',
  'warningText',
  'label',
  'invalidText',
  'pattern',
  'min',
  'max',
  'allowedCharactersPattern',
  'showStepperButtons',
  'step',
  'suppressSubmitOnEnter',
  'textAlignment',
  'allowEmptyValueChange',
] as const;

  const EVENTS = [
  'valueChange',
  'validityStateChange',
  'ixBlur',
  'ixChange',
] as const;
</script>

<script lang="ts">
  import type { JSX } from '@siemens/ix';
  import {
    useStencilElement,
    type StencilSvelteProps,
  } from '../runtime/index.svelte.js';

  let {
    value = $bindable(),
    children,
    element = $bindable(),
    ...rest
  }: StencilSvelteProps<JSX.IxNumberInput, HTMLIxNumberInputElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS, {
    prop: 'value',
    event: 'valueChange',
    get: () => value,
    set: (next) => (value = next as never),
  });
</script>

<ix-number-input bind:this={element}>{@render children?.()}</ix-number-input>
