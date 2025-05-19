<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { h, ref, defineComponent } from 'vue';
import { IxButton, showModal, closeModal, type IxModalSize } from '@siemens/ix-vue';

const sizes: IxModalSize[] = [
  '360',
  '480',
  '600',
  '720',
  '840',
  'full-width',
  'full-screen',
];

const ModalContent = defineComponent({
  name: 'ModalContent',
  props: {
    size: String,
  },
  setup(props) {
    const modalRef = ref<HTMLElement | null>(null);

    const getModal = (): HTMLIxModalElement | null =>
      modalRef.value?.closest('ix-modal') ?? null;

    const close = () => {
      const modal = getModal();
      if (modal) {
        closeModal(modal, 'close payload');
      }
    };

    return () =>
      h('div', { ref: modalRef }, [
        h(
          IxButton,
          {
            style: 'width: 100%',
            onClick: close,
          },
          {
            default: () => `Modal with size ${props.size}`,
          }
        ),
      ]);
  },
});

const open = (size: IxModalSize) => {
  showModal(ModalContent, {
    size,
    props: {
      size,
    },
  });
};
</script>
<style scoped src="./modal-sizes.css"></style>

<template>
  <div class="modal-sizes">
    <IxButton v-for="size in sizes" :key="size" @click="open(size as IxModalSize)">
      Show modal size {{ size }}
    </IxButton>
  </div>
</template>
