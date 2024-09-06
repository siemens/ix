<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->
<script setup lang='ts'>
import {reactive} from 'vue';
import {IxCheckbox, IxCheckboxGroup} from '@siemens/ix-vue';

const parentCheckboxState = reactive({
  indeterminate: true,
  checked: false,
  label: 'Option group',
})

const childCheckboxesState = reactive([
  {checked: true, label: 'Sub option one'},
  {checked: true, label: 'Another sub option'},
  {checked: false, label: 'Another sub option'},
]);
</script>

<style scoped src="./styles/form-checkbox-group-indeterminate.css"></style>

<template>
  <ix-checkbox-group>
    <ix-checkbox :label="parentCheckboxState.label"
                 :indeterminate="parentCheckboxState.indeterminate"
                 v-model="parentCheckboxState.checked">
    </ix-checkbox>
    <ix-checkbox v-for="(cb) in childCheckboxesState"
                 :label="cb.label"
                 v-model="cb.checked"
                 class="cb-padding">
    </ix-checkbox>
</ix-checkbox-group>
</template>
