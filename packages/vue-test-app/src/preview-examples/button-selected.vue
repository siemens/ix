<!--
  SPDX-FileCopyrightText: 2022 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue/dist';
</script>

<template>
  <IxButton class="m-1" variant="Secondary" ghost> Not selected </IxButton>
  <IxButton class="m-1" variant="Secondary" ghost selected> Selected </IxButton>
</template>
