<script setup lang="ts">
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  HTMLRefElement,
  IxButton,
  IxIconButton,
  IxModal,
} from '@siemens/ix-vue/dist';
import { ref } from 'vue';

const modalRef = ref<HTMLRefElement<HTMLIxModalElement>>();
const close = () => {
  modalRef.value?.$el.close('close payload!');
  show.value = false;
};
const dismiss = () => {
  modalRef.value?.$el.dismiss('dismiss payload');
  show.value = false;
};

const show = ref(false);
</script>

<template>
  <IxButton @click="show = true">Show modal</IxButton>
  <IxModal ref="modalRef" v-if="show">
    <div className="modal-header">
      Message headline
      <IxIconButton
        data-button-close
        ghost
        icon="close"
        @click="dismiss()"
      ></IxIconButton>
    </div>
    <div className="modal-body">Message text lorem ipsum</div>
    <div className="modal-footer">
      <IxButton outline @click="dismiss()"> Cancel </IxButton>
      <IxButton @click="close()">OK</IxButton>
    </div>
  </IxModal>
</template>
