<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxCheckboxCustomEvent } from '@siemens/ix';
import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-vue';
import { reactive, watch } from 'vue';

const parentCheckboxState = reactive({
  indeterminate: true,
  checked: false,
  label: 'Option group',
});

const childCheckboxesState = reactive([
  { checked: true, label: 'Sub option one' },
  { checked: true, label: 'Another sub option' },
  { checked: false, label: 'Another sub option' },
]);

const parentCheckedChange = (event: IxCheckboxCustomEvent<boolean>) => {
  parentCheckboxState.checked = event.target.checked;
  childCheckboxesState.forEach((cb) => {
    cb.checked = event.target.checked;
  });
};

const checkedChange = (event: IxCheckboxCustomEvent<boolean>, idx: number) => {
  childCheckboxesState.forEach((cb, index) => {
    if (idx === index) {
      cb.checked = event.target.checked;
    }
  });
};

watch(childCheckboxesState, () => {
  if (childCheckboxesState.every((cb) => cb.checked)) {
    parentCheckboxState.indeterminate = false;
    parentCheckboxState.checked = true;
  } else if (childCheckboxesState.some((cb) => cb.checked)) {
    parentCheckboxState.indeterminate = true;
    parentCheckboxState.checked = false;
  } else {
    parentCheckboxState.indeterminate = false;
    parentCheckboxState.checked = false;
  }
});
</script>

<style scoped src="./form-checkbox-group-indeterminate.css"></style>

<template>
  <ix-checkbox-group>
    <ix-checkbox
      :label="parentCheckboxState.label"
      :indeterminate="parentCheckboxState.indeterminate"
      v-model="parentCheckboxState.checked"
      @checkedChange="parentCheckedChange($event)"
    >
    </ix-checkbox>
    <ix-checkbox
      v-for="(cb, index) in childCheckboxesState"
      :label="cb.label"
      v-model="cb.checked"
      @checkedChange="checkedChange($event, index)"
      class="cb-padding"
    >
    </ix-checkbox>
  </ix-checkbox-group>
</template>
