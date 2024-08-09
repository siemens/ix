<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang='ts'>
import { IxTextField } from '@siemens/ix-vue';

</script>

<template>
  <div>
    <IxTextField
      type="text"
      label="Username"
      value="MaxMuster1"
    ></IxTextField>
  </div>

  <div>
    <IxTextField
      type="email"
      label="Email"
      value="example@example.com"
    ></IxTextField>
  </div>

  <div>
    <IxTextField
      type="password"
      label="Password"
      placeholder="Enter your password"
      value="1234"
    ></IxTextField>
  </div>
</template>
