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
import { IxDropdownButton } from '@siemens/ix-vue';
</script>

<style scoped src="./dropdown-button.css"></style>

<template>
  <div class="dropdown-button">
    <IxDropdownButton label="Dropdown" :icon="iconCheckboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton label="Dropdown" outline :icon="iconCheckboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton label="Dropdown" ghost :icon="iconCheckboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton label="Dropdown" disabled :icon="iconCheckboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
  </div>
</template>
