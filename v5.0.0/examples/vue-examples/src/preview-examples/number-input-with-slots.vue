<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconBulb } from '@siemens/ix-icons/icons';
import { IxIcon, IxNumberInput, IxTypography } from '@siemens/ix-vue';
</script>

<template>
  <IxNumberInput>
    <IxIcon :name="iconBulb" slot="start" size="16"></IxIcon>
    <IxTypography slot="end">unit</IxTypography>
  </IxNumberInput>
</template>
