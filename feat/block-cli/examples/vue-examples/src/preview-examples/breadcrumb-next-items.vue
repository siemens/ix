<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-vue';
import { ref } from 'vue';

const nextItems = ref<string[]>(['Next Item 1']);
</script>

<template>
  <IxBreadcrumb :nextItems="nextItems">
    <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>
  </IxBreadcrumb>
</template>
