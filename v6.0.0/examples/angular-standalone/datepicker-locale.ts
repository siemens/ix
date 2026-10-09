/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import type { DateChangeEvent } from '@siemens/ix';
import {
  IxCol,
  IxDatePicker,
  IxLayoutGrid,
  IxRow,
  IxSelect,
  IxSelectItem,
  IxSelectValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

type EventLog = {
  from?: string;
  to?: string;
  isoFrom?: string;
  isoTo?: string;
};

type EventLogRow = {
  key: keyof EventLog;
  label: string;
  note: string;
};

const LOCALE_AWARE = '(locale-aware)';
const STABLE_ISO = '(ISO 8601, stable)';

@Component({
  selector: 'app-example',
  imports: [
    IxCol,
    IxDatePicker,
    IxLayoutGrid,
    IxRow,
    IxSelect,
    IxSelectItem,
    IxSelectValueAccessorDirective,
  ],
  templateUrl: './datepicker-locale.html',
})
export default class DatepickerLocale {
  readonly locales = ['de', 'en', 'fr', 'ja'].map((code) => ({
    value: code,
    label: code,
  }));

  readonly formats = [
    { value: 'yyyy/LL/dd', label: 'yyyy/LL/dd (default)' },
    { value: 'EEEE, dd MMMM yyyy', label: 'EEEE, dd MMMM yyyy (all locale names)' },
    { value: 'dd MMMM yyyy', label: 'dd MMMM yyyy (month name)' },
    { value: 'dd MMM yyyy', label: 'dd MMM yyyy (short month)' },
    { value: 'LL/dd/yyyy', label: 'LL/dd/yyyy' },
  ];

  readonly eventRows: EventLogRow[] = [
    { key: 'from', label: 'from', note: LOCALE_AWARE },
    { key: 'to', label: 'to', note: LOCALE_AWARE },
    { key: 'isoFrom', label: 'isoFrom', note: STABLE_ISO },
    { key: 'isoTo', label: 'isoTo', note: STABLE_ISO },
  ];

  locale = this.locales[0].value;
  format = this.formats[0].value;
  lastEvent: EventLog | null = null;

  setLocale(event: Event) {
    this.locale = this.readSelection(event) ?? this.locale;
  }

  setFormat(event: Event) {
    this.format = this.readSelection(event) ?? this.format;
  }

  onDateChange(event: Event) {
    const { from, to, isoFrom, isoTo } = (event as CustomEvent<DateChangeEvent>)
      .detail;

    this.lastEvent = { from, to, isoFrom, isoTo };
  }

  /** Single-select emits a string; ignore the multi-select array shape. */
  private readSelection(event: Event): string | undefined {
    const { detail } = event as CustomEvent<string | string[]>;

    return Array.isArray(detail) ? undefined : detail;
  }
}
