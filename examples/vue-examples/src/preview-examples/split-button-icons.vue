<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  iconBulb,
  iconChevronDownSmall,
  iconCut,
} from '@siemens/ix-icons/icons';
import { IxSplitButton, IxDropdownItem } from '@siemens/ix-vue';
</script>

<template>
  <IxSplitButton label="Action text" :splitIcon="iconChevronDownSmall">
    <IxDropdownItem label="Item 1" :icon="iconCut"></IxDropdownItem>
    <IxDropdownItem label="Item 2" :icon="iconBulb"></IxDropdownItem>
  </IxSplitButton>
</template>
