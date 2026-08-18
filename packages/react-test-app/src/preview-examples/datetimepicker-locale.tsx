/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxCol,
  IxDatetimePicker,
  IxLayoutGrid,
  IxRow,
  IxSelect,
  IxSelectItem,
} from '@siemens/ix-react';
import type { DateTimeSelectEvent } from '@siemens/ix';
import { useState } from 'react';

const LOCALES = [
  { label: 'de', value: 'de' },
  { label: 'en', value: 'en' },
  { label: 'fr', value: 'fr' },
  { label: 'ja', value: 'ja' },
];

const DATE_FORMATS = [
  { label: 'yyyy/LL/dd (default)', value: 'yyyy/LL/dd' },
  { label: 'EEEE, dd MMMM yyyy (all locale names)', value: 'EEEE, dd MMMM yyyy' },
  { label: 'dd MMMM yyyy (month name)', value: 'dd MMMM yyyy' },
  { label: 'dd MMM yyyy (short month)', value: 'dd MMM yyyy' },
  { label: 'LL/dd/yyyy', value: 'LL/dd/yyyy' },
];

const TIME_FORMATS = [
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
  from: string | undefined;
  to: string | undefined;
  time: string;
  isoFrom: string | undefined;
  isoTo: string | undefined;
  isoTime: string | undefined;
};

const EVENT_ROWS: { key: keyof EventLog; note: string }[] = [
  { key: 'from', note: '(locale-aware)' },
  { key: 'to', note: '(locale-aware)' },
  { key: 'time', note: '(locale-aware in 12h mode)' },
  { key: 'isoFrom', note: '(ISO 8601, stable)' },
  { key: 'isoTo', note: '(ISO 8601, stable)' },
  { key: 'isoTime', note: '(ISO 8601, stable)' },
];

export default () => {
  const [locale, setLocale] = useState('de');
  const [dateFormat, setDateFormat] = useState('yyyy/LL/dd');
  const [timeFormat, setTimeFormat] = useState('HH:mm:ss');
  const [lastEvent, setLastEvent] = useState<EventLog | null>(null);

  const handleDateSelect = (e: CustomEvent<DateTimeSelectEvent>) => {
    const { from, to, time, isoFrom, isoTo, isoTime } = e.detail;
    setLastEvent({ from, to, time, isoFrom, isoTo, isoTime });
  };

  return (
    <IxLayoutGrid>
      <IxRow>
        <IxCol size="12">
          <div style={{ display: 'flex', gap: '6rem', flexWrap: 'wrap' }}>
            <div>
              <span style={{ marginRight: '0.5rem' }}>Language:</span>
              <IxSelect
                value={locale}
                onValueChange={({ detail }) => {
                  if (!Array.isArray(detail)) setLocale(detail);
                }}
              >
                {LOCALES.map((l) => (
                  <IxSelectItem key={l.value} label={l.label} value={l.value} />
                ))}
              </IxSelect>
            </div>
            <div>
              <span style={{ marginRight: '0.5rem' }}>Date format:</span>
              <IxSelect
                value={dateFormat}
                onValueChange={({ detail }) => {
                  if (!Array.isArray(detail)) setDateFormat(detail);
                }}
              >
                {DATE_FORMATS.map((f) => (
                  <IxSelectItem key={f.value} label={f.label} value={f.value} />
                ))}
              </IxSelect>
            </div>
            <div>
              <span style={{ marginRight: '0.5rem' }}>Time format:</span>
              <IxSelect
                value={timeFormat}
                onValueChange={({ detail }) => {
                  if (!Array.isArray(detail)) setTimeFormat(detail);
                }}
              >
                {TIME_FORMATS.map((f) => (
                  <IxSelectItem key={f.value} label={f.label} value={f.value} />
                ))}
              </IxSelect>
            </div>
          </div>
        </IxCol>
      </IxRow>
      <IxRow>
        <IxCol size="12">
          <div style={{ width: 'fit-content', maxWidth: '100%' }}>
            <IxDatetimePicker
              locale={locale}
              dateFormat={dateFormat}
              timeFormat={timeFormat}
              i18nAm={I18N_AM[locale] ?? 'AM'}
              i18nPm={I18N_PM[locale] ?? 'PM'}
              i18nHourColumnHeader={I18N_HR[locale] ?? 'hr'}
              i18nMinuteColumnHeader={I18N_MIN[locale] ?? 'min'}
              i18nSecondColumnHeader={I18N_SEC[locale] ?? 'sec'}
              onDateSelect={handleDateSelect}
            />
            <div
              style={{
                marginTop: '0.5rem',
                padding: '0.75rem 1rem',
                border: '1px solid var(--theme-color-weak-bdr)',
                borderRadius: '4px',
                background: 'var(--theme-color-2)',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                }}
              >
                Last dateSelect event
              </span>
              {lastEvent === null ? (
                <span style={{ color: 'var(--theme-color-soft-text)' }}>
                  Confirm a selection to see event values
                </span>
              ) : (
                <IxLayoutGrid noMargin>
                  {EVENT_ROWS.map(({ key, note }) => (
                    <IxRow key={key}>
                      <IxCol
                        size="2"
                        style={{
                          fontWeight: 600,
                          color: 'var(--theme-color-std-text)',
                        }}
                      >
                        {key}
                      </IxCol>
                      <IxCol
                        style={{
                          fontFamily: 'monospace',
                          color: 'var(--theme-color-primary)',
                        }}
                      >
                        {lastEvent[key] || '—'}
                      </IxCol>
                      <IxCol
                        style={{
                          color: 'var(--theme-color-soft-text)',
                          fontSize: '0.8em',
                        }}
                      >
                        {note}
                      </IxCol>
                    </IxRow>
                  ))}
                </IxLayoutGrid>
              )}
            </div>
          </div>
        </IxCol>
      </IxRow>
    </IxLayoutGrid>
  );
};
