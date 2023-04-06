<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxMapNavigation, IxMenu, IxMenuItem } from '@siemens/ix-vue';
</script>

<template>
  <IxMapNavigation
    applicationName="Test Application"
    navigationTitle="Some other content"
  >
    <div className="placeholder-logo" slot="logo"></div>
    <IxMenu>
      <IxMenuItem>Item 1</IxMenuItem>
      <IxMenuItem>Item 2</IxMenuItem>
      <IxMenuItem>Item 3</IxMenuItem>
    </IxMenu>
    <div slot="sidebar-content">Sidebar content</div>
    <div>Content</div>
  </IxMapNavigation>
</template>
