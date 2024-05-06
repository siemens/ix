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

<style scoped src="example-styles/dist/icon-toggle-button.css"></style>

<template>
  <IxIconToggleButton outline icon="checkboxes"></IxIconToggleButton>
  <IxIconToggleButton outline icon="checkboxes"></IxIconToggleButton>
  <IxIconToggleButton outline disabled icon="checkboxes"></IxIconToggleButton>
  <IxIconToggleButton
    outline
    disabled
    loading
    icon="checkboxes"
  ></IxIconToggleButton>

  <IxIconToggleButton outline size="16" icon="checkboxes"></IxIconToggleButton>
  <IxIconToggleButton
    outline
    size="16"
    pressed
    icon="checkboxes"
  ></IxIconToggleButton>
  <IxIconToggleButton
    outline
    size="16"
    disabled
    loading
    icon="checkboxes"
  ></IxIconToggleButton>

  <IxIconToggleButton outline size="12" icon="checkboxes"></IxIconToggleButton>
  <IxIconToggleButton
    outline
    size="12"
    pressed
    icon="checkboxes"
  ></IxIconToggleButton>
  <IxIconToggleButton
    outline
    size="12"
    disabled
    loading
    icon="checkboxes"
  ></IxIconToggleButton>
</template>
