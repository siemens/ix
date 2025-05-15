<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { ref } from 'vue';
import { IxButton, IxModalHeader, IxModalContent, IxModalFooter } from '@siemens/ix-vue';
import { closeModal, dismissModal } from '@siemens/ix-vue';

const modalRef = ref<HTMLElement | null>(null);
const getModal = (): HTMLIxModalElement | null => modalRef.value?.closest('ix-modal') ?? null;

const close = () => {
  const modal = getModal();
  if (modal) closeModal(modal, 'Ok');
}

const dismiss = () => {
  const modal = getModal();
  if (modal) dismissModal(modal, 'Cancel');
}
</script>

<template>
  <div ref="modalRef">
    <IxModalHeader @closeClick="dismiss">Message headline</IxModalHeader>
    <IxModalContent>Message text lorem ipsum</IxModalContent>
    <IxModalFooter>
      <IxButton outline @click="dismiss">Cancel</IxButton>
      <IxButton @click="close">OK</IxButton>
    </IxModalFooter>
  </div>
</template>
