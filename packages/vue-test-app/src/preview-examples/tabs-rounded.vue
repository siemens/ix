<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  iconCalendarSettings,
  iconHierarchy,
  iconMaintenance,
  iconSoundLoud,
  iconSuccess,
  iconTree,
} from '@siemens/ix-icons/icons';
import { IxIcon, IxTabItem, IxTabs } from '@siemens/ix-vue';
</script>

<template>
  <IxTabs rounded>
    <IxTabItem aria-label="Success">
      <IxIcon :name="iconSuccess" aria-hidden="true"></IxIcon>
    </IxTabItem>
    <IxTabItem :counter="200" aria-label="Tree">
      <IxIcon :name="iconTree" aria-hidden="true"></IxIcon>
    </IxTabItem>
    <IxTabItem aria-label="Maintenance">
      <IxIcon :name="iconMaintenance" aria-hidden="true"></IxIcon>
    </IxTabItem>
    <IxTabItem disabled :counter="24" aria-label="Sound loud">
      <IxIcon :name="iconSoundLoud" aria-hidden="true"></IxIcon>
    </IxTabItem>
    <IxTabItem aria-label="Hierarchy">
      <IxIcon :name="iconHierarchy" aria-hidden="true"></IxIcon>
    </IxTabItem>
    <IxTabItem disabled aria-label="Calendar settings">
      <IxIcon :name="iconCalendarSettings" aria-hidden="true"></IxIcon>
    </IxTabItem>
  </IxTabs>
</template>
