<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxContentHeader } from '@siemens/ix-vue';
</script>

<template>
  <IxContentHeader
    has-back-button
    header-title="Content title"
    header-subtitle="Subtitle"
  >
    <IxButton ghost>Button1</IxButton>
    <IxButton ghost>Button2</IxButton>
    <IxButton ghost>Button3</IxButton>
  </IxContentHeader>
</template>
