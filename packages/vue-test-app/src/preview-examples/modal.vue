<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  HTMLRefElement,
  IxButton,
  IxModal,
  IxModalHeader,
  IxModalContent,
  IxModalFooter,
} from '@siemens/ix-vue';
import { ref } from 'vue';

const modalRef = ref<HTMLRefElement<HTMLIxModalElement>>();
const close = () => {
  modalRef.value?.$el.closeModal('close payload!');
  show.value = false;
};
const dismiss = () => {
  modalRef.value?.$el.dismissModal('dismiss payload');
  show.value = false;
};

const show = ref(false);
</script>

<template>
  <IxButton @click="show = true">Show modal</IxButton>
  <IxDialog ref="modalRef" v-if="show">
    <IxModalHeader onclose="dismiss()">Message headline</IxModalHeader>
    <IxModalContent>Message text lorem ipsum</IxModalContent>
    <IxModalFooter>
      <IxButton outline @click="dismiss()"> Cancel </IxButton>
      <IxButton @click="close()">OK</IxButton>
    </IxModalFooter>
  </IxDialog>
</template>
