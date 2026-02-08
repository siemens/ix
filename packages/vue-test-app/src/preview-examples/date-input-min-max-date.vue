<!--
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxDateInput } from '@siemens/ix-vue';
</script>

<template>
  <IxDateInput minDate="2026/02/01" maxDate="2026/02/28" value="2026/02/08" />
</template>
