<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, showToast } from '@siemens/ix-vue';
import { ref } from 'vue';

const custom = ref<HTMLElement | null>(null);
</script>

<template>
  <IxButton @click="showToast({ message: custom! })"> Trigger toast </IxButton>
  <template>
    <div ref="custom">
      <div>Custom toast message</div>
      <IxButton>Action</IxButton>
    </div>
  </template>
</template>
