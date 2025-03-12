<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { themeSwitcher } from '@siemens/ix';
import {
  IxButton,
  IxCol,
  IxLayoutGrid,
  IxRow,
  IxSelect,
} from '@siemens/ix-vue';
import { onMounted } from 'vue';

const themes = ['theme-classic-light', 'theme-classic-dark'];
let selectedTheme = themes[1];

themeSwitcher.setTheme(selectedTheme);

onMounted(() => {
  const themeSelect: HTMLSelectElement | null = document.getElementById(
    'select-theme'
  ) as HTMLSelectElement;

  if (themeSelect) {
    themes.forEach((theme) => {
      const item = document.createElement('ix-select-item');
      item.label = theme;
      item.value = theme;
      themeSelect.appendChild(item);
    });
    themeSelect.value = selectedTheme;
    themeSelect.addEventListener('valueChange', (event: Event) => {
      const target = event.target as HTMLSelectElement;
      const detail = target.value;
      themeSwitcher.setTheme(detail);
      selectedTheme = detail;
    });
  }
});

const toggle = () => {
  themeSwitcher.toggleMode();
};

const systemChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.checked) {
    themeSwitcher.setVariant();
    return;
  }

  themeSwitcher.setTheme(selectedTheme);
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
        <IxButton @click="toggle">Toggle mode</IxButton>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol :size="'2'">Theme</IxCol>
      <IxCol>
        <IxSelect id="select-theme" placeholder="Select a theme"> </IxSelect>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol :size="'2'"></IxCol>
      <IxCol>
        <input
          class="ix-form-control"
          type="checkbox"
          id="system"
          @change="systemChange"
        />
        <label class="ix-form-label" for="system">Use System</label>
      </IxCol>
    </IxRow>
  </IxLayoutGrid>
</template>
