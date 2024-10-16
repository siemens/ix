<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxDropdownButton } from '@siemens/ix-vue';
</script>

<style scoped src="./dropdown-button-icon.css"></style>

<template>
  <div class="dropdown-button">
    <IxDropdownButton label="" icon="checkboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton label="" outline icon="checkboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton label="" ghost icon="checkboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton label="" disabled icon="checkboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
  </div>
</template>
