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
  <div>
    <IxDatetimeInput info-text="Info text" class="ix-info"></IxDatetimeInput>
  </div>

  <div>
    <IxDatetimeInput warning-text="Warning text" class="ix-warning"></IxDatetimeInput>
  </div>

  <div>
    <IxDatetimeInput valid-text="Valid text" class="ix-valid"></IxDatetimeInput>
  </div>

  <div>
    <IxDatetimeInput invalid-text="Invalid text" class="ix-invalid"></IxDatetimeInput>
  </div>
</template>
