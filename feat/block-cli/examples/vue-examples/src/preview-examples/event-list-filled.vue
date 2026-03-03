<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxEventList, IxEventListItem } from '@siemens/ix-vue';

const items = [
  { text: 'Text 1', color: 'color-primary' },
  { text: 'Text 2', color: 'color-primary' },
  { text: 'Text 3', color: 'color-alarm' },
  { text: 'Text 4', color: 'color-success' },
];
</script>

<template>
  <IxEventList>
    <IxEventListItem
      v-for="item in items"
      :key="item.text"
      variant="filled"
      :itemColor="item.color"
    >
      {{ item.text }}
    </IxEventListItem>
  </IxEventList>
</template>
