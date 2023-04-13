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
  IxButton,
  IxMapNavigation,
  IxMapNavigationOverlay,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-vue';
import { ref } from 'vue';

const overlay = ref(false);
</script>

<template>
  <IxMapNavigation>
    <div className="placeholder-logo" slot="logo"></div>
    <IxMenu>
      <IxMenuItem>Item 1</IxMenuItem>
      <IxMenuItem>Item 2</IxMenuItem>
      <IxMenuItem>Item 3</IxMenuItem>
    </IxMenu>
    <IxButton @click="overlay = true"> Open overlay </IxButton>
    <div>
      <IxMapNavigationOverlay
        name="Custom overlay title"
        icon="bulb"
        @close-click="overlay = false"
      >
        Lorem ipsum
      </IxMapNavigationOverlay>
    </div>
  </IxMapNavigation>
</template>
