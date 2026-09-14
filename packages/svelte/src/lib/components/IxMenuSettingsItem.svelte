<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxMenuSettingsItem } from '@siemens/ix/components/ix-menu-settings-item.js';

  defineIxMenuSettingsItem();

  const PROPS = [
  'tabKey',
  'label',
] as const;

  const EVENTS = [
  'labelChange',
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
  }: StencilSvelteProps<JSX.IxMenuSettingsItem, HTMLIxMenuSettingsItemElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-menu-settings-item bind:this={element}>{@render children?.()}</ix-menu-settings-item>
