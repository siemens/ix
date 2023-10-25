<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxEmptyState } from '@siemens/ix-vue';
</script>

<template>
  <IxEmptyState
    layout="compact"
    header="No elements available"
    subHeader="Create an element first"
    icon="add"
    action="Create element"
  ></IxEmptyState>
</template>
