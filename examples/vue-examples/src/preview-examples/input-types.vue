<!--
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxInput } from '@siemens/ix-vue';
</script>

<style scoped src="./input-types.css"></style>

<template>
  <div>
    <IxInput type="text" label="Username" value="MaxMuster1"></IxInput>
  </div>

  <div>
    <IxInput type="email" label="Email" value="example@example.com"></IxInput>
  </div>

  <div>
    <IxInput
      type="password"
      label="Password"
      placeholder="Enter your password"
      value="1234"
    ></IxInput>
  </div>

  <div>
    <IxInput type="tel" label="Telephone" value="+49 123 456 789"></IxInput>
  </div>

  <div>
    <IxInput
      type="url"
      label="URL"
      placeholder="Enter your URL"
      value="http://ix.siemens.io"
    ></IxInput>
  </div>
</template>
