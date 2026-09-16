<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  A 1:1 port of html-test-app/src/preview-examples/select.html: single select,
  a literal item list, no binding.

  `mode="multiple"` with `bind:value` on an array -- the case that forces the
  value to be assigned as a property rather than an attribute -- is exercised by
  `src/testability-examples/select.svelte` instead.
-->
<script lang="ts">
  import { IxSelect, IxSelectItem } from '@siemens/ix-svelte';
</script>

<IxSelect value="1">
  <IxSelectItem label="Item 1" value="1"></IxSelectItem>
  <IxSelectItem label="Item 2" value="2"></IxSelectItem>
  <IxSelectItem label="Item 3" value="3"></IxSelectItem>
  <IxSelectItem label="Item 4" value="4"></IxSelectItem>
</IxSelect>
