<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxCheckbox } from '@siemens/ix/components/ix-checkbox.js';

  defineIxCheckbox();

  const PROPS = [
  'name',
  'value',
  'label',
  'checked',
  'disabled',
  'indeterminate',
  'required',
] as const;

  const EVENTS = [
  'checkedChange',
  'valueChange',
  'ixBlur',
] as const;
</script>

<script lang="ts">
  import type { JSX } from '@siemens/ix';
  import {
    useStencilElement,
    type StencilSvelteProps,
  } from '../runtime/index.svelte.js';

  let {
    checked = $bindable(),
    children,
    element = $bindable(),
    ...rest
  }: StencilSvelteProps<JSX.IxCheckbox, HTMLIxCheckboxElement> = $props();

  useStencilElement(() => element, () => rest, PROPS, EVENTS, {
    prop: 'checked',
    event: 'checkedChange',
    get: () => checked,
    set: (next) => (checked = next as never),
  });
</script>

<ix-checkbox bind:this={element}>{@render children?.()}</ix-checkbox>
