/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import type { DateChangeEvent } from '@siemens/ix';

type EventLog = {
  from?: string;
  to?: string;
  isoFrom?: string;
  isoTo?: string;
  [key: string]: string | undefined;
};

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './datepicker-locale.html',
})
export default class DatepickerLocale {
  locales = [
    { label: 'de', value: 'de' },
    { label: 'en', value: 'en' },
    { label: 'fr', value: 'fr' },
    { label: 'ja', value: 'ja' },
  ];

  formats = [
    { label: 'yyyy/LL/dd (default)', value: 'yyyy/LL/dd' },
    { label: 'EEEE, dd MMMM yyyy (all locale names)', value: 'EEEE, dd MMMM yyyy' },
    { label: 'dd MMMM yyyy (month name)', value: 'dd MMMM yyyy' },
    { label: 'dd MMM yyyy (short month)', value: 'dd MMM yyyy' },
    { label: 'LL/dd/yyyy', value: 'LL/dd/yyyy' },
  ];

  locale = 'de';
  format = 'yyyy/LL/dd';
  lastEvent: EventLog | null = null;

  setLocale(event: Event) {
    const { detail } = event as CustomEvent<string>;
    if (!Array.isArray(detail)) {
      this.locale = detail;
    }
  }

  setFormat(event: Event) {
    const { detail } = event as CustomEvent<string>;
    if (!Array.isArray(detail)) {
      this.format = detail;
    }
  }

  onDateChange(event: Event) {
    const { detail } = event as CustomEvent<DateChangeEvent>;
    const { from, to, isoFrom, isoTo } = detail;
    this.lastEvent = { from, to, isoFrom, isoTo };
  }
}
