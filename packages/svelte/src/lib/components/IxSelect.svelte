<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxSelect } from '@siemens/ix/components/ix-select.js';

  defineIxSelect();

  const PROPS = [
  'name',
  'required',
  'label',
  'ariaLabelClearIconButton',
  'ariaLabelAddItem',
  'i18nMoreItems',
  'warningText',
  'infoText',
  'invalidText',
  'validText',
  'helperText',
  'showTextAsTooltip',
  'value',
  'allowClear',
  'mode',
  'editable',
  'disabled',
  'readonly',
  'i18nPlaceholder',
  'i18nPlaceholderEditable',
  'i18nSelectListHeader',
  'i18nNoMatches',
  'i18nAllSelected',
  'i18nRemoveSelectedItem',
  'hideListHeader',
  'dropdownWidth',
  'dropdownMaxWidth',
  'collapseMultipleSelection',
  'enableTopLayer',
] as const;

  const EVENTS = [
  'valueChange',
  'inputChange',
  'addItem',
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
    value = $bindable(),
    children,
    element = $bindable(),
    ...rest
  }: StencilSvelteProps<JSX.IxSelect, HTMLIxSelectElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS, {
    prop: 'value',
    event: 'valueChange',
    get: () => value,
    set: (next) => (value = next as never),
  });
</script>

<ix-select bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-select>
