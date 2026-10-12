<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxSlider } from '@siemens/ix-vue';
</script>

<template>
  <IxSlider :marker="[0, 25, 50, 75, 100]">
    <span slot="label-start">0</span>
    <span slot="label-end">100</span>
  </IxSlider>

  <IxSlider :min="0" :max="50" :step="10" :marker="[0, 10, 20, 30, 40, 50]">
    <span slot="label-start">0</span>
    <span slot="label-end">50</span>
  </IxSlider>
</template>
