<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  A 1:1 port of html-test-app/src/preview-examples/toast.html.

  `IxToastContainer` is rendered explicitly, as the HTML reference does. Without
  it `showToast` creates one on demand, so the page would render nothing until
  the button is pressed.
-->
<script lang="ts">
  import { IxButton, IxToastContainer, showToast } from '@siemens/ix-svelte';
</script>

<IxToastContainer></IxToastContainer>

<IxButton
  id="toastButton"
  onclick={() => showToast({ message: 'My toast message!' })}
>
  Trigger toast
</IxButton>
