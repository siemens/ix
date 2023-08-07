<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxToggleButton } from '@siemens/ix-vue';
</script>

<template>
  <IxToggleButton variant="primary" ghost></IxToggleButton>
  <IxToggleButton variant="primary" ghost pressed></IxToggleButton>
  <IxToggleButton variant="primary" ghost disabled></IxToggleButton>
  <IxToggleButton variant="primary" ghost disabled loading></IxToggleButton>
</template>
