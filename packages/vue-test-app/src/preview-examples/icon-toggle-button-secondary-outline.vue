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

<style scoped src="example-styles/dist/icon-toggle-button.css"></style>

<template>
  <IxToggleButton outline></IxToggleButton>
  <IxToggleButton outline></IxToggleButton>
  <IxToggleButton outline disabled></IxToggleButton>
  <IxToggleButton outline disabled loading></IxToggleButton>

  <IxToggleButton outline size="16"></IxToggleButton>
  <IxToggleButton outline size="16" pressed></IxToggleButton>
  <IxToggleButton outline size="16" disabled loading></IxToggleButton>

  <IxToggleButton outline size="12"></IxToggleButton>
  <IxToggleButton outline size="12" pressed></IxToggleButton>
  <IxToggleButton outline size="12" disabled loading></IxToggleButton>
</template>
