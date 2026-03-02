<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconGlobe, iconHome, iconRocket } from '@siemens/ix-icons/icons';
import {
  IxApplication,
  IxMenu,
  IxMenuCategory,
  IxMenuItem,
} from '@siemens/ix-vue';
</script>

<template>
  <IxApplication>
    <IxMenu>
      <IxMenuItem home :icon="iconHome"> Home </IxMenuItem>
      <IxMenuItem :icon="iconGlobe">Normal Tab</IxMenuItem>
      <IxMenuCategory label="Top level Category" :icon="iconRocket">
        <IxMenuItem :icon="iconGlobe">Nested Tab</IxMenuItem>
        <IxMenuItem :icon="iconGlobe">Nested Tab</IxMenuItem>
      </IxMenuCategory>
    </IxMenu>
  </IxApplication>
</template>
