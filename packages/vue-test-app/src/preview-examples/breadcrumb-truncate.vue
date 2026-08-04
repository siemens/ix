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
</script>

<template>
  <IxBreadcrumb :visibleItemCount="3">
    <IxBreadcrumbItem label="Item 1" breadcrumbKey="item-1"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 2" breadcrumbKey="item-2"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 3" breadcrumbKey="item-3"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 4" breadcrumbKey="item-4"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 5" breadcrumbKey="item-5"></IxBreadcrumbItem>
  </IxBreadcrumb>
</template>
