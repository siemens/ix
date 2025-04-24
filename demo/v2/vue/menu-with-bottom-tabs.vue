<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconGlobe, iconHome } from '@siemens/ix-icons/icons';
import { IxMenu, IxMenuItem } from '@siemens/ix-vue';
</script>

<template>
  <IxMenu>
    <IxMenuItem home-tab :tab-icon="iconHome"> Home </IxMenuItem>
    <IxMenuItem :tab-icon="iconGlobe" slot="bottom">
      &nbsp; Bottom Tab&nbsp;
    </IxMenuItem>
  </IxMenu>
</template>
