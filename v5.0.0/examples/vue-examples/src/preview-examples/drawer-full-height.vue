<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxDrawer } from '@siemens/ix-vue';
import { ref } from 'vue';

const show = ref(false);
</script>

<template>
  <IxDrawer
    closeOnClickOutside
    fullHeight
    :show="show"
    @drawerClose="show = false"
  >
    <span>Some content of drawer</span>
  </IxDrawer>
  <IxButton @click="show = !show">Toggle drawer</IxButton>
</template>
