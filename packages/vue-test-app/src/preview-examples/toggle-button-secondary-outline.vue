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

<style scoped src="./toggle-button-secondary-outline.css"></style>

<template>
  <IxToggleButton variant="subtle-primary">Normal</IxToggleButton>
  <IxToggleButton variant="subtle-primary">Pressed</IxToggleButton>
  <IxToggleButton variant="subtle-primary" disabled>Disabled</IxToggleButton>
  <IxToggleButton variant="subtle-primary" disabled loading>Loading</IxToggleButton>
</template>
