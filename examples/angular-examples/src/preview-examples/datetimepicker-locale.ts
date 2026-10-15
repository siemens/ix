/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import type { DateTimeSelectEvent } from '@siemens/ix';

type EventLog = {
  from?: string;
  to?: string;
  time: string;
  isoFrom?: string;
  isoTo?: string;
  isoTime?: string;
};

type EventLogRow = {
  key: keyof EventLog;
label: string
  note?: string;
};

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

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './datetimepicker-locale.html',
})
export default class DatetimepickerLocale {
  locales = [
    { label: 'de', value: 'de' },
    { label: 'en', value: 'en' },
    { label: 'fr', value: 'fr' },
    { label: 'ja', value: 'ja' },
  ];

  dateFormats = [
    { label: 'yyyy/LL/dd (default)', value: 'yyyy/LL/dd' },
    { label: 'EEEE, dd MMMM yyyy (all locale names)', value: 'EEEE, dd MMMM yyyy' },
    { label: 'dd MMMM yyyy (month name)', value: 'dd MMMM yyyy' },
    { label: 'dd MMM yyyy (short month)', value: 'dd MMM yyyy' },
    { label: 'LL/dd/yyyy', value: 'LL/dd/yyyy' },
  ];

  timeFormats = [
    { label: 'HH:mm:ss (24h, default)', value: 'HH:mm:ss' },
    { label: 'hh:mm a (12h, locale-aware)', value: 'hh:mm a' },
  ];

  eventRows: EventLogRow[] = [
    { key: 'from', label: 'from' },
    { key: 'to', label: 'to' },
    { key: 'time', label: 'time', note: '(locale-aware in 12h mode)' },
    { key: 'isoFrom', label: 'isoFrom' },
    { key: 'isoTo', label: 'isoTo' },
    { key: 'isoTime', label: 'isoTime' },
  ];

  locale = 'de';
  dateFormat = 'yyyy/LL/dd';
  timeFormat = 'HH:mm:ss';
  lastEvent: EventLog | null = null;

  get i18nAm(): string {
    return I18N_AM[this.locale] ?? 'AM';
  }

  get i18nPm(): string {
    return I18N_PM[this.locale] ?? 'PM';
  }

  get i18nHourColumnHeader(): string {
    return I18N_HR[this.locale] ?? 'hr';
  }

  get i18nMinuteColumnHeader(): string {
    return I18N_MIN[this.locale] ?? 'min';
  }

  get i18nSecondColumnHeader(): string {
    return I18N_SEC[this.locale] ?? 'sec';
  }

  setLocale(event: Event) {
    const { detail } = event as CustomEvent<string>;
    if (!Array.isArray(detail)) {
      this.locale = detail;
    }
  }

  setDateFormat(event: Event) {
    const { detail } = event as CustomEvent<string>;
    if (!Array.isArray(detail)) {
      this.dateFormat = detail;
    }
  }

  setTimeFormat(event: Event) {
    const { detail } = event as CustomEvent<string>;
    if (!Array.isArray(detail)) {
      this.timeFormat = detail;
    }
  }

  onDateSelect(event: Event) {
    const { detail } = event as CustomEvent<DateTimeSelectEvent>;
    const { from, to, time, isoFrom, isoTo, isoTime } = detail;
    this.lastEvent = { from, to, time, isoFrom, isoTo, isoTime };
  }
}
