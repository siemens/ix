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
import { IxTabItem, IxTabs } from '@siemens/ix-vue';
</script>

<template>
  <IxTabs rounded>
    <IxTabItem tabKey="success" :icon="iconSuccess" label="Success" />
    <IxTabItem tabKey="tree" :icon="iconTree" label="Tree" :counter="200" />
    <IxTabItem tabKey="maintenance" :icon="iconMaintenance" label="Maintenance" />
    <IxTabItem
      tabKey="sound"
      :icon="iconSoundLoud"
      label="Sound"
      disabled
      :counter="24"
    />
    <IxTabItem tabKey="hierarchy" :icon="iconHierarchy" label="Hierarchy" />
    <IxTabItem
      tabKey="calendar-settings"
      :icon="iconCalendarSettings"
      label="Calendar settings"
      disabled
    />
  </IxTabs>
</template>
