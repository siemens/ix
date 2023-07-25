<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxIcon } from '@siemens/ix-vue';
</script>

<template>
  <IxButton class="m-1" variant="primary">
    <IxIcon name="star"></IxIcon>
    Button
  </IxButton>
  <IxButton class="m-1" variant="secondary">
    <IxIcon name="star"></IxIcon>
    Button
  </IxButton>
  <IxButton class="m-1" outline>
    <IxIcon name="star"></IxIcon>
    Button
  </IxButton>
  <IxButton class="m-1" ghost>
    <IxIcon name="star"></IxIcon>
    Button
  </IxButton>
</template>
