<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
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
    label="Date and time"
    value="2026/10/05 09:30:00"
    require-confirmation
  ></IxDatetimeInput>
</template>
