<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  A generated proxy over `lifecycle-test-element`, used to observe what the
  element can see of itself when it enters the document.
-->
<script lang="ts">
  import { useStencilElement } from '../../lib/runtime/index.svelte.js';
  import {
    LIFECYCLE_EVENTS,
    LIFECYCLE_PROPS,
    type LifecycleTestElement,
  } from './lifecycle-element.js';

  let {
    element = $bindable(),
    ...rest
  }: { element?: LifecycleTestElement; [key: string]: unknown } = $props();

  const stencil = useStencilElement(
    () => element,
    () => rest,
    LIFECYCLE_PROPS,
    LIFECYCLE_EVENTS
  );
</script>

<lifecycle-test-element bind:this={element} {...stencil.attributes}
></lifecycle-test-element>
