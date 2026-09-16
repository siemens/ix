<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxDropdown } from '@siemens/ix/components/ix-dropdown.js';

  defineIxDropdown();

  const PROPS = [
  'suppressAutomaticPlacement',
  'show',
  'trigger',
  'anchor',
  'closeBehavior',
  'placement',
  'positioningStrategy',
  'header',
  'suppressTriggerVisibilityCheck',
  'disableFocusHandling',
  'disableFocusTrap',
  'enableTopLayer',
  'focusCheckedItem',
  'keyboardActivationKeys',
  'keyboardItemTriggerKeys',
  'offset',
  'overwriteDropdownStyle',
  'discoverAllSubmenus',
  'ignoreRelatedSubmenu',
  'suppressOverflowBehavior',
  'focusHost',
  'focusTrapOptions',
  'hostRole',
  'callbackFocusElement',
] as const;

  const EVENTS = [
  'showChange',
  'showChanged',
  'experimentalRequestFocus',
  'experimentalFocusNextElement',
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
  }: StencilSvelteProps<JSX.IxDropdown, HTMLIxDropdownElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-dropdown bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-dropdown>
