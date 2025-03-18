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

const items = ref([
    { id: 1, text: 'Text 1', color: 'color-primary' },
    { id: 2, text: 'Text 2', color: 'color-primary' },
    { id: 3, text: 'Text 3', color: 'color-primary' },
]);
</script>

<template>
    <IxEventList :itemHeight="60">
        <IxEventListItem v-for="item in items" :key="item.id" :color="item.color">{{ item.text }}</IxEventListItem>
    </IxEventList>
</template>
