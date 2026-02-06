<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxDatePicker, IxSelect, IxSelectItem } from '@siemens/ix-vue';
</script>

<script lang="ts">
export default {
  data() {
    return {
      locale: 'de',
    };
  },
  methods: {
    setLocale({ detail: newLocale }: CustomEvent<string | string[]>) {
      if (Array.isArray(newLocale)) {
        return;
      }

      this.locale = newLocale;
    },
  },
};
</script>

<template>
  <span style="margin-right: 1rem">Language:</span>
  <IxSelect :value="locale" @valueChange="setLocale" style="margin: 1rem 0">
    <IxSelectItem label="de" value="de"></IxSelectItem>
    <IxSelectItem label="en" value="en"></IxSelectItem>
  </IxSelect>
  <IxDatePicker v-bind:locale="locale" />
</template>
