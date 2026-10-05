<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxTimeInput, IxToggle, IxTypography } from '@siemens/ix-vue';
import { ref } from 'vue';

const descriptions = {
  off: 'A time picked in the dropdown is applied when you click Confirm.',
  on: 'A time picked in the dropdown is applied only when you click Confirm. Cancel, pressing Escape or clicking outside the dropdown discards it. Reopening the dropdown shows the applied time.',
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

<style scoped src="./time-input-require-confirmation.css"></style>

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
    <IxTimeInput
      label="Time"
      value="09:30"
      format="HH:mm"
      :requireConfirmation="requireConfirmation"
      @valueChange="log('valueChange', $event)"
      @ixChange="log('ixChange', $event)"
    />
    <IxTypography format="label">Emitted events (latest first)</IxTypography>
    <ul class="event-log">
      <li v-for="(event, index) in events" :key="index">{{ event }}</li>
    </ul>
  </div>
</template>
