<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
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
  IxTabItem,
  IxTabs,
} from '@siemens/ix-vue';
import { onMounted, useTemplateRef } from 'vue';

const input = useTemplateRef<HTMLIxMenuElement>('menu');
onMounted(() => {
  input.value?.toggleAbout(true);
});
</script>

<template>
  <IxApplication>
    <IxApplicationHeader>
      <div class="placeholder-logo" slot="logo"></div>
    </IxApplicationHeader>
    <IxMenu ref="menu">
      <IxMenuAbout suppress-legacy-tabs>
        <IxTabs active-tab-key="tab-1">
          <IxTabItem tab-key="tab-1" label="Tab 1" />
          <IxTabItem tab-key="tab-2" label="Tab 2" />
        </IxTabs>
        <section role="tabpanel" data-tab-content="tab-1">Content 1</section>
        <section role="tabpanel" data-tab-content="tab-2" hidden>Content 2</section>
      </IxMenuAbout>
    </IxMenu>
  </IxApplication>
</template>
