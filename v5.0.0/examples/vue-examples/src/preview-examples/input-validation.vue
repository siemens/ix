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
  <div>
    <IxInput
      label="Username"
      placeholder="Enter your Username"
      info-text="Info text"
      class="ix-info"
    ></IxInput>
  </div>

  <div>
    <IxInput
      label="Username"
      placeholder="Enter your Username"
      warning-text="Warning text"
      class="ix-warning"
    ></IxInput>
  </div>

  <div>
    <IxInput
      label="Username"
      placeholder="Enter your Username"
      valid-text="Valid text"
      class="ix-valid"
    ></IxInput>
  </div>

  <div>
    <IxInput
      label="Username"
      placeholder="Enter your Username"
      invalid-text="Invalid text"
      class="ix-invalid"
    ></IxInput>
  </div>
</template>
