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
  <IxToggleButton variant="tertiary">Normal</IxToggleButton>
  <IxToggleButton variant="tertiary" pressed>Pressed</IxToggleButton>
  <IxToggleButton variant="tertiary" disabled>Disabled</IxToggleButton>
  <IxToggleButton variant="tertiary" disabled loading>Loading</IxToggleButton>
</template>
