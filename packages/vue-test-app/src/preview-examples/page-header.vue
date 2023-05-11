<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxIconButton, IxPageHeader } from '@siemens/ix-vue';
</script>

<template>
  <IxPageHeader
    has-back-button
    header-title="content title"
    header-subtitle="subtitle content"
  >
    <IxButton ghost>Button1</IxButton>
    <IxButton ghost>Button2</IxButton>
    <IxButton ghost>Button3</IxButton>
  </IxPageHeader>
  <IxPageHeader
    variant="Secondary"
    header-title="content title"
    header-subtitle="subtitle content"
  >
    <IxIconButton icon="pen" ghost variant="Primary"> Button1 </IxIconButton>
    <IxIconButton icon="trashcan" ghost variant="Primary">
      Button2
    </IxIconButton>
    <IxIconButton icon="context-menu" ghost variant="Primary">
      Button3
    </IxIconButton>
  </IxPageHeader>
</template>
