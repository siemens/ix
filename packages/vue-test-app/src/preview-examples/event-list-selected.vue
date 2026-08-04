<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { ref } from 'vue';
import { IxEventList, IxEventListItem } from '@siemens/ix-vue';

const selectedIndex = ref(1);
const items = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];
</script>

<template>
  <IxEventList>
    <IxEventListItem
      v-for="(item, index) in items"
      :key="item"
      itemColor="color-primary"
      :selected="selectedIndex === index"
      @click="selectedIndex = index"
    >
      {{ item }}
    </IxEventListItem>
  </IxEventList>
</template>
