<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { themeSwitcher, type ThemeVariant } from '@siemens/ix';
import {
  IxButton,
  IxCheckbox,
  IxCol,
  IxLayoutGrid,
  IxRow,
  IxSelect,
  IxSelectItem,
} from '@siemens/ix-vue';
import { onMounted, ref } from 'vue';

const variants = ref<ThemeVariant[]>(['light', 'dark']);
const selectedVariant = ref<ThemeVariant>('dark');
const useSystemTheme = ref(false);

onMounted(() => {
  themeSwitcher.setTheme('classic');
  themeSwitcher.setVariant(selectedVariant.value);
});

const valueChange = (event: CustomEvent<string | string[]>) => {
  if (useSystemTheme.value) {
    return;
  }

  const newVariant = event.detail as ThemeVariant;

  themeSwitcher.setVariant(newVariant);

  selectedVariant.value = newVariant;
};

const toggle = () => {
  if (useSystemTheme.value) {
    return;
  }

  themeSwitcher.toggleMode();

  selectedVariant.value = selectedVariant.value === 'light' ? 'dark' : 'light';
};

const systemChange = (event: CustomEvent<boolean>) => {
  const checked = event.detail;
  useSystemTheme.value = checked;

  if (checked) {
    themeSwitcher.setVariant();
  } else {
    themeSwitcher.setVariant(selectedVariant.value);
  }
};
</script>

<style scoped src="./theme-switcher.css"></style>

<template>
  <IxLayoutGrid class="theme-switcher">
    <IxRow>
      <IxCol :size="'2'">
        <span>Light/Dark</span>
      </IxCol>
      <IxCol>
        <IxButton @click="toggle" :disabled="useSystemTheme">
          Toggle mode
        </IxButton>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol :size="'2'">Theme</IxCol>
      <IxCol>
        <IxSelect
          :value="selectedVariant"
          @valueChange="valueChange"
          :disabled="useSystemTheme"
          placeholder="Select a theme"
        >
          <IxSelectItem
            v-for="variant in variants"
            :key="variant"
            :label="variant"
            :value="variant"
          />
        </IxSelect>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol :size="'2'"></IxCol>
      <IxCol>
        <IxCheckbox label="Use system" @checkedChange="systemChange" />
      </IxCol>
    </IxRow>
  </IxLayoutGrid>
</template>
