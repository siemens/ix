<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxTabItem, IxTabs } from '@siemens/ix-vue';
import { ref } from 'vue';

const activeTabKey = ref('tab-1');

const setActiveTabKey = (event: CustomEvent<string | undefined>) => {
  activeTabKey.value = event.detail ?? 'tab-1';
};
</script>

<style scoped src="./tabs.css"></style>

<template>
  <div class="tabs">
    <IxTabs :activeTabKey="activeTabKey" @tabChange="setActiveTabKey">
      <IxTabItem tabKey="tab-1">Tab 1</IxTabItem>
      <IxTabItem tabKey="tab-2">Tab 2</IxTabItem>
      <IxTabItem tabKey="tab-3">Tab 3</IxTabItem>
    </IxTabs>
    <section
      role="tabpanel"
      aria-label="Example content"
      v-show="activeTabKey === 'tab-1'"
    >
      Content Tab 1
    </section>
    <section
      role="tabpanel"
      aria-label="Example content"
      v-show="activeTabKey === 'tab-2'"
    >
      Content Tab 2
    </section>
    <section
      role="tabpanel"
      aria-label="Example content"
      v-show="activeTabKey === 'tab-3'"
    >
      Content Tab 3
    </section>
  </div>
</template>
