<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconStar } from '@siemens/ix-icons/icons';
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

<style scoped src="./button-loading.css"></style>

<template>
  <div>
    <IxButton :loading="toggle1" @click="load('1')" outline> Button </IxButton>
    <IxButton :loading="toggle2" @click="load('2')" outline :icon="iconStar">
      Button
    </IxButton>
    <IxIconButton
      :loading="toggle3"
      @click="load('3')"
      outline
      :icon="iconStar"
    ></IxIconButton>
    <IxButton loading outline> Button </IxButton>
    <IxIconButton loading outline></IxIconButton>
  </div>
</template>
