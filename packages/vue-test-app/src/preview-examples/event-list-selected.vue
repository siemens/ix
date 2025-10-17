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
</script>

<template>
  <IxEventList>
    <IxEventListItem
      itemColor="color-primary"
      :selected="selectedIndex === 0"
      @click="selectedIndex = 0"
    >
      Text 1
    </IxEventListItem>
    <IxEventListItem
      itemColor="color-primary"
      :selected="selectedIndex === 1"
      @click="selectedIndex = 1"
    >
      Text 2
    </IxEventListItem>
    <IxEventListItem
      itemColor="color-primary"
      :selected="selectedIndex === 2"
      @click="selectedIndex = 2"
    >
      Text 3
    </IxEventListItem>
    <IxEventListItem
      itemColor="color-primary"
      :selected="selectedIndex === 3"
      @click="selectedIndex = 3"
    >
      Text 4
    </IxEventListItem>
  </IxEventList>
</template>
