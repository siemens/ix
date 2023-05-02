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
  IxBasicNavigation,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
} from '@siemens/ix-vue';
import { ref, watch } from 'vue';

const menu = ref<HTMLIxMenuElement>();

watch(menu, () => menu.value?.toggleAbout(true));
</script>

<template>
  <IxBasicNavigation>
    <div className="placeholder-logo" slot="logo"></div>
    <IxMenu ref="menu">
      <IxMenuAbout>
        <IxMenuAboutItem label="Tab 1">Content 1</IxMenuAboutItem>
        <IxMenuAboutItem label="Tab 2">Content 2</IxMenuAboutItem>
      </IxMenuAbout>
    </IxMenu>
  </IxBasicNavigation>
</template>
