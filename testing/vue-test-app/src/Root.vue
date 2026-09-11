<!--
  SPDX-FileCopyrightText: 2022 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { computed, ref } from 'vue';
import { IxApplicationContext } from '@siemens/ix-vue';
import App from './App.vue';

const routes = {
  '/': App,
};

const currentPath = ref(window.location.pathname);
const currentView = computed(() => {
  return (routes as any)[currentPath.value || '/'] || App;
});
</script>

<template>
  <IxApplicationContext>
    <component :is="currentView"></component>
  </IxApplicationContext>
</template>
