<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  A 1:1 port of html-test-app/src/preview-examples/input.html.

  `bind:value` is exercised by `src/testability-examples/input.svelte` instead.
-->
<script lang="ts">
  import { IxInput } from '@siemens/ix-svelte';
</script>

<IxInput placeholder="Enter your Username"></IxInput>
