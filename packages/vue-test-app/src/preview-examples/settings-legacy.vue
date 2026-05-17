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
  HTMLRefElement,
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuSettings,
  IxTabItem,
  IxTabs,
} from '@siemens/ix-vue';
import { nextTick, onMounted, ref } from 'vue';

const menu = ref<HTMLRefElement<HTMLIxMenuElement>>();

onMounted(async () => {
  await nextTick();
  menu.value?.$el.toggleSettings(true);
});
</script>

<template>
  <IxApplication>
    <IxApplicationHeader>
      <div class="placeholder-logo" slot="logo"></div>
    </IxApplicationHeader>
    <IxMenu ref="menu">
      <IxMenuSettings suppress-legacy-tabs>
        <IxTabs active-tab-key="tab-1">
          <IxTabItem tab-key="tab-1" label="Example Setting 1" />
          <IxTabItem tab-key="tab-2" label="Example Setting 2" />
        </IxTabs>
        <section role="tabpanel" data-tab-content="tab-1">
          Example Setting 1 content
        </section>
        <section role="tabpanel" data-tab-content="tab-2" hidden>
          Example Setting 2 content
        </section>
      </IxMenuSettings>
    </IxMenu>
  </IxApplication>
</template>
