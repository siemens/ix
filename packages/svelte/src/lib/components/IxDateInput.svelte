<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxDateInput } from '@siemens/ix/components/ix-date-input.js';

  defineIxDateInput();

  const PROPS = [
  'name',
  'placeholder',
  'value',
  'minDate',
  'maxDate',
  'locale',
  'format',
  'required',
  'helperText',
  'label',
  'ariaLabelCalendarButton',
  'invalidText',
  'readonly',
  'disabled',
  'infoText',
  'warningText',
  'validText',
  'showTextAsTooltip',
  'i18nErrorDateUnparsable',
  'showWeekNumbers',
  'weekStartIndex',
  'ariaLabelPreviousMonthButton',
  'ariaLabelNextMonthButton',
  'suppressSubmitOnEnter',
  'textAlignment',
  'enableTopLayer',
] as const;

  const EVENTS = [
  'valueChange',
  'validityStateChange',
  'ixFocus',
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
  }: StencilSvelteProps<JSX.IxDateInput, HTMLIxDateInputElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS, {
    prop: 'value',
    event: 'valueChange',
    get: () => value,
    set: (next) => (value = next as never),
  });
</script>

<ix-date-input bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-date-input>
