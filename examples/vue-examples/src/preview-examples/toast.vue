<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import type { ToastType } from '@siemens/ix';
import { IxButton, showToast } from '@siemens/ix-vue';

async function showToastMessage() {
  const toastTypes: ToastType[] = [
    'information',
    'success',
    'caution',
    'warning',
    'danger',
    'critical',
    'error',
    'base',
  ];

  for (const type of toastTypes) {
    await showToast({
      type,
      title: 'Toast headline',
      message: 'This is a toast test message!',
      autoClose: false,
    });
  }
}
</script>

<template>
  <IxButton @click="showToastMessage">Trigger toast</IxButton>
</template>
