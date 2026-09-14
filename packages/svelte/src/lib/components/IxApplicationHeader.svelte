<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxApplicationHeader } from '@siemens/ix/components/ix-application-header.js';

  defineIxApplicationHeader();

  const PROPS = [
  'name',
  'nameSuffix',
  'companyLogo',
  'companyLogoAlt',
  'appIcon',
  'appIconAlt',
  'appIconOutline',
  'hideBottomBorder',
  'showMenu',
  'ariaLabelAppSwitchIconButton',
  'ariaLabelMoreMenuIconButton',
  'enableTopLayer',
] as const;

  const EVENTS = [
  'menuToggle',
  'openAppSwitch',
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
  }: StencilSvelteProps<JSX.IxApplicationHeader, HTMLIxApplicationHeaderElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-application-header bind:this={element}>{@render children?.()}</ix-application-header>
