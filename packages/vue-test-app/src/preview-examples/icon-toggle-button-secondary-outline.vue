<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxToggleButton } from '@siemens/ix-vue';
</script>

<template>
  <IxToggleButton className="m-1"></IxToggleButton>
  <IxToggleButton className="m-1" pressed></IxToggleButton>
  <IxToggleButton className="m-1" disabled></IxToggleButton>
  <IxToggleButton className="m-1" disabled loading></IxToggleButton>

  <IxToggleButton className="m-1" size="16"></IxToggleButton>
  <IxToggleButton className="m-1" size="16" pressed></IxToggleButton>
  <IxToggleButton className="m-1" size="16" disabled loading></IxToggleButton>

  <IxToggleButton className="m-1" size="12"></IxToggleButton>
  <IxToggleButton className="m-1" size="12" pressed></IxToggleButton>
  <IxToggleButton className="m-1" size="12" disabled loading></IxToggleButton>
</template>
