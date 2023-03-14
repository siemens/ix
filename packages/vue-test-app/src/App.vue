<!--
  SPDX-FileCopyrightText: 2022 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
import { ref } from 'vue';

const toggle = ref(false);
</script>

<template>
  <div>
    <IxButton @click="toggle = !toggle">Toggle!</IxButton>
    <IxButton>{{ toggle ? 'Test 1' : 'Test 2' }}</IxButton>
  </div>
</template>
