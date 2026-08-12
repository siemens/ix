/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDatePicker, IxSelect, IxSelectItem } from '@siemens/ix-react';
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
  { label: 'dd MMMM yyyy (locale names)', value: 'dd MMMM yyyy' },
  { label: 'dd MMM yyyy (short)', value: 'dd MMM yyyy' },
  { label: 'LL/dd/yyyy', value: 'LL/dd/yyyy' },
];

type EventLog = {
  from?: string;
  to?: string;
  isoFrom?: string;
  isoTo?: string;
};

const labelStyle: React.CSSProperties = {
  fontWeight: 600,
  minWidth: '90px',
  display: 'inline-block',
  color: 'var(--theme-color-std-text)',
};

const valueStyle: React.CSSProperties = {
  fontFamily: 'monospace',
  color: 'var(--theme-color-primary)',
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'baseline',
  padding: '2px 0',
};

const panelStyle: React.CSSProperties = {
  marginTop: '1rem',
  padding: '0.75rem 1rem',
  border: '1px solid var(--theme-color-weak-bdr)',
  borderRadius: '4px',
  background: 'var(--theme-color-2)',
  minWidth: '320px',
};

export default () => {
  const [locale, setLocale] = useState('de');
  const [format, setFormat] = useState('yyyy/LL/dd');
  const [lastEvent, setLastEvent] = useState<EventLog | null>(null);

  const handleDateChange = (e: CustomEvent<DateChangeEvent>) => {
    const { from, to, isoFrom, isoTo } = e.detail;
    setLastEvent({ from, to, isoFrom, isoTo });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
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
        </div>
      </div>

      <IxDatePicker
        locale={locale}
        format={format}
        onDateChange={handleDateChange}
        onDateRangeChange={handleDateChange}
      />

      <div style={panelStyle}>
        <div style={{ marginBottom: '0.5rem', fontWeight: 700 }}>
          Last dateChange event
        </div>
        {lastEvent === null ? (
          <span style={{ color: 'var(--theme-color-soft-text)' }}>
            Select a date to see event values
          </span>
        ) : (
          <>
            <div style={rowStyle}>
              <span style={labelStyle}>from</span>
              <span style={valueStyle}>{lastEvent.from ?? '—'}</span>
              <span style={{ color: 'var(--theme-color-soft-text)', fontSize: '0.8em' }}>
                (locale-aware)
              </span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>to</span>
              <span style={valueStyle}>{lastEvent.to ?? '—'}</span>
              <span style={{ color: 'var(--theme-color-soft-text)', fontSize: '0.8em' }}>
                (locale-aware)
              </span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>isoFrom</span>
              <span style={valueStyle}>{lastEvent.isoFrom ?? '—'}</span>
              <span style={{ color: 'var(--theme-color-soft-text)', fontSize: '0.8em' }}>
                (ISO 8601, stable)
              </span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>isoTo</span>
              <span style={valueStyle}>{lastEvent.isoTo ?? '—'}</span>
              <span style={{ color: 'var(--theme-color-soft-text)', fontSize: '0.8em' }}>
                (ISO 8601, stable)
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
