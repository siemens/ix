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
let toggle4 = ref(false);

function load(value: string) {
  if (value === '1') toggle1.value = true;
  if (value === '2') toggle2.value = true;
  if (value === '3') toggle3.value = true;
  if (value === '4') toggle4.value = true;

  setTimeout(() => {
    if (value === '1') toggle1.value = false;
    if (value === '2') toggle2.value = false;
    if (value === '3') toggle3.value = false;
    if (value === '4') toggle4.value = false;
  }, 2500);
}
</script>

<style scoped src="./button-loading.css"></style>

<template>
  <div>
    <IxButton outline :loading="toggle1" @click="load('1')"> Button </IxButton>
    <IxButton outline :loading="toggle2" @click="load('2')" :icon="iconStar">
      Button
    </IxButton>
    <IxButton
      outline
      :loading="toggle3"
      @click="load('3')"
      :icon="iconStar"
      aria-label="Toggle loading"
    ></IxButton>
    <IxIconButton
      outline
      :loading="toggle4"
      @click="load('4')"
      :icon="iconStar"
      aria-label="Toggle loading"
    ></IxIconButton>
    <IxButton variant="subtle-primary" loading> Button </IxButton>
    <IxIconButton
      variant="subtle-primary"
      loading
      :icon="iconStar"
      aria-label="Loading action"
    ></IxIconButton>
  </div>
</template>
