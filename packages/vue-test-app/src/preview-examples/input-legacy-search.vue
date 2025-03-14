<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconClear, iconSearch } from '@siemens/ix-icons/icons';
import { IxIcon, IxIconButton, IxInputGroup } from '@siemens/ix-vue';
import { ref } from 'vue';

const text = ref('');

function clearInput() {
  text.value = '';
}
</script>

<template>
  <form className="needs-validation">
    <IxInputGroup>
      <span slot="input-start">
        <IxIcon :name="iconSearch" size="16"></IxIcon>
      </span>
      <input class="ix-form-control" id="input-string" type="string" v-model="text" />
      <span slot="input-end">
        <IxIconButton
          @click="clearInput"
          id="clear-button"
          :icon="iconClear"
          ghost
          size="16"
          :style="[text === '' ? { display: 'none' } : { display: 'block' }]"
        ></IxIconButton>
      </span>
    </IxInputGroup>
  </form>
</template>
