<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxDateDropdown } from '@siemens/ix/components/ix-date-dropdown.js';

  defineIxDateDropdown();

  const PROPS = [
  'disabled',
  'format',
  'singleSelection',
  'from',
  'to',
  'minDate',
  'maxDate',
  'dateRangeId',
  'variant',
  'loading',
  'showWeekNumbers',
  'dateRangeOptions',
  'locale',
  'weekStartIndex',
  'i18nDone',
  'i18nNoRange',
  'today',
  'enableTopLayer',
] as const;

  const EVENTS = [
  'dateRangeChange',
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
  }: StencilSvelteProps<JSX.IxDateDropdown, HTMLIxDateDropdownElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-date-dropdown bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-date-dropdown>
