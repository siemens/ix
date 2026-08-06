/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {
  IxDateInput,
  IxDatetimeInput,
  IxRangeField,
  IxTimeInput,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxRangeField, IxDateInput, IxDatetimeInput, IxTimeInput],
  template: `
    <ix-range-field
      type="date-range"
      style="width: 32rem"
      aria-label="Date range"
    >
      <ix-date-input label="Start date"></ix-date-input>
      <ix-date-input label="End date"></ix-date-input>
    </ix-range-field>

    <ix-range-field
      type="time-range"
      style="width: 32rem"
      aria-label="Time range"
    >
      <ix-time-input label="Start time"></ix-time-input>
      <ix-time-input label="End time"></ix-time-input>
    </ix-range-field>

    <ix-range-field
      type="datetime-range"
      style="width: 32rem"
      aria-label="Datetime range"
    >
      <ix-datetime-input label="Start date and time"></ix-datetime-input>
      <ix-datetime-input label="End date and time"></ix-datetime-input>
    </ix-range-field>
  `,
})
export default class RangeField {}
