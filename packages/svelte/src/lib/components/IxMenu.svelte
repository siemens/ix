<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxMenu } from '@siemens/ix/components/ix-menu.js';

  defineIxMenu();

  const PROPS = [
  'showSettings',
  'showAbout',
  'enableToggleTheme',
  'applicationName',
  'applicationDescription',
  'expand',
  'startExpanded',
  'pinned',
  'i18nAriaLabelMenu',
  'i18nNavigationHint',
  'i18nLegal',
  'i18nSettings',
  'i18nToggleTheme',
  'i18nExpand',
  'i18nCollapse',
] as const;

  const EVENTS = [
  'expandChange',
  'mapExpandChange',
  'openAppSwitch',
  'openSettings',
  'openAbout',
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
  }: StencilSvelteProps<JSX.IxMenu, HTMLIxMenuElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-menu bind:this={element}>{@render children?.()}</ix-menu>
