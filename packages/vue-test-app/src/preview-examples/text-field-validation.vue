<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxTextField } from '@siemens/ix-vue';

</script>

<template>
  <div>
    <IxTextField
      label="Username"
      placeholder="Enter your Username"
      info-text="Info text"
      className="ix-info"
    ></IxTextField>
  </div>

  <div>
    <IxTextField
      label="Username"
      placeholder="Enter your Username"
      warning-text="Warning text"
      className="ix-warning"
    ></IxTextField>
  </div>

  <div>
    <IxTextField
      label="Username"
      placeholder="Enter your Username"
      valid-text="Valid text"
      className="ix-valid"
    ></IxTextField>
  </div>

  <div>
    <IxTextField
      label="Username"
      placeholder="Enter your Username"
      invalid-text="Invalid text"
      className="ix-invalid"
    ></IxTextField>
  </div>
</template>
