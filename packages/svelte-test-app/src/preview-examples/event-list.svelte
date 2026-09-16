<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<script lang="ts">
  import { IxEventList, IxEventListItem } from '@siemens/ix-svelte';
</script>

<IxEventList>
  <IxEventListItem itemColor="--si-sys-background-accent">
    Text 1
  </IxEventListItem>
  <IxEventListItem itemColor="--si-sys-background-accent">
    Text 2
  </IxEventListItem>
  <IxEventListItem itemColor="--si-sys-background-danger">
    Text 3
  </IxEventListItem>
  <IxEventListItem itemColor="--si-sys-background-success">
    Text 4
  </IxEventListItem>
</IxEventList>
