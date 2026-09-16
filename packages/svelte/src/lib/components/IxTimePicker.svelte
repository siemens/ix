<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxTimePicker } from '@siemens/ix/components/ix-time-picker.js';

  defineIxTimePicker();

  const PROPS = [
  'format',
  'corners',
  'embedded',
  'dateTimePickerAppearance',
  'hideHeader',
  'hourInterval',
  'minuteInterval',
  'secondInterval',
  'millisecondInterval',
  'time',
  'minTime',
  'maxTime',
  'i18nConfirmTime',
  'i18nHeader',
  'i18nHourColumnHeader',
  'i18nMinuteColumnHeader',
  'i18nSecondColumnHeader',
  'i18nMillisecondColumnHeader',
] as const;

  const EVENTS = [
  'timeSelect',
  'timeChange',
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
  }: StencilSvelteProps<JSX.IxTimePicker, HTMLIxTimePickerElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-time-picker bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-time-picker>
