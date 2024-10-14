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

<style scoped src="./toggle-button-primary-outline.css"></style>

<template>
  <IxToggleButton variant="primary" outline>Normal</IxToggleButton>
  <IxToggleButton variant="primary" outline pressed>Pressed</IxToggleButton>
  <IxToggleButton variant="primary" outline disabled>Disabled</IxToggleButton>
  <IxToggleButton variant="primary" outline disabled loading>
    Loading
  </IxToggleButton>
</template>
