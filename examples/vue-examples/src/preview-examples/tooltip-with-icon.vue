<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxTooltip, IxIcon } from '@siemens/ix-vue';
import { iconInfo } from '@siemens/ix-icons/icons';
</script>

<style scoped src="./tooltip.css"></style>

<template>
  <IxButton class="any-class" aria-describedby="tooltip-1"> Hover me </IxButton>
  <IxTooltip id="tooltip-1" for=".any-class">
    <IxIcon slot="title-icon" :name="iconInfo" :size="16"></IxIcon>
    <div slot="title-content">Tooltip Title</div>
    Simple selector with icon</IxTooltip
  >
</template>
