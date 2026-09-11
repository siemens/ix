<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
  <IxDateInput
    label="Begin"
    name="begin"
    helper-text="Some helper text"
    value="2026/02/08"
  ></IxDateInput>
</template>
