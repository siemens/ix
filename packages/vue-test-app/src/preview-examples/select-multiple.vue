<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxSelect, IxSelectItem } from '@siemens/ix-vue';
import { nextTick, onMounted, ref } from 'vue';

const selection = ref<string[]>([]);

onMounted(() => nextTick(() => (selection.value = ['1', '3'])));
</script>

<template>
  <IxSelect mode="multiple" :value="selection">
    <IxSelectItem label="Item 1" value="1"></IxSelectItem>
    <IxSelectItem label="Item 2" value="2"></IxSelectItem>
    <IxSelectItem label="Item 3" value="3"></IxSelectItem>
    <IxSelectItem label="Item 4" value="4"></IxSelectItem>
  </IxSelect>
</template>
