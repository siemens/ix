<!--
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxContentHeader, IxPill } from '@siemens/ix-vue';
import { iconInfo } from '@siemens/ix-icons/icons';
</script>

<style scoped src="./content-header-with-slot.css"></style>

<template>
  <IxContentHeader has-back-button header-title="Content title" header-subtitle="Subtitle">
    <IxPill slot="header" :icon="iconInfo" class="margin-top">Label</IxPill>
    <IxButton slot="secondary-actions" variant="tertiary">Button1</IxButton>
    <IxButton slot="secondary-actions" variant="tertiary">Button2</IxButton>
    <IxButton slot="secondary-actions" variant="tertiary">Button3</IxButton>
    <IxButton variant="primary">Important</IxButton>
  </IxContentHeader>
</template>
