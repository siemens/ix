<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  Exposes a count of clicks received by `ix-button`.

  `onclick` is the plain DOM event, not a Stencil `@Event()`, so this is the
  case that checks the runtime routes a lowercase native event name to
  `addEventListener('click')` and does not camel-case it into `onClick`.
-->
<script lang="ts">
  import { IxButton, IxTypography } from '@siemens/ix-svelte';

  let clicks = $state(0);
</script>

<IxButton onclick={() => clicks++}>Button</IxButton>
<IxButton disabled>Button</IxButton>

<IxTypography data-testid="click-count">Clicked {clicks} times</IxTypography>
