<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxBasicNavigation, IxMenu, IxMenuItem } from '@siemens/ix-vue';
</script>

<style scoped src="./basic-navigation.css"></style>

<template>
  <IxBasicNavigation applicationName="Application name">
    <div className="placeholder-logo" slot="logo"></div>
    <IxMenu>
      <IxMenuItem>Item 1</IxMenuItem>
      <IxMenuItem>Item 2</IxMenuItem>
    </IxMenu>
  </IxBasicNavigation>
</template>
