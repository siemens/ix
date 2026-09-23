<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  IxCol,
  IxDatetimePicker,
  IxLayoutGrid,
  IxRow,
  IxSelect,
  IxSelectItem,
} from '@siemens/ix-vue';
import type { DateTimeSelectEvent } from '@siemens/ix';
import { computed, ref } from 'vue';

const locales = [
  { label: 'de', value: 'de' },
  { label: 'en', value: 'en' },
  { label: 'fr', value: 'fr' },
  { label: 'ja', value: 'ja' },
];

const dateFormats = [
  { label: 'yyyy/LL/dd (default)', value: 'yyyy/LL/dd' },
  {
    label: 'EEEE, dd MMMM yyyy (all locale names)',
    value: 'EEEE, dd MMMM yyyy',
  },
  { label: 'dd MMMM yyyy (month name)', value: 'dd MMMM yyyy' },
  { label: 'dd MMM yyyy (short month)', value: 'dd MMM yyyy' },
  { label: 'LL/dd/yyyy', value: 'LL/dd/yyyy' },
];

const timeFormats = [
  { label: 'HH:mm:ss (24h, default)', value: 'HH:mm:ss' },
  { label: 'hh:mm a (12h, locale-aware)', value: 'hh:mm a' },
];

const I18N_AM: Record<string, string> = {
  de: 'AM',
  en: 'AM',
  fr: 'AM',
  ja: '午前',
};

const I18N_PM: Record<string, string> = {
  de: 'PM',
  en: 'PM',
  fr: 'PM',
  ja: '午後',
};

const I18N_HR: Record<string, string> = {
  de: 'Std',
  en: 'hr',
  fr: 'h',
  ja: '時',
};

const I18N_MIN: Record<string, string> = {
  de: 'Min',
  en: 'min',
  fr: 'min',
  ja: '分',
};

const I18N_SEC: Record<string, string> = {
  de: 'Sek',
  en: 'sec',
  fr: 's',
  ja: '秒',
};

type EventLog = {
  from?: string;
  to?: string;
  time: string;
  isoFrom?: string;
  isoTo?: string;
  isoTime?: string;
  [key: string]: string | undefined;
};

const eventRows = [
  { key: 'from', note: '(locale-aware)' },
  { key: 'to', note: '(locale-aware)' },
  { key: 'time', note: '(locale-aware in 12h mode)' },
  { key: 'isoFrom', note: '(ISO 8601, stable)' },
  { key: 'isoTo', note: '(ISO 8601, stable)' },
  { key: 'isoTime', note: '(ISO 8601, stable)' },
];

const locale = ref('de');
const dateFormat = ref('yyyy/LL/dd');
const timeFormat = ref('HH:mm:ss');
const lastEvent = ref<EventLog | null>(null);

const i18nAm = computed(() => I18N_AM[locale.value] ?? 'AM');
const i18nPm = computed(() => I18N_PM[locale.value] ?? 'PM');
const i18nHourColumnHeader = computed(() => I18N_HR[locale.value] ?? 'hr');
const i18nMinuteColumnHeader = computed(() => I18N_MIN[locale.value] ?? 'min');
const i18nSecondColumnHeader = computed(() => I18N_SEC[locale.value] ?? 'sec');

function setLocale(event: CustomEvent<string | string[]>) {
  if (!Array.isArray(event.detail)) {
    locale.value = event.detail;
  }
}

function setDateFormat(event: CustomEvent<string | string[]>) {
  if (!Array.isArray(event.detail)) {
    dateFormat.value = event.detail;
  }
}

function setTimeFormat(event: CustomEvent<string | string[]>) {
  if (!Array.isArray(event.detail)) {
    timeFormat.value = event.detail;
  }
}

function onDateSelect(event: CustomEvent<DateTimeSelectEvent>) {
  const { from, to, time, isoFrom, isoTo, isoTime } = event.detail;
  lastEvent.value = { from, to, time, isoFrom, isoTo, isoTime };
}
</script>

<template>
  <IxLayoutGrid>
    <IxRow>
      <IxCol size="12">
        <div style="display: flex; gap: 6rem; flex-wrap: wrap">
          <div>
            <span style="margin-right: 0.5rem">Language:</span>
            <IxSelect :value="locale" @valueChange="setLocale">
              <IxSelectItem
                v-for="l in locales"
                :key="l.value"
                :label="l.label"
                :value="l.value"
              />
            </IxSelect>
          </div>
          <div>
            <span style="margin-right: 0.5rem">Date format:</span>
            <IxSelect :value="dateFormat" @valueChange="setDateFormat">
              <IxSelectItem
                v-for="f in dateFormats"
                :key="f.value"
                :label="f.label"
                :value="f.value"
              />
            </IxSelect>
          </div>
          <div>
            <span style="margin-right: 0.5rem">Time format:</span>
            <IxSelect :value="timeFormat" @valueChange="setTimeFormat">
              <IxSelectItem
                v-for="f in timeFormats"
                :key="f.value"
                :label="f.label"
                :value="f.value"
              />
            </IxSelect>
          </div>
        </div>
      </IxCol>
    </IxRow>
    <IxRow>
      <IxCol size="12">
        <IxDatetimePicker
          :locale="locale"
          :date-format="dateFormat"
          :time-format="timeFormat"
          :i18n-am="i18nAm"
          :i18n-pm="i18nPm"
          :i18n-hour-column-header="i18nHourColumnHeader"
          :i18n-minute-column-header="i18nMinuteColumnHeader"
          :i18n-second-column-header="i18nSecondColumnHeader"
          @dateSelect="onDateSelect"
        />
      </IxCol>
    </IxRow>
    <IxRow>
      <IxCol
        size="12"
        style="
          padding: 0.75rem 1rem;
          border: 1px solid var(--theme-color-weak-bdr);
          border-radius: 4px;
          background: var(--theme-color-2);
        "
      >
        <span style="display: block; font-weight: 700; margin-bottom: 0.5rem">
          Last dateSelect event
        </span>
        <span
          v-if="lastEvent === null"
          style="color: var(--theme-color-soft-text)"
        >
          Confirm a selection to see event values
        </span>
        <IxLayoutGrid v-else no-margin>
          <IxRow v-for="row in eventRows" :key="row.key">
            <IxCol
              size="2"
              style="font-weight: 600; color: var(--theme-color-std-text)"
            >
              {{ row.key }}
            </IxCol>
            <IxCol
              style="
                font-family: monospace;
                color: var(--theme-color-primary);
              "
            >
              {{ lastEvent?.[row.key] || '—' }}
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
      </IxCol>
    </IxRow>
  </IxLayoutGrid>
</template>
