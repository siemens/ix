<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconChevronDownSmall } from '@siemens/ix-icons/icons';
import { IxSplitButton, IxDropdownItem } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxSplitButton label="Action text" :splitIcon="iconChevronDownSmall">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxSplitButton>
    <IxSplitButton label="Action text" :splitIcon="iconChevronDownSmall" disabled>
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxSplitButton>
    <IxSplitButton label="Action text" :splitIcon="iconChevronDownSmall" disableButton>
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxSplitButton>
    <IxSplitButton label="Action text" :splitIcon="iconChevronDownSmall" disableDropdownButton>
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxSplitButton>
</div>
</template>

<style scoped src="./split-button.css"></style>
