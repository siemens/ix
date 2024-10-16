<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxIconToggleButton } from '@siemens/ix-vue';
</script>

<style scoped src="./styles/icon-toggle-buttons.css"></style>

<template>
  <IxIconToggleButton ghost icon="checkboxes"></IxIconToggleButton>
  <IxIconToggleButton ghost pressed icon="checkboxes"></IxIconToggleButton>
  <IxIconToggleButton ghost disabled icon="checkboxes"></IxIconToggleButton>
  <IxIconToggleButton
    ghost
    disabled
    loading
    icon="checkboxes"
  ></IxIconToggleButton>
</template>
