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
import { IxToggleButton } from '@siemens/ix-vue';

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

<style scoped src="./toggle-button-subtle-tertiary.css"></style>

<template>
  <div class="button-container">
    <IxToggleButton
      variant="subtle-tertiary"
      :icon="iconTextBold"
      :pressed="boldPressed"
      @click="handleBoldClick"
    >
      Bold
    </IxToggleButton>
    <IxToggleButton variant="subtle-tertiary" disabled :icon="iconTextItalic">
      Italic
    </IxToggleButton>
    <IxToggleButton
      variant="subtle-tertiary"
      :icon="iconTextUnderline"
      :pressed="underlinePressed"
      @click="handleUnderlineClick"
    >
      Underline
    </IxToggleButton>
    <IxToggleButton variant="subtle-tertiary" disabled loading> Strikethrough </IxToggleButton>
  </div>
  <p :style="paragraphStyle">Lorem ipsum text</p>
</template>
