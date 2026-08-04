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
  HTMLRefElement,
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuSettings,
  IxTabItem,
  IxTabs,
} from '@siemens/ix-vue';
import { nextTick, onMounted, ref } from 'vue';

const menu = ref<HTMLRefElement<HTMLIxMenuElement>>();
const activeTabKey = ref('tab-1');

const setActiveTabKey = (event: CustomEvent<string | undefined>) => {
  activeTabKey.value = event.detail ?? 'tab-1';
};

onMounted(async () => {
  await nextTick();
  menu.value?.$el.toggleSettings(true);
});
</script>

<template>
  <IxApplication>
    <IxApplicationHeader>
      <div className="placeholder-logo" slot="logo"></div>
    </IxApplicationHeader>
    <IxMenu ref="menu">
      <IxMenuSettings>
        <IxTabs :activeTabKey="activeTabKey" @tabChange="setActiveTabKey">
          <IxTabItem tabKey="tab-1">Example Setting 1</IxTabItem>
          <IxTabItem tabKey="tab-2">Example Setting 2</IxTabItem>
        </IxTabs>
        <section
          v-if="activeTabKey === 'tab-1'"
          role="tabpanel"
          aria-label="Settings content"
        >
          Example Setting 1 content
        </section>
        <section
          v-if="activeTabKey === 'tab-2'"
          role="tabpanel"
          aria-label="Settings content"
        >
          Example Setting 2 content
        </section>
      </IxMenuSettings>
    </IxMenu>
  </IxApplication>
</template>
