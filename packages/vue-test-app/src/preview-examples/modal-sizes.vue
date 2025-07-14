<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="tsx">
import type { IxModalSize } from '@siemens/ix';
import {
  IxButton,
  Modal,
  type ModalSlotProps,
  showModal,
} from '@siemens/ix-vue';

const sizes: IxModalSize[] = [
  '360',
  '480',
  '600',
  '720',
  '840',
  'full-width',
  'full-screen',
];

const open = (size: IxModalSize) => {
  showModal({
    size,
    content: (
      <Modal>
        {({ closeModal }: ModalSlotProps) => (
          <IxButton onClick={closeModal}> Modal with size {size} </IxButton>
        )}
      </Modal>
    ),
  });
};
</script>

<style scoped src="./modal-sizes.css"></style>

<template>
  <div class="modal-sizes">
    <IxButton v-for="size in sizes" :key="size" @click="open(size)">
      Show modal size {{ size }}
    </IxButton>
  </div>
</template>
