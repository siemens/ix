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
  <IxSlider
    class="ix-invalid"
    trace
    :trace-reference="50"
    :marker="[0, 25, 50, 75, 100]"
  >
    <span slot="label-start">0</span>
    <span slot="label-end">100</span>
  </IxSlider>

  <IxSlider
    class="ix-invalid"
    :min="0"
    :max="50"
    :step="10"
    trace
    :trace-reference="10"
    :marker="[0, 10, 20, 30, 40, 50]"
    invalid-text="Error message"
  >
    <span slot="label-start">0</span>
    <span slot="label-end">50</span>
  </IxSlider>
</template>
