<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxDatePicker, IxToggle, IxTypography } from '@siemens/ix-vue';
import { ref } from 'vue';

const descriptions = {
  off: 'dateChange and dateRangeChange are emitted for every picked date.',
  on: 'dateChange and dateRangeChange are emitted only when you click Confirm. Cancel discards the picked dates and emits dateCancel.',
};

const requireConfirmation = ref(false);
const events = ref<string[]>([]);

const onCheckedChange = (event: CustomEvent<boolean>) => {
  requireConfirmation.value = event.detail;
  events.value = [];
};

const log = (name: string, event: CustomEvent<unknown>) => {
  const detail = JSON.stringify(event.detail) ?? '';
  events.value = [`${name}: ${detail}`, ...events.value].slice(0, 5);
};
</script>

<style scoped src="./date-picker-require-confirmation.css"></style>

<template>
  <div class="require-confirmation">
    <IxToggle
      aria-label="Require confirmation"
      text-on="Require confirmation: on"
      text-off="Require confirmation: off"
      :checked="requireConfirmation"
      @checkedChange="onCheckedChange"
    />
    <IxTypography>
      {{ requireConfirmation ? descriptions.on : descriptions.off }}
    </IxTypography>
    <IxDatePicker
      from="2026/10/05"
      to="2026/10/09"
      :requireConfirmation="requireConfirmation"
      @dateChange="log('dateChange', $event)"
      @dateRangeChange="log('dateRangeChange', $event)"
      @dateSelect="log('dateSelect', $event)"
      @dateCancel="log('dateCancel', $event)"
    />
    <IxTypography format="label">Emitted events (latest first)</IxTypography>
    <ul class="event-log">
      <li v-for="(event, index) in events" :key="index">{{ event }}</li>
    </ul>
  </div>
</template>
