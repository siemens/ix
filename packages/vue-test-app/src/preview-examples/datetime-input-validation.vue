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
    <IxDatetimeInput value="1970/01/01 00:00:00" info-text="Info text" class="ix-info"></IxDatetimeInput>
  </div>

  <div>
    <IxDatetimeInput value="1970/01/01 00:00:00" warning-text="Warning text" class="ix-warning"></IxDatetimeInput>
  </div>

  <div>
    <IxDatetimeInput value="1970/01/01 00:00:00" valid-text="Valid text" class="ix-valid"></IxDatetimeInput>
  </div>

  <div>
    <IxDatetimeInput value="1970/01/01 00:00:00" invalid-text="Invalid text" class="ix-invalid"></IxDatetimeInput>
  </div>
</template>
