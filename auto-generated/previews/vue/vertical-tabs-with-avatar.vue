<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
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

<template>
  <IxMenu>
    <IxMenuAvatar>
      <IxMenuAvatarItem label="Option 1"></IxMenuAvatarItem>
    </IxMenuAvatar>
    <IxMenuItem home-tab tab-icon="home"> &nbsp; Home&nbsp; </IxMenuItem>
    <IxMenuItem tab-icon="globe"> Normal Tab </IxMenuItem>
    <IxMenuItem tab-icon="star" disabled>
      &nbsp; Disabled Tab&nbsp;
    </IxMenuItem>
    <IxMenuItem tab-icon="star"> With other Icon </IxMenuItem>
  </IxMenu>
</template>
