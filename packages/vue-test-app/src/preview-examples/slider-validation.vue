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
  <div>
    <IxSlider
      label="Info"
      :value="10"
      trace
      info-text="Info text"
      class="ix-info"
    >
      <span slot="label-start">0</span>
      <span slot="label-end">100</span>
    </IxSlider>
  </div>

  <div>
    <IxSlider
      label="Warning"
      :value="90"
      trace
      warning-text="Warning text"
      class="ix-warning"
    >
      <span slot="label-start">0</span>
      <span slot="label-end">100</span>
    </IxSlider>
  </div>

  <div>
    <IxSlider
      label="Valid"
      :value="10"
      trace
      valid-text="Valid text"
      class="ix-valid"
    >
      <span slot="label-start">0</span>
      <span slot="label-end">100</span>
    </IxSlider>
  </div>

  <div>
    <IxSlider
      label="Invalid"
      :value="100"
      trace
      invalid-text="Invalid text"
      class="ix-invalid"
    >
      <span slot="label-start">0</span>
      <span slot="label-end">100</span>
    </IxSlider>
  </div>
</template>
