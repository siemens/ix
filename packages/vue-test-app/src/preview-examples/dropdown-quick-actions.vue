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
  iconCut,
  iconDocument,
  iconStar,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxDivider,
  IxDropdown,
  IxDropdownItem,
  IxDropdownQuickActions,
  IxIconButton,
} from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxButton id="iconTriggerId">Open</IxButton>
    <IxDropdown trigger="iconTriggerId">
      <IxDropdownQuickActions>
        <IxIconButton :icon="iconCut" ghost></IxIconButton>
        <IxIconButton :icon="iconBulb" ghost></IxIconButton>
        <IxIconButton :icon="iconTrashcan" ghost></IxIconButton>
      </IxDropdownQuickActions>

      <IxDivider></IxDivider>

      <IxDropdownItem :icon="iconStar" label="Item 1"></IxDropdownItem>
      <IxDropdownItem :icon="iconDocument" label="Item 2"></IxDropdownItem>
      <IxDropdownItem :icon="iconBulb" label="Item 3"></IxDropdownItem>
    </IxDropdown>
  </div>
</template>
