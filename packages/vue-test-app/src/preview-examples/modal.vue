<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
  ModalSlotProps,
  showModal
} from '@siemens/ix-vue';

function show() {
  showModal({
    content: <Modal>{
      ({ closeModal, dismissModal }: ModalSlotProps) => [
        <IxModalHeader>Message headline</IxModalHeader>,
        <IxModalContent>Message text lorem ipsum</IxModalContent>,
        <IxModalFooter>
          <IxButton outline onClick={() => dismissModal()}>Cancel</IxButton>
          <IxButton onClick={() => closeModal()}>OK</IxButton>
        </IxModalFooter>
      ]
    }
    </Modal >
  })
}

</script>

<template>
  <IxButton @click="show()">Show modal</IxButton>
</template>
