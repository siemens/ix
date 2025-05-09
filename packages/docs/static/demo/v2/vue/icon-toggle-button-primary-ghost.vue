<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconCheckboxes } from '@siemens/ix-icons/icons';
import { IxIconToggleButton, IxLayoutGrid, IxRow } from '@siemens/ix-vue';
</script>

<style scoped src="./icon-toggle-button-primary-ghost.css"></style>

<template>
  <IxLayoutGrid>
    <IxRow>
      <IxIconToggleButton
        variant="primary"
        ghost
        :icon="iconCheckboxes"
      ></IxIconToggleButton>
      <IxIconToggleButton
        variant="primary"
        ghost
        pressed
        :icon="iconCheckboxes"
      ></IxIconToggleButton>
      <IxIconToggleButton
        variant="primary"
        ghost
        disabled
        :icon="iconCheckboxes"
      ></IxIconToggleButton>
      <IxIconToggleButton
        variant="primary"
        ghost
        disabled
        loading
        :icon="iconCheckboxes"
      ></IxIconToggleButton>
    </IxRow>
    <IxRow>
      <IxIconToggleButton
        variant="primary"
        ghost
        :icon="iconCheckboxes"
        oval
      ></IxIconToggleButton>
      <IxIconToggleButton
        variant="primary"
        ghost
        pressed
        :icon="iconCheckboxes"
        oval
      ></IxIconToggleButton>
      <IxIconToggleButton
        variant="primary"
        ghost
        disabled
        :icon="iconCheckboxes"
        oval
      ></IxIconToggleButton>
      <IxIconToggleButton
        variant="primary"
        ghost
        disabled
        loading
        :icon="iconCheckboxes"
        oval
      ></IxIconToggleButton>
    </IxRow>
  </IxLayoutGrid>
</template>
