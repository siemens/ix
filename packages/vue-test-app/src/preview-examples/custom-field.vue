<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { ref } from 'vue';
import {
  IxCustomField,
  IxInput,
  IxIconButton,
  HTMLRefElement,
} from '@siemens/ix-vue';

const input = ref();
const openFileBrowser = () => {
  input.value.click();
};
</script>

<template>
  <IxCustomField info-text="Choose file">
    <IxInput class="ix-info" value="Enter text here" readonly></IxInput>
    <IxIconButton
      icon="open-file"
      variant="primary"
      outline
      @click="openFileBrowser()"
    ></IxIconButton>
    <input
      ref="input"
      id="file-upload"
      type="file"
      style="display: none"
      @input="(e: any) => console.log(e.target.files)"
    />
  </IxCustomField>
</template>
