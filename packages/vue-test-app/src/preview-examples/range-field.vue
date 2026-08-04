<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  IxDateInput,
  IxDatetimeInput,
  IxRangeField,
  IxTimeInput,
} from '@siemens/ix-vue';
</script>

<template>
  <IxRangeField type="date-range" style="width: 32rem" aria-label="Date range">
    <IxDateInput label="Start date"></IxDateInput>
    <IxDateInput label="End date"></IxDateInput>
  </IxRangeField>

  <IxRangeField type="time-range" style="width: 32rem" aria-label="Time range">
    <IxTimeInput label="Start time"></IxTimeInput>
    <IxTimeInput label="End time"></IxTimeInput>
  </IxRangeField>

  <IxRangeField
    type="datetime-range"
    style="width: 32rem"
    aria-label="Datetime range"
  >
    <IxDatetimeInput label="Start date and time"></IxDatetimeInput>
    <IxDatetimeInput label="End date and time"></IxDatetimeInput>
  </IxRangeField>
</template>
