<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  A 1:1 port of html-test-app/src/preview-examples/buttons.html.

  The click-count read-out lives in `src/testability-examples/buttons.svelte`
  instead.
-->
<script lang="ts">
  import { IxButton } from '@siemens/ix-svelte';

  /*
   * Linked rather than imported. The example stylesheets are written for
   * html-test-app, where every example is its own document, so they style
   * `body` directly. A static `import` would bundle this into the SPA's single
   * stylesheet and apply `body { display: flex }` to every route; the `?url`
   * import plus `<svelte:head>` reproduces the `<link>` the HTML reference has,
   * scoped to the lifetime of this route.
   */
  import stylesheet from './buttons.css?url';
</script>

<svelte:head>
  <link rel="stylesheet" href={stylesheet} />
</svelte:head>

<IxButton>Button</IxButton>
<IxButton disabled>Button</IxButton>
