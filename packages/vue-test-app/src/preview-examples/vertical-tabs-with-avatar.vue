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
  IxMenu,
  IxMenuAvatar,
  IxMenuAvatarItem,
  IxMenuItem,
} from '@siemens/ix-vue';
</script>

<style scoped src="./styles/menu.css"></style>

<template>
  <IxMenu>
    <IxMenuAvatar top="john.doe@company.com" bottom="Administrator">
      <IxMenuAvatarItem
        icon="user-profile"
        label="User profile..."
      ></IxMenuAvatarItem>
    </IxMenuAvatar>
    <IxMenuItem home-tab tab-icon="home"> &nbsp; Home&nbsp; </IxMenuItem>
    <IxMenuItem tab-icon="globe"> Normal Tab </IxMenuItem>
    <IxMenuItem tab-icon="star" disabled>
      &nbsp; Disabled Tab&nbsp;
    </IxMenuItem>
    <IxMenuItem tab-icon="star"> With other Icon </IxMenuItem>
  </IxMenu>
</template>
