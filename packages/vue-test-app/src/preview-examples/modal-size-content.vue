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
import { IxButton, closeModal } from '@siemens/ix-vue';

const props = defineProps<{
  size: {
    type: string;
    required: true;
  }
}>();

const modalRef = ref<HTMLElement | null>(null);
const getModal = (): HTMLIxModalElement | null => modalRef.value?.closest('ix-modal') ?? null;

const close = () => {
  const modal = getModal();
  if (modal) closeModal(modal, 'close payload');
}
</script>

<template>
  <div ref="modalRef">
    <IxButton style="width: 100%" @click="close">
      Modal with size {{ props.size }}
    </IxButton>
  </div>
</template>
