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
</script>

<template>
  <IxEventList :itemHeight="60">
    <IxEventListItem color="color-primary">Text 1</IxEventListItem>
    <IxEventListItem color="color-primary">Text 2</IxEventListItem>
  </IxEventList>
</template>
