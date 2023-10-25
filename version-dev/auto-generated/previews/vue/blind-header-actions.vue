<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxBlind, IxDropdown, IxIconButton } from '@siemens/ix-vue';
</script>

<template>
  <IxBlind label="Example" sublabel="Sublabel">
    <IxIconButton
      slot="header-actions"
      id="context-menu"
      ghost
      icon="context-menu"
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
    <IxDropdownItem label="Rename..." icon="Rename"></IxDropdownItem>
    <IxDropdownItem label="trashcan" icon="Delete"></IxDropdownItem>
  </IxDropdown>
</template>
