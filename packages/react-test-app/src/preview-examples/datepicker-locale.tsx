/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxCol,
  IxDatePicker,
  IxLayoutGrid,
  IxRow,
  IxSelect,
  IxSelectItem,
} from '@siemens/ix-react';
import type { DateChangeEvent } from '@siemens/ix';
import { useState } from 'react';

const LOCALES = [
  { label: 'de', value: 'de' },
  { label: 'en', value: 'en' },
  { label: 'fr', value: 'fr' },
  { label: 'ja', value: 'ja' },
];

const FORMATS = [
  { label: 'yyyy/LL/dd (default)', value: 'yyyy/LL/dd' },
  { label: 'EEEE, dd MMMM yyyy (all locale names)', value: 'EEEE, dd MMMM yyyy' },
  { label: 'dd MMMM yyyy (month name)', value: 'dd MMMM yyyy' },
  { label: 'dd MMM yyyy (short month)', value: 'dd MMM yyyy' },
  { label: 'LL/dd/yyyy', value: 'LL/dd/yyyy' },
];

type EventLog = {
  from?: string;
  to?: string;
  isoFrom?: string;
  isoTo?: string;
};

const EVENT_ROWS = [
  { key: 'from' as const, note: '(locale-aware)' },
  { key: 'to' as const, note: '(locale-aware)' },
  { key: 'isoFrom' as const, note: '(ISO 8601, stable)' },
  { key: 'isoTo' as const, note: '(ISO 8601, stable)' },
];

export default () => {
  const [locale, setLocale] = useState('de');
  const [format, setFormat] = useState('yyyy/LL/dd');
  const [lastEvent, setLastEvent] = useState<EventLog | null>(null);

  const handleDateChange = (e: CustomEvent<DateChangeEvent>) => {
    const { from, to, isoFrom, isoTo } = e.detail;
    setLastEvent({ from, to, isoFrom, isoTo });
  };

  return (
    <IxLayoutGrid>
      <IxRow>
        <IxCol size="3">
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
        </IxCol>
        <IxCol size="4">
          <span style={{ marginRight: '0.5rem' }}>Format:</span>
          <IxSelect
            value={format}
            onValueChange={({ detail }) => {
              if (!Array.isArray(detail)) setFormat(detail);
            }}
          >
            {FORMATS.map((f) => (
              <IxSelectItem key={f.value} label={f.label} value={f.value} />
            ))}
          </IxSelect>
        </IxCol>
      </IxRow>
      <IxRow>
        <IxCol size="12">
          <div style={{ width: 'fit-content', maxWidth: '100%' }}>
            <IxDatePicker
              locale={locale}
              format={format}
              onDateChange={handleDateChange}
              onDateRangeChange={handleDateChange}
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
                style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}
              >
                Last date-picker event
              </span>
              {lastEvent === null ? (
                <span style={{ color: 'var(--theme-color-soft-text)' }}>
                  Select a date to see event values
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
                        {lastEvent[key] ?? '—'}
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
