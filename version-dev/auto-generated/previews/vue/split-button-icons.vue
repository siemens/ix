<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxSplitButton, IxDropdownItem } from '@siemens/ix-vue';
</script>

<template>
  <IxSplitButton label="Action text">
    <IxDropdownItem label="Item 1" icon="cut"></IxDropdownItem>
    <IxDropdownItem label="Item 2" icon="bulb"></IxDropdownItem>
  </IxSplitButton>
</template>
