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

<style scoped src="./icon-toggle-button-secondary-outline.css"></style>

<template>
  <IxLayoutGrid>
    <IxRow>
      <IxIconToggleButton variant="subtle-primary" :icon="iconCheckboxes"></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" :icon="iconCheckboxes" pressed></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" disabled :icon="iconCheckboxes"></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" disabled loading :icon="iconCheckboxes"></IxIconToggleButton>

      <IxIconToggleButton variant="subtle-primary" size="16" :icon="iconCheckboxes"></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" size="16" pressed :icon="iconCheckboxes"></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" size="16" disabled :icon="iconCheckboxes"></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" size="16" disabled loading :icon="iconCheckboxes"></IxIconToggleButton>

      <IxIconToggleButton variant="subtle-primary" size="12" :icon="iconCheckboxes"></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" size="12" pressed :icon="iconCheckboxes"></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" size="12" disabled :icon="iconCheckboxes"></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" size="12" disabled loading :icon="iconCheckboxes"></IxIconToggleButton>
    </IxRow>
    <IxRow>
      <IxIconToggleButton variant="subtle-primary" :icon="iconCheckboxes" oval></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" :icon="iconCheckboxes" pressed oval></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" disabled :icon="iconCheckboxes" oval></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" disabled loading :icon="iconCheckboxes" oval></IxIconToggleButton>

      <IxIconToggleButton variant="subtle-primary" size="16" :icon="iconCheckboxes" oval></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" size="16" pressed :icon="iconCheckboxes" oval></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" size="16" disabled :icon="iconCheckboxes" oval></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" size="16" disabled loading :icon="iconCheckboxes" oval></IxIconToggleButton>

      <IxIconToggleButton variant="subtle-primary" size="12" :icon="iconCheckboxes" oval></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" size="12" pressed :icon="iconCheckboxes" oval></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" size="12" disabled :icon="iconCheckboxes" oval></IxIconToggleButton>
      <IxIconToggleButton variant="subtle-primary" size="12" disabled loading :icon="iconCheckboxes" oval></IxIconToggleButton>
    </IxRow>
  </IxLayoutGrid>
</template>
