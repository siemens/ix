<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
import { showModal, type IxModalSize } from '@siemens/ix-vue';
import ModalContent from './modal-size-content.vue';

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
  showModal(ModalContent, {
    size,
    props: {
      size,
    }
  });
}
</script>

<style scoped src="./modal-sizes.css"></style>

<template>
  <div class="modal-sizes">
    <IxButton v-for="size in sizes" :key="size" @click="open(size)">
      Show modal size {{ size }}
    </IxButton>
  </div>
</template>
