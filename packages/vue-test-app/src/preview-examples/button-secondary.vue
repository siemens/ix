<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
</script>

<style scoped src="./button-secondary.css"></style>

<template>
  <IxButton outline> Button </IxButton>
  <IxButton disabled outline> Button </IxButton>
</template>
