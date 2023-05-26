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
    <IxButton data-tooltip="myTooltip">Hover or focus me</IxButton>
    <IxTooltip for="[data-tooltip='myTooltip']">
      Some example content
    </IxTooltip>
  </div>
</template>
