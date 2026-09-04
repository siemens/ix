<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxRangeField, IxTimeInput } from '@siemens/ix-vue';
</script>

<template>
  <IxRangeField type="time-range" style="width: 32rem" aria-label="Time range">
    <IxTimeInput label="Start time"></IxTimeInput>
    <IxTimeInput label="End time"></IxTimeInput>
  </IxRangeField>
</template>
