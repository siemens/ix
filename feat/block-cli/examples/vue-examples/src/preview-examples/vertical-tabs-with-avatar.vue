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
  iconGlobe,
  iconHome,
  iconStar,
  iconUserProfile,
} from '@siemens/ix-icons/icons';
import {
  IxMenu,
  IxMenuAvatar,
  IxMenuAvatarItem,
  IxMenuItem,
} from '@siemens/ix-vue';
</script>

<style scoped src="./vertical-tabs-with-avatar.css"></style>

<template>
  <IxMenu>
    <IxMenuAvatar top="john.doe@company.com" bottom="Administrator">
      <IxMenuAvatarItem
        :icon="iconUserProfile"
        label="User profile..."
      ></IxMenuAvatarItem>
    </IxMenuAvatar>
    <IxMenuItem home-tab :icon="iconHome">Home</IxMenuItem>
    <IxMenuItem :icon="iconGlobe">Normal tab</IxMenuItem>
    <IxMenuItem :icon="iconStar" disabled>Disabled tab</IxMenuItem>
    <IxMenuItem :icon="iconStar">With other icon</IxMenuItem>
    <IxMenuItem :icon="iconStar" style="display: none"
      >Should not be visible</IxMenuItem
    >
  </IxMenu>
</template>
