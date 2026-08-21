<!--
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="tsx">
import {
  IxButton,
  IxModalHeader,
  IxModalContent,
  IxModalFooter,
  Modal,
  type ModalSlotProps,
  showModal,
  dismissModal,
} from '@siemens/ix-vue';

function show() {
  showModal({
    content: (
      <Modal>
        {({ closeModal, dismissModal }: ModalSlotProps) => [
          <IxModalHeader>Message headline</IxModalHeader>,
          <IxModalContent>Message text lorem ipsum</IxModalContent>,
          <IxModalFooter>
            <IxButton variant="secondary" onClick={() => dismissModal()}>
              Cancel
            </IxButton>
            <IxButton onClick={() => closeModal()}>OK</IxButton>
          </IxModalFooter>,
        ]}
      </Modal>
    ),
  }).then((modalInstance) => {
    setTimeout(() => {
      dismissModal(modalInstance);
    }, 5000);
  });
}
</script>

<template>
  <IxButton @click="show()">Show modal (auto-dismiss)</IxButton>
</template>
