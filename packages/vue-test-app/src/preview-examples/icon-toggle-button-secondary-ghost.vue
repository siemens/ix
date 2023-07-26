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
  <IxToggleButton ghost className="m-1"></IxToggleButton>
  <IxToggleButton
    ghost
    className="m-1"
    pressed
  ></IxToggleButton>
  <IxToggleButton
    ghost
    className="m-1"
    disabled
  ></IxToggleButton>
  <IxToggleButton
    ghost
    className="m-1"
    disabled
    loading
  ></IxToggleButton>
</template>
