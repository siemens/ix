<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxDatetimePicker } from '@siemens/ix-vue';
</script>

<template>
  <IxDatetimePicker
    from="2026/10/05"
    time="09:30:00"
    single-selection
    require-confirmation
  ></IxDatetimePicker>
</template>
