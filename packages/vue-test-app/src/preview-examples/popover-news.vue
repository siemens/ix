<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  IxBasicNavigation,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
  IxMenuAboutNews,
} from '@siemens/ix-vue';
</script>

<template>
  <IxBasicNavigation>
    <div className="placeholder-logo" slot="logo"></div>
    <IxMenu>
      <IxMenuAbout>
        <IxMenuAboutItem label="Example"> </IxMenuAboutItem>
      </IxMenuAbout>
      <IxMenuAboutNews label="Test" show about-item-label="Example">
        Test
      </IxMenuAboutNews>
    </IxMenu>
  </IxBasicNavigation>
</template>
