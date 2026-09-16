<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  Mirrors the shape of a generated proxy *with* a two-way model binding, i.e.
  what the output target emits for the components listed in `componentModels`.
-->
<script lang="ts">
  import { useStencilElement } from '../../lib/runtime/index.svelte.js';
  import {
    TEST_EVENTS,
    TEST_PROPS,
    type RuntimeTestElement,
  } from './test-element.js';

  let {
    value = $bindable(),
    element = $bindable(),
    ...rest
  }: {
    value?: unknown;
    element?: RuntimeTestElement;
    [key: string]: unknown;
  } = $props();

  const stencil = useStencilElement(
    () => element,
    () => rest,
    TEST_PROPS,
    TEST_EVENTS,
    {
      prop: 'value',
      event: 'valueChange',
      get: () => value,
      set: (next) => (value = next),
    }
  );
</script>

<runtime-test-element bind:this={element} {...stencil.attributes}></runtime-test-element>
