<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutNews,
  IxTabItem,
  IxTabs,
} from '@siemens/ix-vue';
</script>

<template>
  <IxApplication>
    <IxApplicationHeader>
      <div class="placeholder-logo" slot="logo"></div>
    </IxApplicationHeader>
    <IxMenu>
      <IxMenuAbout suppress-legacy-tabs>
        <IxTabs active-tab-key="tab-1">
          <IxTabItem tab-key="tab-1" label="Example" />
        </IxTabs>
        <section role="tabpanel" data-tab-content="tab-1"></section>
      </IxMenuAbout>
      <IxMenuAboutNews label="Test" show active-about-tab-key="tab-1">
        Test
      </IxMenuAboutNews>
    </IxMenu>
  </IxApplication>
</template>
