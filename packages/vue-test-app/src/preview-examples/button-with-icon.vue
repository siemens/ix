<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconInfo } from '@siemens/ix-icons/icons';
import { IxIconButton } from '@siemens/ix-vue';
</script>

<style scoped src="./button-with-icon.css"></style>

<template>
  <div>
    <IxIconButton :icon="iconInfo" variant="primary"></IxIconButton>
    <IxIconButton :icon="iconInfo"></IxIconButton>
    <IxIconButton :icon="iconInfo" variant="danger"></IxIconButton>
    <IxIconButton :icon="iconInfo" outline></IxIconButton>
    <IxIconButton :icon="iconInfo" ghost></IxIconButton>
  </div>

  <div>
    <IxIconButton :icon="iconInfo" oval variant="primary"></IxIconButton>
    <IxIconButton :icon="iconInfo" oval></IxIconButton>
    <IxIconButton :icon="iconInfo" oval variant="danger"></IxIconButton>
    <IxIconButton :icon="iconInfo" oval outline></IxIconButton>
    <IxIconButton :icon="iconInfo" oval ghost></IxIconButton>
  </div>

  <div>
    <IxIconButton :icon="iconInfo" size="12"></IxIconButton>
    <IxIconButton :icon="iconInfo" size="16"></IxIconButton>
    <IxIconButton :icon="iconInfo" size="24"></IxIconButton>
  </div>
</template>
