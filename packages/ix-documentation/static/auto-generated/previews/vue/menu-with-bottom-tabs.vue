<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxMenu, IxMenuItem } from '@siemens/ix-vue';
</script>

<style scoped src="./menu-with-bottom-tabs.css"></style>

<template>
  <IxMenu>
    <IxMenuItem home-tab tab-icon="home"> Home </IxMenuItem>
    <IxMenuItem tab-icon="globe" slot="bottom">
      &nbsp; Bottom Tab&nbsp;
    </IxMenuItem>
  </IxMenu>
</template>
