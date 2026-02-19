<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxDatetimeInput } from '@siemens/ix-vue';
</script>

<template>
  <IxDatetimeInput
    value="08.02.2026 00:00"
    label="Meeting schedule"
    dateFormat="dd.MM.yyyy"
    timeFormat="HH:mm"
  ></IxDatetimeInput>
</template>
