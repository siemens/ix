<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
  <div className="ix-button-group">
    <IxButton variant="subtle-primary"> Left </IxButton>
    <IxButton>Middle</IxButton>
    <IxButton variant="subtle-primary"> Right </IxButton>
  </div>
</template>
