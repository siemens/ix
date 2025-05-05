<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, showToast } from '@siemens/ix-vue';
import { iconUndo } from '@siemens/ix-icons/icons';
import { ref } from 'vue';

const customMessage = ref<HTMLElement | null>(null);
const customAction = ref<HTMLElement | null>(null);
</script>

<template>
  <IxButton
    @click="
      showToast({
        title: 'Toast headline',
        message: 'Toast message text', 
        //message: customMessage!, 
        action: customAction!,
        type: 'success',
      })
    "
  >
    Trigger toast
  </IxButton>
  <template>
    <div ref="customMessage">
      Text message text from template
    </div>
    <div ref="customAction">
      <IxButton ghost :icon="iconUndo">Undo</IxButton>
    </div>
  </template>
</template>
