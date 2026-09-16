<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  Like `PropHost`, but it owns the props object itself and can replace it
  wholesale. `rerender()` from the test harness merges into the previous props,
  so it can never make a key *disappear* -- which is exactly the case the
  stale-property handling exists for.
-->
<script lang="ts">
  import { useStencilElement } from '../../lib/runtime/index.svelte.js';
  import {
    TEST_EVENTS,
    TEST_PROPS,
    type RuntimeTestElement,
  } from './test-element.js';

  let { initial = {} }: { initial?: Record<string, unknown> } = $props();

  // svelte-ignore state_referenced_locally
  let current = $state<Record<string, unknown>>(initial);
  let element = $state<RuntimeTestElement | undefined>(undefined);

  const stencil = useStencilElement(
    () => element,
    () => current,
    TEST_PROPS,
    TEST_EVENTS
  );

  export function setProps(next: Record<string, unknown>): void {
    current = next;
  }

  export function getElement(): RuntimeTestElement | undefined {
    return element;
  }
</script>

<runtime-test-element bind:this={element} {...stencil.attributes}
></runtime-test-element>
