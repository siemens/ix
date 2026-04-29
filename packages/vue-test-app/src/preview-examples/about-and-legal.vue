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
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuAbout,
  IxTabItem,
  IxTabs,
} from '@siemens/ix-vue';
import { onMounted, ref, useTemplateRef } from 'vue';

const input = useTemplateRef<HTMLIxMenuElement>('menu');
const activeTabKey = ref('tab-1');

const setActiveTabKey = (event: CustomEvent<string | undefined>) => {
  activeTabKey.value = event.detail ?? 'tab-1';
};

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
      <IxMenuAbout>
        <IxTabs :activeTabKey="activeTabKey" @tabChange="setActiveTabKey">
          <IxTabItem tabKey="tab-1">Tab 1</IxTabItem>
          <IxTabItem tabKey="tab-2">Tab 2</IxTabItem>
        </IxTabs>
        <section
          v-if="activeTabKey === 'tab-1'"
          role="tabpanel"
          aria-label="About and legal content"
        >
          Content 1
        </section>
        <section
          v-if="activeTabKey === 'tab-2'"
          role="tabpanel"
          aria-label="About and legal content"
        >
          Content 2
        </section>
      </IxMenuAbout>
    </IxMenu>
  </IxApplication>
</template>
