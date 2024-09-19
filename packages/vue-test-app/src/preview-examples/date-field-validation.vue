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
  <div>
    <IxDateInput
      value="1970/01/01"
      info-text="Info text"
      class="ix-info"
    ></IxDateInput>
  </div>

  <div>
    <IxDateInput
      value="1970/01/01"
      warning-text="Warning text"
      class="ix-warning"
    ></IxDateInput>
  </div>

  <div>
    <IxDateInput
      value="1970/01/01"
      valid-text="Valid text"
      class="ix-valid"
    ></IxDateInput>
  </div>

  <div>
    <IxDateInput
      value="1970/01/01"
      invalid-text="Invalid text"
      class="ix-invalid"
    ></IxDateInput>
  </div>
</template>
