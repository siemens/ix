<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxToggleButton } from '@siemens/ix-vue';
</script>

<template>
  <IxToggleButton className="m-1" variant="Primary" ghost :outline="false">Normal</IxToggleButton>
  <IxToggleButton className="m-1" variant="Primary" ghost :outline="false" pressed>Pressed</IxToggleButton>
  <IxToggleButton className="m-1" variant="Primary" ghost :outline="false" disabled>Disabled</IxToggleButton>
  <IxToggleButton className="m-1" variant="Primary" ghost :outline="false" disabled loading>Loading</IxToggleButton>
</template>
