<!--
SPDX-FileCopyrightText: 2023 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxDropdownButton } from '@siemens/ix-vue';
</script>

<style>
.example {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 20rem;
}

.example > ix-dropdown-button {
  margin-bottom: 0.5rem;
}
</style>

<template>
  <div class="example">
    <IxDropdownButton label="Dropdown" icon="checkboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton label="Dropdown" outline icon="checkboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton label="Dropdown" ghost icon="checkboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton label="Dropdown" disabled icon="checkboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
  </div>
</template>
