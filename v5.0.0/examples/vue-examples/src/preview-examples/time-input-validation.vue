<!--
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxTimeInput } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxTimeInput info-text="Info text" class="ix-info"></IxTimeInput>
  </div>

  <div>
    <IxTimeInput warning-text="Warning text" class="ix-warning"></IxTimeInput>
  </div>

  <div>
    <IxTimeInput valid-text="Valid text" class="ix-valid"></IxTimeInput>
  </div>

  <div>
    <IxTimeInput invalid-text="Invalid text" class="ix-invalid"></IxTimeInput>
  </div>
</template>
