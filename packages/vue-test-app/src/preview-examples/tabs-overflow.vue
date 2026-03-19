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

const OVERFLOW_TAB_LABELS = [
  'Overview',
  'Analytics',
  'Events',
  'Automation',
  'Data Sources',
  'Notifications',
  'History',
  'Settings',
];

const selectedTab = ref(0);
</script>

<style scoped src="./tabs.css"></style>

<template>
  <div class="tabs" :style="{ maxWidth: '340px' }">
    <IxTabs :selected="selectedTab" layout="auto">
      <IxTabItem
        v-for="(label, index) in OVERFLOW_TAB_LABELS"
        :key="label"
        @click="selectedTab = index"
      >
        {{ label }}
      </IxTabItem>
    </IxTabs>
    <section role="tabpanel" aria-label="Example content">
      Content {{ OVERFLOW_TAB_LABELS[selectedTab] }}
    </section>
  </div>
</template>
