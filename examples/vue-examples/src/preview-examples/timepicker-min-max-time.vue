<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxTimePicker } from '@siemens/ix-vue';
</script>

<template>
  <IxTimePicker
    format="HH:mm:ss"
    time="12:00:00"
    minTime="09:00:00"
    maxTime="17:30:00"
  />
</template>
