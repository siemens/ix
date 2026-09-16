<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  Mirrors the shape of a generated proxy without a two-way model binding.
  Everything other than `element` is forwarded to the runtime as props.
-->
<script lang="ts">
  import { useStencilElement } from '../../lib/runtime/index.svelte.js';
  import {
    TEST_EVENTS,
    TEST_PROPS,
    type RuntimeTestElement,
  } from './test-element.js';

  let {
    element = $bindable(),
    ...rest
  }: { element?: RuntimeTestElement; [key: string]: unknown } = $props();

  const stencil = useStencilElement(
    () => element,
    () => rest,
    TEST_PROPS,
    TEST_EVENTS
  );

  /**
   * The props exactly as the component sees them. The test harness wraps the
   * props it is given in `$state()`, which deep-proxies plain objects and
   * arrays, so this -- not the literal passed to `render()` -- is what the
   * runtime must forward to the element untouched.
   */
  export function getProps(): Record<string, unknown> {
    return rest;
  }
</script>

<runtime-test-element bind:this={element} {...stencil.attributes}></runtime-test-element>
