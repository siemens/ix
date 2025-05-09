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

<style scoped src="./icon-toggle-button-secondary.css"></style>

<template>
  <IxIconToggleButton icon="checkboxes"></IxIconToggleButton>
  <IxIconToggleButton pressed icon="checkboxes"></IxIconToggleButton>
  <IxIconToggleButton disabled icon="checkboxes"></IxIconToggleButton>
  <IxIconToggleButton disabled loading icon="checkboxes"></IxIconToggleButton>
</template>
