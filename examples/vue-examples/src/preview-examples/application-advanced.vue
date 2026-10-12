<!--
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuCategory,
  IxMenuItem,
  IxMenuSettings,
} from '@siemens/ix-vue';
import {
  iconAlarmBell,
  iconHome,
  iconPiechart,
  iconPlant,
  iconNetworkDevice,
} from '@siemens/ix-icons/icons';
import { ref } from 'vue';

const activeContent = ref('home');
</script>

<template>
  <IxApplication>
    <IxApplicationHeader name="My Application">
      <div class="placeholder-logo" slot="logo"></div>
      <IxAvatar username="Example User" extra="Additional info"></IxAvatar>
    </IxApplicationHeader>

    <IxMenu>
      <IxMenuItem
        home
        :icon="iconHome"
        :active="activeContent === 'home'"
        @click="activeContent = 'home'"
        >Home</IxMenuItem
      >
      <IxMenuItem
        :icon="iconAlarmBell"
        :active="activeContent === 'alarm'"
        @click="activeContent = 'alarm'"
        >Alarm</IxMenuItem
      >
      <IxMenuCategory :icon="iconPiechart" label="Analysis">
        <IxMenuItem
          :icon="iconPlant"
          :active="activeContent === 'plant'"
          @click="activeContent = 'plant'"
          >Plant</IxMenuItem
        >
        <IxMenuItem
          :icon="iconNetworkDevice"
          :active="activeContent === 'network'"
          @click="activeContent = 'network'"
          >Network</IxMenuItem
        >
      </IxMenuCategory>
      <IxMenuSettings></IxMenuSettings>
      <IxMenuAbout></IxMenuAbout>
    </IxMenu>
    <IxContent>
      <IxContentHeader
        :header-title="`Example ${activeContent} content`"
      ></IxContentHeader>
    </IxContent>
  </IxApplication>
</template>
