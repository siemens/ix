<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxTooltip } from '@siemens/ix-vue';
</script>

<template>
  <div :style="{ padding: '4rem' }">
    <IxButton class="any-class" :style="{ 'margin-right': '4rem' }">
      Hover me
    </IxButton>
    <IxTooltip for=".any-class">Simple selector</IxTooltip>

    <IxButton my-custom-special-selector="any-value">Also hover me</IxButton>
    <IxTooltip for="[my-custom-special-selector='any-value']">
      Custom selector
    </IxTooltip>
  </div>
</template>
