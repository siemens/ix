<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, setToastPosition, showToast } from '@siemens/ix-vue';

setToastPosition('top-right');
</script>

<template>
  <IxButton @click="showToast({ message: 'My toast message!' })">
    Trigger toast
  </IxButton>
</template>
