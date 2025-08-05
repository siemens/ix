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
        message: customMessage!,
        type: 'success',
      })
    "
    style="margin-right: 0.5rem"
  >
    Trigger toast with custom message
  </IxButton>

  <IxButton
    @click="
      showToast({
        title: 'Toast headline',
        message: customMessage!,
        action: customAction!,
      })
    "
  >
    Trigger toast with action button
  </IxButton>
  <template>
    <div ref="customMessage">This message is from template</div>
    <div ref="customAction">
      <IxButton ghost :icon="iconUndo">Undo</IxButton>
    </div>
  </template>
</template>
