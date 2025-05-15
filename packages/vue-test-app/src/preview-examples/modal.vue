<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, ModalInstance } from '@siemens/ix-vue';
import { showModal } from '@siemens/ix-vue';
import CustomModal from './modal-custom-content.vue';

async function showCustomModal() {
  const modalInstance: ModalInstance = await showModal(CustomModal, {
    title: 'Custom modal',
  });

  modalInstance.onClose.on((payload) => {
    console.log('Closed with payload:', payload);
  });

  modalInstance.onDismiss.on((payload) => {
    console.log('Dismissed with payload:', payload);
  });
}
</script>

<template>
  <IxButton @click="showCustomModal">Show modal</IxButton>
</template>
