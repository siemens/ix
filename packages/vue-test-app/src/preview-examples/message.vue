<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { showMessage } from '@siemens/ix';
import { IxButton } from '@siemens/ix-vue';

const triggerMessage = async () => {
  (
    await showMessage.success(
      'Example title',
      'message',
      'Save',
      'Cancel',
      'payload:save',
      'payload:cancel'
    )
  ).once(console.log);
};
</script>

<template>
  <IxButton @click="triggerMessage">Show 'success' message</IxButton>
</template>
