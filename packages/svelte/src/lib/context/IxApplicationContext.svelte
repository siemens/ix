<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import { svelteFrameworkDelegate } from '../delegate.js';
  import { PORTAL_ID } from '../modal/constants.js';
  import { defineApplicationContext } from './context.js';

  let { children }: { children?: Snippet } = $props();

  const delegate = svelteFrameworkDelegate;
  let portalElement: HTMLDivElement | undefined = $state();

  defineApplicationContext({ delegate });
  delegate.willUsePortal();

  $effect(() => {
    if (!portalElement) {
      return;
    }

    delegate.portalReady(portalElement);
    return () => delegate.portalDestroyed();
  });
</script>

{@render children?.()}
<div id={PORTAL_ID} bind:this={portalElement}></div>
