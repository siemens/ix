<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxKeyValue } from '@siemens/ix-vue';
</script>

<template>
  <IxKeyValue label="Label">
    <input placeholder="Enter text here" type="text" slot="custom-value" />
  </IxKeyValue>
</template>
