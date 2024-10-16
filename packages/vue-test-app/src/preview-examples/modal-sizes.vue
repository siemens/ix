<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxModalSize } from '@siemens/ix';
import { IxButton, IxModal } from '@siemens/ix-vue';
import { ref } from 'vue';

const sizes: IxModalSize[] = [
  '360',
  '480',
  '600',
  '720',
  '840',
  'full-width',
  'full-screen',
];
const currentSize = ref<IxModalSize | undefined>(undefined);
const show = ref(false);

const open = (size: IxModalSize) => {
  currentSize.value = size;
  show.value = true;
};

const closeModal = () => {
  show.value = false;
};
</script>

<style scoped src="./styles/modal-sizes.css"></style>

<template>
  <div class="modal-sizes">
    <IxButton v-for="size in sizes" :key="size" @click="open(size)">
      Show modal size {{ size }}
    </IxButton>
  </div>

  <IxModal v-if="show && currentSize" :size="currentSize" @close="show = false">
    <IxButton @click="closeModal"> Modal with size {{ currentSize }} </IxButton>
  </IxModal>
</template>
