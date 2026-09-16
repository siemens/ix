<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxChatInput } from '@siemens/ix/components/ix-chat-input.js';

  defineIxChatInput();

  const PROPS = [
  'state',
  'name',
  'placeholder',
  'value',
  'disabled',
  'readonly',
  'textareaLabel',
  'maxLength',
  'characterLimit',
  'i18nCharacterLimitReached',
  'i18nCharacterLimitWarning',
  'characterLimitWarningThreshold',
  'minRows',
  'maxRows',
  'insertLineBreakOnEnter',
  'disclaimer',
] as const;

  const EVENTS = [
  'valueChange',
  'ixBlur',
  'ixChange',
  'promptSubmit',
] as const;
</script>

<script lang="ts">
  import type { JSX } from '@siemens/ix';
  import {
    useStencilElement,
    type StencilSvelteProps,
  } from '../runtime/index.svelte.js';

  let {
    value = $bindable(),
    children,
    element = $bindable(),
    ...rest
  }: StencilSvelteProps<JSX.IxChatInput, HTMLIxChatInputElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS, {
    prop: 'value',
    event: 'valueChange',
    get: () => value,
    set: (next) => (value = next as never),
  });
</script>

<ix-chat-input bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-chat-input>
