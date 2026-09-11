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
  <IxList>
    <IxListItem icon="project" label="Item 1"></IxListItem>
    <IxListItem icon="project" label="Item 2"></IxListItem>
    <IxListItem icon="project" label="Item 3"></IxListItem>
  </IxList>
</template>
