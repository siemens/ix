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
  IxDatePicker,
  IxToggle,
  IxTypography,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDatePicker, IxToggle, IxTypography],
  templateUrl: './date-picker-require-confirmation.html',
  styleUrls: ['./date-picker-require-confirmation.css'],
})
export default class DatePickerRequireConfirmation {
  requireConfirmation = false;
  events: string[] = [];

  readonly descriptions = {
    off: 'dateChange and dateRangeChange are emitted for every picked date.',
    on: 'dateChange and dateRangeChange are emitted only when you click Confirm. Cancel discards the picked dates and emits dateCancel.',
  };

  onCheckedChange(event: CustomEvent<boolean>) {
    this.requireConfirmation = event.detail;
    this.events = [];
  }

  log(name: string, event: CustomEvent<unknown>) {
    const detail = JSON.stringify(event.detail) ?? '';
    this.events = [`${name}: ${detail}`, ...this.events].slice(0, 5);
  }
}
