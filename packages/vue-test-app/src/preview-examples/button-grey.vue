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

<template>
  <IxButton :style="{ margin: '0.25rem' }" variant="secondary">
    Button
  </IxButton>
  <IxButton :style="{ margin: '0.25rem' }" disabled variant="secondary">
    Button
  </IxButton>
</template>
