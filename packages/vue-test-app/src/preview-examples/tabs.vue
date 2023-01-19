<script setup lang="ts">
import { IxTabItem, IxTabs } from '@siemens/ix-vue/dist';
import { ref } from 'vue';

const selectedTab = ref(0);
const changeTab = (tabId: number) => (selectedTab.value = tabId);
</script>

<template>
  <div style="display: block; position: relative; width: 100%">
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
