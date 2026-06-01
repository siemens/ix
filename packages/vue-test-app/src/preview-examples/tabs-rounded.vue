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
    <IxTabItem tabKey="success" label="Success">
      <IxIcon :name="iconSuccess" aria-label="Success"></IxIcon>
    </IxTabItem>
    <IxTabItem tabKey="tree" label="Tree" :counter="200">
      <IxIcon :name="iconTree" aria-label="Tree"></IxIcon>
    </IxTabItem>
    <IxTabItem tabKey="maintenance" label="Maintenance">
      <IxIcon :name="iconMaintenance" aria-label="Maintenance"></IxIcon>
    </IxTabItem>
    <IxTabItem tabKey="sound" label="Sound" disabled :counter="24">
      <IxIcon :name="iconSoundLoud" aria-label="Sound"></IxIcon>
    </IxTabItem>
    <IxTabItem tabKey="hierarchy" label="Hierarchy">
      <IxIcon :name="iconHierarchy" aria-label="Hierarchy"></IxIcon>
    </IxTabItem>
    <IxTabItem tabKey="calendar-settings" label="Calendar settings" disabled>
      <IxIcon
        :name="iconCalendarSettings"
        aria-label="Calendar settings"
      ></IxIcon>
    </IxTabItem>
  </IxTabs>
</template>
