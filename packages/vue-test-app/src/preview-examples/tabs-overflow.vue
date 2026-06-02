<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * Overflow case: same as Storybook Example/Tabs → Overflow (340px, 8 tabs).
-->

<script setup lang="ts">
import { IxTabItem, IxTabs } from '@siemens/ix-vue';
import { ref } from 'vue';

const OVERFLOW_TABS = [
  { tabKey: 'overview', label: 'Overview' },
  { tabKey: 'analytics', label: 'Analytics' },
  { tabKey: 'events', label: 'Events' },
  { tabKey: 'automation', label: 'Automation' },
  { tabKey: 'data-sources', label: 'Data Sources' },
  { tabKey: 'notifications', label: 'Notifications' },
  { tabKey: 'history', label: 'History' },
  { tabKey: 'settings', label: 'Settings' },
];

const activeTabKey = ref('overview');

const setActiveTabKey = (event: CustomEvent<string | undefined>) => {
  activeTabKey.value = event.detail ?? 'overview';
};
</script>

<style scoped src="./tabs.css"></style>

<template>
  <div class="tabs" :style="{ maxWidth: '340px' }">
    <IxTabs
      :activeTabKey="activeTabKey"
      layout="auto"
      @tabChange="setActiveTabKey"
    >
      <IxTabItem
        v-for="{ tabKey, label } in OVERFLOW_TABS"
        :key="tabKey"
        :tabKey="tabKey"
      >
        {{ label }}
      </IxTabItem>
    </IxTabs>
    <section role="tabpanel" aria-label="Example content">
      Content
      {{ OVERFLOW_TABS.find((tab) => tab.tabKey === activeTabKey)?.label }}
    </section>
  </div>
</template>
