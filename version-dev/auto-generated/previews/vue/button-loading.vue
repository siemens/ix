<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxIconButton } from '@siemens/ix-vue';
import { ref } from 'vue';

let toggle1 = ref(false);
let toggle2 = ref(false);
let toggle3 = ref(false);

function load(value: string) {
  if (value === '1') toggle1.value = true;
  if (value === '2') toggle2.value = true;
  if (value === '3') toggle3.value = true;

  setTimeout(() => {
    if (value === '1') toggle1.value = false;
    if (value === '2') toggle2.value = false;
    if (value === '3') toggle3.value = false;
  }, 2500);
}
</script>

<template>
  <div>
    <IxButton
      :loading="toggle1"
      @click="load('1')"
      class="m-1"
      outline
      variant="primary"
    >
      Button
    </IxButton>
    <IxButton
      :loading="toggle2"
      @click="load('2')"
      class="m-1"
      outline
      icon="star"
      variant="primary"
    >
      Button
    </IxButton>
    <IxIconButton
      :loading="toggle3"
      @click="load('3')"
      class="m-1"
      outline
      icon="star"
      variant="primary"
    ></IxIconButton>
    <IxButton loading class="m-1" outline variant="primary"> Button </IxButton>
    <IxIconButton loading class="m-1" outline variant="primary"></IxIconButton>
  </div>
</template>
