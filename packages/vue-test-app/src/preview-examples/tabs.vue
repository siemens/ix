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

const selectedTab = ref(0);
const changeTab = (tabId: number) => (selectedTab.value = tabId);
</script>

<style scoped src="./tabs.css"></style>

<template>
  <div class="tabs">
    <IxTabs :selected="selectedTab">
      <IxTabItem @click="changeTab(0)">Tab 1</IxTabItem>
      <IxTabItem @click="changeTab(1)">Tab 2</IxTabItem>
      <IxTabItem @click="changeTab(2)">Tab 3</IxTabItem>
    </IxTabs>
    <div v-show="selectedTab === 0">Content 1</div>
    <div v-show="selectedTab === 1">Content 2</div>
    <div v-show="selectedTab === 2">Content 3</div>
  </div>
</template>
