<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconBulb, iconStar } from '@siemens/ix-icons/icons';
import { IxButton } from '@siemens/ix-vue';
</script>

<style scoped src="./button-text-icon.css"></style>

<template>
  <IxButton :icon="iconStar">Button</IxButton>
  <IxButton :icon="iconStar" :iconRight="iconBulb">Button</IxButton>
  <IxButton :iconRight="iconBulb">Button</IxButton>
  <IxButton variant="secondary" :icon="iconStar">Button</IxButton>
  <IxButton outline :icon="iconStar">Button</IxButton>
  <IxButton ghost :icon="iconStar">Button</IxButton>
</template>
