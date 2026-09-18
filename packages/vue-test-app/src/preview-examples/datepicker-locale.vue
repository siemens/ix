<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  IxCol,
  IxDatePicker,
  IxLayoutGrid,
  IxRow,
  IxSelect,
  IxSelectItem,
} from '@siemens/ix-vue';
import type { DateChangeEvent } from '@siemens/ix';
import { ref } from 'vue';

const locales = [
  { label: 'de', value: 'de' },
  { label: 'en', value: 'en' },
  { label: 'fr', value: 'fr' },
  { label: 'ja', value: 'ja' },
];

const formats = [
  { label: 'yyyy/LL/dd (default)', value: 'yyyy/LL/dd' },
  {
    label: 'EEEE, dd MMMM yyyy (all locale names)',
    value: 'EEEE, dd MMMM yyyy',
  },
  { label: 'dd MMMM yyyy (month name)', value: 'dd MMMM yyyy' },
  { label: 'dd MMM yyyy (short month)', value: 'dd MMM yyyy' },
  { label: 'LL/dd/yyyy', value: 'LL/dd/yyyy' },
];

type EventLog = {
  from?: string;
  to?: string;
  isoFrom?: string;
  isoTo?: string;
  [key: string]: string | undefined;
};

const eventRows = [
  { key: 'from', note: '(locale-aware)' },
  { key: 'to', note: '(locale-aware)' },
  { key: 'isoFrom', note: '(ISO 8601, stable)' },
  { key: 'isoTo', note: '(ISO 8601, stable)' },
];

const locale = ref('de');
const format = ref('yyyy/LL/dd');
const lastEvent = ref<EventLog | null>(null);

function setLocale(event: CustomEvent<string | string[]>) {
  if (!Array.isArray(event.detail)) {
    locale.value = event.detail;
  }
}

function setFormat(event: CustomEvent<string | string[]>) {
  if (!Array.isArray(event.detail)) {
    format.value = event.detail;
  }
}

function onDateChange(event: CustomEvent<DateChangeEvent>) {
  const { from, to, isoFrom, isoTo } = event.detail;
  lastEvent.value = { from, to, isoFrom, isoTo };
}
</script>

<template>
  <IxLayoutGrid>
    <IxRow>
      <IxCol size="3">
        <span style="margin-right: 0.5rem">Language:</span>
        <IxSelect :value="locale" @valueChange="setLocale">
          <IxSelectItem
            v-for="l in locales"
            :key="l.value"
            :label="l.label"
            :value="l.value"
          />
        </IxSelect>
      </IxCol>
      <IxCol size="4">
        <span style="margin-right: 0.5rem">Format:</span>
        <IxSelect :value="format" @valueChange="setFormat">
          <IxSelectItem
            v-for="f in formats"
            :key="f.value"
            :label="f.label"
            :value="f.value"
          />
        </IxSelect>
      </IxCol>
    </IxRow>
    <IxRow>
      <IxCol size="12">
        <div style="width: fit-content; max-width: 100%">
          <IxDatePicker
            :locale="locale"
            :format="format"
            @dateChange="onDateChange"
            @dateRangeChange="onDateChange"
          />
          <div
            style="
              margin-top: 0.5rem;
              padding: 0.75rem 1rem;
              border: 1px solid var(--theme-color-weak-bdr);
              border-radius: 4px;
              background: var(--theme-color-2);
            "
          >
            <span
              style="display: block; font-weight: 700; margin-bottom: 0.5rem"
            >
              Last date-picker event
            </span>
            <span
              v-if="lastEvent === null"
              style="color: var(--theme-color-soft-text)"
            >
              Select a date to see event values
            </span>
            <IxLayoutGrid v-else no-margin>
              <IxRow v-for="row in eventRows" :key="row.key">
                <IxCol
                  size="2"
                  style="
                    font-weight: 600;
                    color: var(--theme-color-std-text);
                  "
                >
                  {{ row.key }}
                </IxCol>
                <IxCol
                  style="
                    font-family: monospace;
                    color: var(--theme-color-primary);
                  "
                >
                  {{ lastEvent?.[row.key] ?? '—' }}
                </IxCol>
                <IxCol
                  style="
                    color: var(--theme-color-soft-text);
                    font-size: 0.8em;
                  "
                >
                  {{ row.note }}
                </IxCol>
              </IxRow>
            </IxLayoutGrid>
          </div>
        </div>
      </IxCol>
    </IxRow>
  </IxLayoutGrid>
</template>
