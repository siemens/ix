<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  Consumer side of the model binding: owns the state and binds it to the
  generated-proxy stand-in, so a test can drive the value from either end.
-->
<script lang="ts">
  import ModelChild from './ModelChild.svelte';
  import type { RuntimeTestElement } from './test-element.js';

  let { initial = undefined }: { initial?: unknown } = $props();

  // Seeding the state from the prop once is intentional here.
  // svelte-ignore state_referenced_locally
  let value = $state<unknown>(initial);
  let element = $state<RuntimeTestElement | undefined>(undefined);

  export function getValue(): unknown {
    return value;
  }

  export function setValue(next: unknown): void {
    value = next;
  }

  export function getElement(): RuntimeTestElement | undefined {
    return element;
  }
</script>

<ModelChild bind:value bind:element />
