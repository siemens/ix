<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxMenu, IxMenuItem } from '@siemens/ix-vue';
</script>

<template>
  <IxMenu>
    <IxMenuItem home-tab tab-icon="home"> Home </IxMenuItem>
    <IxMenuItem tab-icon="globe" slot="bottom">
      &nbsp; Bottom Tab&nbsp;
    </IxMenuItem>
  </IxMenu>
</template>
