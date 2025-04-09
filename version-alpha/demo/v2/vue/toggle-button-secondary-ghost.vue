<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxToggleButton } from '@siemens/ix-vue';
</script>

<style scoped src="./toggle-button-secondary-ghost.css"></style>

<template>
  <IxToggleButton ghost>Normal</IxToggleButton>
  <IxToggleButton ghost pressed>Pressed</IxToggleButton>
  <IxToggleButton ghost disabled>Disabled</IxToggleButton>
  <IxToggleButton ghost disabled loading>Loading</IxToggleButton>
</template>
