<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxNumberInput } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxNumberInput
      :value="5"
      info-text="Info text"
      class="ix-info"
    ></IxNumberInput>
  </div>

  <div>
    <IxNumberInput
      :value="5"
      warning-text="Warning text"
      class="ix-warning"
    ></IxNumberInput>
  </div>

  <div>
    <IxNumberInput
      :value="5"
      valid-text="Valid text"
      class="ix-valid"
    ></IxNumberInput>
  </div>

  <div>
    <IxNumberInput
      :value="5"
      invalid-text="Invalid text"
      class="ix-invalid"
    ></IxNumberInput>
  </div>
</template>
