<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxIcon } from '@siemens/ix-vue';
</script>

<style scoped src="./button-text-icon.css"></style>

<template>
  <IxButton icon="star"> Button </IxButton>
  <IxButton variant="secondary" icon="star"> Button </IxButton>
  <IxButton outline icon="star"> Button </IxButton>
  <IxButton ghost icon="star"> Button </IxButton>
</template>
