<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
</script>

<template>
  <div className="btn-group">
    <IxButton variant="Primary" outline> Left </IxButton>
    <IxButton variant="Primary">Middle</IxButton>
    <IxButton variant="Primary" outline> Right </IxButton>
  </div>
</template>
