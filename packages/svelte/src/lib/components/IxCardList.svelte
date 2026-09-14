<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxCardList } from '@siemens/ix/components/ix-card-list.js';

  defineIxCardList();

  const PROPS = [
  'ariaLabelExpandButton',
  'label',
  'collapse',
  'listStyle',
  'maxVisibleCards',
  'showAllCount',
  'suppressOverflowHandling',
  'hideShowAll',
  'i18nShowAll',
  'i18nShowLess',
  'i18nMoreCards',
] as const;

  const EVENTS = [
  'collapseChanged',
  'showAllClick',
  'showMoreCardClick',
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
  }: StencilSvelteProps<JSX.IxCardList, HTMLIxCardListElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-card-list bind:this={element}>{@render children?.()}</ix-card-list>
