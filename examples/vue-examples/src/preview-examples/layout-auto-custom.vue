<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxLayoutAuto, IxTypography } from '@siemens/ix-vue';

const layout = [
  { minWidth: '0', columns: 1 },
  { minWidth: '560px', columns: 2 },
  { minWidth: '800px', columns: 4 },
];
</script>

<style scoped src="./layout-auto.css"></style>

<template>
  <IxLayoutAuto className="LayoutExample" :layout="layout">
    <IxTypography format="display">1</IxTypography>
    <IxTypography format="display">2</IxTypography>
    <IxTypography format="display">3</IxTypography>
    <IxTypography format="display" data-colspan="2"> 4 </IxTypography>
    <IxTypography format="display">5</IxTypography>
    <IxTypography format="display">6</IxTypography>
  </IxLayoutAuto>
</template>
