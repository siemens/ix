<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-vue';
</script>

<template>
  <IxKeyValueList>
    <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
    <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
    <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
  </IxKeyValueList>
</template>
