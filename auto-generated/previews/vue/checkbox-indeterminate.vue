<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const input = ref<HTMLInputElement>();

onMounted(() => {
  const element = input.value;
  if (element) element.indeterminate = true;
});
</script>

<template>
  <input type="checkbox" id="checkbox_01" ref="input" />
  <label htmlFor="checkbox_01">Simple checkbox</label>
</template>
