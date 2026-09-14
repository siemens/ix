<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxCategoryFilter } from '@siemens/ix/components/ix-category-filter.js';

  defineIxCategoryFilter();

  const PROPS = [
  'disabled',
  'readonly',
  'filterState',
  'placeholder',
  'categories',
  'nonSelectableCategories',
  'suggestions',
  'icon',
  'hideIcon',
  'staticOperator',
  'uniqueCategories',
  'labelCategories',
  'i18nPlainText',
  'ariaLabelResetButton',
  'ariaLabelOperatorButton',
  'ariaLabelFilterInput',
  'enableTopLayer',
] as const;

  const EVENTS = [
  'categoryChanged',
  'inputChanged',
  'filterChanged',
  'filterCleared',
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
  }: StencilSvelteProps<JSX.IxCategoryFilter, HTMLIxCategoryFilterElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-category-filter bind:this={element}>{@render children?.()}</ix-category-filter>
