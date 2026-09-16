<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxTimeInput } from '@siemens/ix/components/ix-time-input.js';

  defineIxTimeInput();

  const PROPS = [
  'name',
  'placeholder',
  'value',
  'format',
  'minTime',
  'maxTime',
  'required',
  'helperText',
  'label',
  'invalidText',
  'readonly',
  'disabled',
  'infoText',
  'warningText',
  'validText',
  'showTextAsTooltip',
  'i18nErrorTimeUnparsable',
  'hourInterval',
  'minuteInterval',
  'secondInterval',
  'millisecondInterval',
  'i18nSelectTime',
  'i18nTime',
  'i18nHourColumnHeader',
  'i18nMinuteColumnHeader',
  'i18nSecondColumnHeader',
  'i18nMillisecondColumnHeader',
  'suppressSubmitOnEnter',
  'hideHeader',
  'textAlignment',
  'enableTopLayer',
  'ariaLabelTimeToggleButton',
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
    children,
    element = $bindable(),
    ...rest
  }: StencilSvelteProps<JSX.IxTimeInput, HTMLIxTimeInputElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-time-input bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-time-input>
