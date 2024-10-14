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

<style scoped src="./toggle-button-primary.css"></style>

<template>
  <IxToggleButton variant="primary">Normal</IxToggleButton>
  <IxToggleButton variant="primary" pressed>Pressed</IxToggleButton>
  <IxToggleButton variant="primary" disabled>Disabled</IxToggleButton>
  <IxToggleButton variant="primary" disabled loading>Loading</IxToggleButton>
</template>
