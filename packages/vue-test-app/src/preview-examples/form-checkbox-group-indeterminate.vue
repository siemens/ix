<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->
<script setup lang='ts'>
  import { onMounted, ref } from 'vue';
  import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-vue';

  const input = ref<HTMLInputElement>();

  onMounted(() => {
    const element = input.value;
    if (element) element.indeterminate = true;
  });
</script>

<style scoped src="./styles/form-checkbox-group-indeterminate.css"></style>

<template>
  <ix-checkbox-group>
    <ix-checkbox label="Option group"></ix-checkbox>
    <ix-checkbox checked label="Sub option one" class="cb-padding"></ix-checkbox>
    <ix-checkbox checked label="Another sub option" class="cb-padding"></ix-checkbox>
    <ix-checkbox label="Another sub option" class="cb-padding"></ix-checkbox>
  </ix-checkbox-group>
</template>
