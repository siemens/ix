<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxIcon, IxIconButton, IxInputGroup } from '@siemens/ix-vue';
import { ref } from 'vue';

const text = ref('');

function clearInput() {
  text.value = '';
}
</script>

<template>
  <form className="needs-validation m-2">
    <IxInputGroup>
      <span slot="input-start">
        <IxIcon name="search" size="16"></IxIcon>
      </span>
      <input
        id="input-string"
        type="string"

        v-model="text"
      />
      <span slot="input-end">
        <IxIconButton
          @click="clearInput"
          id="clear-button"
          icon="clear"
          ghost
          size="16"
          :style="[text === '' ? { display: 'none' } : { display: 'block' }]"
        ></IxIconButton>
      </span>
    </IxInputGroup>
  </form>
</template>
