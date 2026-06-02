<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
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
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
} from '@siemens/ix-vue';
import { onMounted, useTemplateRef } from 'vue';

const input = useTemplateRef<HTMLIxMenuElement>('menu');
onMounted(() => {
  input.value?.toggleAbout(true);
});
</script>

<template>
  <IxApplication>
    <IxApplicationHeader>
      <div className="placeholder-logo" slot="logo"></div>
    </IxApplicationHeader>
    <IxMenu ref="menu">
      <IxMenuAbout enableLegacyTabs activeTabKey="tab-1">
        <IxMenuAboutItem tabKey="tab-1" label="Tab 1"
          >Content 1</IxMenuAboutItem
        >
        <IxMenuAboutItem tabKey="tab-2" label="Tab 2"
          >Content 2</IxMenuAboutItem
        >
      </IxMenuAbout>
    </IxMenu>
  </IxApplication>
</template>
