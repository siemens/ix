<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxDatetimePicker } from '@siemens/ix/components/ix-datetime-picker.js';

  defineIxDatetimePicker();

  const PROPS = [
  'singleSelection',
  'minDate',
  'maxDate',
  'dateFormat',
  'timeFormat',
  'minTime',
  'maxTime',
  'from',
  'to',
  'time',
  'showTimeReference',
  'timeReference',
  'i18nDone',
  'i18nTime',
  'ariaLabelPreviousMonthButton',
  'ariaLabelNextMonthButton',
  'weekStartIndex',
  'locale',
  'showWeekNumbers',
  'embedded',
] as const;

  const EVENTS = [
  'timeChange',
  'dateChange',
  'dateSelect',
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
  }: StencilSvelteProps<JSX.IxDatetimePicker, HTMLIxDatetimePickerElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-datetime-picker bind:this={element}>{@render children?.()}</ix-datetime-picker>
