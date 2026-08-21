<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxList, IxListItem } from '@siemens/ix-vue';
import { addIcons } from '@siemens/ix-icons';
import { iconProject } from '@siemens/ix-icons/icons';

addIcons({ iconProject });
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <IxList has-divider item-gap="0" variant="ghost">
      <IxListItem icon="project" label="Item 1"></IxListItem>
      <IxListItem icon="project" label="Item 2"></IxListItem>
      <IxListItem
        icon="project"
        label="Item 3"
        has-divider="false"
      ></IxListItem>
    </IxList>
    <IxList variant="outline" item-gap="4">
      <IxListItem icon="project" label="Item 1"></IxListItem>
      <IxListItem icon="project" label="Item 2"></IxListItem>
      <IxListItem icon="project" label="Item 3"></IxListItem>
    </IxList>
    <IxList variant="filled">
      <IxListItem icon="project" label="Item 1"></IxListItem>
      <IxListItem icon="project" label="Item 2"></IxListItem>
      <IxListItem icon="project" label="Item 3"></IxListItem>
    </IxList>
  </div>
</template>
