<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';
import { IxIconToggleButton } from '@siemens/ix-vue';

const boldPressed = ref(false);
const underlinePressed = ref(true);

const handleBoldClick = () => {
  boldPressed.value = !boldPressed.value;
};

const handleUnderlineClick = () => {
  underlinePressed.value = !underlinePressed.value;
};

const paragraphStyle = computed(() => ({
  fontWeight: boldPressed.value ? 'bold' : 'normal',
  textDecoration: underlinePressed.value ? 'underline' : 'none',
}));
</script>

<style scoped src="./icon-toggle-button-secondary.css"></style>

<template>
  <div class="button-container">
    <IxIconToggleButton
      :icon="iconTextBold"
      :pressed="boldPressed"
      @click="handleBoldClick"
    >
      Bold
    </IxIconToggleButton>
    <IxIconToggleButton disabled :icon="iconTextItalic">
      Italic
    </IxIconToggleButton>
    <IxIconToggleButton
      :icon="iconTextUnderline"
      :pressed="underlinePressed"
      @click="handleUnderlineClick"
    >
      Underline
    </IxIconToggleButton>
    <IxIconToggleButton disabled loading> Strikethrough </IxIconToggleButton>
  </div>
  <p :style="paragraphStyle">Lorem ipsum text</p>
</template>
