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
  iconContextMenu,
  iconInfo,
  iconRename,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import { IxBlind, IxDropdown, IxIconButton } from '@siemens/ix-vue';
</script>

<style scoped src="./blind-header-actions.css"></style>

<template>
  <IxBlind label="Example" :icon="iconInfo">
    <IxIconButton
      id="context-menu"
      slot="header-actions"
      ghost
      :icon="iconContextMenu"
      iconColor="color-primary"
    ></IxIconButton>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </IxBlind>
  <IxDropdown trigger="context-menu">
    <IxDropdownItem label="Rename..." :icon="iconRename"></IxDropdownItem>
    <IxDropdownItem label="trashcan" :icon="iconTrashcan"></IxDropdownItem>
  </IxDropdown>
</template>
