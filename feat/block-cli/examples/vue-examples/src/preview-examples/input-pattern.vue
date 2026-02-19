<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxInput } from '@siemens/ix-vue';
</script>

<template>
  <IxInput
    helper-text="Only characters a-d are allowed"
    allowed-characters-pattern="[a-d]"
    :max-length="4"
  ></IxInput>
</template>
