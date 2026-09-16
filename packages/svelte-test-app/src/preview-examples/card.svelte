<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  A 1:1 port of html-test-app/src/preview-examples/card.html.

  `name` is the icon's data URI rather than the registered name `"capacity"`;
  the HTML reference calls `addIcons({ iconCapacity })` to register it under a
  short name first. Both resolve to the same icon.
-->
<script lang="ts">
  import { iconCapacity } from '@siemens/ix-icons/icons';
  import {
    IxCard,
    IxCardContent,
    IxIcon,
    IxTypography,
  } from '@siemens/ix-svelte';

  /* Linked, not imported -- see the note in `buttons.svelte`. */
  import stylesheet from './card.css?url';

  const onclick = (event: Event) => {
    console.log(event);
  };
</script>

<svelte:head>
  <link rel="stylesheet" href={stylesheet} />
</svelte:head>

<div class="card-example">
  <IxCard variant="outline" {onclick}>
    <IxCardContent>
      <IxIcon name={iconCapacity}></IxIcon>
      <IxTypography bold>Number of components</IxTypography>
      <IxTypography>
        Vanilla JavaScript<br />
        Angular<br />
        Blazor<br />
        React<br />
        Vue.js
      </IxTypography>
      <IxTypography format="h1">123</IxTypography>
    </IxCardContent>
  </IxCard>
</div>
