<!--
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { addIcons } from '@siemens/ix-icons';
import { IxButton } from '@siemens/ix-vue';
import { iconHome, iconOpenExternal, iconInfo } from '@siemens/ix-icons/icons';
addIcons({ iconHome, iconOpenExternal, iconInfo });
</script>

<style scoped src="./button-text-icon.css"></style>

<template>
  <div style="padding: 2rem; max-width: 800px;">
    <h2>Button Link Examples</h2>

    <div style="margin-bottom: 1rem;">
      <h3>Basic Link Buttons</h3>
      <IxButton href="https://siemens.com">Visit Siemens</IxButton>
      <IxButton
        href="https://siemens.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in New Tab
      </IxButton>
      <IxButton href="/dashboard">Dashboard</IxButton>
    </div>

    <div style="margin-bottom: 1rem;">
      <h3>Styled Link Buttons</h3>
      <IxButton href="https://siemens.com" variant="primary">
        Primary Link
      </IxButton>
      <IxButton href="https://siemens.com" variant="secondary">
        Secondary Link
      </IxButton>
      <IxButton href="https://siemens.com" variant="danger">
        Danger Link
      </IxButton>
    </div>

    <div style="margin-bottom: 1rem;">
      <h3>Outline and Ghost Links</h3>
      <IxButton href="https://siemens.com" outline>
        Outline Link
      </IxButton>
      <IxButton href="https://siemens.com" ghost>
        Ghost Link
      </IxButton>
    </div>

    <div style="margin-bottom: 1rem;">
      <h3>Icon Links</h3>
      <IxButton href="https://siemens.com" :icon="iconHome">
        Home
      </IxButton>
      <IxButton
        href="https://siemens.com"
        :icon-right="iconOpenExternal"
        target="_blank"
      >
        External
      </IxButton>
    </div>

    <div style="margin-bottom: 1rem;">
      <h3>Disabled Link</h3>
      <IxButton href="https://siemens.com" disabled>
        Disabled Link
      </IxButton>
    </div>

    <div style="margin-bottom: 1rem;">
      <h3>Comparison</h3>
      <IxButton>Regular Button</IxButton>
      <IxButton href="#section">Link Button</IxButton>
    </div>
  </div>
</template>
