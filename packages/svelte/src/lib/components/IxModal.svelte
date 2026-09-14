<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxModal } from '@siemens/ix/components/ix-modal.js';

  defineIxModal();

  const PROPS = [
  'size',
  'disableAnimation',
  'hideBackdrop',
  'closeOnBackdropClick',
  'beforeDismiss',
  'centered',
  'isNonBlocking',
] as const;

  const EVENTS = [
  'dialogClose',
  'dialogDismiss',
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
  }: StencilSvelteProps<JSX.IxModal, HTMLIxModalElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-modal bind:this={element}>{@render children?.()}</ix-modal>
