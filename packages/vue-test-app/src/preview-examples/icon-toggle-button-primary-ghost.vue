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

<style scoped src="./icon-toggle-button-primary-ghost.css"></style>

<template>
  <IxIconToggleButton
    variant="primary"
    ghost
    icon="checkboxes"
  ></IxIconToggleButton>
  <IxIconToggleButton
    variant="primary"
    ghost
    pressed
    icon="checkboxes"
  ></IxIconToggleButton>
  <IxIconToggleButton
    variant="primary"
    ghost
    disabled
    icon="checkboxes"
  ></IxIconToggleButton>
  <IxIconToggleButton
    variant="primary"
    ghost
    disabled
    loading
    icon="checkboxes"
  ></IxIconToggleButton>
</template>
