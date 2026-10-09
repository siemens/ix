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
    <IxButton variant="tertiary">Button1</IxButton>
    <IxButton variant="tertiary">Button2</IxButton>
    <IxButton variant="tertiary">Button3</IxButton>
  </IxContentHeader>
</template>
