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
    label="Event date"
    minDate="2024/01/01"
    maxDate="2024/12/31"
  ></IxDatetimeInput>
</template>
